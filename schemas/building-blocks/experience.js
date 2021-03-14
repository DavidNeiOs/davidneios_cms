export default {
  name: 'experience',
  title: 'Experiences',
  description: 'Places where you have worked',
  type: 'document',
  fields: [
    {
      name: 'company',
      title: 'Company',
      type: 'string'
    },
    {
      name: 'position',
      title: 'Position',
      type: 'string',
    },
    {
      name: 'place',
      title: 'Place',
      type: 'string',
    },
    {
      name: 'isCurrent',
      title: 'Are you currently working here ?',
      type: 'boolean'
    },
    {
      title: 'Start date',
      name: 'startDate',
      type: 'datetime',
      options: {
        dateFormat: 'MM-YYYY'
      }
    },
    {
      title: 'End date',
      name: 'endDate',
      type: 'datetime',
      options: {
        dateFormat: 'MM-YYYY'
      },
      validation: Rule => Rule.min(Rule.valueOfField('startDate'))
    }
  ],
};
