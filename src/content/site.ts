export type Locale = "es" | "en";

export interface LinkItem {
  label: string;
  href: string;
  icon?: string;
}

export interface SkillCategory {
  title: string;
  icon: string;
  skills: string[];
}

export interface Project {
  period: string;
  title: string;
  status: string;
  description: string;
  tags: string[];
}

export interface SiteContent {
  locale: Locale;
  htmlLang: string;
  title: string;
  description: string;
  brand: string;
  cvUrl: string;
  nav: {
    links: LinkItem[];
    cvLabel: string;
    languageLabel: string;
    languageHref: string;
  };
  hero: {
    titlePrefix: string;
    titleSuffix: string;
    description: string;
    primaryCta: string;
    secondaryCta: string;
    secondaryHref: string;
    socialLinks: LinkItem[];
  };
  skills: {
    heading: string;
    categories: SkillCategory[];
  };
  experience: {
    heading: string;
    projects: Project[];
    cta: {
      title: string;
      description: string;
      emailLabel: string;
      links: LinkItem[];
    };
  };
  aboutEducation: {
    aboutHeading: string;
    aboutBody: string;
    availability: string;
    educationHeading: string;
    degreeTitle: string;
    degreeInstitution: string;
    certificationsHeading: string;
    certifications: string[];
    languagesHeading: string;
    languages: string[];
  };
  footer: {
    copyright: string;
    phone: string;
    email: string;
    links: LinkItem[];
    location: string;
  };
}

const shared = {
  brand: "Christian Colmenares",
  cvUrl: "/cv/christian-colmenares-cv.pdf",
  email: "christian@colmenares.net",
  phone: "+507 60016847",
  linkedinUrl: "https://linkedin.com/in/ChristianColmenares",
  githubUrl: "https://github.com/ChristianColmenares",
  socialLinks: [
    {
      label: "LinkedIn",
      href: "https://linkedin.com/in/ChristianColmenares",
      icon: "link",
    },
    {
      label: "GitHub",
      href: "https://github.com/ChristianColmenares",
      icon: "code",
    },
    { label: "Email", href: "mailto:christian@colmenares.net", icon: "mail" },
  ],
  skillTags: {
    backend: [
      "NestJS",
      "Golang",
      "TypeScript",
      "Python",
      "REST APIs",
      "Microservices",
    ],
    industrial: [
      "Siemens TIA Portal",
      "PLC",
      "SCADA",
      "Distech JACE",
      "OPC UA",
    ],
    protocols: ["MQTT", "Modbus", "S7", "Sparkplug B"],
    frontend: ["Vue.js", "UI/UX", "HMI/SCADA Dashboards"],
    data: ["PostgreSQL", "Redis", "TimescaleDB", "AWS", "GCP"],
    devops: ["Docker", "Docker Compose", "Git", "CI/CD", "Linux"],
  },
  projects: {
    cloudHmi: {
      title: "Cloud HMI",
      description:
        "Multi-tenant architecture, high-frequency telemetry (+500 msgs/seg MQTT).",
      tags: ["NestJS", "PostgreSQL", "Docker", "MQTT"],
    },
    dataVenezuela: {
      title: "DataVenezuela.com",
      description:
        "Financial data hub, real-time pipelines, continuous scraping.",
      tags: ["Data Pipelines", "Real-time"],
    },
  },
};

