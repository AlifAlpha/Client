import React, { useEffect, useState } from "react";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import { CircularProgress, Snackbar } from "@material-ui/core";
import MuiAlert from "@material-ui/lab/Alert";
// import FormControlLabel from "@material-ui/core/FormControlLabel";
// import Checkbox from "@material-ui/core/Checkbox";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import { MuiThemeProvider, createTheme } from "@material-ui/core/styles";
import Hidden from "@material-ui/core/Hidden";
import logo from "./img/logoISESCO.png";
import bginsc from "./img/backgroundimageleaveform.png";
// import { lightBlue /*teal */ } from "@material-ui/core/colors";
import { withStyles } from "@material-ui/core/styles";
import {
  CardMedia,
  FormControl,
  FormHelperText,
  // FormLabel,
} from "@material-ui/core";
import Select from "@material-ui/core/Select";
import InputLabel from "@material-ui/core/InputLabel";
import { Pattern } from "./pattern";
import Modal from "./Modal";

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
// const TealCheckbox = withStyles({
//   root: {
//     color: teal[400],
//     "&$checked": {
//       color: teal[600],
//     },
//   },
//   checked: {},
// })((props) => <Checkbox color='default' {...props} />);

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
    gridTemplateColumns: "1fr 1fr 1fr ",
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
  const [leaves, setLeaves] = useState([]);
  // const [employees, setEmployees] = useState([]);
  const [fnError, setFnError] = useState(false);
  const [lnError, setLnError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [phoneError, setPhoneError] = useState(false);
  const [cityError, setCityError] = useState(false);
  const [courseError, setCourseError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [feedback, setFeedback] = useState({ open: false });

  useEffect(() => {
    fetch("http://localhost:8080/leavetype").then(async (res) => {
      const data = await res.json();
      setLeaves(data);
    });
    // fetch("https://iacapi.herokuapp.com/courses").then(async (res) => {
    //   const data = await res.json();
    //   setCourses(data);
    // });
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    setFnError(false);
    setLnError(false);
    setEmailError(false);
    setPhoneError(false);
    setCityError(false);
    setCourseError(false);
    let x = 0;
    if (!Pattern.name.test(formData.get("firstName"))) {
      setFnError(true);
      x++;
    }
    if (!Pattern.name.test(formData.get("lastName"))) {
      setLnError(true);
      x++;
    }
    if (!Pattern.email.test(formData.get("email"))) {
      setEmailError(true);
      x++;
    }
    if (!Pattern.phone.test(formData.get("phone"))) {
      setPhoneError(true);
      x++;
    }
    if (!formData.get("city")) {
      setCityError(true);
      x++;
    }
    if (
      ![...formData.getAll("langue"), ...formData.getAll("certificate")].length
    ) {
      setCourseError(true);
      x++;
    }
    const obj = {
      name: `${formData.get("firstName")} ${formData.get("lastName")}`,
      city: formData.get("city"),
      email: formData.get("email"),
      phoneNumber: formData.get("phone"),
      cours: [...formData.getAll("langue"), ...formData.getAll("certificate")],
    };

    console.log(obj);
    if (!x) {
      setLoading(true);

      fetch("https://iacapi.herokuapp.com/inscription", {
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
                    Leave Form
                  </Typography>
                </Grid>
                <Grid item xs={12}>
                  <CustomField
                    autoComplete='fname'
                    name='firstName'
                    variant='outlined'
                    required
                    id='firstName'
                    label='First Name'
                    autoFocus
                    fullWidth
                    error={fnError}
                    helperText={fnError && "Invalid first name"}
                  />
                </Grid>
                <Grid item xs={12}>
                  <CustomField
                    variant='outlined'
                    required
                    id='lastName'
                    label='Last Name'
                    name='lastName'
                    autoComplete='lname'
                    fullWidth
                    error={lnError}
                    helperText={lnError && "Invalid last name"}
                  />
                </Grid>
                <Grid item xs={12}>
                  <FormControl
                    fullWidth
                    variant='outlined'
                    className={classes.formControl}
                  >
                    <InputLabel htmlFor='outlined-age-native-simple'>
                      Leaves Type
                    </InputLabel>
                    <Select
                      name='city'
                      native
                      inputProps={{
                        id: "ERRRRRR",
                      }}
                      fullWidth
                      label='City'
                      error={cityError}
                    >
                      <option aria-label='None' value='' />
                      {leaves &&
                        leaves.map((leave) => (
                          <option key={leave.id} value={leave.id}>
                            {leave.name}
                          </option>
                        ))}
                    </Select>
                    {cityError && (
                      <FormHelperText error>City is required!</FormHelperText>
                    )}
                  </FormControl>
                </Grid>
                <Grid item xs={12}>
                  <CustomField
                    variant='outlined'
                    required
                    fullWidth
                    id='email'
                    label='Email Address'
                    name='email'
                    autoComplete='email'
                    error={emailError}
                    helperText={emailError && "Invalid email"}
                  />
                </Grid>
                <Grid item xs={12}>
                  <CustomField
                    variant='outlined'
                    required
                    fullWidth
                    id='phone'
                    label='Phone number'
                    name='phone'
                    autoComplete='Phone'
                    error={phoneError}
                    helperText={phoneError && "Invalid phone number"}
                  />
                </Grid>
                {/* sselect section */}

                <Grid container>
                  {/* <FormLabel component='legend' className={classes.legend}>
                    Language
                  </FormLabel>
                  <Grid className={classes.checks} container>
                    {courses.map((course) => {
                      return course.coursType === "langue" ? (
                        <FormControlLabel
                          key={course.id}
                          control={<BlueCheckbox name='langue' />}
                          label={course.name}
                          value={course.id}
                        />
                      ) : null;
                    })}
                  </Grid> */}

                  {/* <FormLabel className={classes.legend} component='legend'>
                    Certificate
                  </FormLabel> */}
                  {/* <Grid xs={12} className={classes.checks} container>
                    {courses.map((course) => {
                      return course.coursType === "certificate" ? (
                        <FormControlLabel
                          key={course.id}
                          control={<TealCheckbox name='certificate' />}
                          label={course.name}
                          value={course.id}
                        />
                      ) : null;
                    })}
                  </Grid> */}
                </Grid>
                {courseError && (
                  <FormHelperText error>
                    At least one certificate or language must be checked.
                  </FormHelperText>
                )}
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
