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
 -- receive a pets prop-- an array of pets that the component uses to render <Pet /> components. App filters which pets are in it. 
 -- should recieve an onAdoptPet prop as cb prop, gets passed to Pet children components 

Pet 
 -- receives a pet Prop (child of PetBrowser). Use attributes in the prop to render data on the pet card. name type age weight. Based on gender, it gets a male or female symbol. 

 -- receives an isAdopted prop, use it to render the correct button on the card. if adopted, show disabled button. if note, show the primary button. 

 -- receives an onAdoptPet cb prop. Gets called with pet's id when user clicks the adopt pet button, but not if they click the disabled button. 

App 
    -Filters
    --PetBrowser
        Pet
 
 256 -- seth, 