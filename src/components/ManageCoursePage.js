import React, { useState, useEffect } from "react";
import CourseForm from "./CourseForm";
import courseStore from "../stores/courseStore";
import * as courseActions from '../actions/courseActions'
import { toast } from "react-toastify";

const ManageCoursePage = props => {
  const [errors, setErrors] = useState({});
  // notice how the new state object for errors starts off empty
  // storing errors as an object rather than an array makes it easier
  // to reference errors in our form
  const [course, setCourse] = useState({
    id: null,
    slug: "",
    title: "",
    authorId: null,
    category: ""
  });

  useEffect(() => {
    const slug = props.match.params.slug; // pulled from the path `/courses/:slug`
    if (slug) {
      setCourse(courseStore.getCourseBySlug(slug))
    }
  }, [props.match.params.slug]);
  // the above is a dependency array. . .this tells useEffect that
  // any time props.match.params.slug changes, then useEffect needs
  // to run.  Otherwise, useEffect will run anytime state or props change

  function handleChange(event) {
    const updatedCourse = {
      ...course,
      [event.target.name]: event.target.value
    };
    setCourse(updatedCourse);
  }

  function formIsValid() {
    const _errors = {};

    if (!course.title) _errors.title = "What's the course called?";
    if (!course.authorId) _errors.authorId = "Who's the Author?";
    if (!course.category) _errors.category = "Please include a category.";

    setErrors(_errors);
    return Object.keys(_errors).length === 0;
  }

  const handleSubmit = e => {
    e.preventDefault();
    if (!formIsValid()) return;
    courseActions.saveCourse(course).then(() => {
      props.history.push("/courses");
      toast.success("Course saved.");
    });
  };

  return (
    <>
      <h2>Manage Course</h2>
      <CourseForm
        course={course}
        errors={errors}
        onChange={handleChange}
        onSubmit={handleSubmit}
      />
    </>
  );
};

export default ManageCoursePage;
