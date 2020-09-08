export default {
  name: 'typist',
  title: 'Typist Text',
  type: 'object',
  fields: [
    {
      name: 'enterText',
      title: 'Enter text',
      type: 'localeString',
      description: 'Text that will not get deleted and replace with typist',
    },
    {
      name: 'delay',
      title: 'Delay',
      type: 'number',
      description: 'How long it takes to start the animation',
    },
    {
      name: 'startText',
      title: 'First text to show',
      type: 'string',
    },
    {
      name: 'numOfCharsToDelete',
      title: 'Number of characters to delete',
      type: 'number',
    },
    {
      name: 'backspaceDelay',
      title: 'Deloy of backspacing',
      type: 'number',
    },
    {
      name: 'finalText',
      title: 'Final text',
      type: 'string',
    },
  ],
};
