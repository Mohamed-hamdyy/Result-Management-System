  

# Project Title

  

The project simply is a web application intended to work as learning platform which serves 4 categories of users:

- Individual Trainee.

- Corporate Trainee.

- Instructor.

- Admin.

  

The project has been implemented using mern approach.

  
  
  
  

## Motivation

  

The Project was given to us by Guc's Advanced Computer Lap Department aiming to teach us

  

. Backend And Frontend new Technologies

. Software Testing

. Scrum And Agile methodologies

## Build Status

  

. The Project is still in development phase



## Code Style
- Standard js code has been used by enforcing Standard --fix
-  **Automatically format code.**  Just run  `standard --fix`  and say goodbye to messy or inconsistent code.
-   **Catch style issues & programmer errors early.**  Save precious code review time by eliminating back-and-forth between reviewer & contributor.

## Screenshots

## Tech/Framework

  

.Node.js

.Express

MongoDB

Github

Postman

VSCode

React

Material-UI

Mongoose

NodeMailer

## Features

  
  

The Website is used by different users(Admin,Instructor,Individual Trainee, Corporate Trainee)

  

As an Admin I should be able to:

  

- Add instructors, corporate trainees and Admins to the system.

- View Reported problems and resolve them.

- View Refund disputes.

- View access requests from Corporate Trainees and grant access.

- set a promotion (% sale) for specific courses, several courses or all courses.

  

As an Instructor I should be able to:

  

- Create a New Course

- View all Titles, Prices of available Courses.

- filter the courses based on a subject and/or rating.

- filter the courses based on price.

- search for a course based on course title or subject or instructor.

- choose a course from the results and view (but not open) its details including course subtitles, excercises , total hours of each subtitle, total hours of the course and price (including % discount if applicable) according to the country selected.

- view all the titles of the courses given by him/her.

- filter the courses given by him/her based on a subject or price.

- search for a course given by him/her based on course title or subject or instructor.

- create a new course and fill in all its details inclding title, subtitles, price and short summary about the entire course.

- view and accept the contract which includes all the rights to the posted videos and materials as well as the % taken by the company on each video per registered trainee.

- view the ratings and reviews on all his/her courses.

- upload a video link from YouTube under each subtitle and enter a short description of the video.

- upload a video link from YouTube as a preview to the course.

- create a multiple choice exam with 4 choices per question.

- set the answers (not visible for the trainee) for multiple choice exercises.

- view his/her rating and reviews as an instructor.

- edit his/her mini biography or email.

- define a promotion for the course (% discount) and for how long.

- change his/her password.

- receive an email to change a forgotten password.

- log in using a username and password.

- log out.

- view and accept the website/ company refund/ payment policy while signing up.

- view the most viewed/ most popular courses.

- view the amount of money owed per month.

- report a problem with a course. The problem can be "technical", "financial" or "other".

- see all previously repoted problems and their statuses.

- follow up on an unresolved problem.

  
  

As an Corporate Trainee I should be able to:

  

- view all the titles of the courses available including the total hours of the course and course rating.

- filter the courses based on a subject and/or rating.

- search for a course based on course title or subject or instructor.

- open all the items inside a course he/she is registered for including videos and excercises.

- change his/her password.

- receive an email to change a forgotten password.

- rate an instructor.

- rate a course.

- solve a multiple choice exercise by choosing the correct answer.

- submit the answers to the exercise after completing it.

- view his/her grade from the exercise.

- view the questions with the correct solution to view the incorrect answers.

- watch a video from a course he/she is registered for.

- view a preview video of the course and the course outline before registering for it.

- view the most viewed/ most popular courses.

- see his/her progress in the course as a percentage of how much of the course has been completed so far.

- receive a certificate as a PDF after completing the course via email.

- download the certificate as a PDF from the website.

- write notes while watching the video.

- download the notes as a PDF.

- see a list of all the courses he/she is enrolled in on their profile.

- report a problem with a course. The problem can be "technical", "financial" or "other".

- see all previously repoted problems and their statuses.

- follow up on an unresolved problem.

- request access to a specific course they do not have access to.

  

As an Individual Trainee I should be able to:

  

- view all the titles of the courses available including the total hours of the course and course rating.

- view the price of each course.

- filter the courses based on price.

- choose a course from the results and view (but not open) its details including course subtitles, excercises , total hours of each subtitle, total hours of the course and price (including % discount if applicable) according to the country selected.

