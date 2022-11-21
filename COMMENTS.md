## Structure 

In order to build this app, I creacted the next core components:
- card -> this renders the content of the digital content(movie/serie) 
- cardList -> this renders a list of card components
- filter -> filters the array of digital content by text and, or by the release year
- pagination -> responsible of displaying only 10 cards of the selected content at a time. 

- Header-> responsible for navigation and contains both header and footer
- Home -> home page component
- DigitalContent -> reuseable component responsible for rendering the Movies page or Series page based on the props it receivs

In order to fetch data I created the DataService.
For type safety I created the types.ts file. From there I export the types that the app needs.

## Testing

- the tests for Home and Header are basic unit tests to make sure the component is rendered correctly
- the tests for the DigitalContent component are mostly integration tests and they contain testing scenarios from the user's perspective (what should it do/render when the user does something)
