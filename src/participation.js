import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import {
  // Checkbox,
  CircularProgress,
  FormHelperText,
  FormControlLabel,
  Radio,
  RadioGroup,
  Snackbar,
  FormLabel,
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
// import { teal, grey, lightBlue } from "@material-ui/core/colors";
import "./translate/config";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import { grey } from "@material-ui/core/colors";

// import FormHelperText from "@material-ui/core/FormHelperText"  ;
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

const CustomRadio = withStyles({
  root: {
    color: grey[400],
    "&$checked": {
      color: grey[600],
    },
  },
  checked: {},
})((props) => <Radio color='default' {...props} />);

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

const Participation = () => {
  const classes = useStyles();
  const [age, setAge] = React.useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  const [modal, setModal] = useState(false);
  const [category, setCategory] = React.useState();

  const [nameError, setnameError] = useState(false);
  const [dateError, setDateError] = useState(false);
  const [nationalityError, setNationalityError] = useState(false);
  const [occupationError, setOccupationError] = useState(false);
  const [countryError, setcountryError] = useState(false);
  const [addressError, setAddressError] = useState(false);
  const [telOfficeError, setTelOfficeError] = useState(false);
  const [emailOfficeError, setEmailOfficeError] = useState(false);
  const [categoryError, setCategoryError] = useState(false);

  const [loading, setLoading] = useState(false);
  const [feedback, setFeedback] = useState({ open: false });

  const handleChangeCategory = (event) => {
    setCategory(event.target.value);
    console.log(category);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    setnameError(false);
    setDateError(false);
    setNationalityError(false);
    setOccupationError(false);
    setcountryError(false);
    setAddressError(false);
    setTelOfficeError(false);
    setEmailOfficeError(false);
    setCategoryError(false);

    let x = 0;
    if (!formData.get("fullname")) {
      setnameError(false);
      x++;
    }
    if (!formData.get("dateB")) {
      setDateError(false);
      x++;
    }
    if (!formData.get("nationality")) {
      setNationalityError(true);
      x++;
    }
    if (!formData.get("occupation")) {
      setOccupationError(true);
      x++;
    }
    if (!formData.get("country")) {
      setcountryError(true);
      x++;
    }
    if (!formData.get("address")) {
      setAddressError(true);
      x++;
    }
    if (!formData.get("telOffice")) {
      setTelOfficeError(true);
      x++;
    }
    if (!formData.get("emailOffice")) {
      setEmailOfficeError(true);
      x++;
    }
    if (!formData.get("category")) {
      setCategoryError(true);
      x++;
    }

    const obj = {
      namelatin: formData.get("fullname"),
      datepLace: formData.get("dateB"),
      nationality: formData.get("nationality"),
      occupation: formData.get("occupation"),
      country: formData.get("country"),
      adress: formData.get("address"),
      teloffice: formData.get("telOffice"),
      telmobile: formData.get("telMobile"),
      emailoffice: formData.get("emailOffice"),
      emailpersonal: formData.get("emailPersonal"),
      category: formData.get("category"),
    };

    console.log(x, obj);
    if (!x) {
      setLoading(true);
      console.log(obj);
      fetch("https://icescoapi.herokuapp.com/participation", {
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
                    variant='h5'
                  >
                    {t("titlep")}
                  </Typography>
                </Grid>

                <Grid item xs={12}>
                  <CustomField
                    autoComplete='name'
                    name='fullname'
                    variant='outlined'
                    required
                    id='name'
                    label={t("fullName")}
                    fullWidth
                    error={nameError}
                    helperText={nameError && "Field required"}
                  />
                </Grid>
                <Grid item xs={12}>
                  <CustomField
                    autoComplete='name'
                    name='dateB'
                    variant='outlined'
                    required
                    id='name'
                    label={t("datePlacebirth")}
                    fullWidth
                    error={dateError}
                    helperText={dateError && "Field required"}
                  />
                </Grid>

                <Grid item xs={12}>
                  <CustomField
                    autoComplete='title'
                    name='nationality'
                    variant='outlined'
                    required
                    id='title'
                    label={t("nationality")}
                    fullWidth
                    error={nationalityError}
                    helperText={nationalityError && "Field required"}
                  />
                </Grid>

                <Grid item xs={12}>
                  <CustomField
                    autoComplete='FlightComing'
                    name='occupation'
                    variant='outlined'
                    required
                    label={t("occupation")}
                    fullWidth
                    error={occupationError}
                    helperText={occupationError && "Field required"}
                  />
                </Grid>
                <Grid item xs={12}>
                  <CustomField
                    autoComplete='country'
                    name='country'
                    variant='outlined'
                    required
                    id='name'
                    label={t("countryp")}
                    fullWidth
                    error={countryError}
                    helperText={countryError && "Field required"}
                  />
                </Grid>
                <Grid item xs={12}>
                  <CustomField
                    autoComplete='FlightComing'
                    name='address'
                    variant='outlined'
                    required
                    id='FlightComing'
                    label={t("Address")}
                    fullWidth
                    error={addressError}
                    helperText={addressError && "Field required"}
                  />
                </Grid>
                <Grid item xs={12}>
                  <CustomField
                    autoComplete='departureFlightNum'
                    name='telOffice'
                    variant='outlined'
                    required
                    id='title'
                    label={t("telOffice")}
                    fullWidth
                    error={telOfficeError}
                    helperText={telOfficeError && "Field required"}
                  />
                </Grid>
                <Grid item xs={12}>
                  <CustomField
                    autoComplete='departureFlightNum'
                    name='telMobile'
                    variant='outlined'
                    id='title'
                    label={t("telMobile")}
                    fullWidth
                  />
                </Grid>

                <Grid item xs={12}>
                  <CustomField
                    autoComplete='departureFlightNum'
                    name='emailOffice'
                    variant='outlined'
                    required
                    id='title'
                    label={t("emailOffice")}
                    fullWidth
                    error={emailOfficeError}
                    helperText={emailOfficeError && "Field required"}
                  />
                </Grid>
                <Grid item xs={12}>
                  <CustomField
                    autoComplete='departureFlightNum'
                    name='emailPersonal'
                    variant='outlined'
                    id='title'
                    label={t("emailPersonal")}
                    fullWidth
                  />
                </Grid>
                <FormLabel
                  className={classes.legend}
                  error={categoryError}
                  component='legend'
                >
                  {t("category")}
                </FormLabel>
                <Grid xs={12} container>
                  <RadioGroup
                    aria-label='category'
                    name='category'
                    value={category}
                    className={classes.checks2}
                    onChange={handleChangeCategory}
                  >
                    <FormControlLabel
                      control={<CustomRadio name='category' />}
                      label={t("headDelegation")}
                      value={t("headDelegation")}
                    />
                    <FormControlLabel
                      control={<CustomRadio name='category' />}
                      value={t("memberDelegation")}
                      label={t("memberDelegation")}
                    />
                    <FormControlLabel
                      control={<CustomRadio name='category' />}
                      value={t("ITfocalpoint")}
                      label={t("ITfocalpoint")}
                    />
                    <FormControlLabel
                      control={<CustomRadio name='category' />}
                      value={t("Organisation")}
                      label={t("Organisation")}
                    />
                    {categoryError && (
                      <FormHelperText error>
                        this information is required!
                      </FormHelperText>
                    )}
                  </RadioGroup>
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

export default Participation;
