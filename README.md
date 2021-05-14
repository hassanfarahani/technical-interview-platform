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
- You can submit a review of your partner’s feedback and experience (Reviews system- provide a review of your partner’s quality of feedback )

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
