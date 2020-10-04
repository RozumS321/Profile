import { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Grid,
  Paper,
  Button,
  TextField,
  DialogActions,
  Dialog,
  DialogContent,
  DialogTitle,
  Box
} from "@material-ui/core/";

import AssignmentIndIcon from "@material-ui/icons/AssignmentInd";
import AlternateEmailIcon from "@material-ui/icons/AlternateEmail";
import CallIcon from "@material-ui/icons/Call";
import { connect } from "react-redux";
import * as actions from "../../../redux/actions";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: 'rgba(0, 0, 0, 0.2)',
    [theme.breakpoints.down('sm')]: {
    },
  },
  hide: {
    [theme.breakpoints.down('sm')]: {
      display: 'none'
    }
  },
  icon: {
    color: "#00BFA5",
    marginRight: "46px",
    [theme.breakpoints.down('sm')]: {
      display: 'none'
    }
  },
  paperData: {
    borderRadius: "10px",
    height: "15rem",
    boxShadow:
      "0px 3px 3px -2px rgba(0,0,0,0.2), 0px 3px 4px 0px rgba(0,0,0,0.14), 0px 1px 2px 0px rgba(0,0,0,0.12)",
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column',
      height: '21.5rem',

    },
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
  dontSave: {
    borderRadius: "36px",
    background: "#fff",
    color: "#01BDA7",
    width: "212px",
    height: "49px",
    fontSize: "14px",
    textTransform: "none",
    fontWeight: "600",
    border: '1px solid #01BDA7',
    marginTop: '20px'
  },
  positions: {
    display: "flex",
    justifyContent: "space-around",
    alignItems: 'center',
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column'
    }
  },

  borderRight: {
    borderRight: '1px solid #CAE7FE',
    [theme.breakpoints.down('sm')]: {
      display: 'none'
    }
  },
  borderLeft: {
    borderLeft: '1px solid #CAE7FE',
    [theme.breakpoints.down('sm')]: {
      display: 'none'
    }
  },
  confirm: {

    [theme.breakpoints.down('sm')]: {
      top: '100%',
      left: '50%',

    }
  }


}));


