import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((/* theme */) => ({
  root: {
    flexGrow: 1,
  },
  greeting:{
    display: 'flex',
    justifyContent: 'center',
    backgroundColor: 'white',
    width: "50%",
    margin: "auto",
  }
}));

const HomePageView = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div className={classes.greeting}><h1>Home Page</h1></div>
    </div>
  );    
}




export default HomePageView;
