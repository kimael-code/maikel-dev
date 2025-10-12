export default defineAppConfig({
  global: {
    picture: {
      dark: 'https://cdn.bsky.app/img/avatar/plain/did:plc:baqqkpclvukg7s3e2s3f5yoz/bafkreigmxjgzfi3ilrgxn3x6vakljhl3tv5qqd4tddcro54gyash6hpyz4@jpeg',
      light: 'https://cdn.bsky.app/img/avatar/plain/did:plc:baqqkpclvukg7s3e2s3f5yoz/bafkreigmxjgzfi3ilrgxn3x6vakljhl3tv5qqd4tddcro54gyash6hpyz4@jpeg',
      alt: 'My profile picture'
    },
    meetingLink: 'https://discord.gg/TTAKNqpagT',
    email: 'mcarballo@tutanota.com',
    available: true
  },
  ui: {
    colors: {
      primary: 'blue',
      neutral: 'neutral'
    },
    pageHero: {
      slots: {
        container: 'py-18 sm:py-24 lg:py-32',
        title: 'mx-auto max-w-xl text-pretty text-3xl sm:text-4xl lg:text-5xl',
        description: 'mt-2 text-md mx-auto max-w-2xl text-pretty sm:text-md text-muted'
      }
    }
  },
  footer: {
    credits: `Built with Nuxt UI • © ${new Date().getFullYear()}`,
    colorMode: false,
    links: [{
      'icon': 'i-simple-icons-discord',
      'to': 'https://discord.gg/TTAKNqpagT',
      'target': '_blank',
      'aria-label': 'Maikel on Discord'
    }, {
      'icon': 'i-simple-icons-bluesky',
      'to': 'https://bsky.app/profile/maikel-dev.bsky.social',
      'target': '_blank',
      'aria-label': 'Maikel on X'
    }, {
      'icon': 'i-simple-icons-github',
      'to': 'https://github.com/kimael-code',
      'target': '_blank',
      'aria-label': 'Maikel UI on GitHub'
    }]
  }
})
