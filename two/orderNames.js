var people = [
    {
      "firstName": "Monica",
      "lastName": "Geller",
      "age":25
    },
    {
      "firstName": "Rachel",
      "lastName": "Green",
      "age":25
    },
    {
      "firstName": "Phoebe",
      "lastName": "Buffay",
      "age":27
    },
    {
     "firstName": "Joey",
     "lastName": "Tribbiani",
     "age":25 
    },
    {
     "firstName": "Chandler",
     "lastName": "Bing",
     "age":26
    },
    {
      "firstName":"Ross",
      "lastName": "Geller",
      "age":26
    }
               ];
  
  //sort by first name
  //a comparison function to sort
  function sortFirstName(){
    people.sort(function(a, b){ 
    //lowercase it so case sencitive does not affect the sort  
      var nameA=a.firstName.toLowerCase(), nameB=b.firstName.toLowerCase()
      //sort string ascending
    if (nameA < nameB) 
           return -1 
      if (nameA > nameB)
          return 1
    //default return value (no sorting)  
      return 0 
  })
     alert(JSON.stringify(people));
  }
    
  //sort by last name
  //a comparison function to sort
  function sortLastName(){
    people.sort(function(a, b){ 
    //lowercase it so case sencitive does not affect the sort  
      var nameA=a.lastName.toLowerCase(), nameB=b.lastName.toLowerCase()
      //sort string ascending
    if (nameA < nameB) 
           return -1 
      if (nameA > nameB)
          return 1
    //default return value (no sorting)  
      return 0 
  })
     alert(JSON.stringify(people));
  }
  
  
  // sort object by age field
  function sortByAge(){
  people.sort(function(a, b){ 
      return a.age-b.age
  });
    alert(JSON.stringify(people));
  }