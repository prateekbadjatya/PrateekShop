import React from 'react';
import './SignIn.scss';

class SignIn extends React.Component {
  state = {
    email: '',
    password: ''
  };
  handleSubmit = event => {
    event.preventDefault();
    this.setState({ email: '', password: '' });
  };

  handleChange = event => {
    const { value, name } = event.target;
    this.setState({ [name]: value });
  };
  render() {
    return (
      <div className="sign-in">
        <h1>I already have an account</h1>
        <span>Sign in with you user Name and password</span>

        <form onSubmit={this.handleSubmit}>
          <label>Email</label>
          <input
            name="email"
            type="email"
            required
            value={this.state.email}
            onChange={this.handleChange}
          />

          <label>Password</label>
          <input
            name="password"
            type="password"
            required
            onChange={this.handleChange}
            value={this.state.password}
          />

          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}
export default SignIn;
