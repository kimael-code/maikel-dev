import type { NavigationMenuItem } from '@nuxt/ui'

export const navLinks = (): NavigationMenuItem[] => {
  const { t } = useI18n()
  const localePath = useLocalePath()

  return [
    {
      label: t('Home'),
      icon: 'i-lucide-home',
      to: localePath('/')
    },
    {
      label: t('Projects'),
      icon: 'i-lucide-folder',
      to: localePath('/projects')
    },
    {
      label: t('About'),
      icon: 'i-lucide-user',
      to: localePath('/about')
    }
  ]
}
