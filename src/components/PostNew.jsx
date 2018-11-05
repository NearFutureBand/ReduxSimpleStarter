import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { createPost } from '../actions';

class PostNew extends React.Component {
    
    renderField(field) {
        const { meta: { touched, error } } = field;
        
        const className = `form-group ${touched && error ? 'has-danger' : ''}`;
        
        return (
            <div className={className}>
                <label>{field.label}</label>
                <input 
                    className="form-control"
                    type="text"
                    {...field.input}
                />
                <div className="text-help">
                    {touched ? error : ''}
                </div>
            </div>
        );
    }   
    
    onSubmit(values) {
        this.props.createPost(values, () => {
            this.props.history.push('/'); 
        });
    }
    
    render() {
        
        const { handleSubmit } = this.props;
        
        return(
            <form onSubmit={ handleSubmit( this.onSubmit.bind(this) ) }>
                <Field 
                    name="title"
                    label="Title"
                    component={this.renderField}
                />
                <Field 
                    name="tags"
                    label="Tags"
                    component={this.renderField}
                />
                <Field 
                    name="content"
                    label="Post Content"
                    component={this.renderField}
                />
                <button type="submit" className="btn btn-primary">Submit</button>
                <Link to="/" className="btn btn-danger">Cancel</Link>
            </form>
        );
    }
}

function validate(values) {
    const errors = {};
    
    if( ! values.title) {
        errors.title = 'Enter a title';
    }
    if( ! values.tags) {
        errors.tags = 'Enter some categories';
    }
    if( ! values.content ) {
        errors.content = 'Enter some content please';
    }
    
    return errors;
    
}

export default reduxForm({
    validate,
    form: 'PostNewForm'
})(
    connect(null, { createPost } )(PostNew)
);