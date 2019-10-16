import React, { Component } from "react";

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
  }

  handleSubmit = e => {
    //TODO
  }

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

export default CoursesPage;