export const siteContent: Record<Locale, SiteContent> = {
  es: {
    locale: "es",
    htmlLang: "es",
    title:
      "Christian Colmenares - Senior Fullstack Developer & Ingeniero de Automatización Industrial",
    description:
      "Portafolio de Christian Colmenares, especialista en convergencia IT/OT, plataformas IIoT, backend moderno y automatización industrial.",
    brand: shared.brand,
    cvUrl: shared.cvUrl,
    nav: {
      links: [
        { label: "Expertise", href: "#expertise" },
        { label: "Experiencia", href: "#experience" },
        { label: "Educación", href: "#education" },
        { label: "Contacto", href: "#contact" },
      ],
      cvLabel: "Ver CV",
      languageLabel: "EN",
      languageHref: "/en/",
    },
    hero: {
      titlePrefix: "Senior Fullstack Developer &",
      titleSuffix: "Ingeniero de Automatización Industrial.",
      description:
        "Especialista en la convergencia IT/OT: integración de sistemas industriales con arquitecturas modernas de backend. Más de 8 años de experiencia construyendo plataformas IIoT y SaaS multi-tenant.",
      primaryCta: "Ver CV",
      secondaryCta: "Contactar",
      secondaryHref: "mailto:christian@colmenares.net",
      socialLinks: shared.socialLinks,
    },
    skills: {
      heading: "Competencias Técnicas",
      categories: [
        {
          title: "Backend & Arquitectura",
          icon: "architecture",
          skills: shared.skillTags.backend,
        },
        {
          title: "Industrial & OT",
          icon: "precision_manufacturing",
          skills: shared.skillTags.industrial,
        },
        {
          title: "Protocolos de Comunicación",
          icon: "router",
          skills: shared.skillTags.protocols,
        },
        {
          title: "Frontend & Visualización",
          icon: "web",
          skills: shared.skillTags.frontend,
        },
        {
          title: "Datos & Nube",
          icon: "database",
          skills: shared.skillTags.data,
        },
        {
          title: "DevOps & Herramientas",
          icon: "terminal",
          skills: shared.skillTags.devops,
        },
      ],
    },
    experience: {
      heading: "Proyectos y Experiencia",
      projects: [
        {
          period: "2025 - Presente",
          title: shared.projects.cloudHmi.title,
          status: "Activo",
          description: shared.projects.cloudHmi.description,
          tags: shared.projects.cloudHmi.tags,
        },
        {
          period: "En curso",
          title: shared.projects.dataVenezuela.title,
          status: "Activo",
          description: shared.projects.dataVenezuela.description,
          tags: shared.projects.dataVenezuela.tags,
        },
      ],
      cta: {
        title: "Impulsemos tu infraestructura IT/OT",
        description:
          "¿Buscas integrar sistemas industriales con arquitecturas modernas en la nube? Estoy disponible para colaborar en proyectos que requieran escalabilidad, precisión y rendimiento.",
        emailLabel: shared.email,
        links: [
          { label: "LinkedIn", href: shared.linkedinUrl, icon: "link" },
          { label: "GitHub", href: shared.githubUrl, icon: "code" },
        ],
      },
    },
    aboutEducation: {
      aboutHeading: "Acerca de mí",
      aboutBody:
        "Ingeniero apasionado por la eficiencia y la precisión estructural del software. Busco constantemente tender puentes entre la robustez de los sistemas industriales y la escalabilidad de la nube moderna.",
      availability: "Disponibilidad para posiciones remotas internacionales.",
      educationHeading: "Educación & Certificaciones",
      degreeTitle: "Ingeniería Mecánica",
      degreeInstitution: "UNET",
      certificationsHeading: "Certificaciones",
      certifications: [
        "Siemens TIA Portal",
        "Arquitectura de Microservicios",
        "Protocolos Industriales Avanzados",
      ],
      languagesHeading: "Idiomas",
      languages: ["Español (Nativo)", "Inglés (B2)"],
    },
    footer: {
      copyright:
        "© 2026 Christian Colmenares. Industrial-grade precision in software engineering.",
      phone: shared.phone,
      email: shared.email,
      links: [
        { label: "LinkedIn", href: shared.linkedinUrl },
        { label: "GitHub", href: shared.githubUrl },
        { label: "Email", href: "mailto:christian@colmenares.net" },
      ],
      location: "Ubicación: Remoto/Pánama/Venezuela/Colombia",
    },
  },
  en: {
    locale: "en",
    htmlLang: "en",
    title:
      "Christian Colmenares - Senior Fullstack Developer & Industrial Automation Engineer",
    description:
      "Portfolio of Christian Colmenares, specialist in IT/OT convergence, IIoT platforms, modern backend systems, and industrial automation.",
    brand: shared.brand,
    cvUrl: shared.cvUrl,
    nav: {
      links: [
        { label: "Expertise", href: "#expertise" },
        { label: "Experience", href: "#experience" },
        { label: "Education", href: "#education" },
        { label: "Contact", href: "#contact" },
      ],
      cvLabel: "View CV",
      languageLabel: "ES",
      languageHref: "/es/",
    },
    hero: {
      titlePrefix: "Senior Fullstack Developer &",
      titleSuffix: "Industrial Automation Engineer.",
      description:
        "Specialist in IT/OT convergence: integrating industrial systems with modern backend architectures. More than 8 years of experience building IIoT platforms and multi-tenant SaaS products.",
      primaryCta: "View CV",
      secondaryCta: "Contact",
      secondaryHref: "mailto:christian@colmenares.net",
      socialLinks: shared.socialLinks,
    },
    skills: {
      heading: "Technical Expertise",
      categories: [
        {
          title: "Backend & Architecture",
          icon: "architecture",
          skills: shared.skillTags.backend,
        },
        {
          title: "Industrial & OT",
          icon: "precision_manufacturing",
          skills: shared.skillTags.industrial,
        },
        {
          title: "Communication Protocols",
          icon: "router",
          skills: shared.skillTags.protocols,
        },
        {
          title: "Frontend & Visualization",
          icon: "web",
          skills: shared.skillTags.frontend,
        },
        {
          title: "Data & Cloud",
          icon: "database",
          skills: shared.skillTags.data,
        },
        {
          title: "DevOps & Tooling",
          icon: "terminal",
          skills: shared.skillTags.devops,
        },
      ],
    },
    experience: {
      heading: "Projects and Experience",
      projects: [
        {
          period: "2025 - Present",
          title: shared.projects.cloudHmi.title,
          status: "Active",
          description: shared.projects.cloudHmi.description,
          tags: shared.projects.cloudHmi.tags,
        },
        {
          period: "Ongoing",
          title: shared.projects.dataVenezuela.title,
          status: "Active",
          description: shared.projects.dataVenezuela.description,
          tags: shared.projects.dataVenezuela.tags,
        },
      ],
      cta: {
        title: "Let’s move your IT/OT infrastructure forward",
        description:
          "Looking to integrate industrial systems with modern cloud architectures? I am available for projects that require scalability, precision, and performance.",
        emailLabel: shared.email,
        links: [
          { label: "LinkedIn", href: shared.linkedinUrl, icon: "link" },
          { label: "GitHub", href: shared.githubUrl, icon: "code" },
        ],
      },
    },
    aboutEducation: {
      aboutHeading: "About Me",
      aboutBody:
        "Engineer focused on efficiency and structural precision in software. I consistently bridge the robustness of industrial systems with the scalability of the modern cloud.",
      availability: "Available for international remote roles.",
      educationHeading: "Education & Certifications",
      degreeTitle: "Mechanical Engineering",
      degreeInstitution: "UNET",
      certificationsHeading: "Certifications",
      certifications: [
        "Siemens TIA Portal",
        "Microservices Architecture",
        "Advanced Industrial Protocols",
      ],
      languagesHeading: "Languages",
      languages: ["Spanish (Native)", "English (B2)"],
    },
    footer: {
      copyright:
        "© 2026 Christian Colmenares. Industrial-grade precision in software engineering.",
      phone: shared.phone,
      email: shared.email,
      links: [
        { label: "LinkedIn", href: shared.linkedinUrl },
        { label: "GitHub", href: shared.githubUrl },
        { label: "Email", href: "mailto:christian@colmenares.net" },
      ],
      location: "Location: Remote/Pánama/Venezuela/Colombia",
    },
  },
};

export const defaultLocale: Locale = "es";
