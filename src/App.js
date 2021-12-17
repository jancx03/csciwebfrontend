import "./App.css";

//Router
import { Switch, Route } from "react-router-dom";
//Components
import {
  HomePageContainer,
  CampusContainer,
  StudentContainer,
  AllCampusesContainer,
  EditFormContainer,
  AllStudentsContainer,
  NewStudentContainer,
  EditStudentContainer
} from './components/containers';
import Appbar from './components/Appbar'



// if you create separate components for adding/editing 
// a student or campus, make sure you add routes to those
// components here

const App = () => {
  return (
    <div className="App">
      <Appbar />
      <Switch>
        <Route exact path="/" component={HomePageContainer} />
        <Route exact path="/campuses" component={AllCampusesContainer} />
        <Route exact path="/campus/:id" component={CampusContainer} />
        <Route exact path="/students" component={AllStudentsContainer} />
        <Route exact path="/newstudent" component={NewStudentContainer} />
        <Route exact path="/student/:id" component={StudentContainer} />
        <Route exact path="/student/:id/edit" component={EditStudentContainer} />
        {/* <Route 
          exact 
          path="/campuses/new" 
          render={(props) => <CampusFormContainer {...props} type="add" />} /> */}
        <Route exact path="/campus/edit/:id" component={EditFormContainer} />
      </Switch>        
    </div>
  );
}

export default App
