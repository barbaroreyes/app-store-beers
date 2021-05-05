# Project Overview

## Project Links

- [add your github repo link](https://github.com/barbaroreyes/app-store-beers)
- [add your deployment link](https://barbaro-store-beers.netlify.app/)

## Project Description
This Small Store will take you to know part of the beer culture.


## API


```
{data: {https://api.punkapi.com/v2/beers?page=2&per_page=80} }
{
"id": 1,
"name": "Buzz",
"tagline": "A Real Bitter Experience.",
"first_brewed": "09/2007",
"description": "A light, crisp and bitter IPA brewed with English and American hops. A small batch brewed only once.",
"image_url": "https://images.punkapi.com/v2/keg.png",
"abv": 4.5,
"ibu": 60,
"target_fg": 1010,
"target_og": 1044,
"ebc": 20,
"srm": 10,
"ph": 4.4,
"attenuation_level": 75,
"volume": {
"value": 20,
"unit": "litres"
}

This one for homePage

{data: {https://jsonplaceholder.typicode.com/users} }

{
"id": 1,
"name": "Leanne Graham",
"username": "Bret",
"email": "Sincere@april.biz",
"address": {
"street": "Kulas Light",
"suite": "Apt. 556",
"city": "Gwenborough",
"zipcode": "92998-3874",
"geo": {
"lat": "-37.3159",
"lng": "81.1496"
}
},
"phone": "1-770-736-8031 x56442",
"website": "hildegard.org",
"company": {
"name": "Romaguera-Crona",
"catchPhrase": "Multi-layered client-server neural-net",
"bs": "harness real-time e-markets"
}
},


```


## Wireframes

Upload images of wireframe to cloudinary and add the link here with a description of the specific wireframe. Also, define the the React components and the architectural design of your app.

- [add link to your wireframes](https://imgur.com/yGgBLND)
- [add link to your react architecture](https://imgur.com/zQBbUBz)


### MVP/PostMVP - 5min

The functionality will then be divided into two separate lists: MPV and PostMVP.  Carefully decided what is placed into your MVP as the client will expect this functionality to be implemented upon project completion.  

#### MVP EXAMPLE
- Display a HomePage whith infomation about the beers and button 'go inside  to show a beers page'
- display a list of beers and the complete information of each one of them that will allow the customer to buy the one that best suits their needs according to its manufacture 
- Build a form to contact page
- Navbar with options that link to their corresponding pages
- Will be designed for use on all views


#### PostMVP EXAMPLE

- Add  firebase for storage
- add function to login page and store all user post


## Components
##### Writing out your components and its descriptions isn't a required part of the proposal but can be helpful.

Based on the initial logic defined in the previous sections try and breakdown the logic further into stateless/stateful components. 

| Component | Description | 
| --- | :---: |  
| App | render all app | 
| Header | This will render the header include the nav ,main ,and footer|
| main | this will  render all childrens views
| Footer | This will render the a submit form | 


| Component | Priority | Estimated Time | Time Invetsted | Actual Time |
| --- | :---: |  :---: | :---: | :---: |
| Creating plan && wireframes |H|4|6|time
| Adding Form | H | 3| time | time|
| Working with API | H | 3| time | time |
| Home-Page-logic| H|3|time|time| 
| Main_page-logic| H|3|time|time|
|routing-Component-|H|4|time|time|
|styling  | H|10|time|time|time|time|
|Nav-completetion|H|4|time|time
| Total | H | 40| 5 | 5 |

## Additional Libraries
  
React-Boostrap

## Code Snippet


```
const addName= e =>{
    e.preventDefault();
    if(!name.trim()){
        setError('Error')
        return
      }
    const newId ={id: uniqid(),titleName:name}
    setNameList(
    [...nameList,newId])
    setName('')
    setError(null)
    }
```
