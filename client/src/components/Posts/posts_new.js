import React, { Component } from "react";
import { Field, reduxForm, Form } from "redux-form";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { createPost } from "../../actions";
import AppWrapper from "../AppWrapper";
class PostsNew extends Component {
    renderField(field) {
        const {
            meta: { touched, error }
        } = field;
        const classNamezz = `field ${touched && error ? "alert-danger" : ""}`;

        return (
            <div className={classNamezz}>
                <label className='label'>{field.label}</label>
                <div className='control'>
                    <input
                        className={field.className}
                        type='text'
                        placeholder={field.placeholder}
                        {...field.input}
                    /></div>
                <div className="alert-danger" role="alert">
                    {touched ? error : ""}
                </div>
                {/* ternary operator */}
            </div>
        );
    }
    onSubmit(values) {
        this.props.createPost(values, () => {
            this.props.history.push("/");
        });
    }
    render() {
        const { handleSubmit } = this.props;
        return (
            <AppWrapper>
                <section className="hero is-danger pt-1 pb-3">
                    <div className="hero-body pt-0 mb-0 pb-0">
                        <div className="level-left is-full-width pb-0">
                            <span className="level-item title is-size-4 has-text-white">
                                Let's Connect!
              </span>
                        </div>
                    </div>
                </section>
                <div className='container-fluid has-background-grey-lighter	'>
                    <Form
                        className='container has-background-dark has-text-light pb-3 my-4'
                        onSubmit={handleSubmit(this.onSubmit.bind(this))}>
                        <Field
                            name="author"
                            label="Author"
                            component={this.renderField}
                            props={{ className: 'input is-rounded', placeholder: 'Enter your passcode' }}
                        />

                        <Field
                            name="title"
                            label="title" //do not use name or it won't do it
                            component={this.renderField}
                            props={{ className: 'input is-rounded', placeholder: 'Enter your title' }}
                        />
                        <Field
                            name="body"
                            label="Post Content"
                            component={this.renderField}
                            props={{ className: 'textarea', placeholder: 'Enter the body of your message' }}
                        />

                        <div className="field is-grouped">
                            <div className="control">
                                <button
                                    className="button is-primary is-rounded px-2"
                                    type="submit">
                                    SUBMIT
                     </button>  </div>
                            <div className="control">
                                <Link
                                    to="/"
                                    className="button is-danger is-rounded px-2 mx-1">
                                    CANCEL
                     </Link>
                            </div>
                        </div>


                    </Form>
                </div>
            </AppWrapper>
        );
    }
}
// this is a form validation function
function validate(values) {
    const errors = {};
    if (!values.author || values.title.length < 3) {
        errors.title = "Enter your userpasscode";
    }
    if (!values.title) {
        errors.categories = "Enter a title!";
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
    form: "PostsNewForm"
})(
    connect(
        null,
        { createPost }
    )(PostsNew)
);

// redux form wires a ton of pregenerated event handlers
