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
import IconButton from "@material-ui/core/IconButton";
import AlternateEmailIcon from "@material-ui/icons/AlternateEmail";
import CallIcon from "@material-ui/icons/Call";
import styles from "../../style.module.css";
import { connect } from "react-redux";

const useStyles = makeStyles((theme) => ({
  large: {
    width: theme.spacing(5),
    height: theme.spacing(5),
    color: " #00BFA5",
    [theme.breakpoints.down('sm')]: {
      width: theme.spacing(4),
      height: theme.spacing(4),
      color: " #00BFA5",
    },
  },
  leftName: {
    display: "flex",
    alignItems: "center",
    color: "#fff",
  },

  data: {
    fontSize: "1rem",
    fontWeight: "400",
    [theme.breakpoints.down('sm')]: {
      fontSize: "1rem",
    },
  },
  paperData: {
    borderBottom: "20px",
    borderRadius: "10px",
    height: "8rem;",
    display: "flex",
    alignItems: "center",
    justifyContent: 'center',
    [theme.breakpoints.down('sm')]: {
      height: "4rem;",
      justifyContent: 'space-around'

    },
  },

}));

function CompleteEdit({ profile, editProfile }) {
  const classes = useStyles();
  const { email, telephone } = profile;
  return (
    <>
      <Grid xs={12} style={{ paddingTop: '24px' }}>
        <Paper
          elevation={3}
          className={classes.paperData}
          style={{
            borderBottomLeftRadius: "0px",
            borderBottomRightRadius: "0px",
          }}
        >
          <Grid item xs={1} >
            <AlternateEmailIcon
              className={classes.large}
            />
          </Grid>

          <Grid item xs={10}>
            <Typography className={classes.data}>{email}</Typography>
          </Grid>

        </Paper>

        <Paper
          elevation={3}
          className={classes.paperData}
          style={{
            borderTopLeftRadius: "0px",
            borderTopRightRadius: "0px",
          }}
        >
          <Grid item xs={1} >
            <CallIcon className={classes.large} />
          </Grid >
          <Grid item xs={10}>
            <Typography className={classes.data}>{telephone}</Typography>
          </Grid>
        </Paper>

      </Grid>
    </>
  );
}

const mapStateToProps = (state) => {
  return {
    profile: state.profile,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    editProfile: () => dispatch(actions.editProfile()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CompleteEdit);
