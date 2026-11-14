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
    }
  },
  footer: {
    credits: `Built with Nuxt UI • © ${new Date().getFullYear()}`,
    colorMode: false,
    links: [
      {
        'icon': 'i-simple-icons-discord',
        'to': 'https://discord.gg/TTAKNqpagT',
        'target': '_blank',
        'aria-label': 'Maikel on Discord'
      },
      {
        'icon': 'i-simple-icons-bluesky',
        'to': 'https://bsky.app/profile/maikel-dev.bsky.social',
        'target': '_blank',
        'aria-label': 'Maikel on Bluesky'
      },
      {
        'icon': 'i-simple-icons-github',
        'to': 'https://github.com/kimael-code',
        'target': '_blank',
        'aria-label': 'Maikel on GitHub'
      },
      {
        'icon': 'i-simple-icons-kofi',
        'to': 'https://ko-fi.com/maikelcarballo',
        'target': '_blank',
        'aria-label': 'Support Maikel on Ko-fi'
      }
    ]
  }
})
