export default {
  name: "projectSection",
  title: "Project Section",
  type: "object",
  fields: [
    {
      name: "title",
      title: "Title",
      description: 'Small introduction',
      type: "localeString",
    },
    {
      name: "projects",
      title: "Project",
      type: 'array',
      of: [{
        type: 'reference',
        to: [{ type: 'project' }]
      }],
      validation: Rule => Rule.min(1).max(2)
    },
    {
      name: "link",
      title: "Link to the about page:",
      type: "link",
    },
  ],
};
