import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import {
  // Checkbox,
  CircularProgress,
  FormControlLabel,
  // FormLabel,
  Radio,
  RadioGroup,
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
import { CardMedia, FormHelperText } from "@material-ui/core";
// import Select from "@material-ui/core/Select";
// import InputLabel from "@material-ui/core/InputLabel";
// import { Pattern } from "./pattern";
import Modal from "./Modal";
import { DateTimePicker } from "@mui/lab";
import { teal, grey, lightBlue } from "@material-ui/core/colors";

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
// const LightBlueCheckbox = withStyles({
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
const CustomRadio = withStyles({
  root: {
    color: grey[400],
    "&$checked": {
      color: grey[600],
    },
  },
  checked: {},
})((props) => <Radio color='default' {...props} />);
const TealRadio = withStyles({
  root: {
    color: teal[400],
    "&$checked": {
      color: teal[600],
    },
  },
  checked: {},
})((props) => <Radio color='default' {...props} />);
const BlueRadio = withStyles({
  root: {
    color: lightBlue[400],
    "&$checked": {
      color: lightBlue[600],
    },
  },
  checked: {},
})((props) => <Radio color='default' {...props} />);
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
  const [value, setValue] = React.useState("Virtual");
  const [app, setApp] = React.useState("Virtual");
  const [value1, setValue1] = React.useState("");
  const [value2, setValue2] = React.useState("");
  const [value3, setValue3] = React.useState("");
  const [category, setCategory] = React.useState();
  const handleChange = (event) => {
    // console.log(event.target.value);
    setValue(event.target.value);
  };
  const handleChangeApp = (event) => {
    // console.log(event.target.value);
    setApp(event.target.value);
  };

  const handleChangeCategory = (event) => {
    setCategory(event.target.value);
    console.log(category);
  };
  // const [departments, setDepartments] = useState([]);
  // const [employees, setEmployees] = useState([]);
  // const [itreq, setItreq] = useState([]);

  const [apptype, setAppTypeError] = useState(false);
  const [datePropError, setDatePropError] = useState(false);
  // const [startError, setStartError] = useState(false);
  const [nameError, setNameError] = useState(false);
  const [titleError, setTitleError] = useState(false);
  // const [timeError, setTimeError] = useState(false);
  const [timeStartError, setTimeStartError] = useState(false);
  const [timeEndError, setTimeEndError] = useState(false);
  const [purpError, setPurpError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [feedback, setFeedback] = useState({ open: false });

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    setAppTypeError(false);
    setDatePropError(false);
    setNameError(false);
    setTitleError(false);
    setTimeStartError(false);
    setTimeEndError(false);
    setPurpError(false);
    // setlocationError(false);
    // setItreqError(false);
    let x = 0;
    if (!formData.get("apptype")) {
      setAppTypeError(true);
      x++;
    }
    if (!formData.get("startMeet")) {
      setDatePropError(true);
      x++;
    }
    if (!formData.get("name")) {
      setNameError(true);
      x++;
    }
    if (!formData.get("title")) {
      setTitleError(true);
      x++;
    }
    if (!formData.get("timeStartMeet")) {
      setTimeStartError(true);
      x++;
    }
    if (!formData.get("timeEndMeet")) {
      setTimeEndError(true);
      x++;
    }
    if (!formData.get("purpose")) {
      setPurpError(true);
      x++;
    }
    // if (!formData.get("location")) {
    //   setItreqError(true);
    //   x++;
    // }

    const obj = {
      startMeet: formData.get("startMeet"),
      // timeMeet: formData.get("timeMeet"),
      name: formData.get("name"),
      title: formData.get("title"),
      dateDurStart: formData.get("timeStartMeet"),
      dateDurEnd: formData.get("timeEndMeet"),
      purpose: formData.get("purpose"),
      appType: formData.get("apptype"),
    };

    console.log(x, obj);
    if (!x) {
      setLoading(true);
      console.log(obj);
      fetch("https://icesco.herokuapp.com/dgapp", {
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
                    DG Appointment Request Form
                  </Typography>
                </Grid>
                <Grid item xs={12}>
                  <RadioGroup
                    aria-label='meeting'
                    name='meeting'
                    value={value}
                    className={classes.checks}
                    onChange={handleChange}
                  >
                    <FormControlLabel
                      value='Virtual'
                      control={<CustomRadio name='meeting' />}
                      label='Virtual'
                    />
                    <FormControlLabel
                      value='In-Person'
                      control={<CustomRadio name='meeting' />}
                      label='In Person'
                    />
                  </RadioGroup>
                </Grid>
                <Grid item xs={12}>
                  {value === "In-Person" ? (
                    <RadioGroup
                      value={app}
                      className={classes.checks}
                      onChange={handleChangeApp}
                    >
                      <FormControlLabel
                        value='Personal-Meeting'
                        control={<TealRadio name='apptype' />}
                        label='Meeting'
                      />
                      <FormControlLabel
                        value='Personal-Visit'
                        control={<TealRadio name='apptype' />}
                        label='Visit'
                      />
                      <FormControlLabel
                        value='Personal-Signing-Mou'
                        control={<TealRadio name='apptype' />}
                        label='Signing Mou'
                      />
                    </RadioGroup>
                  ) : (
                    <RadioGroup
                      value={app}
                      className={classes.checks}
                      onChange={handleChangeApp}
                    >
                      <FormControlLabel
                        value='Virtual-Visit'
                        control={<BlueRadio name='apptype' />}
                        label='Visit'
                      />
                      <FormControlLabel
                        value='Virtual-Signing-Mou'
                        control={<BlueRadio name='apptype' />}
                        label='Signing Mou'
                      />
                    </RadioGroup>
                  )}
                </Grid>
                {apptype && (
                  <FormHelperText error>
                    At least one must be checked.
                  </FormHelperText>
                )}
                <Grid item xs={12}>
                  <LocalizationProvider dateAdapter={AdapterDateFns}>
                    <DateTimePicker
                      label='Proposed date'
                      // inputFormat='MM/dd/yyyy'
                      value={value1}
                      onChange={(newValue) => {
                        setValue1(newValue);
                      }}
                      renderInput={(params) => (
                        <CustomField
                          {...params}
                          fullWidth
                          name='startMeet'
                          variant='outlined'
                          required
                          error={datePropError}
                          helperText={datePropError && "Invalid date"}
                        />
                      )}
                    />
                  </LocalizationProvider>
                </Grid>
                <Grid item xs={12}>
                  <CustomField
                    autoComplete='name'
                    name='name'
                    variant='outlined'
                    required
                    id='name'
                    label='Your Name'
                    autoFocus
                    fullWidth
                    error={nameError}
                    helperText={nameError && "Invalid name"}
                  />
                </Grid>

                <Grid item xs={12}>
                  <CustomField
                    autoComplete='title'
                    name='title'
                    variant='outlined'
                    required
                    id='title'
                    label='Title'
                    autoFocus
                    fullWidth
                    error={titleError}
                    helperText={titleError && "Invalid title"}
                  />
                </Grid>

                <Grid item xs={12}>
                  <LocalizationProvider dateAdapter={AdapterDateFns}>
                    <DateTimePicker
                      label='Proposed date'
                      // inputFormat='MM/dd/yyyy'
                      value={value2}
                      onChange={(newValue) => {
                        setValue2(newValue);
                      }}
                      renderInput={(params) => (
                        <CustomField
                          {...params}
                          fullWidth
                          name='timeStartMeet'
                          variant='outlined'
                          required
                          error={timeStartError}
                          helperText={timeStartError && "Invalid date"}
                        />
                      )}
                    />
                  </LocalizationProvider>
                </Grid>
                <Grid item xs={12}>
                  <LocalizationProvider dateAdapter={AdapterDateFns}>
                    <DateTimePicker
                      label='Proposed date'
                      // inputFormat='MM/dd/yyyy'
                      value={value3}
                      onChange={(newValue) => {
                        setValue3(newValue);
                      }}
                      renderInput={(params) => (
                        <CustomField
                          {...params}
                          fullWidth
                          name='timeEndMeet'
                          variant='outlined'
                          required
                          error={timeEndError}
                          helperText={timeEndError && "Invalid date"}
                        />
                      )}
                    />
                  </LocalizationProvider>
                </Grid>

                <Grid item xs={12}>
                  <CustomField
                    autoComplete='purpose'
                    name='purpose'
                    variant='outlined'
                    required
                    id='purpose'
                    label='Purpose'
                    // autoFocus
                    fullWidth
                    error={purpError}
                    helperText={purpError && "This field is required"}
                  />
                </Grid>

                <Grid xs={12} container>
                  <RadioGroup
                    aria-label='dgparticip'
                    name='dgparticip'
                    value={category}
                    className={classes.checks2}
                    onChange={handleChangeCategory}
                  >
                    <FormControlLabel
                      control={<CustomRadio name='dgparticip' />}
                      label='No Participation'
                      value='No Participation'
                    />
                    <div></div>
                    <FormControlLabel
                      control={<CustomRadio name='dgparticip' />}
                      value='In Person_Visit'
                      label='Visit (In Person)  '
                    />
                    <FormControlLabel
                      control={<CustomRadio name='dgparticip' />}
                      value='In Person_Opening/ Closing address'
                      label='Opening/ Closing address (In Person)'
                    />
                    {/* {dgparticipationError && (
                      <FormHelperText error>
                        this information is required!
                      </FormHelperText>
                    )} */}
                  </RadioGroup>
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
