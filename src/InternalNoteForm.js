import React, { useEffect, useState } from "react";
import Button from "@material-ui/core/Button";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import {
  Checkbox,
  // Checkbox,
  CircularProgress,
  FormControlLabel,
  FormGroup,
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
import {
  /*CardMedia,*/ FormControl /*FormHelperText*/,
} from "@material-ui/core";
import Select from "@material-ui/core/Select";
import InputLabel from "@material-ui/core/InputLabel";
// import { Pattern } from "./pattern";
import Modal from "./Modal";
import { DateTimePicker } from "@mui/lab";
import { grey, teal /*lightBlue*/ } from "@material-ui/core/colors";
import FileBase64 from "react-file-base64";

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
  checks2: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
  },
  checks: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr 1fr ",
  },
  checks4: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr 1fr 1fr",
  },
  checks5: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr 1fr 1fr 1fr ",
  },
  right: {
    background: "#fff",
    padding: "40px 30px",
    // width: "50%",
    gridRowGap: "16px",
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
  submit: {
    margin: theme.spacing(3, 4, 3),
    background: "#282828",
    width: "30%",
    height: "40px",
  },
  headerH1: {
    color: "#008080",
  },
  bgColor: {
    background: "#00695c",
    color: "#fff",
    paddingLeft: "20px",
  },
}));

