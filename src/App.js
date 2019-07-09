import React, { Component } from 'react';
import RegisterForm from './components/RegisterForm';

class RegisterFormContainer extends Component {
  submit = values => {
    window.alert(JSON.stringify(values, null, 4));
  };

  getInitialValues = () => ({
    name: 'Pepe',
    preference: 'spaces',
    newsletter: true
  });

  render() {
    const values = this.getInitialValues();
    return <RegisterForm onSubmit={this.submit} initialValues={values} />;
  }
}

export default RegisterFormContainer;
