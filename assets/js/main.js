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
    { Name: 'David Nolen', Github: 'dennisreveni' },
    { Name: 'Martin Odersky', Github: 'movax10' }
  ];

//    {
//        repo: 'js-lessons/js-basics-2',
//            build: {
//        asdhomer: 'success',
//            vorobey9: 'success',
//            dimavetrov: 'failure',
//            movax10: 'success',
//            lush81: 'success',
//            dennisreveni: 'success',
//            Alytar: 'failure',
//            dneprm: 'success',
//            Sazonova: 'success',
//            kulinichdenis: 'success',
//            KudryashovAV: 'success',
//            'dmitriy-kiriyenko': 'success',
//            MsSterh: 'failure'
//    }




  function objectWithResult(students, githubResults){
      for(var i = 0; i < students.length; i++){
          for(var j = 0; j < githubResults.length; j++){
              debugger
              for(key in githubResults[j].build){
                  if(key === students[i].Github){
                      students[i][githubResults[j].repo] = githubResults[j].build[key] === 'success' ? '\u2713' : '\u2717';
                      break;
                  } else{
                      students[i][githubResults[j].repo] = '-';
                  }
              }
          }
      }

  }

  objectWithResult(students, githubResults); //add result to object students

  function objectWithWorks(students, homeWorks){
       for(var i = 0; i < students.length; i++){
           for(key in students[i]){
               for(keyWorks in homeWorks){
                   if(key === homeWorks[keyWorks]){
                       students[i][keyWorks] = students[i][key];
                       delete students[i][key];
                   }
               }
           }
       }
  }

  objectWithWorks(students, homeWorks); // add lessons's name to students

  function Table(students){
      this.table = "";
      this.students = students;
  }
  Table.prototype.draw = function() {
//      debugger
      this.table = '<table><tr>';
      for (var i = 0; i < this.students.length; i++) {
          if (!i) {
              for (key in this.students[i]) {
                  this.table += '<th>'+key+'</th>';
              }
          } else {
              this.table += '<tr>';
              for (key in this.students[i]) {
                  this.table += '<td>'+this.students[i][key]+'</td>';
              }
          }
      }
      return this.table;
  }

  var studentsTable = new Table(students).draw();


  document.getElementById('students-list').innerHTML = studentsTable;
})();
