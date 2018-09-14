App
The app's initial state is already defined. App has two children: the <Filters /> and <PetBrowser /> components.
App should pass a callback prop, onChangeType, to <Filters />. This callback needs to update <App />'s state.filters.type

<Filters /> needs a callback prop, onFindPetsClick. When the <Filters /> component calls onFindPetsClick, <App /> should fetch a list of pets using fetch().

The URL of the API is /api/pets with an optional query parameter.
Use app's state.filters to control/update this parameter
If the type is 'all', send a request to /api/pets
If the type is 'cat', send a request to /api/pets?type=cat. Do the same thing for dog and micropig.
Finally set <App/>'s state.pets with the results of your fetch request so you can pass the pet data down as props to <PetBrowser />
Even though we're using fetch here, its responses have been mocked in order to make the tests work properly. That means it's important to use the exact URLs as described above, or your tests will fail!

Filters
Should receive an onChangeType callback prop. This callback prop gets called whenever the value of the <select> element changes with the value of the <select>
Should receive an onFindPetsClick callback prop. This callback prop gets called when the users clicks the 'Find pets' button.

PetBrowser
Should receive a pets prop. This is an array of pets that the component uses to render <Pet /> components. App should determine which pets to pass down as props. App should be responsible for filtering this list based on the types of pets the user wants to see.
Should receive an onAdoptPet prop. This callback prop gets passed to its <Pet /> children components.

Pet
Should receive a pet prop. Use the attributes in this data to render the pet card correctly. It should show the pet's name, type, age and weight. Based on the pet's gender, the component also needs to contain either a male (♂) or female (♀) symbol.
Should receive an isAdopted prop. Using this prop, render the correct button in the pet's card; if the pet is adopted, show the disabled button. Otherwise, show the primary button to adopt the pet.

Should receive an onAdoptPet callback prop. This callback prop gets called with the pet's id when the user clicks the adopt pet button — not when they click the disabled button!

App.js/////////////
switch (query) {
  case 'cat':
  $.get("/api/pets?type=cat", function(data) {
  })
    break;
  case 'dog':
    food = 'sushi';
    break;
  case 'micropig':
    food = 'lasagna';
    break;
  default:
  $.get("/api/pets", function(data) {
  })
}
