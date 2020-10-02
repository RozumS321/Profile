import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Box, Avatar, Typography, Container, Paper, Button } from '@material-ui/core/';
import NotificationsIcon from '@material-ui/icons/Notifications';
import { deepPurple } from '@material-ui/core/colors';
import styles from './header.module.css'
import IconButton from '@material-ui/core/IconButton';

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1
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
        display: 'flex',
        alignItems: 'center',
        color: '#fff',
    },

    email: {
        fontSize: '18px',
        fontWeight: '400'
    },
    paperData: {
        borderBottom: '20px',
        borderRadius: '10px',
        height: ' 128px;',
        display: 'flex',
        padding: '0 20px',
        alignItems: 'center',

    }
}))

export default function HomePage() {

    const classes = useStyles();


    return (
        <Container >
            <Grid container spacing={4} >
                <Grid item xs={12} style={{ display: 'flex', justifyContent: 'flex-end' }} >
                    <IconButton style={{ marginRight: '25px', color: '#fff' }}>
                        <NotificationsIcon />
                    </IconButton>
                    <Box className={styles.border} />
                    <Button>

                        <Avatar alt="avatar" className={classes.small} />
                    </Button>
                    <Box>
                        <Typography id={styles.name}>Иванова А.</Typography>
                    </Box>
                </Grid>

                <Grid item xs={12}>
                    <Typography className={styles.textH} >Личный профиль</Typography>
                    <Typography className={styles.textP} >Главная/личная страница</Typography>
                </Grid>

            </Grid>
        </Container>
    );
}