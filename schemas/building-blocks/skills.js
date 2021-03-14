export default {
  name: 'skills',
  title: 'Skills',
  description: 'Tools, technologies that you know',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string',
    },
    {
      name: 'image',
      title: 'Image',
      type: 'image',
    },
    {
      title: 'Skill Set',
      name: 'skillSet',
      type: 'array',
      of: [{type: 'string'}],
      options: {
        list: [
          {title: 'Front-end', value: 'frontend'},
          {title: 'Mobile', value: 'mobile'},
          {title: 'Back-end', value: 'backend'},
          {title: 'Languages', value: 'languages'},
          {title: 'Source control', value: 'sourceControl'}
        ]
      },
      validation: Rule => [Rule.min(1), Rule.max(1)]
    }
  ],
};
