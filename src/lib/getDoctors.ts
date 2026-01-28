import { getPayload } from 'payload'
import config from '@/payload.config'

export async function getDoctors() {
  const payload = await getPayload({ config })

  const data = await payload.find({
    collection: 'doctors',
    depth: 1, 
  })

  return data.docs
}
