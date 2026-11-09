import passo1 from '../assets/otimizadas/metodologia-aprender.webp'
import passo2 from '../assets/otimizadas/metodologia-conversar.webp'
import passo3 from '../assets/otimizadas/metodologia-praticar.webp'
import fotoPaulo from '../assets/otimizadas/professor-paulo.webp'
import fotoIgor from '../assets/otimizadas/professor-igor-lins.webp'
import fotoSandy from '../assets/otimizadas/professor-sandy.webp'
import fotoCarlos from '../assets/otimizadas/aluno-carlos-rui.webp'
import fotoJorgeana from '../assets/otimizadas/aluna-jorgeana.webp'
import fotoProvas from '../assets/otimizadas/carrossel-provas-internacionais.webp'
import fotoViagens from '../assets/otimizadas/carrossel-viagens.webp'
import fotoProfissional from '../assets/otimizadas/carrossel-profissional.webp'
import logoCambridge from '../assets/otimizadas/logo-cambridge.webp'

export const WHATSAPP_URL = 'https://wa.me/5585996401985'

export const contact = {
  whatsapp: '(85) 99640-1985',
  email: 'contato@englishcoachidiomas.com',
  address: 'Rua Padre Valdevino, 227, Sobreloja, Centro — Fortaleza',
  hours: ['Seg a sex: 09:00 às 21:00', 'Sáb: 08:00 às 12:00', 'Dom: fechado'],
}

export const navLinks = [
  { label: 'Como funciona', href: '/#como-funciona' },
  { label: 'Professores', href: '/#professores' },
  { label: 'Comparativo', href: '/#comparativo' },
  { label: 'Valores', href: '/#valores' },
  { label: 'Depoimentos', href: '/#depoimentos' },
  { label: 'Dúvidas', href: '/#duvidas' },
]

export const features = [
  {
    icon: 'user',
    title: 'Aula 100% particular',
    text: 'Professor dedicado a você, ao vivo, sem dividir atenção com turma.',
    short: 'Professor só seu, ao vivo.',
  },
  {
    icon: 'headphones',
    title: 'Sem webcam obrigatória',
    text: 'Basta um fone e conexão. Câmera ligada só se você quiser.',
    short: 'Só fone e internet.',
  },
  {
    icon: 'pencil',
    title: 'Plano sob medida',
    text: 'Conteúdo montado a partir do seu nível, objetivo e rotina.',
    short: 'Do seu nível ao seu objetivo.',
  },
  {
    icon: 'calendar',
    title: 'Horários flexíveis',
    text: 'Aulas encaixadas na sua agenda, de qualquer lugar.',
    short: 'Na sua agenda.',
  },
]

export const steps = [
  {
    label: 'Passo 1',
    title: 'Agende em 1 minuto',
    text: 'Conte seu objetivo, escolha o melhor dia e horário. Confirmamos pelo WhatsApp.',
    short: 'Objetivo, dia e horário.',
    image: passo1,
  },
  {
    label: 'Passo 2',
    title: 'Uma conversa com o professor',
    text: 'Você conta por que quer aprender, seus objetivos e metas. Enquanto isso, o professor faz o teste de nivelamento.',
    short: 'Seus objetivos e metas + teste de nível.',
    image: passo2,
  },
  {
    label: 'Passo 3',
    title: 'Seu plano de estudos',
    text: 'Você sai com seu nível e um plano montado pelo professor para você seguir. Matrícula só se fizer sentido.',
    short: 'Montado pelo professor para você.',
    image: passo3,
    position: '50% 62%',
  },
]

export const plans = [
  {
    title: 'Inglês geral e para viagens',
    text: 'Conversação para o dia a dia, viagens e intercâmbio.',
    chips: ['Conversação', 'Viagens', 'Intercâmbio', 'Do zero ao avançado'],
    image: fotoViagens,
  },
  {
    title: 'Inglês profissional',
    text: 'Vocabulário e situações reais da sua área de atuação.',
    chips: ['TI', 'Administração', 'Direito', 'Engenharia', 'Finanças', 'Hotelaria', 'Medicina', 'e mais'],
    image: fotoProfissional,
  },
  {
    title: 'Provas internacionais',
    text: 'Preparação focada no formato e na pontuação que você precisa.',
    chips: ['Cambridge', 'TOEFL', 'IELTS', 'Pearson'],
    image: fotoProvas,
  },
]

