import React, { useState, useRef, useEffect, useContext } from "react";
import { useHistory } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import CloseIcon from "@material-ui/icons/Close";

import Grid from "@material-ui/core/Grid";

import CodeEditor from "../components/layout/CodeEditor";
import Question from "../components/layout/Question";
import Console from "../components/layout/Console";
import { SocketContext } from "../context/SocketContext";
import { UserContext } from "../context/UserContext";
import FeedbackDialog from "../components/dialogues/FeedbackDialog";
import RoomBlockDialog from "../components/dialogues/RoomBlockDialog";
import WaitingRoom from "../components/dialogues/WaitingRoom";
import axios from "axios";

const sampleQuestion = {
  title: "Diagonal Difference",
  body: `Given a square matrix, calculate the absolute difference between the sums of its diagonals.
  For example, the square matrix **arr** is shown below:\n
  ~~~js
  1 2 3
  4 5 6
  9 8 9
  ~~~
  The left-to-right diagonal = **1 + 5 + 9 = 15**. The right to left diagonal = **3 + 5 + 9 = 17**. Their absolute difference is  **[ 15 - 17 ] = 2**.

  ### Function description\n
  Complete the  function in the **diagonalDifference** editor below. It must return an integer representing the absolute diagonal difference.
  diagonalDifference takes the following parameter:\n
  arr: an array of integers.
  `,
  answer: `A paragraph with *emphasis* and **strong importance**.

  > A block quote with ~strikethrough~ and a URL: https://reactjs.org.

  * Lists
  * [ ] todo
  * [x] done

  A table:

  `,
  preLoadCode: `import React from "react";
  import { MuiThemeProvider } from "@material-ui/core";
  import { BrowserRouter, Route } from "react-router-dom";

  import { theme } from "./themes/theme";
  import LandingPage from "./pages/Landing";
  import Home from "./pages/TempHome";

  import "./App.css";

  function App() {
    return (
      <MuiThemeProvider theme={theme}>
        <BrowserRouter>
          <Route path="/" component={Home} />
        </BrowserRouter>
      </MuiThemeProvider>
    );
  }

  export default App;`,
};

const useStyles = makeStyles((theme) => ({
  appBar: {
    position: "relative",
  },
  title: {
    marginLeft: theme.spacing(2),
    flex: 1,
  },
  btn: {
    borderRadius: "30px",
  },
  codeContainer: {
    overflowY: "scroll",
    backgroundColor: "#263238",
    "&::-webkit-scrollbar": {
      display: "none",
    },
  },
}));

const Interview = (props) => {
  const [feedbackOpen, setFeedbackOpen] = useState(false);
  const [code, setCode] = useState(sampleQuestion.preLoadCode);
  const [results, setResults] = useState("");
  const [language, setLanguage] = useState("javascript");
  const [barHeight, setBarHeight] = useState(0);
  const [roomBlockOpen, setRoomBlockOpen] = useState(false);
  const barRef = useRef(null);
  const history = useHistory();

  const { user } = useContext(UserContext);

  const interviewId = props.match.params.id;

  const { socket } = useContext(SocketContext);

  const {
    upcomingInterviews,
    WaitingRoomOpen,
    setWaitingRoomOpen,
    interviewIsStarted,
    setInterviewIsStarted,
  } = useContext(UserContext);

  useEffect(() => {
    barRef.current && setBarHeight(barRef.current.clientHeight);
  }, [barRef]);

  useEffect(() => {
    if (socket) {
      axios
        .get(`/api/interview/${interviewId}`)
        .then((res) => {
          if (
            // If you are not the guest or the owner, RoomBlock opens
            res.data.guest !== undefined &&
            res.data.guest !== user._id &&
            res.data.owner !== user._id
          ) {
            setRoomBlockOpen(true);
            console.log("This room already has the maximum number of members!");
          } else {
            socket.emit(
              "joinInterviewRoom",
              (axios.defaults.withCredentials = true),
              { interviewId }
            );
            setInterviewIsStarted(true);
            if (res.data.owner !== user._id) {
              axios
                .put(`/api/interview/guest/${interviewId}`, {
                  user: user,
                })
                .catch((err) => console.log(err));
            }
          }
        })
        .catch(function (error) {
          console.log(error);
        });
    } else {
      history.push({
        pathname: "/signin",
        state: interviewId,
      });
    }
    return () => {
      if (socket) {
        socket.emit("leaveInterviewRoom", { interviewId });
      }
    };
  }, [history, interviewId, socket]);

  useEffect(() => {
    axios
      .get(`/api/interview/${interviewId}`)
      .then((res) => {
        if (res.data.isStarted) {
          setWaitingRoomOpen(false);
        } else {
          setWaitingRoomOpen(true);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  });

  const classes = useStyles();

  const handleFeedbackOpenClose = () => {
    setFeedbackOpen((prevState) => !prevState);
  };

  const handleRoomBlockClose = () => {
    setRoomBlockOpen(false);
  };

  const handleClose = () => {
    props.history.push("/dashboard");
  };

  const compileCode = async () => {
    setResults("compiling...");
    let extension = "js";
    switch (language) {
      case "python":
        extension = "py";
        break;
      case "java":
        extension = "java";
        break;
      default:
        break;
    }
    const result = await axios.post(`/api/compiler/${language}`, {
      files: [
        {
          name: `Main.${extension}`,
          content: code,
        },
      ],
    });

    setResults(result.data.stderr || result.data.stdout);
  };

  return (
    <React.Fragment>
      <AppBar ref={barRef} className={classes.appBar}>
        <Toolbar>
          <IconButton
            edge="start"
            color="inherit"
            onClick={handleClose}
            aria-label="close"
          >
            <CloseIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            {`Interview ${props.match.params.id}`}
          </Typography>
          <Button
            color="inherit"
            onClick={handleFeedbackOpenClose}
            className={classes.btn}
            variant="outlined"
          >
            save
          </Button>
          <FeedbackDialog
            open={feedbackOpen}
            handleClose={handleFeedbackOpenClose}
          />
        </Toolbar>
      </AppBar>

      <Grid
        container
        alignItems="stretch"
        style={{
          minHeight: `calc(100vh - ${
            props.navHeight ? props.navHeight : 0
          }px - ${barHeight}px)`,
        }}
      >
        <Grid
          container
          item
          alignItems="flex-start"
          xs={12}
          md={4}
          style={{
            minHeight: `calc(100vh - ${
              props.navHeight ? props.navHeight : 0
            }px - ${barHeight}px)`,
          }}
        >
          <Question question={sampleQuestion} />
        </Grid>
        <Grid
          item
          xs={12}
          md={8}
          className={classes.codeContainer}
          style={{
            minHeight: `calc(100vh - ${
              props.navHeight ? props.navHeight : 0
            }px - ${barHeight}px)`,
          }}
        >
          <CodeEditor language={language} value={code} onChange={setCode} />
          <Console compileCode={compileCode} value={results} />
        </Grid>
      </Grid>
      <WaitingRoom
        id={interviewId}
        //This open must be reliant on the interviewStart in the userContext
        //This must do a check for the interviewStart in the DB
        open={WaitingRoomOpen}
        setOpen={setWaitingRoomOpen}
      />
      <RoomBlockDialog open={roomBlockOpen} close={handleRoomBlockClose} />
    </React.Fragment>
  );
};

export default Interview;
