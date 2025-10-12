import type { Collections } from "@nuxt/content";

// composables/useContent.ts
export const useContentCollections = () => {
  const { locale } = useI18n();

  const getCollectionName = (): keyof Collections => {
    return `content_${locale.value}` as keyof Collections;
  };

  return {
    getCollectionName,
  };
};
