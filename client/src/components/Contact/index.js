import React, { Component } from "react";
import { Field, reduxForm } from "redux-form";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { createComment } from "../../actions";

class CommentsNew extends Component {
  renderField(field) {
    const {
      meta: { touched, error }
    } = field;

    const className = `form-group ${touched && error ? "alert-danger" : ""}`;

    return (
      <div className={className}>
        <label>{field.label}</label>
        <input
          className="form-control"
          type="text"
          placeholder="what do you like?"
          {...field.input}
        />
    
        <div className="alert-danger" role="alert">
          {touched ? error : ""}
        </div>
        {/* ternary operator */}
    
      </div>
    );
  }
//   This function sends the user back to the original screen.
  onSubmit(values) {
    this.props.createComment(values, () => {
      this.props.history.push("/");
    });
  }

  render() {
    const { handleSubmit } = this.props;
    return (
        <section className="hero is-large is-primary is-bold">
              <h1 className="title">
        Let's Connect! 
      </h1>
  <div className="hero-body">
    <form className='field' onSubmit={handleSubmit(this.onSubmit.bind(this))}>
        {/* handling both REDUX handle submit and the POST data for the back end server */}
        <Field
          name="title"
          label="title" //do not use name or it won't do it
          component={this.renderField}
        />
        <Field
          name="categories"
          label="Categories"
          component={this.renderField}
        />
        <Field
          name="content"
          label="Comment Content"
          component={this.renderField}
        />
        <button className="btn btn-primary" type="submit">
          SUBMIT
        </button>
        <Link to="/" className="btn btn-danger">
          CANCEL
        </Link>
      </form>
    </div>
</section>
    );
  }
}
// this is a form validation function
function validate(values) {
  const errors = {};
  if (!values.title || values.title.length < 0) {
    errors.title = "Enter a title that's at least 3 characters!";
  }
  if (!values.categories) {
    errors.categories = "Enter a category!";
  }
  if (!values.content) {
    errors.content = "Enter content!";
  }
  // if errors is empty, it's all good to submit, if there's any properties, form is invalid;
  return errors;
  // VALIDATE inputs from values

  //console.log (values) --> {title:'', categories:'', content:''}
}
export default reduxForm({
  validate, // replaces validate: validate
  form: "CommentsNewForm"
})(
  connect(
    null,
    { createComment }
  )(CommentsNew)
);

// redux form wires a ton of pregenerated event handlers
