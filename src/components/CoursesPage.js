import React, { Component } from "react";
// connect will bring in global state from redux
import { connect } from "react-redux";
// this gives us access to the CREATE_COURSE action in this component
import * as courseActions from "../redux/actions/courseActions";
import PropTypes from 'prop-types';
class CoursesPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      course: {
        title: ""
      }
    };
    // we bind functions in the constructor to bind this function
    // to the actual 'courses page' component
    // otherwise, 'this' will refer to whatever function calls on it
    // we need 'this' to point to 'this' class state, not 'this' function state
    // this.handleChange = this.handleChange.bind(this);
  }

  // this is a class field function. . .we don't have to bind this function to make it
  // refer to the class' state
  handleChange = e => {
    const course = { ...this.state.course, title: e.target.value };
    this.setState({ course });
  };

  handleSubmit = e => {
    e.preventDefault();
    // you have to use dispatch to call an action, otherwise, it won't work
    this.props.dispatch(courseActions.createCourse(this.state.course))
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <h2>Courses></h2>
          <h3>Add Course</h3>
          <input
            type="text"
            onChange={this.handleChange}
            value={this.state.course.title}
          />
          <input type="submit" value="submit" />
        </form>
      </div>
    );
  }
}
// we use prop types to let react know that dispatch sho
CoursesPage.propTypes = {
  dispatch: PropTypes.func.isRequired
}

// we expact dispatch to be passed in to th coursesPage comp
function mapStateToProps(state) {
  return {
    courses: state.courses
  };
}

// when we omit mapDispatchToProps, our comp gets a dispatch prop injected automatically
// function mapDispatchToProps() {

// }

// the connect function returns another function that calls CoursesPage
export default connect(
  mapStateToProps
)(CoursesPage);