- log in using a username and password.

- log out.

- view and accept the website/ company refund/ payment policy while signing up.

- filter the courses based on a subject and/or rating.

- search for a course based on course title or subject or instructor.

- open all the items inside a course he/she is registered for including videos and excercises.

- change his/her password.

- receive an email to change a forgotten password.

- rate an instructor.

- rate a course.

- solve a multiple choice exercise by choosing the correct answer.

- submit the answers to the exercise after completing it.

- view his/her grade from the exercise.

- view the questions with the correct solution to view the incorrect answers.

- watch a video from a course he/she is registered for.

- view a preview video of the course and the course outline before registering for it.

- view the most viewed/ most popular courses.

- see his/her progress in the course as a percentage of how much of the course has been completed so far.

- receive a certificate as a PDF after completing the course via email.

- download the certificate as a PDF from the website.

- write notes while watching the video.

- download the notes as a PDF.

- see a list of all the courses he/she is enrolled in on their profile.

- report a problem with a course. The problem can be "technical", "financial" or "other".

- see all previously repoted problems and their statuses.

- follow up on an unresolved problem.

- enter their credit card details to pay for a course they want to register for.

- request a refund only if less than 50% of the course has been attended.

- view the amount available in their wallet from refunded courses.

  
  

## Code Examples


## Installation

  

- Clone the project

- Npm install

- install react

- Node install

  
  
  

## API Reference

  

#### Create a Course and checking that id is unique

  

```http

POST /createCourse

```

  

| Parameter | Type | Description |

| :-------- | :------- | :------------------------- |

| `courseID` | `string` | New Course ID |

| `title` | `string` | New Course Title |

| `totalHours` | `Int` | Course Total Hours|

| `price` | `Int` | Course Price |

| `subject` | `string` | Course Subject |

| `instructorUsername` | `string` | The Instructor Username |

  

#### Creating an istructor and checking username is unique

  

```http

POST /createInstructor

```

  

| Parameter | Type | Description |

| :-------- | :------- | :-------------------------------- |

| `password` | `string` | Password |

| `userName` | `string` | UserName|

  

#### creating CorporateUser and checking that username is not in individuals or corporate users

  

```http

POST /createCorporateUser

```

  

| Parameter | Type | Description |

| :-------- | :------- | :-------------------------------- |

| `password` | `string` | Password |

| `userName` | `string` | UserName|

  
  

#### creating IndividualUser and checking that username is not in individuals or corporate users

  

```http

POST /createIndividualUser

```

  

| Parameter | Type | Description |

| :-------- | :------- | :-------------------------------- |

| `password` | `string` |New Password |

| `userName` | `string` |New UserName|

| `firstName` | `string` | User's first name|

| `lastName` | `string` | User's Last Name|

| `gender` | `string` | User's Gender|

| `email` | `string` | User's Email|

  
  

#### Creating an Admin and checking username is unique

  

```http

POST /createAdmin

```

  

| Parameter | Type | Description |

| :-------- | :------- | :-------------------------------- |

| `password` | `string` | Password |

| `userName` | `string` | UserName|

  
  

#### Creating a new Subtitle and checking

  

```http

POST /createSubtitle

```

  

| Parameter | Type | Description |

| :-------- | :------- | :-------------------------------- |

| `subtitleID` | `Int` | Sub ID |

| `title` | `string` | Sub Title|

| `Hours` | `Int` | Sub Hours |

  
  
  

#### Creates a new exercise for a course.

  

```http

POST /createExercise

```

  

| Parameter | Type | Description |

| :-------- | :------- | :-------------------------------- |

| `question` | `string` | Ex. Question |

| `choice1` | `string` | Choice|

| `choice2` | `string` | Choice|

| `choice3` | `string` | Choice|

| `choice4` | `string` | Choice|

| `answer` | `string` | Answer|

  
  

#### Creates a new discount for a course.

  
  

```http

POST /createDiscount

```

  

| Parameter | Type | Description |

| :-------- | :------- | :-------------------------------- |

| `courseID` | `Int` | Password |

| `country` | `string` | country|

| `percentage` | `Int` | Discount Percentage|

