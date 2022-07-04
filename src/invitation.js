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
import logo from "./img/logos.png";
import bginsc from "./img/backgroundimageleaveform.png";
import { withStyles } from "@material-ui/core/styles";
import { CardMedia } from "@material-ui/core";
// import Select from "@material-ui/core/Select";
// import InputLabel from "@material-ui/core/InputLabel";
// import { Pattern } from "./pattern";
import Modal from "./Modal";
// import { teal, grey, lightBlue } from "@material-ui/core/colors";
import "./translate/config";
import { grey } from "@material-ui/core/colors";

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

const Invitation = () => {
  const classes = useStyles();

  const [modal, setModal] = useState(false);
  const [category, setCategory] = React.useState();

  const [nameError, setnameError] = useState(false);
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
    setCategoryError(false);

    let x = 0;
    if (!formData.get("name")) {
      setnameError(false);
      x++;
    }
    if (!formData.get("category")) {
      setCategoryError(true);
      x++;
    }

    const obj = {
      name: formData.get("name"),
      choice: formData.get("category"),
    };

    console.log(x, obj);
    if (!x) {
      setLoading(true);
      console.log(obj);
      fetch("https://icescoapi.herokuapp.com/events", {
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
                  {/* <Grid item xs={12} sm={12}></Grid> */}
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
                  تتشرف
منظمة العالم الإسلامي للتربية والعلوم والثقافة
-- إيسيسكو -- 
بدعوتكم لحضور حفل إطلاق 
مشروع الشهادات الدولية المهنية في التدريس - الأربعاء 13 يوليو 2022 من الساعة الواحدة إلى الساعة الثانية والنصف ظهراً
                  </Typography>
                </Grid>

                

                <Grid item xs={12}>
                  <CustomField
                    autoComplete='name'
                    name='name'
                    variant='outlined'
                    required
                    id='name'
                    label='الاسم الكامل'
                    fullWidth
                    error={nameError}
                    helperText={nameError && "Field required"}
                  />
                </Grid>
                <FormLabel
                  className={classes.legend}
                  error={categoryError}
                  component='legend'
                >
                  هل ستحضر حفل التوقيع؟{" "}
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
                      label='نعم'
                      value='Yes'
                    />
                    <FormControlLabel
                      control={<CustomRadio name='category' />}
                      value='No'
                      label='لا'
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
                    {!loading && "Submit"}
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

export default Invitation;