function Edit({ editData, profile, backToComplete }) {
  const classes = useStyles();
  const [profileData, setProfileData] = useState({ ...profile });
  const [nameValid, setNameValid] = useState(null);
  const [phoneValid, setPhoneValid] = useState(null);
  const [open, setOpen] = useState(false);
  const [alertOpen, setAlertOpen] = useState(false)

  const validateFullName = (fullName) => {
    const trimmed = fullName.trim()
    if (trimmed.length <= 2 || trimmed.split(' ').length !== 3) return setNameValid(false)
    return setNameValid(true)
  }

  const validatePhoneNumber = (phoneNumber) => {
    const phoneno = /^\+?([0-9]{2})\)?[-. ]?([0-9]{4})[-. ]?([0-9]{4})$/;
    if (phoneNumber.match(phoneno)) return setPhoneValid(true)
    return setPhoneValid(false)
  }

  const onValueChange = (type) => {
    return (e) => {
      switch (type) {
        case 'fullName':
          validateFullName(e.target.value);
          break;
        case 'telephone':
          validatePhoneNumber(e.target.value);
          break;
        default:
          break;
      }
      setProfileData({ ...profileData, [type]: e.target.value });
    };
  };

  const submitEdit = (e) => {
    e.preventDefault();
    setOpen(false);
    if ((!nameValid || !phoneValid) && !profile.fullName && !profile.phoneNumber) return
    editData(profileData);
    setAlertOpen(true)
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setAlertOpen(false)
    backToComplete()
  };

  return (
    <>
      <Grid xs={12} style={{ paddingTop: '24px' }}>
        <form onSubmit={submitEdit}>
          <Paper
            elevation={3}
            className={classes.paperData}
            style={{
              display: 'flex',
              flexDirection: 'column',
            }}
          >
            <Grid item xs={11} className={classes.positions}>

              <div style={{ display: 'flex', alignItems: 'center', }} className={classes.borderRight}>
                <div>
                  <AssignmentIndIcon
                    fontSize="large"
                    className={classes.icon}
                  />
                </div>
                <div>
                  <TextField
                    onChange={onValueChange("fullName")}
                    defaultValue={profile.fullName}
                    id="outlined-text"
                    label="Фамилия и Имя"
                    placeholder="Укажите ваши фамилию и имя"
                    type="text"
                    InputLabelProps={{
                      shrink: true,
                    }}
                    error={nameValid === false}
                    variant="outlined"
                    className={classes.input}
                  />
                </div>
                <Box borderRight={50} className={classes.hide} />
              </div>



              <div style={{ display: 'flex', alignItems: 'center', }} className={classes.borderRight}>
                <div>
                  <AlternateEmailIcon
                    fontSize="large"
                    className={classes.icon}
                  />
                </div>
                <div>
                  <TextField
                    onChange={onValueChange("email")}
                    id="outlined-email"
                    label="E-mail"
                    type="email"
                    defaultValue={profile.email}
                    placeholder={profile.email}
                    InputLabelProps={{
                      shrink: true,
                    }}
                    variant="outlined"
                  />
                </div>
                <Box borderRight={50} className={classes.hide} />
              </div>




              <div style={{ display: 'flex', alignItems: 'center', }} className={classes.borderRight}>
                <div>
                  <CallIcon
                    fontSize="large"
                    className={classes.icon}
                  />
                </div>
                <div>
                  <TextField
                    onChange={onValueChange("telephone")}
                    id="outlined-tel"
                    label="Номер телефона"
                    type="tel"
                    defaultValue={profile.telephone}
                    placeholder="Укажите ваш номер телефона"
                    InputLabelProps={{
                      shrink: true,
                    }}
                    variant="outlined"
                    error={phoneValid === false}
                  />
                </div>
              </div>
            </Grid>

            <div style={{ textAlign: 'center', marginBottom: '45px' }}>
              <Button className={classes.save} type="button" onClick={handleClickOpen}>
                Сохранить изменения
            </Button>
            </div>
          </Paper>

          <Dialog
            open={open}
            onClose={handleClose}
            PaperProps={{
              style: {
                maxWidth: "600px",
                maxHeight: '317px',
                height: '100%',
                width: '100%',
                textAlign: 'center',
                justifyContent: 'center',
              },

            }}
            className={classes.root}

          >

            <div>
              <DialogTitle style={{ color: "rgba(49, 49, 49, 0.7)" }}>Сохранить изменения?</DialogTitle>
            </div>

            <DialogActions style={{ display: 'flex', flexDirection: 'column', }}>
              <div>
                <Button className={classes.save} type="submit" onClick={submitEdit}>
                  Сохранить
                  </Button>
              </div>
              <div>
                <Button onClick={handleClose} className={classes.dontSave}>
                  Не Сохранять
                  </Button>
              </div>
            </DialogActions>

          </Dialog>
        </form>
      </Grid>

      <Dialog
        open={alertOpen}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        PaperProps={{
          style: {
            maxWidth: "600px",
            maxHeight: '317px',
            width: '100%',
            textAlign: 'center',
            justifyContent: 'center',
          },
        }}
      >
        <DialogTitle id="alert-dialog-title">{"Изменения Сохранены"}</DialogTitle>
        <DialogContent>
        </DialogContent>
        <DialogActions style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-around' }}>
          <div>
            <Button onClick={handleClose} className={classes.save} >
              Хорошо
             </Button>
          </div>

        </DialogActions>
      </Dialog>


    </>
  );
}

const mapStateToProps = (state) => {
  return {
    profile: state.profile,
    edit: state.edit
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    editData: (profile) => dispatch(actions.editData(profile)),
    backToComplete: () => dispatch(actions.editProfile())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Edit);
