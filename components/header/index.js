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

  email: {
    fontSize: "18px",
    fontWeight: "400",
  },
  paperData: {
    borderBottom: "20px",
    borderRadius: "10px",
    height: " 128px;",
    display: "flex",
    padding: "0 20px",
    alignItems: "center",
  },
}));

function Header({ profile, edit, editProfile }) {
  const classes = useStyles();
  const { fullName, email, telephone } = profile;
  return (
    <Container>
      <Grid container spacing={4}>
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
            <Typography id={styles.name}>
              {`${fullName[0]} ${fullName[1].substr(0, 1).toUpperCase()}.`}
            </Typography>
          </Box>
        </Grid>

        <Grid item xs={12}>
          <Typography className={styles.textH}>Личный профиль</Typography>
          <Typography className={styles.textP}>
            Главная/личная страница
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Paper className={styles.paper}>
            <Box className={classes.leftName}>
              <Avatar alt="Avatar" className={classes.large} />
              <Typography style={{ fontSize: "24px", marginLeft: "42px" }}>
                {fullName}
              </Typography>
            </Box>

            <Box>
              {edit ? (
                <Button style={{ color: "#fff" }} onClick={() => editProfile()}>
                  закрыть
                  <IconButton style={{ color: "#fff" }} component="span">
                    <CloseIcon />
                  </IconButton>
                </Button>
              ) : (
                <Button style={{ color: "#fff" }} onClick={() => editProfile()}>
                  Редактировать
                  <IconButton style={{ color: "#fff" }} component="span">
                    <CreateIcon />
                  </IconButton>
                </Button>
              )}
            </Box>
          </Paper>
        </Grid>
      </Grid>
    </Container>
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
