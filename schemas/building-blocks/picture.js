export default {
  name: "picture",
  title: "Picture",
  type: "image",
  options: {
    hotspot: true,
  },
  fields: [
    {
      name: "caption",
      type: "localeString",
      title: "Caption",
      options: {
        isHighlighted: true,
      },
    },
  ],
};
