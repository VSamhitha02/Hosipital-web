import { CollectionConfig } from "payload"

export const Doctors: CollectionConfig = {
  slug: "doctors",
  admin: {
    useAsTitle: "name",
  },
  fields: [
    {
      name: "name",
      type: "text",
      required: true,
    },
    {
      name: "speciality",
      type: "text",
    },
    {
      name: "languages",
      type: "text",
    },
    {
      name: "qualifications",
      type: "text",
    },

    {
      name: "photo",
      type: "upload",
      relationTo: "media",
      required: true,
    },
    {
        name: 'featured',
        type: 'checkbox',
        defaultValue: false,
    },
  ],
}
