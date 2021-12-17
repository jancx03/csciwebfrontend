/* eslint-disable */
import { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { func } from 'prop-types'

import NewStudentView from '../views/NewStudentView';
import { addStudent } from '../../store/thunk';


class NewStudentContainer extends Component {
    constructor(props){
        super(props);
        this.state = {
          student: {
            firstname: "", 
            lastname: "",
            email: ""
          },
          campusId: null, 
          redirect: false, 
          redirectId: null
        };
    }

    handleChange = event => {
      this.setState({
        student: {...this.state.student, [event.target.name]: event.target.value}
      });
    }

    handleSubmit = async event => {
        event.preventDefault();
        
        let newStudent = await this.props.addStudent(this.state.student);

        console.log(newStudent)

        this.setState({
          redirect: true, 
          redirectId: newStudent.id
        });
    }


    componentDidUpdate() {
      console.log(this.state.student)
    }


    componentWillUnmount() {
        this.setState({redirect: false, redirectId: null});
    }

    render() {
        if(this.state.redirect) {
          return (<Redirect to={`/student/${this.state.redirectId}`}/>)
        }
        return (
          <NewStudentView 
            handleChange = {this.handleChange} 
            handleSubmit={this.handleSubmit}      
          />
        );
    }
}

NewStudentContainer.propTypes = {
  addStudent: func,
}

const mapDispatch = (dispatch) => ({
  addStudent: (student) => dispatch(addStudent(student)),
})

export default connect(null, mapDispatch)(NewStudentContainer);








 