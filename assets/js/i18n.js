// i18n.js

const STORAGE_KEY = 'lang'

const html = document.documentElement
const toggle = document.querySelector('[data-lang-toggle]')

/* =========================
   TRANSLATIONS
========================= */

const translations = {
  pt: {
    hero: {
      title: 'Crio produtos digitais que unem estratégia, design e performance.',
      description: 'Minha missão é simplificar o complexo e criar experiências que realmente importam.',
      testimonials: [
        {
          text: 'O Edilson tem uma visão muito forte de produto e sempre traz soluções bem pensadas.',
          name: 'João Silva',
          role: 'Frontend Developer'
        },
        {
          text: 'Trabalhar com ele elevou muito o nível do nosso design system.',
          name: 'Maria Souza',
          role: 'Product Manager'
        },
        {
          text: 'Extremamente organizado e focado em escala.',
          name: 'Carlos Lima',
          role: 'Tech Lead'
        },
        {
          text: 'Sempre preocupado com a experiência do usuário.',
          name: 'Ana Costa',
          role: 'UX Researcher'
        },
        {
          text: 'Entrega consistente e com muita qualidade.',
          name: 'Bruno Alves',
          role: 'Product Owner'
        }
      ]
    },
    about: {
      title: "Edilson Dantas Dias",
      description: "Product Designer focado em Design Systems, UX e produtos digitais escaláveis.",

      circleText: "Product Design • Design Systems • DesignOps • UX Design • UX Strategy • UI Design",

      experienceTitle: "Experiência",
      approachTitle: "Forma de atuar",

      experience: [
        "Com mais de 12 anos de experiência, ajudo empresas e equipes a criar produtos digitais que realmente fazem a diferença.",
        "Desenvolvi Design Systems completos e implementei processos de Design Ops que aumentaram a eficiência dos times."
      ],

      approach: [
        "Atuo de ponta a ponta, da estratégia à execução, garantindo soluções consistentes, funcionais e centradas no usuário.",
        "Trabalho com equipes multidisciplinares para transformar ideias em produtos escaláveis e de alta qualidade."
      ]
    },
    solutions: {
      title: "Ofereço soluções de design para produtos e marcas que querem",
      items: [
        "Transformar uma ideia em um produto digital funcional e escalável, do conceito à execução.",
        "Criar um produto que se destaque no mercado, mesmo em setores competitivos.",
        "Reformular sites, sistemas ou apps para melhorar a experiência do usuário e a performance.",
        "Construir uma marca forte e consistente, que transmita confiança e reconhecimento.",
        "Aumentar conversões e reduzir custos com soluções de design inteligentes e estratégicas.",
        "Implantar Design Systems para acelerar o crescimento do produto de forma sólida e organizada.",
        "Contar com um parceiro estratégico que usa o design como diferencial competitivo.",
        "Receber entregas rápidas, eficientes e de alta qualidade, respeitando prazos e expectativas."
      ]
    },
    services: {
      title: "Te ajudo a criar produtos e marcas do zero — ou a levar o que já existe para o próximo nível.",
      deliverablesTitle: "Entregáveis",
      cards: [
        {
          title: "Produtos Digitais",
          subtitle: "Interfaces de alto nível",
          description: "Projetamos experiências digitais transformadoras para todos os setores e indústrias, com foco nas metas do seu negócio, excelência na usabilidade, visual incrível e orientado a boas práticas do digital.",
          list: [
            "Sites",
            "Mobile Apps",
            "Landing Pages",
            "SaaS, Sistemas e Plataformas",
            "E-commerces",
            "Dashboards",
            "Design Systems",
            "Protótipos navegáveis",
            "Wireframes"
          ]
        },
        {
          title: "Web sites",
          subtitle: "Performance e alta conversão",
          description: "Leve seu negócio para o próximo nível com um site ou landing page incrível — e o melhor, no ar em poucos dias.",
          list: [
            "Sites Institucionais",
            "Landing Pages",
            "Blogs",
            "Desenvolvimento"
          ]
        },
        {
          title: "Marcas",
          subtitle: "Sólidas e atemporais",
          description: "Conecte propósito, pessoas e negócio através de uma marca única e memorável. No digital ou off-line, seu produto precisa de uma marca sólida, que reflita a essência e os valores da sua empresa.",
          list: [
            "Logotipo",
            "Identidade Visual",
            "Manual de marca",
            "Reformulação de marca"
          ]
        },
        {
          title: "Auditoria UI―UX",
          subtitle: "Análise de ponta a ponta do seu produto",
          description: "Obtenha um relatório completo de usabilidade, design, pontos de fricção e oportunidades de melhoria em seu website, sistema web, aplicativo ou landing page.",
          list: [
            "Design Visual",
            "Usabilidade",
            "Primeias impressões",
            "Consistencial visual",
            "Layout e hierarquia visual",
            "Responsividade",
            "Acessibilidade"
          ]
        }
      ]
    },
    process: {
      title: "Meu processo de criação, a chave de tudo",
      steps: [
        {
          title: "Descoberta",
          description: "Entendo o problema, o contexto e os objetivos do produto."
        },
        {
          title: "Estratégia",
          description: "Defino caminhos e soluções com foco no usuário."
        },
        {
          title: "Execução",
          description: "Crio interfaces e protótipos funcionais."
        },
        {
          title: "Evolução",
          description: "Analiso e evoluo continuamente o produto."
        }
      ]
    },
    work: {
      eyebrow: "Entenda meu jeito de trabalhar",
      items: [
        {
          title: "Ritmo rápido, sem enrolação",
          description: "Entregamos sempre o melhor, com máxima velocidade e qualidade, respeitando rigorosamente os prazos estabelecidos."
        },
        {
          title: "Comunicação facilitada",
          description: "Durante o projeto, fico à disposição para esclarecer dúvidas, receber sugestões e realizar tantas reuniões quanto se fizerem necessárias."
        },
        {
          title: "Equipe enxuta, resultado máximo",
          description: "Embora trabalhe de forma independente, conto com outros profissionais experientes de confiança para colaborar nos projetos — sem custo adicional para você."
        },
        {
          title: "Garantia de excelência",
          description: "Não paro de trabalhar até que o projeto esteja plenamente de acordo com suas expectativas e seja aprovado por você."
        }
      ]
    }
  },

  en: {
    hero: {
      title: 'I design digital products that combine strategy, design and performance.',
      description: 'My mission is to simplify complexity and create experiences that truly matter.',
      testimonials: [
        {
          text: 'Edilson has a strong product mindset and always brings thoughtful solutions.',
          name: 'João Silva',
          role: 'Frontend Developer'
        },
        {
          text: 'Working with him elevated our design system a lot.',
          name: 'Maria Souza',
          role: 'Product Manager'
        },
        {
          text: 'Extremely organized and focused on scalability.',
          name: 'Carlos Lima',
          role: 'Tech Lead'
        },
        {
          text: 'Always focused on user experience.',
          name: 'Ana Costa',
          role: 'UX Researcher'
        },
        {
          text: 'Consistent and high-quality delivery.',
          name: 'Bruno Alves',
          role: 'Product Owner'
        }
      ]
    },
    about: {
      title: "Edilson Dantas Dias",
      description: "Product Designer focused on Design Systems, UX and scalable digital products.",

      circleText: "Product Design • Design Systems • DesignOps • UX Design • UX Strategy • UI Design",

      experienceTitle: "Experience",
      approachTitle: "Way of working",

      experience: [
        "With over 12 years of experience, I help companies and teams build digital products that truly make a difference.",
        "I have developed complete Design Systems and implemented Design Ops processes that improved team efficiency."
      ],

      approach: [
        "I work end-to-end, from strategy to execution, ensuring consistent, functional and user-centered solutions.",
        "I collaborate with multidisciplinary teams to turn ideas into scalable, high-quality products."
      ]
    },
    solutions: {
      title: "I offer design solutions for products and brands that want",
      items: [
        "Turn an idea into a functional and scalable digital product, from concept to execution.",
        "Create a product that stands out in the market, even in competitive sectors.",
        "Redesign websites, systems or apps to improve user experience and performance.",
        "Build a strong and consistent brand that conveys trust and recognition.",
        "Increase conversions and reduce costs with smart and strategic design solutions.",
        "Implement Design Systems to scale product growth in a structured and efficient way.",
        "Work with a strategic partner who uses design as a competitive advantage.",
        "Receive fast, efficient and high-quality deliveries that meet deadlines and expectations."
      ]
    },
    services: {
      title: "I help you create products and brands from scratch — or take what already exists to the next level.",
      deliverablesTitle: "Deliverables",
      cards: [
  {
    title: "Digital Products",
    subtitle: "High-level interfaces",
    description: "We design transformative digital experiences across industries, focusing on your business goals, usability excellence, and best practices.",
    list: [
      "Websites",
      "Mobile Apps",
      "Landing Pages",
      "SaaS, Systems and Platforms",
      "E-commerce",
      "Dashboards",
      "Design Systems",
      "Interactive prototypes",
      "Wireframes"
    ]
  },
  {
    title: "Websites",
    subtitle: "Performance and conversion",
    description: "Take your business to the next level with a high-performance website or landing page.",
    list: [
      "Institutional websites",
      "Landing pages",
      "Blogs",
      "Development"
    ]
  },
  {
    title: "Branding",
    subtitle: "Solid and timeless",
    description: "Build a strong and memorable brand that connects purpose, people and business.",
    list: [
      "Logo",
      "Visual identity",
      "Brand guidelines",
      "Rebranding"
    ]
  },
  {
    title: "UI/UX Audit",
    subtitle: "End-to-end product analysis",
    description: "Get a complete usability and design report with improvement opportunities.",
    list: [
      "Visual design",
      "Usability",
      "First impressions",
      "Visual consistency",
      "Layout and hierarchy",
      "Responsiveness",
      "Accessibility"
    ]
  }
]
    },
    process: {
      title: "My creation process, the key to everything",
      steps: [
        {
          title: "Discovery",
          description: "I understand the problem, context and goals."
        },
        {
          title: "Strategy",
          description: "I define paths and user-focused solutions."
        },
        {
          title: "Execution",
          description: "I create interfaces and prototypes."
        },
        {
          title: "Evolution",
          description: "I analyze and continuously improve."
        }
      ]
    },
    work: {
      eyebrow: "Understand how I work",
      items: [
        {
          title: "Fast pace, no fluff",
          description: "We always deliver the best with speed and quality, strictly respecting deadlines."
        },
        {
          title: "Clear communication",
          description: "During the project, I’m available to clarify doubts, receive feedback, and meet whenever necessary."
        },
        {
          title: "Lean team, maximum results",
          description: "Although I work independently, I collaborate with trusted professionals when needed — at no extra cost to you."
        },
        {
          title: "Excellence guarantee",
          description: "I keep working until the project fully meets your expectations and gets your approval."
        }
      ]
    }
  }
}

