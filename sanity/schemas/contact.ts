const contact = {
  name: 'contact',
  title: 'Contacts',
  type: 'document',
  fields: [
    {
      name: 'phone1',
      title: 'Phone 1',
      type: 'string',
      validation: (Rule: any) => [
        Rule.required().error('This field is required'),
        Rule.regex(/\+\d+$/).error('This field should contain only numbers'),
      ],
    },
    {
      name: 'phone2',
      title: 'Phone 2',
      type: 'string',
      validation: (Rule: any) => [
        Rule.required().error('This field is required'),
        Rule.regex(/\+\d+$/).error('This field should contain only numbers'),
      ],
    },
    {
      name: 'email',
      title: 'Email',
      type: 'string',
      validation: (Rule: any) => [
        Rule.required().error('This field is required'),
        Rule.email().error('This field should be an email'),
      ],
    },
  ],
};

export default contact;