export const comparison = {
  columns: [
    { label: 'Brasil English Coach', short: 'BEC', highlight: true },
    { label: 'Cursos em grupo', short: 'Grupo' },
    { label: 'Apps de idiomas', short: 'Apps' },
  ],
  rows: [
    { label: 'Aula 100% particular e ao vivo', values: [true, false, false] },
    { label: 'Plano de estudos feito para você', values: [true, false, 'Parcial'] },
    { label: 'Professor corrige sua fala na hora', values: [true, 'Parcial', false] },
    { label: 'Horários flexíveis', values: [true, false, true] },
    { label: 'Sem webcam obrigatória', values: [true, false, true] },
    { label: 'Teste de nível com professor', values: [true, 'Parcial', false] },
    { label: 'Preparatório para provas internacionais', values: [true, 'Parcial', false] },
    { label: 'Aula experimental grátis', values: [true, false, 'Parcial'] },
  ],
}

export { logoCambridge }

export const pricing = [
  {
    name: 'Inglês Flex/VIP Online 40h',
    others: 'R$ 1.239,99',
    price: 'R$ 280,00',
    schedule: '1 aula de 1h ou 2 aulas de 30min por semana',
    hours: '40h',
    featured: true,
  },
  {
    name: 'Inglês Flex/VIP Online 80h',
    others: 'R$ 1.837,99',
    price: 'R$ 480,00',
    schedule: '2 aulas de 1h ou até 4 aulas de 30min por semana',
    hours: '80h',
  },
  {
    name: 'Inglês Flex/VIP Online Premium',
    others: 'R$ 2.749,99',
    price: 'R$ 660,00',
    schedule: '3 aulas de 1h ou até 6 aulas de 30min por semana',
    hours: '120h',
  },
]

export const teachers = [
  {
    name: 'Prof. Paulo',
    photo: fotoPaulo,
    bio: 'Bacharel em Letras – Inglês, especialista em coaching educacional e vinte anos de experiência como professor de idiomas no Brasil e no exterior. Foi coordenador de grandes franquias e responsável pela aplicação no Ceará do exame internacional FCE da Universidade de Cambridge.',
  },
  {
    name: 'Prof. Igor Lins',
    photo: fotoIgor,
    bio: 'Professor treinado in-house em inglês e alemão, com experiência nacional e internacional e excelentes níveis de rapport com os alunos.',
  },
  {
    name: 'Profa. Sandy',
    photo: fotoSandy,
    bio: 'Professora com formação e treinamento específico para aulas online e experiência com kids e teens. Dona de grande rapport com os alunos e variadas experiências em congressos e palestras.',
  },
]

export const testimonials = [
  {
    quote:
      'Estou muito satisfeito com o curso de inglês. A Escola se adapta à minha disponibilidade de horários e possui um conteúdo didático aderente às minhas expectativas pessoais e profissionais. Trabalho em uma Empresa Multinacional, onde foi fundamental o aprendizado que tive na Escola, no meu trabalho do dia a dia.',
    name: 'Carlos Rui Batista',
    role: 'Lead programmer em uma empresa multinacional',
    photo: fotoCarlos,
  },
  {
    quote:
      'Com o curso consegui destravar minha conversação, pois o Brasil English Coach avalia seus pontos de oportunidades de melhoria e trabalha neles. Uso diariamente no meu trabalho o inglês, em reuniões globais, apresentações, leituras e e-mails, e consegui fazer isso com naturalidade depois do curso. As aulas são dinâmicas, tratando de temas da atualidade, músicas e vídeos. Super indico!!!',
    name: 'Jorgeana Morais Monteiro',
    role: 'Engenheira Química',
    photo: fotoJorgeana,
  },
]

export const faqs = [
  {
    q: 'A aula experimental é realmente gratuita?',
    a: 'Sim. Você faz a aula e o teste de nível sem nenhum compromisso de pagamento. Só se matricula se quiser.',
  },
  {
    q: 'Preciso ligar a câmera nas aulas?',
    a: 'Não. Basta um fone e uma boa conexão. A câmera é opcional — ligue só se você se sentir confortável.',
  },
  {
    q: 'Como funciona o teste de nivelamento?',
    a: 'Durante a conversa da aula experimental o professor avalia compreensão, vocabulário e fala. Ao final você recebe seu nível.',
  },
  {
    q: 'Qual a idade mínima?',
    a: 'Atendemos alunos a partir dos 13 anos, além de adultos de qualquer idade.',
  },
  {
    q: 'Quanto custa o curso?',
    a: 'O valor depende da frequência e do plano montado para você. Apresentamos tudo ao final da aula experimental.',
  },
]

