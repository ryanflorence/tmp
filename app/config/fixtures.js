var ajax = require('ic-ajax');
var LazyListComponent = require('ic-lazy-list/lib/components/ic-lazy-list');

var learningObjects = {};

learningObjects.page1 = [
  {
    name: 'Basic Physics',
    id: 1,
    author: 'John Farnsworth',
    date: '12/3/2013',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    stars: 4,
    ratings: 4,
    image_url: 'http://placekitten/200/200',
    category_id: 1,
    copyright_id: 1,
    content_type_id: 1,
    grade_levels: ['1', '2', '3', '4', '5', '6', '7', '8']
  },
  {
    name: 'Physics 310',
    id: 2,
    author: 'John Farnsworth',
    date: '12/3/2013',
    description: 'Labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    stars: 3,
    ratings: 5,
    image_url: 'http://placekitten/200/200',
    category_id: 2,
    copyright_id: 2,
    content_type_id: 1,
    grade_levels: ['9', '10', '11', '12', 'HE']
  }
];

learningObjects.page2 = [
  {
    name: 'Introduction to Economics',
    id: 3,
    author: 'Ryan Florence',
    date: '11/10/2013',
    description: 'Dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    stars: 2,
    ratings: 20,
    image_url: 'http://placekitten/200/200',
    category_id: 1,
    copyright_id: 1,
    content_type_id: 1,
    grade_levels: ['1', '2', '3', '4', '5', '6', '7', '8']
  },
  {
    name: 'Econometrics',
    id: 4,
    author: 'Ronald Nate',
    date: '10/30/2013',
    description: 'Dolore magna aliqua. Ut enim ad minim veniam, quis nostrud nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    stars: 5,
    ratings: 100,
    image_url: 'http://placekitten/200/200',
    category_id: 2,
    copyright_id: 2,
    content_type_id: 1,
    grade_levels: ['9', '10', '11', '12', 'HE']
  }
];


var categories = [
  { name: 'University of Florence', id: '1' },
  { name: 'Bracken State', id: '2' },
  { name: 'My Stuff', id: '3' }
];

var filters = [
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
];

LazyListComponent.reopen({
  extractMeta: function(result) {
    return result.response.meta;
  }
});

ajax.defineFixture('/categories', {
  response: categories,
  jqXHR: {},
  textStatus: 'success'
});

ajax.defineFixture('/filters', {
  response: filters,
  jqXHR: {},
  textStatus: 'success'
});

ajax.defineFixture('/learning_objects/all', {
  response: {
    learning_objects: learningObjects.page1,
    meta: { next: '/learning_objects/all?page=2' }
  },
  jqXHR: {},
  textStatus: 'success'
});

ajax.defineFixture('/learning_objects/all?page=2', {
  response: {
    learning_objects: learningObjects.page2
  },
  jqXHR: {},
  textStatus: 'success'
});