const InternalNoteForm = () => {
  const classes = useStyles();
  const [departments, setDepartments] = useState([]);
  const [rooms, setRooms] = useState([]);
  const [countreis, setCountreis] = useState([]);
  const [budget, setBudget] = useState(false);
  const [value, setValue] = React.useState("internal");
  const [invitation, setInvitation] = React.useState("");
  const [eventconcept, setEventConcept] = React.useState("");
  const [attendees, setAttendees] = React.useState("");
  const [valueInit, setValueInit] = React.useState();
  const [valueFreq, setValueFreq] = React.useState();
  const [valueDgPart, setValueDgPart] = React.useState();
  const [eventAttendance, setEventAttendance] = React.useState();
  const [memberEngagement, setMemberEngagement] = React.useState();
  // const [impactInitiative, setImpactInitiative] = React.useState(false);
  const [date, setDate] = React.useState("");
  const [date1, setDate1] = React.useState("");

  const handleChange = (event) => {
    setValue(event.target.value);
    console.log(value);
  };
  const hendlChangeBudget = (event) => {
    setBudget(event.target.checked);
    console.log(budget);
  };
  const handleChangeInitiative = (event) => {
    setValueInit(event.target.value);
    console.log(value);
  };
  const handleChangeFrequency = (event) => {
    setValueFreq(event.target.value);
    console.log(value);
  };
  const handleChangeDgPart = (event) => {
    setValueDgPart(event.target.value);
    console.log(value);
  };
  const handleChangeEventAttendance = (event) => {
    setEventAttendance(event.target.value);
    console.log(value);
  };
  const handleChangeMemberEngagement = (event) => {
    setMemberEngagement(event.target.value);
    console.log(value);
  };
  // const handleChangeImpactInitiative = (event) => {
  //   setImpactInitiative(event.target.value);
  //   console.log(value);
  // };
  // const [enError, setEVError] = useState(false);
  // const [deptError, setDeptError] = useState(false);
  // const [substitutError, setSubstitutError] = useState(false);
  // // const [locationError, setLocationError] = useState(false);
  // const [roomError, setRoomsError] = useState(false);
  // const [countreisError, setCountreisError] = useState(false);
  // const [cityError, setCityError] = useState(false);
  // const [localError, setLocalError] = useState(false);
  // const [fnError, setFnError] = useState(false);
  // const [endError, setEndError] = useState(false);
  // const [startError, setStartError] = useState(false);
  // const [leaveError, setLeaveError] = useState(false);

  const [modal, setModal] = useState(false);
  // const [leaves, setLeaves] = useState([]);
  // const [employees, setEmployees] = useState([]);
  // const [lnError, setLnError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [feedback, setFeedback] = useState({ open: false });
  // const [start, setStart] = React.useState("");
  // const [end, setEnd] = React.useState("");
  useEffect(() => {
    fetch("http://localhost:8080/department").then(async (res) => {
      const data = await res.json();
      setDepartments(data);
    });
    fetch("http://localhost:8080/room").then(async (res) => {
      const data = await res.json();
      setRooms(data);
    });
    fetch("http://localhost:8080/allcities").then(async (res) => {
      const data = await res.json();
      setCountreis(data);
    });
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);

    // setDeptError(false);
    // setEVError(false);
    // setSubstitutError(false);
    // // setLocationError(false);
    // setRoomsError(false);
    // setCountreisError(false);
    // setCityError(false);
    // setLocalError(false);

    let x = 0;
    // if (!formData.get("deptName")) {
    //   setDeptError(true);
    //   console.log(formData.get("deptName"));
    //   x++;
    // }
    // if (!formData.get("eventName")) {
    //   setEVError(true);
    //   x++;
    // }
    // if (!formData.get("room")) {
    //   setRoomsError(true);
    //   x++;
    // }
    // if (!formData.get("countreis")) {
    //   setCountreisError(true);
    //   x++;
    // }
    // if (!formData.get("city")) {
    //   setCityError(true);
    //   x++;
    // }
    // if (!formData.get("local")) {
    //   setLocalError(true);
    //   x++;
    // }

    /*old FN*/
    // setLnError(false);
    // // setEndError(false);
    // // setStartError(false);
    // // setLeaveError(false);
    // // let x = 0;
    // // if (!Pattern.name.test(formData.get("firstName"))) {
    // //   setFnError(true);
    // //   x++;
    // // }
    // if (!Pattern.name.test(formData.get("lastName"))) {
    //   setLnError(true);
    //   x++;
    // }
    // if (!Pattern.name.test(formData.get("lastName"))) {
    //   setEndError(true);
    //   x++;
    // }
    // if (!Pattern.name.test(formData.get("lastName"))) {
    //   setStartError(true);
    //   x++;
    // }
    // if (!formData.get("leavetype")) {
    //   setLeaveError(true);
    //   x++;
    // }
    // if (!formData.get("substitut")) {
    //   setSubstitutError(true);
    //   x++;
    // }

    const obj = {
      departmentName: formData.get("deptName"),
      eventName: formData.get("eventName"),
      location:
        value === "internal"
          ? formData.get("rooms")
          : `Adresse: ${formData.get("countreis")} ,${formData.get(
              "city"
            )} ${formData.get("location")}`,
      eventDate: formData.get("eventDate"),
      initiativeIs: formData.get("initiative"),
      ferequincy: formData.get("frequency"),
      stakeHoldersMember: formData.get("memberS"),
      stakeHoldersNoMember: formData.get("nMemberS"),
      stakeHolderspartner: formData.get("Partner"),
      initiativeNeeds: formData.getAll("initNeeds"),
      dgParticipation: formData.get("dgparticip"),
      speechTopic: formData.get("speechTopic"),
      speechPoints: formData.get("mainPointe"),
      speechDuration: formData.get("speechDuration"),
      speechDate: formData.get("speachDate"),
      eventAttended: formData.get("eventAttendance"),
      eventPartnership: formData.getAll("partnership"),
      eventStateMember: formData.get("memberengagement"),
      numCoverage: formData.get("CoveragPersonN"),
      coverageFor: formData.getAll("coverageFor "),
      inpactInternal: formData.get("impactinitiative"),
      internalSupport: formData.getAll("internalSup"),
      internalSupportNeededSup: formData.get("Suppliersfor"),
      internalSupportNeededSpo: formData.get("Sponsorsfor"),
      invitation: invitation,
      eventconcept: eventconcept,
      attendees: attendees,
    };

    console.log(x, obj);
    if (!x) {
      setLoading(true);
      console.log(obj);
      fetch("http://localhost:8080/notedg", {
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
              <Grid item xs={12}>
                <Typography
                  className={classes.headerH1}
                  align='center'
                  component='h1'
                  variant='h3'
                >
                  Internal Note to DG for an event
                </Typography>
              </Grid>
              <Grid className={classes.right} container>
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
                      autoFocus
                      native
                      inputProps={{
                        id: "ERRRRRR",
                      }}
                      fullWidth
                      label='Departments'
                      // error={substitutError}
                    >
                      <option aria-label='None' value='' />
                      {departments &&
                        departments.map((obj) => (
                          <option key={obj.id} value={obj.name}>
                            {obj.name}
                          </option>
                        ))}
                    </Select>
                    {/* {deptError && (
                      <FormHelperText error>
                        Departments is required!
                      </FormHelperText>
                    )} */}
                  </FormControl>
                </Grid>

                <Grid item xs={12}>
                  <CustomField
                    autoComplete='ename'
                    name='eventName'
                    variant='outlined'
                    required
                    id='eventName'
                    label='Event Name'
                    fullWidth
                    // error={enError}
                    // helperText={enError && "Invalid Event Name"}
                  />
                </Grid>
                <Grid item xs={12}>
                  <RadioGroup
                    aria-label='meeting'
                    name='meeting'
                    value={value}
                    className={classes.checks2}
                    onChange={handleChange}
                  >
                    <FormControlLabel
                      value='internal'
                      control={<CustomRadio name='meeting' />}
                      label='ICESCO'
                      checked={value === "internal" ? true : false}
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
                          // error={countreisError}
                        >
                          <option aria-label='None' value='' />
                          {countreis &&
                            countreis.map((obj) => (
                              <option key={obj.id} value={obj.name}>
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
                    <Grid item xs={12}>
                      <CustomField
                        autoComplete='city'
                        name='city'
                        variant='outlined'
                        required
                        id='city'
                        label='city'
                        fullWidth
                        // helperText={cityError && "Invalid first name"}
                        // error={cityError}
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <CustomField
                        autoComplete='local'
                        name='location'
                        variant='outlined'
                        required
                        id='local'
                        label='location'
                        fullWidth
                        // error={localError}
                        // helperText={localError && "Invalid first name"}
                      />
                    </Grid>
                  </>
                )}
                <Grid item xs={12}>
                  <LocalizationProvider dateAdapter={AdapterDateFns}>
                    <DateTimePicker
                      renderInput={(props) => (
                        <CustomField
                          value={date}
                          name='eventDate'
                          variant='outlined'
                          required
                          id='eventName'
                          label='Date & Time'
                          fullWidth
                          // helperText={enError && "Invalid Event Name"}
                          // error={enError}
                          {...props}
                        />
                      )}
                      // label='DateTimePicker'

                      onChange={(newValue) => {
                        setDate(newValue);
                      }}
                    />
                  </LocalizationProvider>
                </Grid>
                <Grid className={classes.bgColor} item xs={12}>
                  <Typography component='h1' variant='h5'>
                    Event Details
                  </Typography>
                </Grid>
                <FormLabel className={classes.legend} component='legend'>
                  The Initiative is
                </FormLabel>
                <Grid xs={12} container center>
                  <RadioGroup
                    aria-label='initiative'
                    name='initiative'
                    value={valueInit}
                    className={classes.checks}
                    onChange={handleChangeInitiative}
                  >
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
                  </RadioGroup>
                </Grid>
                <FormLabel className={classes.legend} component='legend'>
                  The frequency of this initiative
                </FormLabel>
                <Grid xs={12} container>
                  <RadioGroup
                    aria-label='frequency'
                    name='frequency'
                    value={valueFreq}
                    className={classes.checks}
                    onChange={handleChangeFrequency}
                  >
                    <FormControlLabel
                      control={<CustomRadio name='frequency' />}
                      label='First time event'
                      value='First time event'
                    />
                    <FormControlLabel
                      control={<CustomRadio name='frequency' />}
                      label='Regular activity'
                      value='Regular activity'
                    />
                    <FormControlLabel
                      control={<CustomRadio name='frequency' />}
                      label='Continuity of previous collaboration'
                      value='Continuity of previous collaboration'
                    />
                  </RadioGroup>
                </Grid>
                <Grid container>
                  <FormControl
                    fullWidth
                    variant='outlined'
                    className={classes.formControl}
                  >
                    <InputLabel htmlFor='outlined-age-native-simple'>
                      member state
                    </InputLabel>
                    <Select
                      name='memberS'
                      native
                      inputProps={{
                        id: "ERRRRRR",
                      }}
                      fullWidth
                      label='member state'
                      // error={countreisError}
                    >
                      <option aria-label='None' value='' />
                      {countreis &&
                        countreis.map((obj) => (
                          <option key={obj.id} value={obj.name}>
                            {obj.name}
                          </option>
                        ))}
                    </Select>
                  </FormControl>
                </Grid>
                <Grid item xs={12}>
                  <CustomField
                    name='nMemberS'
                    variant='outlined'
                    required
                    label='Non Member Sate'
                    fullWidth
                    // error={enError}
                    // helperText={enError && "Invalid Event Name"}
                  />
                </Grid>
                <Grid item xs={12}>
                  <CustomField
                    name='Partner'
                    variant='outlined'
                    required
                    label='Partner'
                    fullWidth
                    // error={enError}
                    // helperText={enError && "Invalid Event Name"}
                  />
                </Grid>

                <FormLabel className={classes.legend} component='legend'>
                  The Initiative needs
                </FormLabel>
                <Grid xs={12} className={classes.checks4} container>
                  <FormControlLabel
                    control={<TealCheckbox name='initNeeds' />}
                    label='DG Approval'
                    value='DG Approval'
                  />
                  <FormControlLabel
                    control={<TealCheckbox name='initNeeds' />}
                    label='DG participation'
                    value='DG participation'
                  />
                  <FormControlLabel
                    control={<TealCheckbox name='initNeeds' />}
                    label='Sector/Department participation'
                    value='Sector/Department participation'
                  />
                  <FormControlLabel
                    control={
                      <TealCheckbox
                        name='initNeeds'
                        onChange={hendlChangeBudget}
                      />
                    }
                    label='Budget'
                    value='Budget'
                  />
                </Grid>
                {budget ? (
                  <Grid item xs={12}>
                    <CustomField
                      variant='outlined'
                      required
                      label='Budget'
                      name='Budget'
                      autoComplete='budget'
                      fullWidth
                      // error={lnError}
                      // helperText={lnError && "Invalid last name"}
                    />
                  </Grid>
                ) : (
                  ""
                )}
                <Grid className={classes.bgColor} item xs={12}>
                  <Typography component='h1' variant='h5'>
                    ICESCO Participation
                  </Typography>
                </Grid>
                <FormLabel className={classes.legend} component='legend'>
                  DG participation
                </FormLabel>
                <Grid xs={12} container>
                  <RadioGroup
                    aria-label='dgparticip'
                    name='dgparticip'
                    value={valueDgPart}
                    className={classes.checks2}
                    onChange={handleChangeDgPart}
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

                    <FormControlLabel
                      control={<CustomRadio name='dgparticip' />}
                      value='Virtual Participation_Recorded Video'
                      label='Recorded Video (Virtual)'
                    />
                    <FormControlLabel
                      control={<CustomRadio name='dgparticip' />}
                      value='Virtual Participation_Video Conference'
                      label='Video Conference (Virtual)'
                    />
                  </RadioGroup>
                </Grid>
                <FormLabel className={classes.legend} component='legend'>
                  DG Speech information:
                </FormLabel>
                <Grid item xs={12}>
                  <CustomField
                    variant='outlined'
                    required
                    label='Speech Topic'
                    name='speechTopic'
                    autoComplete='STopic'
                    fullWidth
                    // error={lnError}
                    // helperText={lnError && "Invalid last name"}
                  />
                </Grid>
                <Grid item xs={12}>
                  <CustomField
                    variant='outlined'
                    required
                    label='Main Points'
                    name='mainPointe'
                    autoComplete='mPointe'
                    fullWidth
                    // error={lnError}
                    // helperText={lnError && "Invalid last name"}
                  />
                </Grid>
                <Grid item xs={12}>
                  <CustomField
                    variant='outlined'
                    required
                    label='Speech Duration'
                    name='speechDuration'
                    autoComplete='SDuration'
                    fullWidth
                    // error={lnError}
                    // helperText={lnError && "Invalid last name"}
                  />
                </Grid>
                <Grid item xs={12}>
                  <LocalizationProvider dateAdapter={AdapterDateFns}>
                    <DateTimePicker
                      renderInput={(props) => (
                        <CustomField
                          value={date1}
                          name='speachDate'
                          variant='outlined'
                          required
                          label='Date & Time'
                          fullWidth
                          // helperText={enError && "Invalid Event Name"}
                          // error={enError}
                          {...props}
                        />
                      )}
                      // label='DateTimePicker'

                      onChange={(newValue) => {
                        setDate1(newValue);
                      }}
                    />
                  </LocalizationProvider>
                </Grid>
                <FormLabel className={classes.legend} component='legend'>
                  Information required for DG participation
                </FormLabel>
                <Grid xs={12} container>
                  <RadioGroup
                    aria-label='eventAttendance'
                    name='eventAttendance'
                    value={eventAttendance}
                    className={classes.checks}
                    onChange={handleChangeEventAttendance}
                  >
                    <FormControlLabel
                      control={<CustomRadio name='eventAttendance' />}
                      label='A+: Two or more Presidents'
                      value='A+: Two or more Presidents'
                    />
                    <FormControlLabel
                      control={<CustomRadio name='eventAttendance' />}
                      value='A: One President'
                      label='A: One President'
                    />
                    <FormControlLabel
                      control={<CustomRadio name='eventAttendance' />}
                      value='B+: Prime Minister or over Two ministers'
                      label='B+: Prime Minister or over Two ministers'
                    />

                    <FormControlLabel
                      control={<CustomRadio name='eventAttendance' />}
                      value='B: One Minister'
                      label='B: One Minister'
                    />
                    <FormControlLabel
                      control={<CustomRadio name='eventAttendance' />}
                      value='C: Professionals'
                      label='C: Professionals'
                    />
                  </RadioGroup>
                </Grid>
                <FormLabel className={classes.legend} component='legend'>
                  The event will be in partnership with
                </FormLabel>
                <Grid xs={12} container>
                  <FormGroup name='partnership' className={classes.checks}>
                    <FormControlLabel
                      control={<TealCheckbox name='partnership' />}
                      label='A: Governmental organization'
                      value='A: Governmental organization'
                    />
                    <FormControlLabel
                      control={<TealCheckbox name='partnership' />}
                      label='B: International Organization'
                      value='B: International Organization'
                    />
                    <FormControlLabel
                      control={<TealCheckbox name='partnership' />}
                      label='C: Non-Governmental Organization'
                      value='C: Non-Governmental Organization'
                    />
                  </FormGroup>
                </Grid>
                <FormLabel className={classes.legend} component='legend'>
                  The state member engagement
                </FormLabel>
                <Grid xs={12} container>
                  <RadioGroup
                    aria-label='memberengagement'
                    name='memberengagement'
                    value={memberEngagement}
                    className={classes.checks2}
                    onChange={handleChangeMemberEngagement}
                  >
                    <FormControlLabel
                      control={<CustomRadio name='memberengagement' />}
                      label='High: Over 6 times in the same year'
                      value='High: Over 6 times in the same year'
                    />
                    <FormControlLabel
                      control={<CustomRadio name='memberengagement' />}
                      value='Medium: Between 3 to 6times in the same year'
                      label='Medium: Between 3 to 6 times in the same year'
                    />
                    <FormControlLabel
                      control={<CustomRadio name='memberengagement' />}
                      value='Low: Less than 3 times in the same year'
                      label='Low: Less than 3 times in the same year'
                    />
                  </RadioGroup>
                </Grid>
                <Grid className={classes.bgColor} item xs={12}>
                  <Typography component='h1' variant='h5'>
                    Financial Coverage by Stakeholders
                  </Typography>
                </Grid>
                <Grid item xs={12}>
                  <CustomField
                    variant='outlined'
                    required
                    label='Coverage for N° Person'
                    name='CoveragPersonN'
                    fullWidth
                    // error={lnError}
                    // helperText={lnError && "Invalid last name"}
                  />
                </Grid>
                <FormLabel className={classes.legend} component='legend'>
                  Coverage for
                </FormLabel>
                <Grid xs={12} container>
                  <FormGroup name='coverageFor' className={classes.checks4}>
                    <FormControlLabel
                      control={<TealCheckbox name='coverageFor ' />}
                      label='Airflight'
                      value='Airflight'
                    />
                    <FormControlLabel
                      control={<TealCheckbox name='coverageFor ' />}
                      label='Per Diem'
                      value='Per Diem'
                    />
                    <FormControlLabel
                      control={<TealCheckbox name='coverageFor ' />}
                      label='Accommodation'
                      value='Accommodation'
                    />
                    <FormControlLabel
                      control={<TealCheckbox name='coverageFor ' />}
                      label='Local Transportation'
                      value='Local Transportation'
                    />
                  </FormGroup>
                </Grid>
                <FormLabel className={classes.legend} component='legend'>
                  The impact of this initiative on ICESCO
                </FormLabel>
                {/* <Grid xs={12} container>
                  <RadioGroup
                    aria-label='impactinitiative'
                    name='impactinitiative'
                    value={impactInitiative}
                    className={classes.checks2}
                    onChange={handleChangeImpactInitiative}
                  >
                    <FormControlLabel
                      control={<CustomRadio name='impactinitiative' />}
                      value='Increase ICESCO competitiveness'
                      label='Increase ICESCO competitiveness'
                    />
                    <FormControlLabel
                      control={<CustomRadio name='impactinitiative' />}
                      label='Receive fundraising/sponsorship'
                      value='Receive fundraising/sponsorship'
                    />
                    <FormControlLabel
                      control={<CustomRadio name='impactinitiative' />}
                      label='nitiate new partnership'
                      value='nitiate new partnership'
                    />
                    <FormControlLabel
                      control={<CustomRadio name='impactinitiative' />}
                      value='Provide Services for a State Member'
                      label='Provide Services for a State Member'
                    />
                  </RadioGroup>
                </Grid> */}
                <Grid xs={12} className={classes.checks2} container>
                  <FormControlLabel
                    control={<TealCheckbox name='impactinitiative' />}
                    label='Increase ICESCO competitiveness'
                    value='Increase ICESCO competitiveness'
                  />
                  <FormControlLabel
                    control={<TealCheckbox name='impactinitiative' />}
                    label='Receive fundraising/sponsorship'
                    value='Receive fundraising/sponsorship'
                  />
                  <FormControlLabel
                    control={<TealCheckbox name='impactinitiative' />}
                    label='nitiate new partnership'
                    value='nitiate new partnership'
                  />
                  <FormControlLabel
                    control={
                      <TealCheckbox
                        name='impactinitiative'
                        // onChange={hendlChangeBudget}
                      />
                    }
                    label='Provide Services for a State Member'
                    value='Provide Services for a State Member'
                  />
                </Grid>
                {true ? (
                  <Grid xs={12} className={classes.checks2} container>
                    <FormControlLabel
                      control={<TealCheckbox name='impactinitiative' />}
                      label='Provide technical expertise / consultations'
                      value='Provide technical expertise / consultations'
                    />
                    <FormControlLabel
                      control={<TealCheckbox name='impactinitiative' />}
                      label='Capacity building'
                      value='Capacity building'
                    />
                    <FormControlLabel
                      control={<TealCheckbox name='impactinitiative' />}
                      label='Sharing a best practice'
                      value='Sharing a best practice'
                    />
                    <FormControlLabel
                      control={<TealCheckbox name='impactinitiative' />}
                      label='Enhance mutual collaboration'
                      value='Enhance mutual collaboration'
                    />
                  </Grid>
                ) : (
                  ""
                )}
                <FormLabel className={classes.legend} component='legend'>
                  Internal Support
                </FormLabel>
                <Grid xs={12} container>
                  <FormGroup name='internalSup' className={classes.checks4}>
                    <FormControlLabel
                      control={<TealCheckbox name='internalSup' />}
                      label='Translation'
                      value='Translation'
                    />
                    <FormControlLabel
                      control={<TealCheckbox name='internalSup' />}
                      label='Designing & printing'
                      value='Designing & printing'
                    />
                    <FormControlLabel
                      control={<TealCheckbox name='internalSup' />}
                      label='Legal'
                      value='Legal'
                    />
                    <FormControlLabel
                      control={<TealCheckbox name='internalSup' />}
                      label='Finance'
                      value='Finance'
                    />
                    <FormControlLabel
                      control={<TealCheckbox name='internalSup' />}
                      label='Admin'
                      value='Admin'
                    />
                    <FormControlLabel
                      control={<TealCheckbox name='internalSup' />}
                      label='IT'
                      value='IT'
                    />
                    <FormControlLabel
                      control={<TealCheckbox name='internalSup' />}
                      label='Media'
                      value='Media'
                    />
                    <FormControlLabel
                      control={<TealCheckbox name='internalSup' />}
                      label='Other (specify)'
                      value='Other (specify)'
                    />
                  </FormGroup>
                </Grid>
                <Grid item xs={12}>
                  <CustomField
                    variant='outlined'
                    required
                    label='specify'
                    name='specify'
                    autoComplete='lname'
                    fullWidth
                  />
                </Grid>
                <Grid item xs={12}>
                  <CustomField
                    variant='outlined'
                    required
                    label='Suppliers for'
                    name='Suppliersfor'
                    fullWidth
                    // error={lnError}
                    // helperText={lnError && "Invalid last name"}
                  />
                </Grid>
                <Grid item xs={12}>
                  <CustomField
                    variant='outlined'
                    required
                    label='Sponsors for'
                    name='Sponsorsfor'
                    fullWidth
                    // error={lnError}
                    // helperText={lnError && "Invalid last name"}
                  />
                </Grid>
                <Grid className={classes.bgColor} item xs={12}>
                  <Typography phy component='h1' variant='h5'>
                    Attachments
                  </Typography>
                </Grid>
                <FormLabel className={classes.legend} component='legend'>
                  Invitation
                </FormLabel>
                <Grid item xs={12}>
                  <FileBase64
                    multiple={false}
                    onDone={(base64) => {
                      setInvitation(base64);
                    }}
                  />
                </Grid>
                <FormLabel className={classes.legend} component='legend'>
                  Event Concept Note
                </FormLabel>
                <Grid item xs={12}>
                  <FileBase64
                    multiple={false}
                    onDone={(base64) => {
                      setEventConcept(base64);
                    }}
                  />
                </Grid>
                <FormLabel className={classes.legend} component='legend'>
                  Attendees / Participant
                </FormLabel>
                <Grid item xs={12}>
                  <FileBase64
                    multiple={false}
                    onDone={(base64) => {
                      setAttendees(base64);
                    }}
                  />
                </Grid>
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
