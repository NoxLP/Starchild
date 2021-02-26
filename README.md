# Starchild
Starchild is a responsive web app, which shows astronomic events in multiple ways, including information about moon phase, weather, and various ways of viewing and  filtering the events.

A REST API is exposed in the back using express, which manage the front end requests
to retrieve the data from a non relational Mongo Atlas database, using mongoose to map the data.
Multiple APIs are planned to be used to gather data.

The front is mainly vuetify, with axios to send requests to the back.

All is mixed up with javascript ES6 and html5, among other utilities that you can find on npm like bcrypt, cors, helmet, dotenv, jsonwebtoken and morgan.

The app is currently work in progress and is planned to be deployed on Heroku.

The app has been made by three students from [Reboot Academy](https://www.reboot.academy/): 
- [Jonatan Santana González](https://github.com/jonatansg)
- [Norberto Sáez Perdomo](https://github.com/NoxLP)
- [Romina Elorrieta]()

Remember that as today (2021/02/26) the app is work in progress, so all the specifications below are subject to change.

## Installation
Simple enough, fork the project and run npm install in your console.

## Database model (@ 26/02/2021)
As said before, the database used is non relational MongoDB database.
As the project is a work in progress, take account that maybe we'll use Firebase for push notifications.

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
All the endpoints are preceeded by `/api` and require to be authenticated as user. Where possible, pagination ("Pag.") is used with limit and page. You know how it goes: limit are the items per page, page is the page to get from 0 to whatever.

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

That's all, enjoy.
