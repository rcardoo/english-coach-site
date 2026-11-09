import { mkdir, readdir, stat } from 'node:fs/promises'
import path from 'node:path'
import sharp from 'sharp'

const ORIGEM = path.resolve('src/assets')
const DESTINO = path.join(ORIGEM, 'otimizadas')

const LARGURA_PADRAO = 1600
const LARGURA_AVATAR = 320
const LARGURAS = {
  'logo-principal': 320,
  'logo-cambridge': 480,
  'logo-google': 240,
  'teste-nivel-estudante': 400,
  'metodologia-aprender': 640,
  'metodologia-conversar': 640,
  'metodologia-praticar': 640,
  'carrossel-provas-internacionais': 1200,
  'carrossel-viagens': 1200,
  'carrossel-profissional': 1200,
}

const HERO = { nome: 'hero-fundo', larguras: [800, 1600] }
const PUBLIC_IMG = path.resolve('public/img')

await mkdir(DESTINO, { recursive: true })

const arquivos = (await readdir(ORIGEM)).filter((f) => /\.(jpe?g|png)$/i.test(f))

for (const arquivo of arquivos) {
  const nome = path.parse(arquivo).name
  if (nome === HERO.nome) continue
  const entrada = path.join(ORIGEM, arquivo)
  const saida = path.join(DESTINO, `${nome}.webp`)
  const largura = LARGURAS[nome] ?? (/^(professor|alun[oa])-/.test(nome) ? LARGURA_AVATAR : LARGURA_PADRAO)

  await sharp(entrada)
    .rotate()
    .resize({ width: largura, withoutEnlargement: true })
    .webp({ quality: 74 })
    .toFile(saida)

  const antes = (await stat(entrada)).size / 1024
  const depois = (await stat(saida)).size / 1024
  console.log(`${arquivo.padEnd(30)} ${antes.toFixed(0).padStart(6)} KB  ->  ${depois.toFixed(0).padStart(4)} KB`)
}

const heroOrigem = arquivos.find((f) => path.parse(f).name === HERO.nome)
if (heroOrigem) {
  await mkdir(PUBLIC_IMG, { recursive: true })
  for (const largura of HERO.larguras) {
    const saida = path.join(PUBLIC_IMG, `${HERO.nome}-${largura}.webp`)
    await sharp(path.join(ORIGEM, heroOrigem)).rotate().resize({ width: largura }).webp({ quality: 72 }).toFile(saida)
    console.log(`public/img/${HERO.nome}-${largura}.webp`.padEnd(30), `${((await stat(saida)).size / 1024).toFixed(0)} KB`)
  }
}
