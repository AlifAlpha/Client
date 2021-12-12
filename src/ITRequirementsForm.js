import React, { useEffect, useState } from "react";
import Button from "@material-ui/core/Button";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import {
  Checkbox,
  CircularProgress,
  FormControlLabel,
  FormLabel,
  Snackbar,
} from "@material-ui/core";
import MuiAlert from "@material-ui/lab/Alert";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import { MuiThemeProvider, createTheme } from "@material-ui/core/styles";
import Hidden from "@material-ui/core/Hidden";
import logo from "./img/logoISESCO.png";
import bginsc from "./img/backgroundimageleaveform.png";
import { withStyles } from "@material-ui/core/styles";
import { CardMedia, FormControl, FormHelperText } from "@material-ui/core";
import Select from "@material-ui/core/Select";
import InputLabel from "@material-ui/core/InputLabel";
// import { Pattern } from "./pattern";
import Modal from "./Modal";
import { MobileDatePicker, TimePicker } from "@mui/lab";
import { teal } from "@material-ui/core/colors";

const background = createTheme({
  overrides: {
    MuiCssBaseline: {
      "@global": {
        body: {
          // backgroundColor: "#d3d3d3",
          background: `url(${bginsc}) `,
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: " cover",
          backgroundAttachment: "fixed",
        },
      },
    },
  },
});

// const BlueCheckbox = withStyles({
//   root: {
//     color: lightBlue[400],
//     "&$checked": {
//       color: lightBlue[600],
//     },
//   },
//   checked: {},
// })((props) => <Checkbox color='default' {...props} />);
const TealCheckbox = withStyles({
  root: {
    color: teal[400],
    "&$checked": {
      color: teal[600],
    },
  },
  checked: {},
})((props) => <Checkbox color='default' {...props} />);

const CustomField = withStyles({
  root: {
    "& label.Mui-focused": {
      color: "#90A4AE",
    },
    "& .MuiInput-underline:after": {
      borderBottomColor: "#B0BEC5",
    },
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: "#546E7A",
      },
      "&:hover fieldset": {
        borderColor: "#616161",
      },

      "&.Mui-focused fieldset": {
        borderColor: "#282828",
      },
    },
  },
})(TextField);

// const CustomSelect = withStyles({
//   root: {
//     "& label.Mui-focused": {
//       color: lightBlue[600],
//     },
// "& .MuiInput-underline:after": {
//   borderBottomColor: lightBlue[600],
// },
// "& .MuiOutlinedInput-root": {
//   "& fieldset": {
//     borderColor: lightBlue[400],
//   },
//   "&:hover fieldset": {
//     borderColor: lightBlue[800],
//   },

//   "&.Mui-focused fieldset": {
//     borderColor: lightBlue[400],
//   },
// },
//     // "MuiSelect-root MuiSelect-select MuiSelect-outlined MuiInputBase-input MuiOutlinedInput-input"
//   },
// })(Select);

const useStyles = makeStyles((theme) => ({
  container: {
    borderRadius: "15px",
    overflow: "hidden",
    border: "white 1px solid",
    boxShadow: "0px 2px 5px rgba(0,0,0,0.6)",
  },
  gridcolumn: {},
  legend: {
    marginTop: "1em",
  },
  checks: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr ",
  },
  right: {
    background: "#fff",
    padding: "40px 30px",
    // width: "50%",
    gridRowGap: "16px",
  },
  left: {
    backgroundColor: "#282828",
    width: "50%",
  },

  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    borderRadius: "15px",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },

  form: {
    width: "100%", // Fix IE 11 issue.
  },
  formside: {},
  submit: {
    margin: theme.spacing(3, 0, 2),
    background: "#282828",
    width: "30%",
    height: "40px",
  },
}));

