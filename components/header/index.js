import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Grid,
  Box,
  Avatar,
  Typography,
  Container,
  Paper,
  Button,
} from "@material-ui/core/";
import NotificationsIcon from "@material-ui/icons/Notifications";
import { deepPurple } from "@material-ui/core/colors";
import styles from "../style.module.css";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import CreateIcon from "@material-ui/icons/Create";
import { connect } from "react-redux";
import * as actions from "../../redux/actions";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    background: 'linear-gradient(270deg, #1A78C2 0%, #1A78C2 101.06%)',
    borderRadius: '10px',
    height: "8rem",
    display: 'flex',
    justifyContent: 'space-between',
    padding: '0 20px',
    alignItems: "center",
    [theme.breakpoints.down('sm')]: {
      height: "4em",
    },

  },
  large: {
    width: theme.spacing(10),
    height: theme.spacing(10),
    color: theme.palette.getContrastText(deepPurple[500]),
    backgroundColor: deepPurple[500],
    [theme.breakpoints.down('sm')]: {
      width: theme.spacing(5),
      height: theme.spacing(5),
      color: theme.palette.getContrastText(deepPurple[500]),
      backgroundColor: deepPurple[500],
    },
  },
  small: {
    width: theme.spacing(5),
    height: theme.spacing(5),
    color: theme.palette.getContrastText(deepPurple[500]),
    backgroundColor: deepPurple[500],
  },
  leftName: {
    display: "flex",
    alignItems: "center",
    color: "#fff",
    marginLeft: '1rem',
    [theme.breakpoints.down('sm')]: {
      fontSize: '1rem',
    },
  },

  email: {
    fontSize: "18px",
    fontWeight: "400",
  },

  paperData: {
    borderBottom: "20px",
    borderRadius: "10px",
    height: "17rem",
    display: "flex",
    padding: "0 20px",
    alignItems: "center",
  },
  styleHide: {
    [theme.breakpoints.down('sm')]: {
      display: 'none'
    },
  }
}));

function Header({ profile, edit, editProfile }) {
  const classes = useStyles();
  const { fullName, email, telephone } = profile;
  const initials = fullName.split(' ')
  return (
    <Container>
      <Grid container spacing={3}>
        <Grid
          item
          xs={12}
          style={{ display: "flex", justifyContent: "flex-end" }}
        >
          <IconButton style={{ marginRight: "25px", color: "#fff" }}>
            <NotificationsIcon />
          </IconButton>
          <Box className={styles.border} />
          <Button>
            <Avatar alt="avatar" className={classes.small} />
          </Button>
          <Box>
            <Typography id={styles.name} className={classes.styleHide}>

              {initials.length <= 1 ? initials[0] : `${initials[0]} ${initials[1].substr(0, 1).toUpperCase()}.`}
            </Typography>
          </Box>
        </Grid>

        <Grid item xs={12}>
          <Typography className={styles.textH}>Личный профиль</Typography>
          <Typography className={styles.textP}>
            Главная/личная страница
          </Typography>
        </Grid>

        <Grid xs={12}>
          <Paper className={classes.paper}>
            <Grid item xs={12} style={{ display: 'flex', justifyContent: 'flex-start' }}>
              <Avatar alt="Avatar" className={classes.large} />
              <Typography className={classes.leftName}>
                {fullName}
              </Typography>
            </Grid>

            <Grid item>
              {edit ? (
                <div style={{ display: 'flex' }}>
                  <Button style={{ color: "#fff" }} className={classes.styleHide} onClick={() => editProfile()}>
                    закрыть
                  </Button>
                  <IconButton style={{ color: "#fff" }} component="span" onClick={() => editProfile()}>
                    <CloseIcon />
                  </IconButton>
                </div>
              ) : (
                  <div style={{ display: 'flex' }}>
                    <Button style={{ color: "#fff" }} className={classes.styleHide} onClick={() => editProfile()}>
                      Редактировать
                  </Button>
                    <IconButton style={{ color: "#fff" }} component="span" onClick={() => editProfile()} >
                      <CreateIcon />
                    </IconButton>
                  </div>
                )}
            </Grid>
          </Paper>
        </Grid>
      </Grid>
    </Container >
  );
}

const mapStateToProps = (state) => {
  return {
    profile: state.profile,
    edit: state.edit,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    editProfile: () => dispatch(actions.editProfile()),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Header);
