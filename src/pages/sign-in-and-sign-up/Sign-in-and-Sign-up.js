import React from 'react';
import './Sign-in-and-Sign-up.scss';
import SignIn from '../../components/signin/SignIn';
import SignUp from '../../components/sign-up/SignUp';
const SignInSignUp = () => {
  return (
    <div className="sign-in-and-sign-up">
      <SignIn />
      <SignUp />
    </div>
  );
};

export default SignInSignUp;
