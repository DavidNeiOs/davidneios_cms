export default {
  name: 'aboutPage',
  title: 'About Page',
  type: 'document',
  fields: [
    {
      name: 'introduction',
      title: 'Introduction',
      type: 'introduction',
      options: { collapsible: true },
    },
    {
      name: 'experienceTitle',
      title: 'Title of section that will show experiences:',
      type: 'localeString',
      options: { collapsible: true },
    },
    {
      name: 'skillsTitle',
      title: 'Title of skills section',
      type: 'localeString',
      options: { collapsible: true },
    },
  ],
};
