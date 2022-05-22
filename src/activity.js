import React, { useState } from "react";import Button from "@material-ui/core/Button";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import {
  Checkbox,
  CircularProgress,
  FormControlLabel,
  FormGroup,
  FormHelperText,
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
import {
  MuiThemeProvider,
  createTheme,
  jssPreset,
  StylesProvider,
} from "@material-ui/core/styles";
import Hidden from "@material-ui/core/Hidden";
import logo from "./img/logoISESCO.png";
import bginsc from "./img/backgroundimageleaveform.png";
import { withStyles } from "@material-ui/core/styles";
import { CardMedia } from "@material-ui/core"; // import Select from "@material-ui/core/Select";
// import InputLabel from "@material-ui/core/InputLabel";
// import { Pattern } from "./pattern";
import Modal from "./Modal";
import { DateTimePicker } from "@mui/lab";
import { teal, grey } from "@material-ui/core/colors";
import "./translate/activityConfig";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
// import FormHelperText from "@material-ui/core/FormHelperText";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import { useTranslation } from "react-i18next";
import i18next from "i18next";
import FileBase64 from "react-file-base64";
import rtl from "jss-rtl";
import { create } from "jss";

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
const TealCheckbox = withStyles({
  root: {
    color: teal[400],
    "&$checked": {
      color: teal[600],
    },
  },
  checked: {},
})((props) => <Checkbox color='default' {...props} />);
// const CustomRadio = withStyles({
//   root: {
//     color: grey[400],
//     "&$checked": {
//       color: grey[600],
//     },
//   },
//   checked: {},
// })((props) => <Radio color='default' {...props} />);
const TealRadio = withStyles({
  root: {
    color: teal[400],
    "&$checked": {
      color: teal[600],
    },
  },
  checked: {},
})((props) => <Radio color='default' {...props} />);
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
    display: "flex",
    justifyContent: "space-evenly",
  },
  checks2: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr ",
  },
  att: {
    color: grey["600"],
  },
  checks3: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr 1fr",
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
const jss = create({ plugins: [...jssPreset().plugins, rtl()] });

