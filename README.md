# Starchild
Starchild is a responsive web app, which shows astronomic events in multiple ways, including information about moon phases, weather, and several ways of viewing and filtering the events.

A REST API is exposed in the back-end using expressJS, which manages the front-end requests
to retrieve the data from a non relational Mongo Atlas database, which uses mongoose to map the data.
Multiple APIs are planned to be used for data gathering.

The front-end is mainly done in Vuetify, with axios to send requests to the back-end.

In its whole, it is a mélange of JavaScript ES6 and HTML5, among other npm utilities such as: bcrypt, cors, helmet, dotenv, jsonwebtoken and morgan.

The app is currently a work in progress and it is planned to be deployed on Netlify and Heroku.

The developing team consists on three students from [Reboot Academy](https://www.reboot.academy/): 
- [Jonatan Santana González](https://github.com/jonatansg)
- [Norberto Sáez Perdomo](https://github.com/NoxLP)
- [Romina Elorrieta](https://github.com/RoElorrieta)

Please, remember that, as of today (2021/02/26), the app is still a work in progress. Specifications below are subject to change.

You can test it [here](https://blissful-chandrasekhar-0406e7.netlify.app/).

## Installation
Simple enough, fork the project and run npm install in your console.

## Database model (@ 26/02/2021)
As previosly stated, the database used is non-relational MongoDB database.
As the project is a work in progress, take into account that we may be using Firebase for push notifications.

The model consists on 3 collections:

### Users
|Field|Type|Ref
|-|-|-|
|email|String||
|password|String||
|username|String||
|favourites|[ObjectId]|Events
|comments|[ObjectId]|Comments
|name|String||
|surname|String||
|birthDate|Date||
|location|String||
|work|String||

### Events
|Field|Type|Ref
|-|-|-|
|date|Date||
|title|String||
|description|String||
|category|Enum||
|moon|Enum||
|weather|Enum||
|magnitude|Number||
|comments|[ObjectId]|Comments
|¿img?(WIP)

### Comments
|Field|Type|Ref|
|-|-|-|
|user|ObjectId|Users
|event|ObjectId|Events
|text|String||
|responses|[ObjectId]|Comments
|parent|ObjectId|Comments
|likes|[ObjectId]|Users

There are a DTO object too that are used along the app witch includes the following fields:
- ### Calendar event DTO 
    date, title, category

## API endpoints (@ 26/02/2021)
Every endpoint is preceeded by `/api`, and requires user authentication. Where possible, pagination ("Pag.") is used with limit and page. You know how it goes: limit are the items per page, page is the page to get from 0 to whatever.

- ### Auth

|Verb|Route|Description|
|-|-|-|
|POST|/auth/users/signup|sign up
|POST|/auth/users/login|login

- ### Users

|Verb|Route|Description|
|-|-|-|
|GET|/users/me|get user profile
|PUT|/users/me|update user profile
|DELETE|/users/me|delete user

- ### Events

|Verb|Route|Description|Pag.
|-|-|-|-|
|GET|/events/lasts|get last events with pagination|limit, page
|GET|/events/calendardtos/:year/:month|get all events by provided date||
|GET|/events/:eventId|get event data||
|GET|/events/:category|get all events of a category|limit, page|
|PUT|/events/favourite/:eventId|add favourite to user and event| |

- ### Comments

|Verb|Route|Description|Pag.
|-|-|-|-|
|GET|/comments|retrieve comments from event file|limit, page|
|POST|/comments|add comment to event file||
|PUT|/comments/:commentId|edit comment from event file||
|DELETE|/comments/:commentId|delete comment from event file||

# 

We are made of stardust.- Carl Sagan.
