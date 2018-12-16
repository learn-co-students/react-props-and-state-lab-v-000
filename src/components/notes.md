App -- two children: 
  callback prop: onChangeType pass to filters
    it updates App's state.filters.type


  -needs a callback prop, onFindPetsClick
  -if Filter calls onFindPetsClick, it should fetch a list of pets (suing fetch()
  -The URL of the API is /api/pets with an optional query parameter
  -- apps. state.filters controls and updates this paramet er
  -- api/pets
    api/pets?type=cat
     api/pets?type=dog
      api/pets?type=micropig
  -- fetch results -- set App's state.pets with these, so you can pass the pet data down as props to Pet Browser

Filters
  -recieves an onChangeType callback prop, called when the value of t <selec> element, with its value 

  -recieves a onFindPetsClick cb prop, called when a user clicks Find pets button. 

PetBrowser
