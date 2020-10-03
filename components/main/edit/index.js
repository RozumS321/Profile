import { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Grid,
  Box,
  Avatar,
  Typography,
  Container,
  Paper,
  Button,
  TextField,
} from "@material-ui/core/";
import NotificationsIcon from "@material-ui/icons/Notifications";
import { deepPurple } from "@material-ui/core/colors";
import CreateIcon from "@material-ui/icons/Create";
import IconButton from "@material-ui/core/IconButton";
import AssignmentIndIcon from "@material-ui/icons/AssignmentInd";
import AlternateEmailIcon from "@material-ui/icons/AlternateEmail";
import CallIcon from "@material-ui/icons/Call";
import styles from "../../style.module.css";
import { connect } from "react-redux";
import * as actions from "../../../redux/actions";

const useStyles = makeStyles((theme) => ({
  paper: {
    display: "flex",
    justifyContent: "space-around",
  },
  icon: {
    color: "#00BFA5",
  },
  email: {
    fontSize: "18px",
    fontWeight: "400",
  },
  paperData: {
    borderRadius: "10px",
    height: " 122px;",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-around",
    boxShadow:
      "0px 3px 3px -2px rgba(0,0,0,0.2), 0px 3px 4px 0px rgba(0,0,0,0.14), 0px 1px 2px 0px rgba(0,0,0,0.12)",
  },
  save: {
    borderRadius: "36px",
    background: "#01BDA7",
    color: "#fff",
    width: "212px",
    height: "49px",
    fontSize: "14px",
    textTransform: "none",
    fontWeight: "600",
    "&:hover": {
      background: "#01BDA7",
    },
  },
  input: {
    "&::placeholder": {
      color: "blue",
      fontSize: "10px",
    },
  },
}));

function Edit({ editData, profile }) {
  const classes = useStyles();
  const [profileData, setProfileData] = useState({});
  const [validError, setValidError] = useState(false);
  const onValueChange = (type) => {
    return (e) => {
      if (type === "fullName") {
        let nameArr = e.target.value.split(",");
        if (nameArr.length > 1) {
          setProfileData({ ...profileData, fullName: nameArr });
        }
        setValidError(true);
      }
      setProfileData({ ...profileData, [type]: e.target.value });
    };
  };
  const submitEdit = (e) => {
    e.preventDefault();
    editData(profileData);
  };
  return (
    <>
      <Grid item xs={12}>
        <form onSubmit={submitEdit}>
          <Paper
            elevation={3}
            className={classes.paperData}
            style={{
              borderBottomLeftRadius: "0px",
              borderBottomRightRadius: "0px",
            }}
          >
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <div>
                <AssignmentIndIcon
                  fontSize="large"
                  className={classes.icon}
                  style={{ marginRight: "45px" }}
                />
              </div>
              <div>
                <TextField
                  onChange={onValueChange("fullName")}
                  id="outlined-text"
                  label="Фамилия и Имя"
                  placeholder="Укажите ваши фамилию и имя"
                  type="text"
                  InputLabelProps={{
                    shrink: true,
                  }}
                  variant="outlined"
                  className={classes.input}
``                />
              </div>
            </div>

            <div>
              <AlternateEmailIcon fontSize="large" className={classes.icon} />
              <TextField
                onChange={onValueChange("email")}
                id="outlined-email"
                label="E-mail"
                type="email"
                placeholder={profile.email}
                InputLabelProps={{
                  shrink: true,
                }}
                variant="outlined"
              />
            </div>
            <div>
              <CallIcon fontSize="large" className={classes.icon} />
              <TextField
                onChange={onValueChange("telephone")}
                id="outlined-tel"
                label="Номер телефона"
                type="tel"
                placeholder="Укажите ваш номер телефона"
                InputLabelProps={{
                  shrink: true,
                }}
                variant="outlined"
              />
            </div>
          </Paper>

          <Paper
            elevation={3}
            className={classes.paperData}
            style={{
              borderTopLeftRadius: "0px",
              borderTopRightRadius: "0px",
            }}
          >
            <Button className={classes.save} type="submit">
              Сохранить изменения
            </Button>
          </Paper>
        </form>
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
    editData: (profile) => dispatch(actions.editData(profile)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Edit);
