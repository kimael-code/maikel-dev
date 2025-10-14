import { defineCollection, defineContentConfig, z } from '@nuxt/content'

const createBaseSchema = () => z.object({
  title: z.string(),
  description: z.string()
})

const createButtonSchema = () => z.object({
  label: z.string(),
  icon: z.string().optional(),
  to: z.string().optional(),
  color: z.enum(['primary', 'neutral', 'success', 'warning', 'error', 'info']).optional(),
  size: z.enum(['xs', 'sm', 'md', 'lg', 'xl']).optional(),
  variant: z.enum(['solid', 'outline', 'subtle', 'soft', 'ghost', 'link']).optional(),
  target: z.enum(['_blank', '_self']).optional()
})

const createImageSchema = () => z.object({
  src: z.string().editor({ input: 'media' }),
  alt: z.string()
})

const createAuthorSchema = () => z.object({
  name: z.string(),
  description: z.string().optional(),
  username: z.string().optional(),
  twitter: z.string().optional(),
  to: z.string().optional(),
  avatar: createImageSchema().optional()
})

const createTestimonialSchema = () => z.object({
  quote: z.string(),
  author: createAuthorSchema()
})

export default defineContentConfig({
  collections: {
    index: defineCollection({
      type: 'page',
      source: [
        { include: 'en/index.yml' },
        { include: 'es/index.yml' },
      ],
      schema: z.object({
        hero: z.object({
          links: z.array(createButtonSchema()),
          images: z.array(createImageSchema())
        }),
        about: createBaseSchema(),
        experience: createBaseSchema().extend({
          items: z.array(z.object({
            date: z.date(),
            position: z.string(),
            company: z.object({
              name: z.string(),
              url: z.string(),
              color: z.string()
            })
          }))
        }),
        faq: createBaseSchema().extend({
          categories: z.array(
            z.object({
              title: z.string().nonempty(),
              questions: z.array(
                z.object({
                  label: z.string().nonempty(),
                  content: z.string().nonempty()
                })
              )
            }))
        }),
        language: z.enum(['en', 'es']),
      })
    }),
    projects: defineCollection({
      type: 'data',
      source: [
        { include: 'en/projects/*.yml' },
        { include: 'es/projects/*.yml' },
      ],
      schema: z.object({
        title: z.string().nonempty(),
        description: z.string().nonempty(),
        image: z.string().nonempty().editor({ input: 'media' }),
        url: z.string().nonempty(),
        tags: z.array(z.string()),
        date: z.date(),
        language: z.enum(['en', 'es']),
      })
    }),
    pages: defineCollection({
      type: 'page',
      source: [
        { include: 'en/projects.yml' },
        { include: 'es/projects.yml' },
      ],
      schema: z.object({
        links: z.array(createButtonSchema()),
        language: z.enum(['en', 'es']),
      })
    }),
    about: defineCollection({
      type: 'page',
      source: [
        { include: 'en/about.yml' },
        { include: 'es/about.yml' },
      ],
      schema: z.object({
        content: z.object({}),
        images: z.array(createImageSchema()),
        language: z.enum(['en', 'es']),
      })
    })
  }
})
