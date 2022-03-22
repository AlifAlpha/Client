import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import {
  // Checkbox,
  CircularProgress,
  //   FormHelperText,
  FormControlLabel,
  Radio,
  RadioGroup,
  Snackbar,
  FormLabel,
  TextareaAutosize,
  FormHelperText,
  Checkbox,
  InputLabel,
  Select,
  FormControl,
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
import logo2 from "./img/ICESCOYouth.png";
// import logo from "./img/logoISESCO.png";
import bginsc from "./img/backgroundimageYouth.png";
import { withStyles } from "@material-ui/core/styles";
import { CardMedia } from "@material-ui/core";
// import Select from "@material-ui/core/Select";
// import InputLabel from "@material-ui/core/InputLabel";
// import { Pattern } from "./pattern";
import Modal from "./Modal";
// import { teal, grey, lightBlue } from "@material-ui/core/colors";
import "./translate/config";
// import InputLabel from "@material-ui/core/InputLabel";
// import MenuItem from "@material-ui/core/MenuItem";
import { grey, teal } from "@material-ui/core/colors";
import FileBase64 from "react-file-base64";
import rtl from "jss-rtl";
import { create } from "jss";

import { useTranslation } from "react-i18next";
import { LocalizationProvider, MobileDatePicker } from "@mui/lab";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
// import i18next from "i18next";
// const languages = [
//   {
//     code: "fr",
//     name: "Français",
//     country_code: "fr",
//   },
//   {
//     code: "en",
//     name: "English",
//     country_code: "gb",
//   },
//   {
//     code: "ar",
//     name: "العربية",
//     dir: "rtl",
//     country_code: "sa",
//   },
// ];

const background = createTheme({
  direction: "rtl",
  overrides: {
    MuiCssBaseline: {
      "@global": {
        body: {
          // backgroundColor: "#d3d3d3",
          background: `url(${bginsc}) `,
          // opacity: "20%",
          // backgroundPosition: "center",
          // backgroundRepeat: "no-repeat",
          // backgroundSize: " cover",
          // backgroundAttachment: "fixed",
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
    marginTop: theme.spacing(6),
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
const Nomination = () => {
  const classes = useStyles();
  //   const [age, setAge] = React.useState("");

  //   const handleChange = (event) => {
  //     setAge(event.target.value);
  //   };
  // const rtlTheme = createTheme({ direction: "rtl" });
  const [modal, setModal] = useState(false);
  const [category, setCategory] = React.useState();
  const [start, setStart] = React.useState("");

  const [certif, setcetif] = useState("");
  const [idetite, setidetite] = useState("");
  const [cv, setcv] = useState("");
  const [exp, setexp] = useState("");
  const [recommand, setrecommand] = useState("");

  const [certifError, setcertifError] = useState(false);
  const [idetiteError, setidetiteError] = useState(false);
  const [cvError, setcvError] = useState(false);
  const [expError, setexpError] = useState(false);
  const [recommandError, setrecommandError] = useState(false);

  const [checkError, setcheckError] = useState(false);

  const [loading, setLoading] = useState(false);
  const [feedback, setFeedback] = useState({ open: false });

  const handleChangeCategory = (event) => {
    setCategory(event.target.value);
    console.log(category);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let checked = document.querySelector("#ok").checked;
    const formData = new FormData(e.target);
    setcertifError(false);
    setidetiteError(false);
    setexpError(false);
    setcvError(false);
    setcheckError(false);
    // setcountryError(false);
    // setAddressError(false);
    // setTelOfficeError(false);
    // setEmailOfficeError(false);
    // setCategoryError(false);

    let x = 0;

    if (!checked) {
      setcheckError(true);

      x++;
    }
    if (certif === "") {
      setcertifError(true);
      x++;
    }
    if (idetite === "") {
      setidetiteError(true);
      x++;
    }
    if (cv === "") {
      setcvError(true);
      x++;
    }
    if (exp === "") {
      setexpError(true);
      x++;
    }
    if (recommand === "") {
      setrecommandError(true);
      x++;
    }
    // if (!formData.get("country")) {
    //   setcountryError(true);
    //   x++;
    // }
    // if (!formData.get("address")) {
    //   setAddressError(true);
    //   x++;
    // }
    // if (!formData.get("telOffice")) {
    //   setTelOfficeError(true);
    //   x++;
    // }
    // if (!formData.get("emailOffice")) {
    //   setEmailOfficeError(true);
    //   x++;
    // }
    // if (!formData.get("category")) {
    //   setCategoryError(true);
    //   x++;
    // }
    document.body.setAttribute("dir", "rtl");
    const obj = {
      firstname: formData.get("firstname"),
      lastname: formData.get("lastname"),
      birth: formData.get("birth"),
      nationality: formData.get("nationality"),
      residence: formData.get("residence"),
      sex: formData.get("sex"),
      phone: formData.get("phone"),
      email: formData.get("email"),
      certificates: formData.get("certificates"),
      reason: formData.get("reason"),
      experience: formData.get("experience"),
      recommandName: formData.get("recommandName"),
      recommandPhone: formData.get("recommandPhone"),
      recommandEmail: formData.get("recommandEmail"),

      certif: certif,
      idetite: idetite,
      cv: cv,
      exp: exp,
      recommand: recommand,
    };

    console.log(x, obj);
    if (!x) {
      setLoading(true);
      console.log(obj);
      fetch("https://icescoapi.herokuapp.com/nomination", {
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
        setcetif("");
        setcv("");
        setidetite("");
        setexp("");
        setrecommand("");
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
        {/* <ThemeProvider theme={rtlTheme}> */}
        <Container component='main' maxWidth='md'>
          <CssBaseline />
          <div className={classes.paper}>
            <form className={classes.form} onSubmit={handleSubmit} noValidate>
              <Grid container className={classes.container}>
                <Hidden only={["xs"]}>
                  <Grid className={classes.left} container sm={6}>
                    {/* <Grid item xs={12} sm={12}></Grid> */}
                    <Grid className={classes.mar} item xs={12}>
                      <CardMedia
                        component='img'
                        alt='Contemplative Reptile'
                        image={logo2}
                      />
                    </Grid>
                    <Grid className={classes.mar} item xs={12}>
                      <CardMedia
                        component='img'
                        alt='Contemplative Reptile'
                        image={logo2}
                      />
                    </Grid>
                    <Grid className={classes.mar} item xs={12}>
                      <CardMedia
                        component='img'
                        alt='Contemplative Reptile'
                        image={logo2}
                      />
                    </Grid>
                  </Grid>
                </Hidden>
                <Grid dir='rtl' className={classes.right} container sm={6}>
                  <Grid item xs={12}>
                    <Typography
                      color='textSecondary'
                      align='center'
                      component='h1'
                      variant='h3'
                    >
                      {t("titln")}
                    </Typography>
                    <Typography
                      color='textSecondary'
                      align='center'
                      component='h1'
                      variant='h4'
                    >
                      دورة 2022
                    </Typography>
                  </Grid>
                  <Grid item xs={12}>
                    <Typography
                      dir='rtl'
                      color='textSecondary'
                      // align='center'
                      component='h1'
                      variant='h5'
                    >
                      {t("info1")}
                    </Typography>
                  </Grid>
                  <Grid dir='rtl' item xs={12}>
                    <CustomField
                      name='firstname'
                      variant='outlined'
                      required
                      id='name'
                      label={t("firstname")}
                      fullWidth
                      // error={nameError}
                      // helperText={nameError && "Field required"}
                    />
                  </Grid>

                  <Grid item xs={12}>
                    <CustomField
                      name='lastname'
                      variant='outlined'
                      required
                      id='name'
                      label={t("lastname")}
                      fullWidth
                      // error={nameError}
                      // helperText={nameError && "Field required"}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <LocalizationProvider dateAdapter={AdapterDateFns}>
                      <MobileDatePicker
                        label={t("birth")}
                        inputFormat='MM/dd/yyyy'
                        value={start}
                        onChange={(newValue) => {
                          setStart(newValue);
                        }}
                        renderInput={(params) => (
                          <CustomField
                            {...params}
                            fullWidth
                            name='birth'
                            variant='outlined'
                          />
                        )}
                      />
                    </LocalizationProvider>
                  </Grid>
                  <Grid item xs={12}>
                    <CustomField
                      name='nationality'
                      variant='outlined'
                      required
                      id='title'
                      label={t("nationalityn")}
                      fullWidth
                      // error={nationalityError}
                      // helperText={nationalityError && "Field required"}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <CustomField
                      name='residence'
                      variant='outlined'
                      required
                      label={t("residence")}
                      fullWidth
                      // error={occupationError}
                      // helperText={occupationError && "Field required"}
                    />
                  </Grid>
                  <FormLabel
                    className={classes.legend}
                    //   error={categoryError}
                    component='legend'
                  >
                    {t("sex")}
                  </FormLabel>
                  <Grid xs={12} container>
                    <RadioGroup
                      aria-label='sex'
                      name='sex'
                      value={category}
                      className={classes.checks2}
                      onChange={handleChangeCategory}
                    >
                      <FormControlLabel
                        control={<CustomRadio name='sex' />}
                        label={t("man")}
                        value={t("man")}
                      />
                      <FormControlLabel
                        control={<CustomRadio name='sex' />}
                        value={t("women")}
                        label={t("women")}
                      />
                      {/* {categoryError && (
                      <FormHelperText error>
                        this information is required!
                      </FormHelperText>
                    )} */}
                    </RadioGroup>
                  </Grid>
                  <Grid item xs={12}>
                    <CustomField
                      name='phone'
                      variant='outlined'
                      required
                      label={t("phone")}
                      fullWidth
                      // error={countryError}
                      // helperText={countryError && "Field required"}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <CustomField
                      name='email'
                      variant='outlined'
                      required
                      id='FlightComing'
                      label={t("email")}
                      fullWidth
                      // error={addressError}
                      // helperText={addressError && "Field required"}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <Typography
                      dir='rtl'
                      color='textSecondary'
                      // align='center'
                      component='h1'
                      variant='h5'
                    >
                      {t("info2")}
                    </Typography>
                  </Grid>
                  <Grid item xs={12}>
                    <FormControl
                      fullWidth
                      variant='outlined'
                      className={classes.formControl}
                    >
                      <InputLabel htmlFor='outlined-age-native-simple'>
                        {t("certificates")}
                      </InputLabel>
                      <Select
                        name='certificates'
                        native
                        inputProps={{
                          id: "ERRRRRR",
                        }}
                        fullWidth
                        label={t("certificates")}
                      >
                        <option value=''></option>
                        <option value='البكالوريوس'>البكالوريوس</option>
                        <option value='الماستر'>الماستر</option>
                        <option value='دكتوراه'>دكتوراه</option>
                      </Select>
                    </FormControl>
                  </Grid>
                  <FormLabel
                    className={classes.legend}
                    //   error={categoryError}
                    component='legend'
                    dir='rtl'
                  >
                    {t("reason")}
                  </FormLabel>
                  <Grid item xs={12}>
                    <TextareaAutosize
                      name='reason'
                      placeholder={t("reasoninfo")}
                      aria-label='minimum height'
                      minRows={3}
                      style={{ width: "100%" }}
                      inputStyle={{ width: "100%" }}
                      dir='rtl'
                    />
                  </Grid>
                  <FormLabel
                    dir='rtl'
                    className={classes.legend}
                    component='legend'
                  >
                    {t("experience")}
                  </FormLabel>
                  <Grid item xs={12}>
                    <TextareaAutosize
                      name='experience'
                      placeholder={t("experienceinfo")}
                      aria-label='minimum height'
                      minRows={3}
                      style={{ width: "100%" }}
                      inputStyle={{ width: "100%" }}
                      dir='rtl'
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <Typography
                      dir='rtl'
                      color='textSecondary'
                      component='h1'
                      variant='h5'
                    >
                      {t("info3")}
                    </Typography>
                  </Grid>
                  <Grid item xs={12}>
                    <CustomField
                      name='recommandName'
                      variant='outlined'
                      id='title'
                      label={t("recommandName")}
                      fullWidth
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <CustomField
                      name='recommandPhone'
                      variant='outlined'
                      id='title'
                      label={t("recommandPhone")}
                      fullWidth
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <CustomField
                      // autoComplete='departureFlightNum'
                      name='recommandEmail'
                      variant='outlined'
                      label={t("recommandEmail")}
                      fullWidth
                    />
                  </Grid>

                  <Grid dir='rtl' item xs={12}>
                    <Typography
                      dir='rtl'
                      color='textSecondary'
                      // align='center'
                      component='h1'
                      variant='h5'
                    >
                      {t("attr")}
                    </Typography>
                  </Grid>
                  <FormLabel
                    dir='rtl'
                    className={classes.legend}
                    component='legend'
                  >
                    {t("attr5")}
                  </FormLabel>
                  <Grid item xs={12}>
                    <FileBase64
                      multiple={false}
                      onDone={(base64) => {
                        setrecommand(base64);
                      }}
                    />
                    {recommandError && (
                      <FormHelperText error>{t("attrError")}</FormHelperText>
                    )}
                  </Grid>
                  <FormLabel
                    dir='rtl'
                    className={classes.legend}
                    component='legend'
                  >
                    {t("attr1")}
                  </FormLabel>
                  <Grid item xs={12}>
                    <FileBase64
                      multiple={false}
                      onDone={(base64) => {
                        setcetif(base64);
                      }}
                    />
                    {certifError && (
                      <FormHelperText error>{t("attrError")}</FormHelperText>
                    )}
                  </Grid>
                  <FormLabel
                    dir='rtl'
                    className={classes.legend}
                    component='legend'
                  >
                    {t("attr2")}
                  </FormLabel>
                  <Grid item xs={12}>
                    <FileBase64
                      multiple={false}
                      onDone={(base64) => {
                        setidetite(base64);
                      }}
                    />
                    {idetiteError && (
                      <FormHelperText error>{t("attrError")}</FormHelperText>
                    )}
                  </Grid>
                  <FormLabel
                    dir='rtl'
                    className={classes.legend}
                    component='legend'
                  >
                    {t("attr3")}
                  </FormLabel>
                  <Grid item xs={12}>
                    <FileBase64
                      multiple={false}
                      onDone={(base64) => {
                        setcv(base64);
                      }}
                    />
                    {cvError && (
                      <FormHelperText error>{t("attrError")}</FormHelperText>
                    )}
                  </Grid>
                  <FormLabel
                    dir='rtl'
                    className={classes.legend}
                    component='legend'
                  >
                    {t("attr4")}
                  </FormLabel>
                  <Grid item xs={12}>
                    <FileBase64
                      multiple={false}
                      onDone={(base64) => {
                        setexp(base64);
                      }}
                    />
                    {expError && (
                      <FormHelperText error>{t("attrError")}</FormHelperText>
                    )}
                  </Grid>
                  <Grid xs={12} className={classes.checks4} container>
                    <FormControlLabel
                      control={<TealCheckbox id='ok' />}
                      label={
                        <FormHelperText required error={checkError}>
                          أقر بأن جميع المعلومات التي ذكرتها في الاستمارة صحيحة
                          ودقيقة. أتحمل كامل المسؤولية القانونية عن صحة الوثائق
                          المرفقة و دقتها
                        </FormHelperText>
                      }
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
        {/* </ThemeProvider> */}
      </MuiThemeProvider>
    </StylesProvider>
  );
};

export default Nomination;
