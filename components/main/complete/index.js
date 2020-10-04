import { makeStyles } from "@material-ui/core/styles";
import {
  Grid,
  Typography,
  Paper,
} from "@material-ui/core/";
import AlternateEmailIcon from "@material-ui/icons/AlternateEmail";
import CallIcon from "@material-ui/icons/Call";
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

function CompleteEdit({ profile }) {
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


export default connect(mapStateToProps, null)(CompleteEdit);
