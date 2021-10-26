import React, { useEffect, useState } from "react";
import Button from "@material-ui/core/Button";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import {
  // Checkbox,
  CircularProgress,
  FormControlLabel,
  FormLabel,
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
// import Hidden from "@material-ui/core/Hidden";
// import logo from "./img/logoISESCO.png";
import bginsc from "./img/backgroundimageleaveform.png";
import { withStyles } from "@material-ui/core/styles";
import { /*CardMedia,*/ FormControl, FormHelperText } from "@material-ui/core";
import Select from "@material-ui/core/Select";
import InputLabel from "@material-ui/core/InputLabel";
import { Pattern } from "./pattern";
import Modal from "./Modal";
import { DateTimePicker } from "@mui/lab";
import { grey /*lightBlue*/ } from "@material-ui/core/colors";

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
const CustomRadio = withStyles({
  root: {
    color: grey[400],
    "&$checked": {
      color: grey[600],
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
    background: "white",
    border: "white 1px solid",
    boxShadow: "0px 2px 5px rgba(0,0,0,0.6)",
    paddingTop: "1rem ",
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
    margin: theme.spacing(3, 4, 3),
    background: "#282828",
    width: "30%",
    height: "40px",
  },
}));

const InternalNoteForm = () => {
  const classes = useStyles();
  const [departments, setDepartments] = useState([]);
  const [rooms, setRooms] = useState([{ id: "1", name: "room 1" }]);
  const [countreis, setCountreis] = useState([{ id: "1", name: "room 1" }]);

  const [value, setValue] = React.useState("internal");
  const [date, setDate] = React.useState(new Date());

  const handleChange = (event) => {
    setValue(event.target.value);
    console.log(value);
  };
  const [enError, setEVError] = useState(false);
  const [deptError, setDeptError] = useState(false);
  const [substitutError, setSubstitutError] = useState(false);
  const [locationError, setLocationError] = useState(false);
  const [roomError, setRoomsError] = useState(false);
  const [countreisError, setCountreisError] = useState(false);
  const [cityError, setCityError] = useState(false);
  const [localError, setLocalError] = useState(false);

  const [modal, setModal] = useState(false);
  const [leaves, setLeaves] = useState([]);
  const [employees, setEmployees] = useState([]);
  // const [fnError, setFnError] = useState(false);
  const [lnError, setLnError] = useState(false);
  // const [endError, setEndError] = useState(false);
  // const [startError, setStartError] = useState(false);
  const [leaveError, setLeaveError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [feedback, setFeedback] = useState({ open: false });
  // const [start, setStart] = React.useState("");
  // const [end, setEnd] = React.useState("");
  useEffect(() => {
    fetch("https://icesco.herokuapp.com/leavetype").then(async (res) => {
      const data = await res.json();
      setLeaves(data);
    });
    fetch("https://icesco.herokuapp.com/employee").then(async (res) => {
      const data = await res.json();
      setEmployees(data);
    });
    fetch("https://icesco.herokuapp.com/department").then(async (res) => {
      const data = await res.json();
      setDepartments(data);
    });
    fetch("https://icesco.herokuapp.com/room").then(async (res) => {
      const data = await res.json();
      setRooms(data);
    });
    fetch("https://icesco.herokuapp.com/allcities").then(async (res) => {
      const data = await res.json();
      setCountreis(data);
    });
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);

    setDeptError(false);
    setEVError(false);
    setSubstitutError(false);
    setLocationError(false);
    setRoomsError(false);
    setCountreisError(false);
    setCityError(false);
    setLocalError(false);

    let x = 0;
    if (!formData.get("deptName")) {
      setDeptError(true);
      console.log(formData.get("deptName"));
      x++;
    }
    if (!formData.get("eventName")) {
      setEVError(true);
      x++;
    }
    if (!formData.get("location")) {
      setLocationError(true);
      x++;
    }
    if (!formData.get("room")) {
      setRoomsError(true);
      x++;
    }
    if (!formData.get("countreis")) {
      setCountreisError(true);
      x++;
    }
    if (!formData.get("city")) {
      setCityError(true);
      x++;
    }
    if (!formData.get("local")) {
      setLocalError(true);
      x++;
    }

    /*old FN*/
    setLnError(false);
    // setEndError(false);
    // setStartError(false);
    setLeaveError(false);
    // let x = 0;
    // if (!Pattern.name.test(formData.get("firstName"))) {
    //   setFnError(true);
    //   x++;
    // }
    if (!Pattern.name.test(formData.get("lastName"))) {
      setLnError(true);
      x++;
    }
    // if (!Pattern.name.test(formData.get("lastName"))) {
    //   setEndError(true);
    //   x++;
    // }
    // if (!Pattern.name.test(formData.get("lastName"))) {
    //   setStartError(true);
    //   x++;
    // }
    if (!formData.get("leavetype")) {
      setLeaveError(true);
      x++;
    }
    if (!formData.get("substitut")) {
      setSubstitutError(true);
      x++;
    }

    const obj = {
      name: `${formData.get("firstName")} ${formData.get("lastName")}`,
      leaveType: formData.get("leavetype"),
      start: formData.get("start"),
      end: formData.get("end"),
      substitut: formData.get("substitut"),
    };

    console.log(x, obj);
    if (!x) {
      setLoading(true);
      console.log(obj);
      fetch("https://icesco.herokuapp.com/leaves", {
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
      <Container component='main' maxWidth='lg'>
        <CssBaseline />
        <div className={classes.paper}>
          <form className={classes.form} onSubmit={handleSubmit} noValidate>
            <Grid container className={classes.container}>
              <Grid item xs={12}>
                <Typography
                  color='textSecondary'
                  align='center'
                  component='h1'
                  variant='h4'
                >
                  Internal Note Form
                </Typography>
              </Grid>
              <Grid className={classes.right} container sm={6}>
                <Grid container>
                  <FormControl
                    fullWidth
                    variant='outlined'
                    className={classes.formControl}
                  >
                    <InputLabel htmlFor='outlined-age-native-simple'>
                      Departments
                    </InputLabel>
                    <Select
                      name='deptName'
                      native
                      inputProps={{
                        id: "ERRRRRR",
                      }}
                      fullWidth
                      label='Departments'
                      error={substitutError}
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
                        Departments is required!
                      </FormHelperText>
                    )}
                  </FormControl>
                </Grid>
                <Grid item xs={12}>
                  <LocalizationProvider dateAdapter={AdapterDateFns}>
                    <DateTimePicker
                      renderInput={(props) => (
                        <CustomField
                          value={date}
                          autoComplete='ename'
                          name='eventName'
                          variant='outlined'
                          required
                          id='eventName'
                          label='Date & Time'
                          autoFocus
                          fullWidth
                          helperText={enError && "Invalid Event Name"}
                          error={enError}
                          {...props}
                        />
                      )}
                      // label='DateTimePicker'

                      onChange={(newValue) => {
                        setDate(newValue);
                      }}
                    />
                  </LocalizationProvider>
                  {/* <CustomField
                    autoComplete='ename'
                    name='eventName'
                    variant='outlined'
                    required
                    id='eventName'
                    label='Event Name'
                    autoFocus
                    fullWidth
                    error={enError}
                    helperText={enError && "Invalid Event Name"}
                  /> */}
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
                    error={enError}
                    helperText={enError && "Invalid Event Name"}
                  />
                </Grid>
                <Grid item xs={12}>
                  <CustomField
                    autoComplete='locotion'
                    name='locotion'
                    variant='outlined'
                    required
                    id='locotion'
                    label='locotion'
                    autoFocus
                    fullWidth
                    error={locationError}
                    helperText={locationError && "Invalid Location"}
                  />
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
                      value='internal'
                      control={<CustomRadio name='meeting' />}
                      label='internal'
                    />
                    <FormControlLabel
                      value='external'
                      control={<CustomRadio name='meeting' />}
                      label='external'
                    />
                  </RadioGroup>
                </Grid>
                {value === "internal" ? (
                  <Grid container>
                    <FormControl
                      fullWidth
                      variant='outlined'
                      className={classes.formControl}
                    >
                      <InputLabel htmlFor='outlined-age-native-simple'>
                        rooms
                      </InputLabel>
                      <Select
                        name='rooms'
                        native
                        inputProps={{
                          id: "ERRRRRR",
                        }}
                        fullWidth
                        label='rooms'
                        error={roomError}
                      >
                        <option aria-label='None' value='' />
                        {rooms &&
                          rooms.map((obj) => (
                            <option key={obj.id} value={obj.id}>
                              {obj.name}
                            </option>
                          ))}
                      </Select>
                      {deptError && (
                        <FormHelperText error>
                          Rooms is required!
                        </FormHelperText>
                      )}
                    </FormControl>
                  </Grid>
                ) : (
                  <>
                    {" "}
                    <Grid container>
                      <FormControl
                        fullWidth
                        variant='outlined'
                        className={classes.formControl}
                      >
                        <InputLabel htmlFor='outlined-age-native-simple'>
                          countries
                        </InputLabel>
                        <Select
                          name='countreis'
                          native
                          inputProps={{
                            id: "ERRRRRR",
                          }}
                          fullWidth
                          label='countreis'
                          error={countreisError}
                        >
                          <option aria-label='None' value='' />
                          {countreis &&
                            countreis.map((obj) => (
                              <option key={obj.id} value={obj.id}>
                                {obj.name}
                              </option>
                            ))}
                        </Select>
                        {deptError && (
                          <FormHelperText error>
                            Rooms is required!
                          </FormHelperText>
                        )}
                      </FormControl>
                    </Grid>
                    <Grid item xs={12}>
                      <CustomField
                        autoComplete='city'
                        name='city'
                        variant='outlined'
                        required
                        id='city'
                        label='city'
                        autoFocus
                        fullWidth
                        error={cityError}
                        helperText={cityError && "Invalid first name"}
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <CustomField
                        autoComplete='local'
                        name='firstName'
                        variant='outlined'
                        required
                        id='local'
                        label='location'
                        autoFocus
                        fullWidth
                        error={localError}
                        helperText={localError && "Invalid first name"}
                      />
                    </Grid>
                  </>
                )}

                {/* <Grid item xs={12}>
                  <FormControl
                    fullWidth
                    variant='outlined'
                    className={classes.formControl}
                  >
                    <InputLabel htmlFor='outlined-age-native-simple'>
                      Leaves Type
                    </InputLabel>
                    <Select
                      name='leavetype'
                      native
                      inputProps={{
                        id: "ERRRRRR",
                      }}
                      fullWidth
                      label='Leave  Type'
                      error={leaveError}
                    >
                      <option aria-label='None' value='' />
                      {leaves &&
                        leaves.map((leave) => (
                          <option key={leave.id} value={leave.id}>
                            {leave.name}
                          </option>
                        ))}
                    </Select>
                    {leaveError && (
                      <FormHelperText error>
                        Leave Type is required!
                      </FormHelperText>
                    )}
                  </FormControl>
                </Grid> */}
                {/* <Grid item xs={12}>
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
                    {/* <MobileDatePicker
                      label='For mobile'
                      value={start}
                      onChange={(newValue) => {
                        setStart(newValue);
                      }}
                      renderInput={(params) => <TextField {...params} />}
                    /> 
                  </LocalizationProvider>
                </Grid> */}
                {/* <Grid item xs={12}>
                  <LocalizationProvider dateAdapter={AdapterDateFns}>
                    <MobileDatePicker
                      label='End'
                      inputFormat='MM/dd/yyyy'
                      value={end}
                      onChange={(newValue) => {
                        setEnd(newValue);
                      }}
                      renderInput={(params) => (
                        <CustomField
                          {...params}
                          fullWidth
                          name='end'
                          variant='outlined'
                          required
                          error={endError}
                          helperText={endError && "Invalid date"}
                        />
                      )}
                    />
                  </LocalizationProvider>
                </Grid> */}
                {/* sselect section */}

                <FormLabel className={classes.legend} component='legend'>
                  The Initiative is
                </FormLabel>
                <Grid xs={12} className={classes.checks} container>
                  <FormControlLabel
                    control={<CustomRadio name='initiative' />}
                    label='Part of ICESCO Plan'
                    value='Part of ICESCO Plan'
                  />
                  <FormControlLabel
                    control={<CustomRadio name='initiative' />}
                    label='New proposed activity'
                    value='New proposed activity'
                  />
                  <FormControlLabel
                    control={<CustomRadio name='initiative' />}
                    label='Cooperation agreement'
                    value='Cooperation agreement'
                  />
                </Grid>
                <FormLabel className={classes.legend} component='legend'>
                  The frequency of this initiative
                </FormLabel>
                <Grid xs={12} className={classes.checks} container>
                  <FormControlLabel
                    control={<CustomRadio name='frequency' />}
                    label='First time event'
                    value='First time event'
                  />
                  <FormControlLabel
                    control={<CustomRadio name='initiative' />}
                    label='Regular activity'
                    value='Regular activity'
                  />
                  <FormControlLabel
                    control={<CustomRadio name='initiative' />}
                    label='Continuity of previous collaboration'
                    value='Continuity of previous collaboration'
                  />
                </Grid>
              </Grid>
              <Grid className={classes.right} container sm={6}>
                <FormLabel className={classes.legend} component='legend'>
                  Cooperation agreement
                </FormLabel>
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
                      name='leavetype'
                      native
                      inputProps={{
                        id: "ERRRRRR",
                      }}
                      fullWidth
                      label='Leave  Type'
                      error={leaveError}
                    >
                      <option aria-label='None' value='' />
                      {leaves &&
                        leaves.map((leave) => (
                          <option key={leave.id} value={leave.id}>
                            {leave.name}
                          </option>
                        ))}
                    </Select>
                    {leaveError && (
                      <FormHelperText error>
                        Leave Type is required!
                      </FormHelperText>
                    )}
                  </FormControl>
                </Grid>
                {/* <Grid item xs={12}>
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
                    {/* <MobileDatePicker
                      label='For mobile'
                      value={start}
                      onChange={(newValue) => {
                        setStart(newValue);
                      }}
                      renderInput={(params) => <TextField {...params} />}
                    />
                  </LocalizationProvider>
                </Grid> */}
                {/* <Grid item xs={12}>
                  <LocalizationProvider dateAdapter={AdapterDateFns}>
                    <MobileDatePicker
                      label='End'
                      inputFormat='MM/dd/yyyy'
                      value={end}
                      onChange={(newValue) => {
                        setEnd(newValue);
                      }}
                      fullWidth
                      name='end'
                      variant='outlined'
                      required
                      error={endError}
                      helperText={endError && "Invalid date"}
                      renderInput={(params) => <CustomField {...params} />}
                    />
                  </LocalizationProvider>
                </Grid> */}
                {/* sselect section */}

                <Grid container>
                  <FormControl
                    fullWidth
                    variant='outlined'
                    className={classes.formControl}
                  >
                    <InputLabel htmlFor='outlined-age-native-simple'>
                      Substitut
                    </InputLabel>
                    <Select
                      name='substitut'
                      native
                      inputProps={{
                        id: "ERRRRRR",
                      }}
                      fullWidth
                      label='Substitut'
                      error={substitutError}
                    >
                      <option aria-label='None' value='' />
                      {employees &&
                        employees.map((employee) => (
                          <option key={employee.id} value={employee.id}>
                            {employee.name}
                          </option>
                        ))}
                    </Select>
                    {substitutError && (
                      <FormHelperText error>
                        Substitut is required!
                      </FormHelperText>
                    )}
                  </FormControl>
                </Grid>
                {/* {courseError && (
                  <FormHelperText error>
                    At least one certificate or language must be checked.
                  </FormHelperText>
                )} */}
                {/* <Grid item xs={12}>
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
                </Grid> */}
              </Grid>
              <Grid className={classes.footer} item xs={12}>
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

export default InternalNoteForm;
