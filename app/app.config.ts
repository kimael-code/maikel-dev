export default defineAppConfig({
  global: {
    picture: {
      dark: '/avatar.avif',
      light: '/avatar.avif',
      alt: 'My profile picture'
    },
    meetingLink: 'https://discord.gg/TTAKNqpagT',
    githubLink: 'https://github.com/kimael-code',
    available: true
  },
  ui: {
    colors: {
      primary: 'lime',
      neutral: 'neutral'
    },
    pageHero: {
      slots: {
        container: 'py-18 sm:py-24 lg:py-32',
        title: 'mx-auto max-w-xl text-pretty text-3xl sm:text-4xl lg:text-5xl',
        description:
          'mt-2 text-md mx-auto max-w-2xl text-pretty sm:text-md text-muted'
      }
    },
    prose: {
      h3: {
        slots: {
          leading:
            'absolute -ms-8 top-0.5 opacity-0 group-hover:opacity-100 group-focus:opacity-100 p-1 bg-elevated border border-primary/40 text-primary rounded-md hidden lg:flex shadow-xs transition',
          link: 'group transition-colors duration-200 hover:text-primary focus-visible:text-primary lg:after:absolute lg:after:inset-y-0 lg:after:-inset-s-2 lg:after:w-2'
        }
      }
    }
  },
  footer: {
    credits: `© ${new Date().getFullYear()} Maikel Carballo • Full Stack & DevOps`,
    colorMode: false,
    links: [
      {
        'icon': 'i-simple-icons-discord',
        'to': 'https://discord.gg/TTAKNqpagT',
        'target': '_blank',
        'rel': 'noopener noreferrer',
        'aria-label': 'Maikel on Discord',
        'style': { '--brand-color': '#5865F2' }
      },
      {
        'icon': 'i-simple-icons-bluesky',
        'to': 'https://bsky.app/profile/maikel-dev.bsky.social',
        'target': '_blank',
        'rel': 'noopener noreferrer',
        'aria-label': 'Maikel on Bluesky',
        'style': { '--brand-color': '#0285FF' }
      },
      {
        'icon': 'i-simple-icons-github',
        'to': 'https://github.com/kimael-code',
        'target': '_blank',
        'rel': 'noopener noreferrer',
        'aria-label': 'Maikel on GitHub',
        'style': { '--brand-color': 'var(--ui-primary)' }
      },
      {
        'icon': 'i-simple-icons-kofi',
        'to': 'https://ko-fi.com/maikelcarballo',
        'target': '_blank',
        'rel': 'noopener noreferrer',
        'aria-label': 'Support Maikel on Ko-fi',
        'style': { '--brand-color': '#FF5E5B' }
      }
    ]
  }
})
