export default {
  title: "Link",
  name: "link",
  type: "object",
  fields: [
    {
      name: "link",
      title: "Link to...",
      type: "string",
      validation: (Rule) =>
        Rule.custom((link) => {
          if (
            link.startsWith("/") ||
            link.startsWith("http") ||
            link.startsWith("mailto")
          ) {
            return true;
          } else {
            return "The link should start with / or http or mailto";
          }
        }),
    },
    {
      name: "text",
      title: "Text to display",
      type: "localeString",
    },
  ],
};
