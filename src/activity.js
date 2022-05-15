import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import {
  // Checkbox,
  CircularProgress,
  // FormControlLabel,
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
import { CardMedia } from "@material-ui/core";
// import Select from "@material-ui/core/Select";
// import InputLabel from "@material-ui/core/InputLabel";
// import { Pattern } from "./pattern";
import Modal from "./Modal";
import { DateTimePicker } from "@mui/lab";
// import { teal, grey, lightBlue } from "@material-ui/core/colors";
import "./translate/tansConfg";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
// import FormHelperText from "@material-ui/core/FormHelperText";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import { useTranslation } from "react-i18next";
import i18next from "i18next";
const languages = [
  {
    code: "fr",
    name: "Français",
    country_code: "fr",
  },
  {
    code: "en",
    name: "English",
    country_code: "gb",
  },
  {
    code: "ar",
    name: "العربية",
    dir: "rtl",
    country_code: "sa",
  },
];

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
// const CustomRadio = withStyles({
//   root: {
//     color: grey[400],
//     "&$checked": {
//       color: grey[600],
//     },
//   },
//   checked: {},
// })((props) => <Radio color='default' {...props} />);
// const TealRadio = withStyles({
//   root: {
//     color: teal[400],
//     "&$checked": {
//       color: teal[600],
//     },
//   },
//   checked: {},
// })((props) => <Radio color='default' {...props} />);
// const BlueRadio = withStyles({
//   root: {
//     color: lightBlue[400],
//     "&$checked": {
//       color: lightBlue[600],
//     },
//   },
//   checked: {},
// })((props) => <Radio color='default' {...props} />);
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
    backgroundColor: "#fff",
    width: "50%",
  },

  paper: {
    marginTop: theme.spacing(12),
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
  lang: {
    position: "absolute",
    width: "200px",
    top: "10px",
    left: "10px",
    marginBotton: "20px",
  },
}));