export const imageCredits = [
  {
    image: '/img/hero-fundo-800.webp',
    title: 'Bandeira do Reino Unido sob nuvens brancas',
    usedIn: 'Banner da página inicial',
    author: 'Maxim Hopman',
    authorUrl: 'https://unsplash.com/pt-br/@nampoh',
    source: 'Unsplash',
    url: 'https://unsplash.com/pt-br/fotografias/nos-uma-bandeira-sob-nuvens-brancas-VweMmg8XMfw',
  },
  {
    image: fotoProvas,
    title: 'Equipa de estudantes universitários a trabalhar num projecto relacionado com a gestão empresarial',
    usedIn: 'Carrossel de cursos — Provas internacionais',
    author: 'DC Studio',
    authorUrl: 'https://www.magnific.com/br/autor/dcstudio',
    source: 'Magnific',
    url: 'https://www.magnific.com/br/fotos-gratis/equipa-de-estudantes-universitarios-a-trabalhar-num-projecto-relacionado-com-a-gestao-empresarial_416754949.htm',
  },
  {
    image: fotoViagens,
    title: 'Amigos rindo em uma trilha nas montanhas',
    usedIn: 'Carrossel de cursos — Inglês geral e para viagens',
    author: 'Felix Rostig',
    authorUrl: 'https://unsplash.com/pt-br/@felixrstg',
    source: 'Unsplash',
    url: 'https://unsplash.com/pt-br/fotografias/low-angle-photography-of-two-men-playing-beside-two-women-UmV2wr-Vbq8',
  },
  {
    image: fotoProfissional,
    title: 'Equipe em reunião em uma sala de escritório',
    usedIn: 'Carrossel de cursos — Inglês profissional',
    author: 'Campaign Creators',
    authorUrl: 'https://unsplash.com/pt-br/@campaign_creators',
    source: 'Unsplash',
    url: 'https://unsplash.com/pt-br/fotografias/people-sitting-near-table-with-laptop-computer-qCi_MzVODoU',
  },
  {
    image: passo1,
    title: 'Uma pessoa escrevendo em um caderno com café',
    usedIn: 'Como funciona — Passo 1',
    author: 'Alehandra',
    authorUrl: 'https://unsplash.com/pt-br/@alehandra13',
    source: 'Unsplash',
    url: 'https://unsplash.com/pt-br/fotografias/uma-pessoa-escrevendo-em-um-caderno-com-cafe-QK4Ov_0APVU',
  },
  {
    image: passo2,
    title: 'Duas mulheres sentadas à mesa conversando',
    usedIn: 'Como funciona — Passo 2',
    author: 'Christina @ wocintechchat.com M',
    authorUrl: 'https://unsplash.com/pt-br/@wocintechchat',
    source: 'Unsplash',
    url: 'https://unsplash.com/pt-br/fotografias/two-women-sitting-beside-table-and-talking-LQ1t-8Ms5PY',
  },
  {
    image: passo3,
    title: 'Duas crianças brincando de flecha',
    usedIn: 'Como funciona — Passo 3',
    author: 'Annie Spratt',
    authorUrl: 'https://unsplash.com/pt-br/@anniespratt',
    source: 'Unsplash',
    url: 'https://unsplash.com/pt-br/fotografias/duas-criancas-brincando-de-flecha-t3IYuQZRDNE',
  },
  {
    image: logoCambridge,
    logo: true,
    title: 'Logo da University of Cambridge',
    usedIn: 'Valores — material Cambridge',
    author: 'Dm980cam',
    authorUrl: 'https://commons.wikimedia.org/wiki/User:Dm980cam',
    source: 'Wikimedia Commons',
    url: 'https://commons.wikimedia.org/wiki/File:University_of_Cambridge_logo.png',
    license: 'CC BY-SA 4.0',
    licenseUrl: 'https://creativecommons.org/licenses/by-sa/4.0/deed.pt-br',
  },
]
