import { getPayload } from 'payload'
import config from '@/payload.config'

export async function getDoctors(featured = false) {
  const payload = await getPayload({ config })

  const result = await payload.find({
    collection: 'doctors',
    depth: 1,
    where: featured
      ? {
          featured: {
            equals: true,
          },
        }
      : undefined,
  })

  return result.docs
}
