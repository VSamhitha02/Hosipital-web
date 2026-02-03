import { CollectionConfig } from "payload"

export const ContactSubmissions: CollectionConfig = {
  slug: "contact-submissions",
  admin: {
    useAsTitle: "name",
  },
  // access: {
  //   create: () => true,
  //   read: () => true,
  // },
  fields: [
    { name: "name", 
      type: "text", 
      required: true },
    { name: "age", 
      type: "number", 
      required: true },
    { name: "phone", 
      type: "text", 
      required: true },
    { name: "email", 
      type: "email", 
      required: true },
    { name: "message", 
      type: "textarea", 
      required: true },
  ],
}
