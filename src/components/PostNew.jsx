import React from 'react';
import { Field, reduxForm } from 'redux-form';

class PostNew extends React.Component {
    
    renderField(field) {
        return (
            <div className="form-group">
                <label>{field.label}</label>
                <input 
                    className="form-control"
                    type="text"
                    {...field.input}
                />
            </div>
        );
    }   
    
    render() {
        return(
            <form>
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
            </form>
        );
    }
}

export default reduxForm({
    form: 'PostNewForm'
})(PostNew);