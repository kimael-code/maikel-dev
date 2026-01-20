import type { NavigationMenuItem } from '@nuxt/ui'

export const navLinks = (): NavigationMenuItem[] => {
  const { t, locale } = useI18n()
  const links = computed(() => [
    {
      label: t('Home'),
      icon: 'i-lucide-home',
      to: locale.value === 'en' ? '/' : `/${locale.value}`
    },
    {
      label: t('Projects'),
      icon: 'i-lucide-folder',
      to: locale.value === 'en' ? '/projects' : `/${locale.value}/projects`
    },
    {
      label: t('About'),
      icon: 'i-lucide-user',
      to: locale.value === 'en' ? '/about' : `/${locale.value}/about`
    }
  ])

  return links.value
}