| `date` | `string` | Valid from|

  - creationRouter.post("/addcourserating",async(req,res)
  - creationRouter.post("/addinstructorrating",async(req,res)
  - creationRouter.post("/getcoursesembeddedinstructor",async(req,res)
  - creationRouter.post("/getcoursesembeddedall",async(req,res)
  - creationRouter.post("/getcoursesembeddedIndividual",async(req,res)
  - creationRouter.post("/getcoursesembeddedCorporate",async(req,res)
  - creationRouter.post('/searchCourseBy', async (req,res)
  - creationRouter.post("/TraineeMyCourse",async function(req,res)
  - creationRoute.get("/getAllcourses",function(req,res)
  - creationRoute.post("/createTicket", async function(req,res)
  - creationRoute.post('/getDetails',function(req,res)
  - creationRoute.post('/getExercise',function(req,res)
  - creationRoute.post('/getExam',function(req,res)
  - creationRoute.post('/createProgress',async function(req,res)
  - creationRoute.post('/addProgress',async function(req,res)
  - creationRoute.post('/getProgress',async function(req,res)
  - creationRoute.post('/addRequest',async function(req,res)
  - creationRouter.post('/getSubtitles',async function(req,res)
  - creationRouter.post('/getSubtitleVideo',async function(req,res)
  - creationRouter.post('/getSubtitleVideo',async function(req,res)
  - creationRouter.post('/registeredCourse',async function(req,res)
  - creationRouter.post("/TraineeMail",async(req,res)
  - creationRouter.post("/viewCourseRatingsReviews",async(req,res)
  - creationRouter.post("/viewPersonalRatingsReviews",async(req,res)
  - creationRouter.post("/editemailbio",async(req,res)=>{
  - creationRouter.post("/editpreview",async(req,res)=>{
  - creationRouter.post("/editsubtitle",async(req,res)=>{
  - creationRouter.post("/createexam",async(req,res)
  - creationRouter.post("/createexamquestion",async(req,res)
  - creationRouter.post("/userforgetpassword",async(req,res)
  - creationRouter.post("/userresetpass",async(req,res)
  - creationRouter.post("/instructorforgetpassword",async(req,res)
  - creationRouter.post("/instructorresetpass",async(req,res)
  - creationRouter.post("/userchangepass",async(req,res)
  - creationRouter.post("/instructorchangepass",async(req,res)
  - creationRouter.post("/selectCountry",async(req,res)
  - creationRouter.get("/viewCourses",async(req,res)
  - creationRouter.get("/viewCoursesPrices",async(req,res)
  - creationRouter.post("/adminlogin", async (req, res)
  - creationRouter.post("/adminverify", async (req, res)
  - creationRouter.post("/instructorlogin", async (req, res)
  - creationRouter.post("/instructorverify", async (req, res)
  - creationRouter.post("/individualuserlogin", async (req, res)
  - creationRouter.post("/individualuserverify", async (req, res)
  - creationRouter.post("/corporateuserlogin", async (req, res)
  - creationRouter.post("/corporateuserverify", async (req, res)
  - creationRouter.post("/payforcourse", async (req, res)
  - creationRouter.post("/getwallet", async (req, res)
  - creationRouter.post("/createrequest", async (req, res)
  - creationRouter.post("/getallrequests", async (req, res)
  - creationRouter.post("/acceptrequest", async (req, res)
  - creationRouter.post("/rejectrequest", async (req, res)
  - creationRouter.post("/bestratings", async (req, res)
  - creationRouter.post("/getalltickets", async (req, res)
  - creationRouter.post("/markaspending", async (req, res)
  - creationRouter.post("/markasresolved", async (req, res)
  - creationRouter.post("/deleteresolved", async (req, res)
  - creationRouter.post("/changeglobal", async (req, res)
  - creationRouter.post("/instructorCourses", async (req, res)
  - creationRouter.post("/filtercourses", async (req, res)
  - creationRouter.post("/filtersubjectrating", async (req, res)
  - creationRouter.post("/filterprice", async (req, res)
  - creationRouter.post("/filtercoursesubjectinstructor", async (req, res)
  - creationRouter.post("/filtercoursebyid", async (req, res)
  - creationRouter.post("/choosecourse", async (req, res)

  
  
  

## Tests


## How to Use

  

#### To run backend

  

node app

  

#### To run frontend

npm start

## Contributing

  

Contributions are always welcome!
I am aware that My frontend is lacking a lot of elements which would help in having a smooth and friendly experience.
such as: Animations and styling for pages.

  

## Credits


## License
- Express docs
- Reactjs docs
-  Nodejs docs
- Mongoose docs
  

[MIT](https://choosealicense.com/licenses/mit/)