const LeaveRequist = () => {
  const classes = useStyles();
  const [modal, setModal] = useState(false);
  const [departments, setDepartments] = useState([]);
  const [employees, setEmployees] = useState([]);
  const [rooms, setRooms] = useState([]);

  const [itreq, setItreq] = useState([]);
  // const [eventName, setEventName] = useState(false);
  const [phoneError, setPhoneError] = useState(false);
  const [startError, setStartError] = useState(false);
  // const [leaveError, setLeaveError] = useState(false);
  const [eventNameError, setEventNameError] = useState(false);
  const [timeError, setTimeError] = useState(false);
  // const [itreqError, setItreqError] = useState(false);
  const [deptError, setDeptError] = useState(false);
  const [coordError, setcoordError] = useState(false);
  const [locationError, setlocationError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [feedback, setFeedback] = useState({ open: false });
  const [start, setStart] = React.useState("");
  const [time, setTime] = React.useState("");
  useEffect(() => {
    fetch("https://icesco.herokuapp.com/department").then(async (res) => {
      const data = await res.json();
      setDepartments(data);
    });
    fetch("https://icesco.herokuapp.com/employee").then(async (res) => {
      const data = await res.json();
      setEmployees(data);
    });
    fetch("https://icesco.herokuapp.com/room").then(async (res) => {
      const data = await res.json();
      setRooms(data);
    });
    fetch("https://icesco.herokuapp.com/itreq").then(async (res) => {
      const data = await res.json();
      setItreq(data);
    });
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    setEventNameError(false);
    setcoordError(false);
    setPhoneError(false);
    setDeptError(false);
    setStartError(false);
    setTimeError(false);
    setlocationError(false);
    // setItreqError(false);
    let x = 0;
    if (!formData.get("eventName")) {
      setEventNameError(true);
      x++;
    }
    if (!formData.get("eventCoordinator")) {
      setcoordError(true);
      x++;
    }
    if (!formData.get("phone")) {
      setPhoneError(true);
      x++;
    }
    if (!formData.get("start")) {
      setStartError(true);
      x++;
    }
    if (!formData.get("time")) {
      setTimeError(true);
      x++;
    }
    if (!formData.get("department")) {
      setDeptError(true);
      x++;
    }
    if (!formData.get("location")) {
      setlocationError(true);
      x++;
    }
    // if (!formData.get("location")) {
    //   setItreqError(true);
    //   x++;
    // }

    const obj = {
      eventName: formData.get("eventName"),
      eventCoordinator: formData.get("eventCoordinator"),
      phone: formData.get("phone"),
      department: formData.get("department"),
      start: formData.get("start"),
      time: formData.get("time"),
      location: formData.get("location"),
      itreq: [...formData.getAll("itreq")],
    };

    console.log(x, obj);
    if (!x) {
      setLoading(true);
      console.log(obj);
      fetch("https://icesco.herokuapp.com/itreqform", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(obj),
      }).then(async (res) => {
        setLoading(false);
        const data = await res.json();
        setFeedback({
          open: true,
          status: data.status === 400 ? "error" : "success",
          message: data.message,
        });
        setModal(data.status === 400 ? false : true);
        e.target.reset();
      });
    }
  };
  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setFeedback({ open: false });
  };

  return (
    <MuiThemeProvider theme={background}>
      <Container component='main' maxWidth='md'>
        <CssBaseline />
        <div className={classes.paper}>
          <form className={classes.form} onSubmit={handleSubmit} noValidate>
            <Grid container className={classes.container}>
              <Hidden only={["xs"]}>
                <Grid className={classes.left} container sm={6}>
                  <Grid item xs={12} sm={12}></Grid>
                  <Grid item xs={12}>
                    <CardMedia
                      component='img'
                      alt='Contemplative Reptile'
                      image={logo}
                    />
                  </Grid>
                </Grid>
              </Hidden>
              <Grid className={classes.right} container sm={6}>
                <Grid item xs={12}>
                  <Typography
                    color='textSecondary'
                    align='center'
                    component='h1'
                    variant='h4'
                  >
                    IT requirements
                  </Typography>
                </Grid>
                <Grid item xs={12}>
                  <CustomField
                    autoComplete='ename'
                    name='eventName'
                    variant='outlined'
                    required
                    id='eventName'
                    label='Event Name'
                    autoFocus
                    fullWidth
                    error={eventNameError}
                    helperText={eventNameError && "Invalid event name"}
                  />
                </Grid>

                <Grid container>
                  <FormControl
                    fullWidth
                    variant='outlined'
                    className={classes.formControl}
                  >
                    <InputLabel htmlFor='outlined-age-native-simple'>
                      Event coordinator
                    </InputLabel>
                    <Select
                      name='eventCoordinator'
                      native
                      inputProps={{
                        id: "ERRRRRR",
                      }}
                      fullWidth
                      label='Substitut'
                      error={coordError}
                    >
                      <option aria-label='None' value='' />
                      {employees &&
                        employees.map((employee) => (
                          <option key={employee.id} value={employee.id}>
                            {employee.name}
                          </option>
                        ))}
                    </Select>
                    {coordError && (
                      <FormHelperText error>
                        Coordinator is required!
                      </FormHelperText>
                    )}
                  </FormControl>
                </Grid>

                <Grid item xs={12}>
                  <CustomField
                    variant='outlined'
                    required
                    id='Phone'
                    label='Phone'
                    name='phone'
                    autoComplete='phone'
                    fullWidth
                    error={phoneError}
                    helperText={phoneError && "Invalid phone"}
                  />
                </Grid>
                <Grid item xs={12}>
                  <FormControl
                    fullWidth
                    variant='outlined'
                    className={classes.formControl}
                  >
                    <InputLabel htmlFor='outlined-age-native-simple'>
                      Department
                    </InputLabel>
                    <Select
                      name='department'
                      native
                      inputProps={{
                        id: "ERRRRRR",
                      }}
                      fullWidth
                      label='Leave  Type'
                      error={deptError}
                    >
                      <option aria-label='None' value='' />
                      {departments &&
                        departments.map((obj) => (
                          <option key={obj.id} value={obj.id}>
                            {obj.name}
                          </option>
                        ))}
                    </Select>
                    {deptError && (
                      <FormHelperText error>
                        depertment is required!
                      </FormHelperText>
                    )}
                  </FormControl>
                </Grid>
                <Grid item xs={12}>
                  <LocalizationProvider dateAdapter={AdapterDateFns}>
                    <MobileDatePicker
                      label='Start'
                      inputFormat='MM/dd/yyyy'
                      value={start}
                      onChange={(newValue) => {
                        setStart(newValue);
                      }}
                      renderInput={(params) => (
                        <CustomField
                          {...params}
                          fullWidth
                          name='start'
                          variant='outlined'
                          required
                          error={startError}
                          helperText={startError && "Invalid date"}
                        />
                      )}
                    />
                  </LocalizationProvider>
                </Grid>
                <Grid item xs={12}>
                  <LocalizationProvider dateAdapter={AdapterDateFns}>
                    <TimePicker
                      label='Time'
                      value={time}
                      onChange={(newValue) => {
                        setTime(newValue);
                      }}
                      renderInput={(params) => (
                        <CustomField
                          {...params}
                          fullWidth
                          name='time'
                          variant='outlined'
                          required
                          error={timeError}
                          helperText={timeError && "Invalid time"}
                        />
                      )}
                    />
                  </LocalizationProvider>
                </Grid>
                {/* sselect section */}

                {/* <Grid item xs={12}>
                  <CustomField
                    autoComplete='location'
                    name='location'
                    variant='outlined'
                    required
                    id='location'
                    label='Event location'
                    autoFocus
                    fullWidth
                    error={locationError}
                    helperText={locationError && "Invalid location name"}
                  />
                </Grid> */}
                <Grid container>
                  <FormControl
                    fullWidth
                    variant='outlined'
                    className={classes.formControl}
                  >
                    <InputLabel htmlFor='outlined-age-native-simple'>
                      Event location
                    </InputLabel>
                    <Select
                      name='location'
                      native
                      inputProps={{
                        id: "ERRRRRR",
                      }}
                      fullWidth
                      label='location'
                      error={locationError}
                      helperText={locationError && "Invalid location name"}
                      // error={roomError}
                    >
                      <option aria-label='None' value='' />
                      {rooms &&
                        rooms.map((obj) => (
                          <option key={obj.id} value={`Room : ${obj.name}`}>
                            {obj.name}
                          </option>
                        ))}
                    </Select>
                    {/* {deptError && (
                        <FormHelperText error>
                          Rooms is required!
                        </FormHelperText>
                      )} */}
                  </FormControl>
                </Grid>
                {/* {itreqError && (
                  <FormHelperText error>
                    At least one certificate or language must be checked.
                  </FormHelperText>
                )} */}
                <Grid container>
                  <FormLabel className={classes.legend} component='legend'>
                    IT requirements
                  </FormLabel>
                  <Grid xs={12} className={classes.checks} container>
                    {itreq.map((itreq) => {
                      return (
                        <FormControlLabel
                          key={itreq.id}
                          control={<TealCheckbox name='itreq' />}
                          label={itreq.name}
                          value={itreq.id}
                        />
                      );
                    })}
                  </Grid>
                </Grid>

                <Grid item xs={12}>
                  <Button
                    type='submit'
                    variant='contained'
                    color='primary'
                    className={classes.submit}
                    component='button'
                    disabled={loading}
                  >
                    {loading && <CircularProgress size={20} />}
                    {!loading && "Submit "}
                  </Button>
                </Grid>
              </Grid>
            </Grid>
          </form>
        </div>
        <Snackbar
          open={feedback.open}
          autoHideDuration={6000}
          onClose={handleClose}
        >
          <MuiAlert
            elevation={6}
            variant='filled'
            onClose={handleClose}
            severity={feedback.status}
          >
            {feedback.message}
          </MuiAlert>
        </Snackbar>
      </Container>
      <Modal open={modal} setModal={setModal} />
    </MuiThemeProvider>
  );
};

export default LeaveRequist;
