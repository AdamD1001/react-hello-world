import React, { useState } from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Button,
  Card,
  CardContent,
  CardActions,
  TextField,
} from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    appBar: {
      paddingBottom: '3%',
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
    bullet: {
      display: 'inline-block',
      margin: '0 2px',
      transform: 'scale(0.8)',
    },
    cardTitle: {
      fontSize: 14,
    },
    pos: {
      marginBottom: 12,
    },
    cardRoot: {
      width: '60%',
      margin: 'auto',
      height: '100vh'
    },
    flexContainer: {
      display: 'flex',
      flexDirection: 'row'
    },
    flexLeft: {
      width: '30%',
      justifyContent: 'center',
      textAlign: 'center',

    },
    flexRight: {
      width: '70%',
      alignItems: 'center',
      justifyContent: 'center',
    },
    inputStyles: {
      width: '100%'
    }
  }),
);

export default function App() {

  const classes = useStyles();
  const [environment, setEnvironment] = useState('')
  const [consumer, setConsumer] = useState('')
  const [ooid, setOoid] = useState('')
  const [aoid, setAoid] = useState('')
  const [userRole, setUserRole] = useState('')
  const [canonical, setCanonical] = useState('')

  const updateEnvironment = (event: any) => {
    setEnvironment(event.target.value)
  }
  const updateConsumer = (event:any) => {
    setConsumer(event.target.value)
  }
  const updateOOID = (event:any) => {
    setOoid(event.target.value)
  }
  const updateAOID = (event:any) => {
    setAoid(event.target.value)
  }
  const updateUserRole = (event:any) => {
    setUserRole(event.target.value)
  }
  const updateCanonical = (event:any) => {
    setCanonical(event.target.value)
  }

  return (
    <div className={classes.root}>
      <div className={classes.appBar}>
        <AppBar position="static">
          <Toolbar>
            <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
              <MenuIcon />
            </IconButton>
            <Typography variant="h4" className={classes.title}>
              Sample React Web App
            </Typography>
            <Button color="inherit">Login</Button>
          </Toolbar>
        </AppBar>
      </div>
      <div>
        <Card className={classes.cardRoot}>
        <CardContent>
          <div className={classes.flexContainer}>
            <div className={classes.flexLeft}>
              <h3>Environment:</h3>
              <h3>Consumer:</h3>
              <h3>OOID:</h3>
              <h3>AOID</h3>
              <h3>User Role:</h3>
              <h3>Canonical:</h3>
            </div>
            <div className={classes.flexRight}>
              <TextField id="filled-basic" label="EnvironmentInput" variant="filled" fullWidth
                value={environment} onChange={updateEnvironment} />
              <TextField id="filled-basic" label="ConsumerInput" variant="filled" fullWidth
                value={consumer} onChange={updateConsumer} />
              <TextField id="filled-basic" label="OOIDInput" variant="filled" fullWidth
                value={ooid} onChange={updateOOID} />
              <TextField id="filled-basic" label="AOIDInput" variant="filled" fullWidth
                value={aoid} onChange={updateAOID} />
              <TextField id="filled-basic" label="UserRoleInput" variant="filled" fullWidth
                value={userRole} onChange={updateUserRole} />
              <TextField id="filled-basic" label="CanonicalInput" variant="filled" fullWidth
                value={canonical} onChange={updateCanonical} />
            </div> 
          </div>
        </CardContent>
        <CardActions>
          <Button size="small" href="https://aws.amazon.com/amplify/">AWS Amplify Home</Button>
        </CardActions>
      </Card>
    </div>
    </div>
  );
}

