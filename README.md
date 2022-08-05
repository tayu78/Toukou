# Toukou
## Meaning of Toukou
It is the Japanese word which means "post" in English
## What is that
It is kind of Twitter clone 


## DB
 mongodb
### document
- [user](https://github.com/tayu78/Toukou/blob/main/src/main/java/com/tayu/toukou/entity/User.java)

  | field      | type |
  | ----------- | ----------- |
  | userId     | String       |
  | name   | String        |
  | email    | String       |
  | password   | String        |
  | profilePicture     | String       |
  | follower   | ArrayList\<String>        |
  | following    | ArrayList\<String>       |
  | description   | String        |
  
  
- [post](https://github.com/tayu78/Toukou/blob/main/src/main/java/com/tayu/toukou/entity/Post.java)
  | field      | type |
  | ----------- | ----------- |
  | postId     | String       |
  | userId   | String        |
  | description   | String       |
  | img   | String        |
  | likes    | ArrayList\<String>      |
  

## hosting
- [client (React): firebase](https://tayu-toukou.web.app)
- [server (java): Heroku](https://floating-ravine-24176.herokuapp.com/)

## the point I felt it was difficult
- not enough time
- using mongodb

## future improvements
- creating page of user who is not signIn
- adding like,comment for posts
- upload image through server(Java) (not input image url)
- Get the first dozen posts in timeline (not all  posts of followers in DB ) because it's gonna be heavy.\
- error handling\
... and more!