/* =========================
   GET INITIAL LANGUAGE
========================= */

function getInitialLang() {
  const savedLang = localStorage.getItem(STORAGE_KEY)
  if (savedLang) return savedLang
  return 'pt'
}

/* =========================
   APPLY LANGUAGE
========================= */

function applyLang(lang) {
  html.setAttribute('lang', lang)
  localStorage.setItem(STORAGE_KEY, lang)

  const elements = document.querySelectorAll('[data-i18n]')

  elements.forEach(el => {
    const keys = el.getAttribute('data-i18n').split('.')

    let value = translations[lang]

    keys.forEach(key => {
      value = value?.[key]
    })

    if (value) {
      el.textContent = value
    }
  })

  updateToggleLabel(lang)
}


function renderAbout() {
  const lang = document.documentElement.getAttribute('lang') || 'pt'
  const data = translations[lang].about

  const titleEl = document.querySelector('.about_title')
  const descEl = document.querySelector('.about_description')
  const textContainer = document.querySelector('.about_text')
  const circleTextEl = document.querySelector('.circleText')

  if (titleEl) titleEl.textContent = data.title
  if (descEl) descEl.textContent = data.description

  if (circleTextEl) {
    circleTextEl.innerHTML = data.circleText
  }

  if (textContainer) {
    textContainer.innerHTML = `
      <h3 class="body-lg">${data.experienceTitle}</h3>
      ${data.experience.map(text => `<p class="body-lg">${text}</p>`).join('')}
      <div class="about_divider"></div>
      <h3 class="body-lg">${data.approachTitle}</h3>
      ${data.approach.map(text => `<p class="body-lg">${text}</p>`).join('')}
    `
  }
}
function renderSolutions() {
  const lang = document.documentElement.getAttribute('lang') || 'pt'
  const data = translations[lang].solutions

  const titleEl = document.querySelector('.solutions_title')
  const cards = document.querySelectorAll('.solutions_card p')

  if (titleEl) titleEl.textContent = data.title

  cards.forEach((card, index) => {
    if (data.items[index]) {
      card.textContent = data.items[index]
    }
  })
}
function renderProcess() {
  const lang = document.documentElement.getAttribute('lang') || 'pt'
  const data = translations[lang].process

  const titleEl = document.querySelector('.process__title')
  const cards = document.querySelectorAll('.process-card')

  if (titleEl) titleEl.textContent = data.title

  cards.forEach((card, index) => {
    const title = card.querySelector('.process-card__title')
    const desc = card.querySelector('.process-card__description')

    if (data.steps[index]) {
      title.textContent = data.steps[index].title
      desc.textContent = data.steps[index].description
    }
  })
}
function renderServices() {
  const lang = localStorage.getItem('lang') || 'pt'
  const data = translations?.[lang]?.services

  if (!data) return

  const titleEl = document.querySelector('.services_section_title')
  const cards = document.querySelectorAll('.services_card')

  // título principal
  if (titleEl) {
    titleEl.textContent = data.title
  }

  // loop nos cards
  cards.forEach((card, index) => {
    const item = data.cards?.[index]
    if (!item) return

    const title = card.querySelector('.services_title')
    const subtitle = card.querySelector('.services_subtitle')
    const description = card.querySelector('.services_description')
    const list = card.querySelector('.services_list')
    const deliverable = card.querySelector('.services_right .services_header span')

    // textos
    if (title) title.textContent = item.title
    if (subtitle) subtitle.textContent = item.subtitle
    if (description) description.textContent = item.description

    // "Entregáveis"
    if (deliverable) {
      deliverable.textContent = data.deliverablesTitle
    }

    // lista
    if (list && item.list) {
      list.innerHTML = item.list.map(li => `<li>${li}</li>`).join('')
    }
  })
}
function renderWork() {
  const lang = localStorage.getItem('lang') || 'pt'
  const data = translations?.[lang]?.work

  if (!data) return

  const eyebrow = document.querySelector('.work__eyebrow')
  const items = document.querySelectorAll('.work__item')

  if (eyebrow) {
    eyebrow.textContent = data.eyebrow
  }

  items.forEach((item, index) => {
    const content = data.items[index]
    if (!content) return

    const title = item.querySelector('h3')
    const description = item.querySelector('p')

    if (title) title.textContent = content.title
    if (description) description.textContent = content.description
  })
}

/* =========================
   TOGGLE LANGUAGE
========================= */

function toggleLang() {
  const current = html.getAttribute('lang') || 'pt'
  const next = current === 'pt' ? 'en' : 'pt'

  applyLang(next)

  renderAbout()
  renderSolutions()
  renderProcess()
  renderServices()
  renderWork()

  document.dispatchEvent(new Event('languageChanged'))
}

/* =========================
   UPDATE BUTTON
========================= */

function updateToggleLabel(lang) {
  if (!toggle) return
  toggle.textContent = lang === 'pt' ? 'EN' : 'PT'
}

/* =========================
   INIT
========================= */

function initI18n() {
  const lang = getInitialLang()
  applyLang(lang)

  renderAbout()
  renderSolutions()
  renderProcess()
  renderServices()
  renderWork()

  if (toggle) {
    toggle.addEventListener('click', toggleLang)
  }
}

/* =========================
   EVENTS
========================= */

document.addEventListener('languageChanged', () => {
  renderAbout()
  renderSolutions()
  renderProcess()
})

window.addEventListener('DOMContentLoaded', () => {
  initI18n()
  renderServices() // 👈 adiciona aqui
})

export { translations }