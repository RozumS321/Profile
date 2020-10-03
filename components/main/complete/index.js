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
    width: theme.spacing(10),
    height: theme.spacing(10),
    color: theme.palette.getContrastText(deepPurple[500]),
    backgroundColor: deepPurple[500],
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
  },

  data: {
    fontSize: "18px",
    fontWeight: "400",
  },
  paperData: {
    borderBottom: "20px",
    borderRadius: "10px",
    height: " 122px;",
    display: "flex",
    padding: "0 20px",
    alignItems: "center",
  },
}));

function CompleteEdit(props) {
  const classes = useStyles();
  const { fullname, email, telephone } = props.profile;
  return (
    <>
      <Grid item xs={12}>
        <Paper
          elevation={3}
          className={classes.paperData}
          style={{
            borderBottomLeftRadius: "0px",
            borderBottomRightRadius: "0px",
          }}
        >
          <AlternateEmailIcon
            style={{ color: " #00BFA5", marginRight: "45px" }}
          />
          <Typography className={classes.data}>{email}</Typography>
        </Paper>

        <Paper
          elevation={3}
          className={classes.paperData}
          style={{
            borderTopLeftRadius: "0px",
            borderTopRightRadius: "0px",
          }}
        >
          <CallIcon style={{ color: " #00BFA5", marginRight: "45px" }} />
          <Typography className={classes.data}>{telephone}</Typography>
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

export default connect(mapStateToProps)(CompleteEdit);
