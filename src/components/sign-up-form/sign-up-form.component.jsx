import { useState } from "react";
import { createAuthUserWithEmailAndPassword, createUserDocumentFromAuth } from '../../utils/firebase/firebase.utils'
import FormInput from '../form-input/form-input.component'
import './sign-up-form.styles.scss'
import Button from "../button/button.component";

const defaultFormFields = {
  displayName: '',
  email: '',
  password: '',
  confirmPassword: '',
};

const SignUpForm = () => {

    const [formFields, setFormFields] = useState(defaultFormFields);
    const { displayName, email, password, confirmPassword } = formFields;
    const restFormFields = () => {
        setFormFields(defaultFormFields)
    }
    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormFields({...formFields, [name]: value})
    }
    const handleSubmit = async(event) => {
        event.preventDefault();
        if (password != confirmPassword) {
            alert("password do not match")
            return
        }
        try {
            const { user } = await createAuthUserWithEmailAndPassword(email, password);
            await createUserDocumentFromAuth(user, { displayName });
            restFormFields();
        } catch (error) {
            if (error.code == 'auth/email-already-in-use') {
                alert('connot creat email already in use')
                return
            }
            console.log('uuuuuuuuuuu', error);
        }

    }
    return (
        <div className="sign-up-container">
            <h2>Don't have an account?</h2>
            <span>Sign up with your email and password</span>
            <h1>sign up with your email and password</h1>
            <form onSubmit={handleSubmit}>
                <FormInput label="Display Name" type="text" required onChange={handleChange} name='displayName' value={displayName}/>
                <FormInput label="Email" type="email" required onChange={handleChange} name='email' value={email}/>
                <FormInput label="Password" type="password" required onChange={handleChange} name='password' value={password}/>
                <FormInput label="confirm Password" type="password" required onChange={handleChange} name='confirmPassword' value={confirmPassword}/>
                <Button type="submit">Sign Up</Button>
            </form>
        </div>
    );
};
export default SignUpForm;