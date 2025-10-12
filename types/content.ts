export interface HeroSection {
  links: Array<{
    label: string
    icon?: string
    to?: string
    color?: 'primary' | 'neutral' | 'success' | 'warning' | 'error' | 'info'
    size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl'
    variant?: 'solid' | 'outline' | 'subtle' | 'soft' | 'ghost' | 'link'
    target?: '_blank' | '_self'
  }>
  images: Array<{
    src: string
    alt: string
  }>
}

export interface AboutSection {
  title: string
  description: string
}

export interface ExperienceItem {
  date: Date
  position: string
  company: {
    name: string
    url: string
    logo: string
    color: string
  }
}

export interface ExperienceSection {
  title: string
  description: string
  items: ExperienceItem[]
}

export interface FAQQuestion {
  label: string
  content: string
}

export interface FAQCategory {
  title: string
  questions: FAQQuestion[]
}

export interface FAQSection {
  title: string
  description: string
  categories: FAQCategory[]
}

export interface IndexPage {
  title: string
  description: string
  hero: HeroSection
  about: AboutSection
  experience: ExperienceSection
  faq: FAQSection
}