const Activity = () => {
  const classes = useStyles();
  const [value, setValue] = React.useState("internal");
  const [age, setAge] = React.useState("");
  const [rlt, setrlt] = useState(true);
  const handleChange = (event) => {
    setAge(event.target.value);
  };

  const handleTranslationChange = (event) => {
    setValue(event.target.value);
    console.log(value);
  };
  const [modal, setModal] = useState(false);
  // const [value, setValue] = React.useState("Virtual");
  // const [app, setApp] = React.useState("Virtual");
  const [value1, setValue1] = React.useState("");
  const [paperAttendance, setpaperAttendance] = React.useState();
  const [agendaAttendance, setagendaAttendance] = React.useState();
  const [prottendance, setproAttendance] = React.useState();

  const [nameError, setnameError] = useState(false);
  const [DateError, setDateError] = useState(false);
  const [placeError, setplaceError] = useState(false);
  const [organisationError, setorganisationError] = useState(false);
  const [organizerError, setorganizerError] = useState(false);
  const [languageError, setlanguageError] = useState(false);
  const [translationError, settranslationError] = useState(false);
  const [actionError, setactionError] = useState(false);
  const [contactError, setcontactError] = useState(false);
  const [phoneError, setphoneError] = useState(false);
  const [emailError, setemailError] = useState(false);
  const [att1Error, setatt1Error] = useState(false);
  const [att2Error, setatt2Error] = useState(false);
  const [att3Error, setatt3Error] = useState(false);
  const [zoomLinkError, setzoomLinkError] = useState(false);

  const [loading, setLoading] = useState(false);
  const [feedback, setFeedback] = useState({ open: false });

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    setnameError(false);
    setDateError(false);
    setplaceError(false);
    setactionError(false);
    setorganisationError(false);
    setorganizerError(false);
    setlanguageError(false);
    settranslationError(false);
    setcontactError(false);
    setemailError(false);
    setphoneError(false);
    setzoomLinkError(false);
    setatt1Error(false);
    setatt2Error(false);
    setatt3Error(false);

    let x = 0;
    if (!formData.get("name")) {
      setnameError(true);
      x++;
    }
    if (!formData.get("date")) {
      setDateError(true);
      x++;
    }
    if (!formData.get("lieu")) {
      setplaceError(true);
      x++;
    }
    if (!formData.getAll("format").join(",")) {
      setorganisationError(true);
      x++;
    }
    if (!formData.get("organizer")) {
      setorganizerError(true);
      x++;
    }
    if (!formData.getAll("language").join(",")) {
      setlanguageError(true);
      x++;
    }
    if (!formData.get("translation")) {
      settranslationError(true);
      x++;
    }
    if (!formData.getAll("actionRequired").join(",")) {
      setactionError(true);
      x++;
    }
    if (!formData.get("contact")) {
      setcontactError(true);
      x++;
    }
    if (!formData.get("phone")) {
      setphoneError(true);
      x++;
    }
    if (!formData.get("email")) {
      setemailError(true);
      x++;
    }
    if (!paperAttendance) {
      setatt1Error(true);
      x++;
    }
    if (!agendaAttendance) {
      setatt2Error(true);
      x++;
    }
    if (!prottendance) {
      setatt3Error(true);
      x++;
    }
    if (!formData.get("zoomlink")) {
      setzoomLinkError(true);
      x++;
    }
    document.body.setAttribute("dir", rlt ? "rlt" : "");
    const obj = {
      name: formData.get("name"),
      date: formData.get("date"),
      lieu: formData.get("lieu"),
      organisation: formData.getAll("format").join(","),
      organizer: formData.get("organizer"),
      language: formData.getAll("language").join(","),
      translation: formData.get("translation"),
      actionRequired: formData.getAll("actionRequired").join(","),
      contact: formData.get("contact"),
      email: formData.get("email"),
      phone: formData.get("phone"),
      zoomLink: formData.get("zoomlink"),
      meetingpassword: formData.get("meetingpassword"),
      workingPaper: paperAttendance,
      agenda: agendaAttendance,
      programme: prottendance,
    };
    setrlt("rlt");
    console.log(x, obj);
    if (!x) {
      setLoading(true);
      console.log(obj);
      fetch("http://localhost:8080/activities", {
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
    <StylesProvider jss={jss}>
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
                <Grid
                  dir={rlt ? "rlt" : ""}
                  className={classes.right}
                  container
                  sm={6}
                >
                  <Grid dir={rlt ? "rlt" : ""} item xs={12}>
                    <Typography
                      color='textSecondary'
                      align='center'
                      component='h1'
                      variant='h6'
                    >
                      {t("title")}
                    </Typography>
                  </Grid>
                  <Grid item xs={12}>
                    <CustomField
                      name='name'
                      variant='outlined'
                      required
                      label={t("activityName")}
                      autoFocus
                      fullWidth
                      error={nameError}
                      helperText={nameError && t("error")}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <LocalizationProvider dateAdapter={AdapterDateFns}>
                      <DateTimePicker
                        label={t("date")}
                        // inputFormat='MM/dd/yyyy'
                        value={value1}
                        onChange={(newValue) => {
                          setValue1(newValue);
                        }}
                        renderInput={(params) => (
                          <CustomField
                            dir={rlt ? "rlt" : ""}
                            {...params}
                            fullWidth
                            name='date'
                            variant='outlined'
                            required
                            error={DateError}
                            helperText={DateError && t("error")}
                          />
                        )}
                      />
                    </LocalizationProvider>
                  </Grid>
                  <Grid item xs={12}>
                    <CustomField
                      name='lieu'
                      variant='outlined'
                      required
                      id='title'
                      label={t("venue")}
                      fullWidth
                      error={placeError}
                      helperText={placeError && t("error")}
                    />
                  </Grid>
                  <FormLabel
                    error={organisationError}
                    className={classes.legend}
                    component='legend'
                  >
                    {t("format")}
                  </FormLabel>
                  <Grid xs={12} container>
                    <FormGroup name='format' className={classes.checks2}>
                      <FormControlLabel
                        control={<TealCheckbox name='format' />}
                        label={t("facetoface")}
                        value={t("facetoface")}
                      />

                      <FormControlLabel
                        control={<TealCheckbox name='format' />}
                        label={t("virtual")}
                        value={t("virtual")}
                      />
                    </FormGroup>
                  </Grid>
                  {organisationError && (
                    <FormHelperText error>{t("error")}</FormHelperText>
                  )}
                  <Grid item xs={12}>
                    <CustomField
                      name='organizer'
                      variant='outlined'
                      required
                      id='title'
                      label={t("organizingParties")}
                      fullWidth
                      error={organizerError}
                      helperText={organizerError && t("error")}
                    />
                  </Grid>
                  <FormLabel
                    error={languageError}
                    className={classes.legend}
                    component='legend'
                  >
                    {t("workinglanguages")}
                  </FormLabel>
                  <Grid xs={12} container>
                    <FormGroup name='language' className={classes.checks3}>
                      <FormControlLabel
                        control={<TealCheckbox name='language' />}
                        label={t("arabic")}
                        value={t("arabic")}
                      />

                      <FormControlLabel
                        control={<TealCheckbox name='language' />}
                        label={t("french")}
                        value={t("french")}
                      />
                      <FormControlLabel
                        control={<TealCheckbox name='language' />}
                        label={t("english")}
                        value={t("english")}
                      />
                    </FormGroup>
                    {languageError && (
                      <FormHelperText error>{t("error")}</FormHelperText>
                    )}
                  </Grid>
                  <FormLabel
                    error={translationError}
                    className={classes.legend}
                    component='legend'
                  >
                    {t("simultaneousInterpretation")}
                  </FormLabel>
                  <Grid item xs={12}>
                    <RadioGroup
                      aria-label='translation'
                      name='translation'
                      value={value}
                      className={classes.checks2}
                      onChange={handleTranslationChange}
                    >
                      <FormControlLabel
                        value={t("yes")}
                        control={<TealRadio name='translation' />}
                        label={t("yes")}
                      />
                      <FormControlLabel
                        value={t("no")}
                        control={<TealRadio name='translation' />}
                        label={t("no")}
                      />
                    </RadioGroup>
                    {translationError && (
                      <FormHelperText error>{t("error")}</FormHelperText>
                    )}
                  </Grid>
                  <FormLabel
                    error={actionError}
                    className={classes.legend}
                    component='legend'
                  >
                    {t("tequiredActionFromTheCommission")}
                  </FormLabel>
                  <Grid xs={12} container>
                    <FormGroup name='actionRequired'>
                      <FormControlLabel
                        control={<TealCheckbox name='actionRequired' />}
                        label={t("virtualParticipationOfTheCommission")}
                        value={t("virtualParticipationOfTheCommission")}
                      />

                      <FormControlLabel
                        control={<TealCheckbox name='actionRequired' />}
                        label={t("suggestionOfParticipants")}
                        value={t("suggestionOfParticipants")}
                      />
                      <FormControlLabel
                        control={<TealCheckbox name='actionRequired' />}
                        label={t("disseminationAmongConcernedParties")}
                        value={t("disseminationAmongConcernedParties")}
                      />
                    </FormGroup>
                  </Grid>
                  {actionError && (
                    <FormHelperText error>{t("error")}</FormHelperText>
                  )}
                  <Grid item xs={12}>
                    <CustomField
                      name='contact'
                      variant='outlined'
                      required
                      id='contact'
                      label={t("contactParty")}
                      fullWidth
                      error={contactError}
                      helperText={contactError && t("error")}
                    />
                  </Grid>

                  <Grid item xs={12}>
                    <CustomField
                      name='email'
                      variant='outlined'
                      required
                      label={t("email")}
                      fullWidth
                      error={emailError}
                      helperText={emailError && t("error")}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <CustomField
                      name='phone'
                      variant='outlined'
                      required
                      label={t("mobile")}
                      fullWidth
                      error={phoneError}
                      helperText={phoneError && t("error")}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <Typography
                      className={classes.att}
                      component='h1'
                      variant='h5'
                    >
                      {t("attachments")}
                    </Typography>
                  </Grid>
                  <FormLabel
                    error={att1Error}
                    className={classes.legend}
                    component='legend'
                  >
                    {t("workingPaper")}
                  </FormLabel>
                  <Grid item xs={12}>
                    <FileBase64
                      multiple={false}
                      onDone={(base64) => {
                        setpaperAttendance(base64);
                      }}
                    />
                    {att1Error && (
                      <FormHelperText error>{t("error")}</FormHelperText>
                    )}
                  </Grid>
                  <FormLabel
                    error={att2Error}
                    className={classes.legend}
                    component='legend'
                  >
                    {t("agenda")}
                  </FormLabel>
                  <Grid item xs={12}>
                    <FileBase64
                      multiple={false}
                      onDone={(base64) => {
                        setagendaAttendance(base64);
                      }}
                    />
                    {att2Error && (
                      <FormHelperText error>{t("error")}</FormHelperText>
                    )}
                  </Grid>
                  <FormLabel
                    error={att1Error}
                    className={classes.legend}
                    component='legend'
                  >
                    {t("programme")}
                  </FormLabel>
                  <Grid item xs={12}>
                    <FileBase64
                      multiple={false}
                      onDone={(base64) => {
                        setproAttendance(base64);
                      }}
                    />
                    {att3Error && (
                      <FormHelperText error>{t("error")}</FormHelperText>
                    )}
                  </Grid>
                  <Grid item xs={12}>
                    <CustomField
                      name='zoomlink'
                      variant='outlined'
                      required
                      label={t("ZoomLink")}
                      fullWidth
                      error={zoomLinkError}
                      helperText={zoomLinkError && t("error")}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <CustomField
                      name='meetingpassword'
                      variant='outlined'
                      label={t("meetingpassword")}
                      fullWidth
                    />
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
    </StylesProvider>
  );
};

export default Activity;
