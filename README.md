# Peer mock technical interview platform

> A web app that matches programmers together to practice technical interview questions live.
> Live demo [_here_](https://technical-interview-platform.herokuapp.com/)

## Table of Contents

- [General Info](#general-info)
- [Technologies](#technologies)
- [Features](#features)
- [Setup](#setup)
- [Usage](#usage)
- [Project Status](#project-status)
- [Room for Improvement](#room-for-improvement)
- [Acknowledgements](#acknowledgements)
- [Screenshots](#screenshots)
---

## General Information

This application is for programmers who are looking to prepare for technical interviews

## Technologies

- React.js
- Mongodb
- Node.js / Express.js
- JWT
- Passport
- Bcrypt
- Socket.io
- Material-UI
- react-codemirror2

## Features

- Login/sign up flow with e-mail address
- Notifications center and upcoming live sessions
- Live mock technical interview
- Survey form immediately after interview (questions to ask)
- Submit a review and rating of your partner after you receive feedback

## Setup

The project is broken down into a client and server folder.
In the root project directory, run:

```
$ npm install
```

In the server folder, run:

```
$ npm run dev
```

In the client folder, run:

```
$ npm start
```

Open http://localhost:3000 to view it in the browser.

## Usage

- Sign on to the platform and create an account
- sign up for upcoming mock interview events (you can create an interview and share the interview room link with the person you'd like to have interview with)
- When the interview starts, a question based on the difficulty level you choose for the interview will be shown to all participants in the room (Maximun two persons per room). There is also a code editor and compiler for three languages (JavaScript, Java & Python) that you can use to write your code
- Feedback portal- after the session (interview) is complete, a short survey (save button) will come up to rate the person you interviewed that will be shared with the other person
- You can submit feedback (survey form) of your partner & recieves feedback from your partner
- You can submit a review of your partner???s feedback and experience (Reviews system- provide a review of your partner???s quality of feedback )

## Project Status

Project is: _in progress_
In the Hatchways CO-OP program, we are a team of three developers working on the project.

## Room for Improvement

- Adding a profile page so user can input details in his/her profile.
- We can use user's profile to add a matching system so the application can match people with similar level of skills and language preferences together
- Adding a video view - you can see your partner in the interview

## Acknowledgements

Many thanks to Hatchway's team specially Bonnie, Jess, John, Sina, and Brandon for their great help during this CO-OP program.
I'd like to thank my teammates Carlos and Joel for helping me during this program.

## Screenshots
- This is the signup / signin page
![image](https://user-images.githubusercontent.com/48249708/118306209-ef255b00-b49d-11eb-9d08-498659e0fd53.png)

- This is the dashboard page where user can create an interview and see the list of upcoming interviews- 
![image](https://user-images.githubusercontent.com/48249708/118303024-cf8c3380-b499-11eb-8e3e-9a80e196c7b7.png)

- This is create interview dialogue so the user can create an interview (interview owner) with a specific difficulty level
![image](https://user-images.githubusercontent.com/48249708/118303278-1ed26400-b49a-11eb-96ad-79f0d69dec62.png)

- Then user redirects to the waiting room dialogue so he can share the interview link with other participant
![image](https://user-images.githubusercontent.com/48249708/118303407-445f6d80-b49a-11eb-8db4-01eec4f00299.png)

- This is the page when the guest user paste the interview link (here guest user is logged in). A dialogue pops up and as long as the room owner has not entered the room, the guest user waiting room dialogue is on the page so the guest user cannot enter the room
![image](https://user-images.githubusercontent.com/48249708/118303519-648f2c80-b49a-11eb-8f8d-041a82647cb6.png)

- This is the interview page with two participants where users have access to a question with a difficulty level assigned by the owner of the room and its solution
![image](https://user-images.githubusercontent.com/48249708/118303754-aae48b80-b49a-11eb-8fbc-007e84f5b43b.png)

- This is the feedback dialogue where both participants can give their feedback about the other participant & each user can see the feedback of other user on his/her account after the interview is finished
![image](https://user-images.githubusercontent.com/48249708/118307839-154bfa80-b4a0-11eb-9ea6-9d16abb2c09e.png)
![image](https://user-images.githubusercontent.com/48249708/118308001-47f5f300-b4a0-11eb-9f31-e220f4327454.png)
![image](https://user-images.githubusercontent.com/48249708/118308090-64922b00-b4a0-11eb-99b7-f2ff4ac977c6.png)
![image](https://user-images.githubusercontent.com/48249708/118308183-825f9000-b4a0-11eb-9cd5-2127c3b088a4.png)
![image](https://user-images.githubusercontent.com/48249708/118308277-9c996e00-b4a0-11eb-9875-2fcb66b60b6f.png)
![image](https://user-images.githubusercontent.com/48249708/118308313-a7540300-b4a0-11eb-98e1-1fb9598b42ef.png)









