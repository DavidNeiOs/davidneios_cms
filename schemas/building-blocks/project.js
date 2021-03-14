export default {
  name: 'project',
  title: 'Projects',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string',
    },
    {
      name: 'shortDescription',
      title: 'Short Description',
      description: 'if this project is part of the home page',
      type: 'localeString',
    },
    {
      name: "longDescription",
      title: "Full Description",
      type: "localePortableText",
    },
    {
      name: 'isLive',
      title: 'is it live ?',
      type: 'boolean'
    },
    {
      name: "link",
      title: "Link to the about page:",
      type: "link",
    },
    {
      name: 'tech',
      title: 'Tech',
      description: 'Tech used for the project',
      type: 'array',
      of: [{type: 'string'}]
    },
    {
      name: 'image',
      title: 'Image',
      type: 'image',
    },
  ],
};