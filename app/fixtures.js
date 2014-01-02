var ajax = require('ic-ajax');

ajax.defineFixture('/course_selection', {
  response: {
    categories: [
      { name: 'University of Florence', id: 2 },
      { name: 'Bracken State', id: 3 },
      { name: 'My Stuff', id: 4 }
    ],
    content_filters: [
      {
        name: 'Content Type',
        id: 1,
        filters: [
          { name: 'Courses', id: 1 },
          { name: 'Images', id: 1 },
          { name: 'Documents', id: 1 },
          { name: 'Slides', id: 1 },
          { name: 'Assignments', id: 1 },
          { name: 'Quizzes', id: 1 },
        ]
      },
      {
        name: 'Copyright',
        id: 2,
        filters: [
          { name: 'Creative Commons', id: 1 },
          { name: 'Public Domain', id: 2 },
          { name: 'Copyrighted', id: 3 },
        ]
      },
      {
        name: 'Grade Level',
        id: 3,
        filters: [
          { name: '1', id: 1 },
          { name: '2', id: 2 },
          { name: '3', id: 3 },
          { name: '4', id: 4 },
          { name: '5', id: 5 },
          { name: '6', id: 6 },
          { name: '7', id: 7 },
          { name: '8', id: 8 },
          { name: '9', id: 9 },
          { name: '10', id: 10 },
          { name: '11', id: 11 },
          { name: '12', id: 12 },
          { name: 'HE', id: 13 },
        ]
      },
    ]
   },
  jqXHR: {},
  textStatus: 'success'
});
