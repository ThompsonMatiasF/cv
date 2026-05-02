export type TimelineStage = {
  stage: string
  description: string
  items: TimelineItem[]
}

export type TimelineItem = {
  from: string
  to?: string
  title: string
  subtitle?: string
  description: string[]
}

export type ResumeItem = {
  title: string
  subtitle?: string
  items: string[]
}

export type ResumeData = {
  hero: {
    name: string
    title: string
    description: string
    avatar: string
    contact: {
      email: string
      phone: string
      linkedin: string
      github: string
    }
  }
  experience: ResumeItem[]
  projects: ResumeItem[]
  skills: string[]
}

export type AppData = {
  resume: ResumeData
  timeline: TimelineStage[]
}

export const appData: AppData = {
  resume: {
    hero: {
      name: 'Matías Thompson',
      title: 'Frontend Developer | React | Arquitectura de aplicaciones',
      description:
        'Frontend Developer enfocado en diseñar aplicaciones mantenibles y escalables. Me interesa construir sistemas donde la UI sea un detalle reemplazable, priorizando desacople, claridad y evolución del software.',
      avatar: '/profile.jpeg',
      contact: {
        email: 'thompson.matiasf@gmail.com',
        phone: '+54 9 11 3303-0041',
        linkedin:
          'https://www.linkedin.com/in/matias-federico-thompson-147a6858/?skipRedirect=true',
        github: 'https://github.com/ThompsonMatiasF?tab=repositories',
      },
    },

    experience: [
      {
        title: 'Frontend Developer',
        subtitle: 'Veritran - 2021 a la actualidad',
        items: [
          'Desarrollo de aplicaciones con React, TypeScript y APIs REST',
          'Colaboración con UX/UI y backend en features end-to-end',
          'Participación activa en procesos ágiles',
        ],
      },
      {
        title: 'Arquitectura y contribuciones técnicas',
        items: [
          'Implementación de arquitectura de microfrontends con container',
          'Comunicación entre módulos mediante postMessage',
          'Mejora de librerías UI (accesibilidad y testabilidad)',
          'Introducción de desacople por capas en proyectos',
        ],
      },
      {
        title: 'Calidad y rendimiento',
        items: [
          'Testing automatizado y mantenimiento de coverage',
          'Code reviews y mejora continua',
        ],
      },
    ],

    projects: [
      {
        title: 'UI-Agnostic Task Manager',
        items: [
          'Arquitectura desacoplada con separación de dominio y UI',
          'Core independiente que permite cambiar la interfaz con bajo costo',
          'Aplicación de SOLID y Clean Architecture',
        ],
      },
      {
        title: 'CV Web interactivo',
        items: [
          'React, TypeScript y Vite',
          'Cambio de tema y exportación a PDF',
        ],
      },
    ],

    skills: [
      'React',
      'TypeScript',
      'JavaScript',
      'HTML',
      'CSS',
      'REST APIs',
      'Microfrontends',
      'SOLID',
      'Clean Architecture',
      'Clean Code',
      'Testing',
      'Git',
    ],
  },
  timeline: [
    {
      stage: 'Fundamentos en Data',
      description:
        'Inicio en el mundo de datos, trabajando con SQL, ETL y herramientas de BI.',
      items: [
        {
          from: '2014',
          to: '2016',
          title: 'Junior Analyst',
          subtitle: 'Carrefour Argentina',
          description: [
            'Desarrollo de reportes y consultas SQL',
            'Trabajo con Data Warehouse (Teradata)',
            'Visualización de datos con MicroStrategy',
            'Procesos ETL en entornos Linux',
          ],
        },
      ],
    },
    {
      stage: 'Ingeniería y Fullstack',
      description:
        'Transición hacia desarrollo de software, combinando frontend y backend en aplicaciones reales.',
      items: [
        {
          from: '2016',
          to: '2020',
          title: 'Software Engineer',
          subtitle: 'Despegar',
          description: [
            'Participación en soluciones de Business Intelligence y ETL',
            'Desarrollo de aplicaciones SPA con Angular y React',
            'Construcción de herramientas internas',
            'Desarrollo de APIs backend con Node.js y Express',
            'Optimización de performance',
          ],
        },
      ],
    },
    {
      stage: 'Especialización en Frontend',
      description:
        'Foco en tecnologías modernas de frontend y exploración del ecosistema React.',
      items: [
        {
          from: '2020',
          to: '2021',
          title: 'Frontend Engineer',
          subtitle: 'iúnigo',
          description: [
            'Desarrollo de interfaces con React',
            'Trabajo con Next.js (SSR y estructura de aplicaciones)',
            'Experiencia en aplicaciones móviles con React Native',
            'Integración con APIs REST',
            'Mejoras en experiencia de usuario',
          ],
        },
      ],
    },
    {
      stage: 'Arquitectura Frontend',
      description:
        'Evolución hacia diseño de sistemas frontend mantenibles, escalables y desacoplados.',
      items: [
        {
          from: '2021',
          to: 'Actualidad',
          title: 'Frontend Engineer',
          subtitle: 'Veritran',
          description: [
            'Desarrollo de aplicaciones frontend con React y Typescript',
            'Participación en diseño de soluciones y arquitectura',
            'Mejora de mantenibilidad y escalabilidad',
            'Trabajo en equipos ágiles',
          ],
        },
      ],
    },
  ],
}
