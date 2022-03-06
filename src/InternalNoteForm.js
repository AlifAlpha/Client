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
  FormHelperText,
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
  errorMessageRadio: {
    display: "block",
  },
}));

const InternalNoteForm = () => {
  const classes = useStyles();
  const [departments, setDepartments] = useState([]);
  const [rooms, setRooms] = useState([]);
  const [countreis, setCountreis] = useState([]);
  const [budget, setBudget] = useState(false);
  const [other, setOther] = useState(false);
  const [service, setService] = useState(false);
  const [value, setValue] = React.useState("internal");
  const [invitation, setInvitation] = React.useState("");
  const [eventconcept, setEventConcept] = React.useState("");
  const [attendees, setAttendees] = React.useState("");
  const [valueInit, setValueInit] = React.useState();
  const [valueFreq, setValueFreq] = React.useState();
  const [valueDgPart, setValueDgPart] = React.useState();
  const [eventAttendance, setEventAttendance] = React.useState();
  const [memberEngagement, setMemberEngagement] = React.useState();

  const handleChange = (event) => {
    setValue(event.target.value);
    console.log(value);
  };
  const hendlChangeBudget = (event) => {
    setBudget(event.target.checked);
    // console.log(budget);
  };
  const hendlChangeOther = (event) => {
    setOther(event.target.checked);
  };
  const hendlChangeService = (event) => {
    setService(event.target.checked);
  };
  const handleChangeInitiative = (event) => {
    setValueInit(event.target.value);
  };
  const handleChangeFrequency = (event) => {
    setValueFreq(event.target.value);
  };
  const handleChangeDgPart = (event) => {
    setValueDgPart(event.target.value);
    console.log(valueDgPart);
  };
  const handleChangeEventAttendance = (event) => {
    setEventAttendance(event.target.value);
  };
  const handleChangeMemberEngagement = (event) => {
    setMemberEngagement(event.target.value);
  };
  // Handle input errors
  useEffect(() => {
    fetch("https://icescoapi.herokuapp.com/department").then(async (res) => {
      const data = await res.json();
      setDepartments(data);
    });
    fetch("https://icescoapi.herokuapp.com/room").then(async (res) => {
      const data = await res.json();
      setRooms(data);
    });
    fetch("https://icescoapi.herokuapp.com/allcities").then(async (res) => {
      const data = await res.json();
      setCountreis(data);
    });
  }, []);
  /*********** Start Section one ************/

  const [departmentError, setDepartmentError] = useState(false);
  const [eventNameError, setEventNameError] = useState(false);
  const [roomError, setRoomError] = useState(false);
  const [countriesError, setCountriesError] = useState(false);
  const [cityError, setCityError] = useState(false);
  const [locationError, setLocationError] = useState(false);
  const [eventDateError, setEventDateError] = useState(false);
  const [value1, setValue1] = React.useState("");
  const [value2, setValue2] = React.useState("");
  /************ End Section one *************/

  /*********** Start Section two ************/

  const [initiative, setinitiativeError] = useState(false);
  const [frequency, setFrequencyError] = useState(false);
  // const [mumberState, setMumberStateError] = useState(false);
  // const [nonMumberState, setNonMumberStateError] = useState(false);
  // const [partner, setPartnerError] = useState(false);
  const [initiativeNeeds, setInitiativeNeedsError] = useState(false);
  const [budgetError, setBudgetError] = useState(false);

  /************ End Section two *************/
  /************ Start Section three *************/
  const [dgparticipationError, setdgparticipationError] = useState(false);
  const [speechTopicError, setspeechTopicError] = useState(false);
  const [mainPointError, setMainPointError] = useState(false);
  const [speechDurationError, setSpeechDurationError] = useState(false);
  const [dateSpeechError, setDateSpeechError] = useState(false);
  const [eventAttendanceError, setEventAttendanceError] = useState(false);
  const [eventPartnersError, setEventPartnersError] = useState(false);
  const [eventStatementError, setEventStatementError] = useState(false);
  /************ End Section three *************/
  /************ Start Section four *************/
  const [coveragPersonNError, setCoveragPersonNError] = useState(false);
  const [coveragForError, setCoveragForError] = useState(false);
  const [impactInitiativerError, setImpactInitiativerError] = useState(false);
  const [impactServiceError, setImpactServiceError] = useState(false);
  // const [serviceStateMumberError, setserviceStateMumberError] = useState(false);
  const [internalSupportError, setInternalSupportError] = useState(false);
  const [internalSupportSpcifyError, setInternalSupportSpcifyError] =
    useState(false);

  /************ End Section four *************/
  /************ Start Section five *************/
  const [fileOneError, setfileOneError] = useState(false);
  const [fileTwoError, setfileTwoError] = useState(false);
  const [fileThreeError, setfileThreeError] = useState(false);
  /************ End Section five *************/

  const [modal, setModal] = useState(false);
  const [loading, setLoading] = useState(false);
  const [feedback, setFeedback] = useState({ open: false });

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);

    setDepartmentError(false);
    setEventNameError(false);
    setRoomError(false);
    setCountriesError(false);
    setCityError(false);
    setLocationError(false);
    setEventDateError(false);

    setinitiativeError(false);
    setFrequencyError(false);
    // setMumberStateError(false);
    // setNonMumberStateError(false);
    // setPartnerError(false);
    setInitiativeNeedsError(false);
    setBudgetError(false);

    setdgparticipationError(false);
    setspeechTopicError(false);
    setMainPointError(false);
    setSpeechDurationError(false);
    setDateSpeechError(false);
    setEventAttendanceError(false);
    setEventPartnersError(false);
    setEventStatementError(false);

    setCoveragPersonNError(false);
    setCoveragForError(false);
    setImpactInitiativerError(false);
    setImpactServiceError(false);
    setInternalSupportError(false);
    setInternalSupportSpcifyError(false);

    setfileOneError(false);
    setfileTwoError(false);
    setfileThreeError(false);

    let x = 0;
    if (!formData.get("deptName")) {
      setDepartmentError(true);
      x++;
    }
    if (!formData.get("eventName").length) {
      setEventNameError(true);
      x++;
    }
    if (!formData.get("rooms") && value === "internal") {
      setRoomError(true);
      x++;
    }
    if (!formData.get("countreis") && value === "external") {
      setCountriesError(true);
      x++;
    }
    if (!formData.get("city") && value === "external") {
      setCityError(true);
      x++;
    }
    if (!formData.get("location") && value === "external") {
      setLocationError(true);
      x++;
    }
    if (!formData.get("eventDate")) {
      setEventDateError(true);
      x++;
    }

    /*****end part one  */
    /*****start part two  */

    if (!formData.get("initiative")) {
      setinitiativeError(true);
      x++;
    }
    if (!formData.get("frequency")) {
      setFrequencyError(true);
      x++;
    }
    // if (
    //   !formData.get("memberS") &&
    //   !formData.get("nMemberS") &&
    //   !formData.get("Partner")
    // ) {
    //   setMumberStateError(true);
    //   console.log("test ");
    //   x++;
    // }
    // if (!formData.get("nMemberS")) {
    //   setNonMumberStateError(true);
    //   x++;
    // }
    // if (!formData.get("Partner")) {
    //   setPartnerError(true);
    //   x++;
    // }
    if (!formData.getAll("initNeeds").length) {
      setInitiativeNeedsError(true);
      x++;
    }
    let bagetest = formData.getAll("initNeeds").includes("Budget");
    if (bagetest && !formData.get("Budget")) {
      setBudgetError(true);
      x++;
    }

    /*****end part two  */
    /*****Start part three  */
    if (!formData.get("dgparticip")) {
      setdgparticipationError(true);
      x++;
    }
    if (!formData.get("speechTopic") && valueDgPart !== "No Participation") {
      setspeechTopicError(true);
      x++;
    }
    if (!formData.get("mainPointe") && valueDgPart !== "No Participation") {
      setMainPointError(true);
      x++;
    }
    if (!formData.get("speechDuration") && valueDgPart !== "No Participation") {
      setSpeechDurationError(true);
      x++;
    }
    if (!formData.get("speachDate") && valueDgPart !== "No Participation") {
      setDateSpeechError(true);
      x++;
    }
    if (!formData.get("eventAttendance")) {
      setEventAttendanceError(true);
      x++;
    }
    if (!formData.getAll("partnership").length) {
      setEventPartnersError(true);
      x++;
    }
    if (!formData.get("memberengagement")) {
      setEventStatementError(true);
      x++;
    }
    /*****End part three  **/
    /*****Start part Four  **/
    if (!formData.get("CoveragPersonN")) {
      setCoveragPersonNError(true);
      x++;
    }
    if (!formData.getAll("coverageFor")) {
      setCoveragForError(true);
      x++;
    }
    console.log(formData.getAll("impactinitiative"));
    if (!formData.getAll("impactinitiative").length) {
      setImpactInitiativerError(true);
      x++;
    }
    let serviceTest = formData
      .getAll("impactinitiative")
      .includes("Provide Services for a State Member");
    if (serviceTest && !formData.getAll("impactinitiatives")) {
      setImpactServiceError(true);
      x++;
    }
    if (!formData.getAll("internalSup").length) {
      setInternalSupportError(true);
      x++;
    }
    let othertest = formData.getAll("internalSup").includes("Other (specify)");

    if (othertest && !formData.get("specify")) {
      setInternalSupportSpcifyError(true);
      x++;
    }
    /*****End part Four  */
    /*****Start part five  */

    if (!invitation) {
      setfileOneError(true);
      x++;
    }
    if (!eventconcept) {
      setfileTwoError(true);
      x++;
    }
    if (!attendees) {
      setfileThreeError(true);
      x++;
    }

    /*****End part five  */

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
      initiativeNeeds:
        formData.getAll("initNeeds").join(",") + ":" + formData.get("Budget"),
      dgParticipation: formData.get("dgparticip"),
      speechTopic: formData.get("speechTopic"),
      speechPoints: formData.get("mainPointe"),
      speechDuration: formData.get("speechDuration"),
      speechDate: formData.get("speachDate"),
      eventAttended: formData.get("eventAttendance"),
      eventPartnership: formData.getAll("partnership"),
      eventStateMember: formData.get("memberengagement"),
      numCoverage: formData.get("CoveragPersonN"),
      coverageFor: formData.getAll("coverageFor"),
      inpactInternal: formData.getAll("impactinitiative"),
      internalSupport:
        formData.getAll("internalSup").join(",") +
        ":" +
        formData.get("specify"),
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
      fetch("https://icescoapi.herokuapp.com/notedg", {
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
        setInvitation("");
        setEventConcept("");
        setAttendees("");
        setValueInit("");
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
                  Internal Memo for DG
                </Typography>
              </Grid>
              
              <Grid className={classes.right} container>
              <FormLabel
                  error={departmentError}
                  className={classes.legend}
                  component='legend'
                >
                  Presented by
                </FormLabel>
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
                      required
                      native
                      inputProps={{
                        id: "ERRRRRR",
                      }}
                      fullWidth
                      label='Departments'
                      error={departmentError}
                    >
                      <option aria-label='None' value='' />
                      {departments &&
                        departments.map((obj) => (
                          <option key={obj.id} value={obj.name}>
                            {obj.name}
                          </option>
                        ))}
                    </Select>
                    {departmentError && (
                      <FormHelperText error>
                        Department is required!
                      </FormHelperText>
                    )}
                  </FormControl>
                </Grid>
                <FormLabel
                  
                  className={classes.legend}
                  component='legend'
                >
                  Related to event/project titled
                </FormLabel>
                <Grid item xs={12}>

                  <CustomField
                    autoComplete='ename'
                    name='eventName'
                    variant='outlined'
                    required
                    id='eventName'
                    label='Event / project name'
                    fullWidth
                    error={eventNameError}
                    helperText={eventNameError && "Invalid Event Name"}
                  />
                </Grid>
                <FormLabel
                  
                  className={classes.legend}
                  component='legend'
                >
                  Implementation location
                </FormLabel>
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
                        required
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
                            <option key={obj.id} value={`Room : ${obj.name}`}>
                              {obj.name}
                            </option>
                          ))}
                      </Select>
                      {roomError && (
                        <FormHelperText error>Room is required!</FormHelperText>
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
                          required
                          label='countreis'
                          error={countriesError}
                        >
                          <option aria-label='None' value='' />
                          {countreis &&
                            countreis.map((obj) => (
                              <option key={obj.id} value={obj.name}>
                                {obj.name}
                              </option>
                            ))}
                        </Select>
                        {countriesError && (
                          <FormHelperText error>
                            Country is required!
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
                        fullWidth
                        helperText={cityError && "Invalid city"}
                        error={cityError}
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
                        error={locationError}
                        helperText={locationError && "Invalid Location"}
                      />
                    </Grid>
                  </>
                )}
                <Grid item xs={12}>
                  <LocalizationProvider dateAdapter={AdapterDateFns}>
                    <DateTimePicker
                      label='Date Event'
                      value={value1}
                      onChange={(newValue) => {
                        setValue1(newValue);
                      }}
                      renderInput={(props) => (
                        <CustomField
                          value={value1}
                          name='eventDate'
                          variant='outlined'
                          required
                          fullWidth
                          {...props}
                          helperText={eventDateError && "Invalid Date Event"}
                          error={eventDateError}
                        />
                      )}
                    />
                  </LocalizationProvider>
                </Grid>
                <Grid className={classes.bgColor} item xs={12}>
                  <Typography component='h1' variant='h5'>
                    Event / project details
                  </Typography>
                </Grid>
                <FormLabel
                  error={initiative}
                  className={classes.legend}
                  component='legend'
                >
                  The Initiative is
                </FormLabel>
                <Grid xs={12}>
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
                  {initiative && (
                    <FormHelperText className={classes.errorMessageRadio} error>
                      initiative section is required!
                    </FormHelperText>
                  )}
                </Grid>

                <FormLabel
                  className={classes.legend}
                  component='legend'
                  error={frequency}
                >
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
                      label='First time '
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
                  {frequency && (
                    <FormHelperText className={classes.errorMessageRadio} error>
                      frequency section is required!
                    </FormHelperText>
                  )}
                </Grid>
                <FormLabel
                  className={classes.legend}
                  component='legend'
                 
                >
                  Stakeholders engaged
                </FormLabel>
                <Grid container>
               
                  <FormControl
                    fullWidth
                    variant='outlined'
                    className={classes.formControl}
                  > 
                    <InputLabel htmlFor='outlined-age-native-simple'>
                      Member states
                    </InputLabel>
                    <Select
                      name='memberS'
                      native
                      inputProps={{
                        id: "ERRRRRR",
                      }}
                      fullWidth
                      label='member state'
                      // error={mumberState}
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
                    label='Non Member States'
                    fullWidth
                    // error={mumberState}
                    // helperText={mumberState && "Invalid Non member State"}
                  />
                </Grid>
                <Grid item xs={12}>
                  <CustomField
                    name='Partner'
                    variant='outlined'
                    required
                    label='Partners'
                    fullWidth
                    // error={mumberState}
                    // helperText={mumberState && "Invalid Partner"}
                  />
                </Grid>

                <FormLabel
                  className={classes.legend}
                  error={initiativeNeeds}
                  component='legend'
                >
                  The Initiative requires
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
                    label='Estimated Budget'
                    value='Budget'
                  />
                  {initiativeNeeds && (
                    <FormHelperText error>
                      Member State is required!
                    </FormHelperText>
                  )}
                </Grid>
                {budget ? (
                  <Grid item xs={12}>
                    <CustomField
                      variant='outlined'
                      required
                      label='Estimated Budget'
                      name='Budget'
                      autoComplete='budget'
                      fullWidth
                      error={budgetError}
                      helperText={budgetError && "Invalid budget"}
                    />
                  </Grid>
                ) : (
                  ""
                )}
                <Grid className={classes.bgColor} item xs={12}>
                  <Typography component='h1' variant='h5'>
                    DG Participation information
                  </Typography>
                </Grid>
                <FormLabel
                  className={classes.legend}
                  error={dgparticipationError}
                  component='legend'
                >
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
                    {dgparticipationError && (
                      <FormHelperText error>
                        this information is required!
                      </FormHelperText>
                    )}
                  </RadioGroup>
                </Grid>
                {valueDgPart !== "No Participation" ? (
                  <>
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
                        error={speechTopicError}
                        helperText={speechTopicError && "Invalid Speech Topic"}
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <CustomField
                        variant='outlined'
                        required
                        label='Key Points'
                        name='mainPointe'
                        autoComplete='mPointe'
                        fullWidth
                        error={mainPointError}
                        helperText={mainPointError && "Invalid Main Points "}
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <CustomField
                        variant='outlined'
                        required
                        label='Speech Duration (in minutes)'
                        name='speechDuration'
                        autoComplete='SDuration'
                        fullWidth
                        error={speechDurationError}
                        helperText={
                          speechDurationError && "Invalid Speech Duration"
                        }
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <LocalizationProvider dateAdapter={AdapterDateFns}>
                        <DateTimePicker
                          renderInput={(props) => (
                            <CustomField
                              value={value2}
                              name='speachDate'
                              variant='outlined'
                              required
                              label='Date Speech'
                              fullWidth
                              {...props}
                              helperText={
                                dateSpeechError && "Invalid Date Speech"
                              }
                              error={dateSpeechError}
                            />
                          )}
                          label='Date Speech'
                          value={value2}
                          onChange={(newValue) => {
                            setValue2(newValue);
                          }}
                        />
                      </LocalizationProvider>
                    </Grid>
                  </>
                ) : (
                  <></>
                )}
                <FormLabel
                  className={classes.legend}
                  error={eventAttendanceError}
                  component='legend'
                >
                  Participation level required for DG participation
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
                    <div></div>
                    {eventAttendanceError && (
                      <FormHelperText error>
                        this information is required!
                      </FormHelperText>
                    )}
                  </RadioGroup>
                </Grid>
                <FormLabel
                  className={classes.legend}
                  error={eventPartnersError}
                  component='legend'
                >
                  The event will be in partnership with
                </FormLabel>
                <Grid xs={12} container>
                  <FormGroup name='partnership' className={classes.checks}>
                    <FormControlLabel
                      control={<TealCheckbox name='partnership' />}
                      label='Governmental organization'
                      value='A: Governmental organization'
                    />
                    <FormControlLabel
                      control={<TealCheckbox name='partnership' />}
                      label='International Organization'
                      value='B: International Organization'
                    />
                    <FormControlLabel
                      control={<TealCheckbox name='partnership' />}
                      label='Non-Governmental Organization'
                      value='C: Non-Governmental Organization'
                    />
                  </FormGroup>
                  {eventPartnersError && (
                    <FormHelperText error>
                      this information is required!
                    </FormHelperText>
                  )}
                </Grid>
                <FormLabel
                  className={classes.legend}
                  error={eventStatementError}
                  component='legend'
                >
                  State member engagement with ICESCO this year
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
                    <div></div>
                    {eventStatementError && (
                      <FormHelperText error>
                        this information is required!
                      </FormHelperText>
                    )}
                  </RadioGroup>
                </Grid>
                <Grid className={classes.bgColor} item xs={12}>
                  <Typography component='h1' variant='h5'>
                    Financial Coverage by Stakeholders
                  </Typography>
                </Grid>
               
                <FormLabel
                  error={coveragForError}
                  className={classes.legend}
                  component='legend'
                >
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
                  {coveragForError && (
                    <FormHelperText error>
                      this information is required!
                    </FormHelperText>
                  )}
                </Grid>
                <Grid item xs={12}>
                  <CustomField
                    variant='outlined'
                    required
                    label='Coverage for N° Person'
                    name='CoveragPersonN'
                    fullWidth
                    error={coveragPersonNError}
                    helperText={coveragPersonNError && "Invalid Coverage N°"}
                  />
                </Grid>
                <FormLabel
                  className={classes.legend}
                  error={impactInitiativerError}
                  component='legend'
                >
                  The impact of this initiative on ICESCO
                </FormLabel>
                <Grid xs={12} container>
                  <FormGroup name='internalSup' className={classes.checks2}>
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
                      label='Initiate new partnership'
                      value='Initiate new partnership'
                    />
                    <FormControlLabel
                      control={
                        <TealCheckbox
                          name='impactinitiative'
                          onChange={hendlChangeService}
                        />
                      }
                      label='Provide Services for a State Member'
                      value='Provide Services for a State Member'
                    />
                    {impactInitiativerError && (
                      <FormHelperText error>
                        this information is required!
                      </FormHelperText>
                    )}
                  </FormGroup>
                </Grid>
                {service ? (
                  <Grid xs={12} container>
                    <FormGroup
                      name='impactinitiative'
                      className={classes.checks2}
                    >
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
                      {impactServiceError && (
                        <FormHelperText error>
                          this information is required!
                        </FormHelperText>
                      )}
                    </FormGroup>
                  </Grid>
                ) : (
                  ""
                )}
                <FormLabel
                  className={classes.legend}
                  error={internalSupportError}
                  component='legend'
                >
                  Internal Support required
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
                      control={
                        <TealCheckbox
                          name='internalSup'
                          onChange={hendlChangeOther}
                        />
                      }
                      label='Other (specify)'
                      value='Other (specify)'
                    />
                  </FormGroup>
                  {internalSupportError && (
                    <FormHelperText error>
                      this information is required!
                    </FormHelperText>
                  )}
                </Grid>
                {other ? (
                  <Grid item xs={12}>
                    <CustomField
                      variant='outlined'
                      required
                      label='specify'
                      name='specify'
                      autoComplete='lname'
                      fullWidth
                      error={internalSupportSpcifyError}
                      helperText={
                        internalSupportSpcifyError && "Invalid specify"
                      }
                    />
                  </Grid>
                ) : (
                  ""
                )}
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
                  {fileOneError && (
                    <FormHelperText error>The file is required!</FormHelperText>
                  )}
                </Grid>
                <FormLabel className={classes.legend} component='legend'>
                  Event / project Concept Note
                </FormLabel>
                <Grid item xs={12}>
                  <FileBase64
                    multiple={false}
                    onDone={(base64) => {
                      setEventConcept(base64);
                    }}
                  />
                  {fileTwoError && (
                    <FormHelperText error>The file is required!</FormHelperText>
                  )}
                </Grid>
                <FormLabel className={classes.legend} component='legend'>
                  Attendees / Participants
                </FormLabel>
                <Grid item xs={12}>
                  <FileBase64
                    multiple={false}
                    onDone={(base64) => {
                      setAttendees(base64);
                    }}
                  />
                  {fileThreeError && (
                    <FormHelperText error>The file is required!</FormHelperText>
                  )}
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
