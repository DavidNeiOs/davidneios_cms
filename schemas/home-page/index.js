export default {
  name: 'homePage',
  title: 'Home Page',
  type: 'document',
  fields: [
    {
      name: 'introduction',
      title: 'Introduction',
      type: 'introduction',
      options: { collapsible: true },
    },
    {
      name: 'typist',
      title: 'Typist text',
      type: 'typist',
      options: { collapsible: true },
    },
    {
      name: 'experienceIntro',
      title: 'Experience Intro Text',
      type: 'localePortableText',
      options: { collapsible: true },
    },
    {
      name: 'projectSection',
      title: 'Projects',
      type: 'projectSection',
      options: { collapsible: true}
    }
  ],
};
