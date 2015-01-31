(function() {
  var homeWorks = {
    'Program Structure': 'js-lessons/js-basics-1',
    'Functions': 'js-lessons/js-basics-2',
    'Objects and Arrays': 'js-lessons/js-basics-3',
    'Higher order functions': 'js-lessons/js-basics-4'
  };

  var githubResults = [
    {
      repo: 'js-lessons/js-basics-1',
      build: {
        movax10: 'success',
        dimavetrov: 'failure',
        vorobey9: 'failure',
        kulinichdenis: 'success',
        Sazonova: 'failure',
        asdhomer: 'success',
        lush81: 'success',
        dneprm: 'success',
        Alytar: 'success',
        dennisreveni: 'success',
        KudryashovAV: 'success',
        'dmitriy-kiriyenko': 'success'
      }
    },
    {
      repo: 'js-lessons/js-basics-2',
      build: {
       asdhomer: 'success',
       vorobey9: 'success',
       dimavetrov: 'failure',
       movax10: 'success',
       lush81: 'success',
       dennisreveni: 'success',
       Alytar: 'failure',
       dneprm: 'success',
       Sazonova: 'success',
       kulinichdenis: 'success',
       KudryashovAV: 'success',
       'dmitriy-kiriyenko': 'success',
       MsSterh: 'failure'
      }
    },
    {
      repo: 'js-lessons/js-basics-3',
      build: {
        KudryashovAV: 'success',
        'dmitriy-kiriyenko': 'success',
        MsSterh: 'success'
      }
    },
    {
      repo: 'js-lessons/js-basics-4',
      build:{
        KudryashovAV: 'success',
        'dmitriy-kiriyenko': 'success',
        MsSterh: 'failure'
      }
    }
  ];

  var students = [
    { Name: 'Douglas Crockford', Github: 'dimavetrov' },
    { Name: 'Tony Morris', Github: 'vorobey9' },
    { Name: 'Slava Pestov', Github: 'kulinichdenis' },
    { Name: 'Graydon Hoare', Github: 'Sazonova' },
    { Name: 'Nikodemus Siivola', Github: 'asdhomer' },
    { Name: 'Max Bolingbroke', Github: 'lush81' },
    { Name: 'Daniel Spiewak', Github: 'dneprm' },
    { Name: 'Rich Hickey', Github: 'Alytar' },
    { Name: 'David Nolen', Github: 'dennisreveni' }
  ]

  var studentsTable = new Table(objectToRows(students)).draw();

  document.getElementById('students-list').innerHTML = studentsTable;
})();
