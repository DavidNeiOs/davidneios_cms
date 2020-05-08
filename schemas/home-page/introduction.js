export default {
  name: "introduction",
  title: "Introduction",
  type: "object",
  fields: [
    {
      name: "picture",
      title: "Picture",
      type: "picture",
    },
    {
      name: "title",
      title: "Title",
      type: "localeString",
    },
    {
      name: "introText",
      title: "Introduction Text",
      type: "localePortableText",
    },
  ],
};