const Activity = () => {
  const classes = useStyles();
  const [age, setAge] = React.useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  const [modal, setModal] = useState(false);
  // const [value, setValue] = React.useState("Virtual");
  // const [app, setApp] = React.useState("Virtual");
  const [value1, setValue1] = React.useState("");
  const [value2, setValue2] = React.useState("");
  // const [value3, setValue3] = React.useState("");
  // const handleChange = (event) => {
  //   // console.log(event.target.value);
  //   setValue(event.target.value);
  // };
  // const handleChangeApp = (event) => {
  //   // console.log(event.target.value);
  //   setApp(event.target.value);
  // };

  // const [departments, setDepartments] = useState([]);
  // const [employees, setEmployees] = useState([]);
  // const [itreq, setItreq] = useState([]);

  // const [apptype, setAppTypeError] = useState(false);
  const [countryError, setcountryError] = useState(false);
  const [nameError, setnameError] = useState(false);
  const [arrDateError, setarrDateError] = useState(false);
  const [flightnumError, setflightnumError] = useState(false);
  const [flightComingError, setflightComingError] = useState(false);
  const [departDateError, setdepartDateError] = useState(false);
  const [deparFlighttDateError, setdeparFlighttDateError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [feedback, setFeedback] = useState({ open: false });

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    setnameError(false);
    setcountryError(false);
    setarrDateError(false);
    setflightnumError(false);
    setflightComingError(false);
    setdepartDateError(false);
    setdeparFlighttDateError(false);

    let x = 0;
    if (!formData.get("country")) {
      setcountryError(true);
      x++;
    }
    if (!formData.get("name")) {
      setnameError(true);
      x++;
    }
    if (!formData.get("arrivalDate")) {
      setarrDateError(true);
      x++;
    }
    if (!formData.get("arrivalFlightNum")) {
      setflightnumError(true);
      x++;
    }
    if (!formData.get("FlightComing")) {
      setflightComingError(true);
      x++;
    }
    if (!formData.get("departureDate")) {
      setdepartDateError(true);
      x++;
    }
    if (!formData.get("departureFlightNum")) {
      setdeparFlighttDateError(true);
      x++;
    }

    const obj = {
      country: formData.get("country"),

      name: formData.get("name"),
      arrivalDate: formData.get("arrivalDate"),
      arrivalFlightNum: formData.get("arrivalFlightNum"),
      FlightComing: formData.get("FlightComing"),
      departureDate: formData.get("departureDate"),
      departureFlightNum: formData.get("departureFlightNum"),
    };

    console.log(x, obj);
    if (!x) {
      setLoading(true);
      console.log(obj);
      fetch("https://icescoapi.herokuapp.com/travelinfo", {
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
  const { t } = useTranslation();
  return (
    <MuiThemeProvider theme={background}>
      <Container component='main' maxWidth='md'>
        <CssBaseline />
        <div className={classes.paper}>
          <FormControl variant='outlined' className={classes.lang}>
            <InputLabel id='demo-simple-select-outlined-label'>
              languages
            </InputLabel>
            <Select
              labelId='demo-simple-select-outlined-label'
              id='lang'
              value={age}
              onChange={handleChange}
              label='languages'
            >
              <MenuItem value=''>
                <em>languages</em>
              </MenuItem>
              {languages.map(({ code, name, country_code }) => (
                <MenuItem
                  onClick={() => {
                    i18next.changeLanguage(code);
                  }}
                  key={country_code}
                  value={code}
                >
                  {name}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
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
                    {t("title")}
                  </Typography>
                </Grid>
                {/* <Grid item xs={12}>
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
                </Grid> */}
                {/* <Grid item xs={12}>
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
                )} */}
                <Grid item xs={12}>
                  <CustomField
                    autoComplete='country'
                    name='country'
                    variant='outlined'
                    required
                    id='name'
                    label={t("country")}
                    autoFocus
                    fullWidth
                    error={countryError}
                    helperText={countryError && "Invalid country"}
                  />
                </Grid>
                <Grid item xs={12}>
                  <CustomField
                    autoComplete='name'
                    name='name'
                    variant='outlined'
                    required
                    id='name'
                    label={t("Name")}
                    fullWidth
                    error={nameError}
                    helperText={nameError && "Invalid name"}
                  />
                </Grid>
                <Grid item xs={12}>
                  <LocalizationProvider dateAdapter={AdapterDateFns}>
                    <DateTimePicker
                      label={t("arDate")}
                      // inputFormat='MM/dd/yyyy'
                      value={value1}
                      onChange={(newValue) => {
                        setValue1(newValue);
                      }}
                      renderInput={(params) => (
                        <CustomField
                          {...params}
                          fullWidth
                          name='arrivalDate'
                          variant='outlined'
                          required
                          error={arrDateError}
                          helperText={arrDateError && "Invalid date"}
                        />
                      )}
                    />
                  </LocalizationProvider>
                </Grid>

                <Grid item xs={12}>
                  <CustomField
                    autoComplete='title'
                    name='arrivalFlightNum'
                    variant='outlined'
                    required
                    id='title'
                    label={t("arFlight")}
                    fullWidth
                    error={flightnumError}
                    helperText={flightnumError && "Invalid Flight number"}
                  />
                </Grid>

                <Grid item xs={12}>
                  <CustomField
                    autoComplete='FlightComing'
                    name='FlightComing'
                    variant='outlined'
                    required
                    id='FlightComing'
                    label={t("lfightComing")}
                    fullWidth
                    error={flightComingError}
                    helperText={flightComingError && "This field is required"}
                  />
                </Grid>

                <Grid item xs={12}>
                  <LocalizationProvider dateAdapter={AdapterDateFns}>
                    <DateTimePicker
                      label={t("depDat")}
                      // inputFormat='MM/dd/yyyy'
                      value={value2}
                      onChange={(newValue) => {
                        setValue2(newValue);
                      }}
                      renderInput={(params) => (
                        <CustomField
                          {...params}
                          fullWidth
                          name='departureDate'
                          variant='outlined'
                          required
                          error={departDateError}
                          helperText={departDateError && "Invalid date"}
                        />
                      )}
                    />
                  </LocalizationProvider>
                </Grid>
                <Grid item xs={12}>
                  <CustomField
                    autoComplete='departureFlightNum'
                    name='departureFlightNum'
                    variant='outlined'
                    required
                    id='title'
                    label={t("depFlight")}
                    fullWidth
                    error={deparFlighttDateError}
                    helperText={
                      deparFlighttDateError && "Flight number is required"
                    }
                  />
                </Grid>

                {/* sselect section */}

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
                    {!loading && t("button")}
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

export default Activity;
