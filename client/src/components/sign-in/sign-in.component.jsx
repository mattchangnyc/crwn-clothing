import React, { useState } from 'react';
import { connect } from 'react-redux';

// import './sign-in.styles.scss';
import {
    SignInContainer,
    SignInTitle,
    ButtonsBarContainer
  } from './sign-in.styles';

import FormInput from '../form-input/form-input.component';

import CustomButton from '../custom-button/custom-button.component';

// import { auth, signInWithGoogle } from '../../firebase/firebase.utils';
import { googleSignInStart, emailSignInStart }from '../../redux/user/user.actions.js';

const SignIn = ({ emailSignInStart, googleSignInStart }) => {
    // constructor(props) {
    //     super(props);

    //     this.state = {
    //         email: '',
    //         password: ''
    //     };
    // }

    const [ userCredentials, setCredentials ] = useState({ email: '', password: ''});

    const { email, password } = userCredentials;

    const handleSubmit = async event => {
        event.preventDefault();

        // const { email, password } = this.state;
        

        // no more setState. Redux will handle the state from here on 
        // out with sagas

        // try {
        //     await auth.signInWithEmailAndPassword(email, password);
        //     this.setState({ email: '', password: '' });

        // } catch (error) {
        //     console.log(error);
        // }

        // const { emailSignInStart } = this.props;

        emailSignInStart(email, password);
    };

    const handleChange = event => {
        const { value, name } = event.target;

        // this.setState({ [name]: value });
        setCredentials({...userCredentials, [name]: value });
    };

    // render() {
        //const { googleSignInStart } = this.props;
        return (
            <SignInContainer>
                <SignInTitle>I already have an account</SignInTitle>
                <span>Sign in with your eamil and password</span>

                <form onSubmit={handleSubmit}>
                    <FormInput 
                        name='email' 
                        type='email' 
                        value={email} 
                        handleChange={handleChange}
                        label='email'
                        required 
                    />
                    <FormInput 
                        name='password' 
                        type='password' 
                        value={password} 
                        handleChange={handleChange}
                        label='password'
                        required 
                    />
                    <ButtonsBarContainer>
                        <CustomButton type='submit'> Sign in </CustomButton>
                        <CustomButton 
                            type='button' 
                            onClick={googleSignInStart} 
                            isGoogleSignIn
                        >
                            Sign in with Google
                        </CustomButton>
                    </ButtonsBarContainer>
                </form>
            </SignInContainer>
        )
    // }
}

const mapDispatchToProps = dispatch => ({
    googleSignInStart: () => dispatch(googleSignInStart()),
    emailSignInStart: (email, password) => dispatch(emailSignInStart({ email, password })) 
});

export default connect(null, mapDispatchToProps)(SignIn);