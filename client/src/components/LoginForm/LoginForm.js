import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux'
import * as ActionCreators from '../../actions/actionCreator';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import styles from './LoginForm.module.sass';
import Schemas from '../../validators/validationSchems';
import Error from "../Error/Error";

const initialValues = {
    'email': '',
    "password": ''
}
const classes = {
    container: styles.inputContainer,
    input: styles.input,
    inValid: styles.inValid,
    valid: styles.valid,
    btnSubmit: styles.submitContainer,
    error: styles.errorMessage,
    signUpInfo: styles.signUpInfo,
    label: styles.label,
    form: styles.loginForm
};

const LoginForm = props => {
    const dispatch = useDispatch()
    const { isFetching, error } = useSelector(({ auth }) => auth)
    const { authActionLogin, clearAuth } = bindActionCreators(ActionCreators, dispatch)
    useEffect(() => {
        return () => {
            clearAuth()
        }
    })
    const onSubmit = (values) => {
        authActionLogin(values)
    }
    return (
        <Formik
            initialValues={initialValues}
            validationSchema={Schemas.LoginSchem}
            onSubmit={onSubmit}
        >{formProps => {
            return (
                <div className={classes.form}>
                    {error && <Error data={error.data} status={error.status}
                                     clearError={clearAuth}/>}
                    <h2 className={classes.signUpInfo}>LOGIN TO YOUR ACCOUNT</h2>
                    <Form className={classes.container}>
                        <label className={classes.label}>
                            <Field
                                type='text'
                                name='email'
                                placeholder='Email'
                                className={classes.input}
                            />
                            <ErrorMessage
                                name='email'
                                component='div'
                                className={classes.error}
                            />
                        </label>
                        <label className={classes.label}>
                            <Field
                                type='password'
                                name='password'
                                placeholder='password'
                                className={classes.input}
                            />
                            <ErrorMessage
                                name='password'
                                component='div'
                                className={classes.error}
                            />
                        </label>
                        <button type='submit' className={classes.btnSubmit}>
                            {isFetching ? "Loading..." : "Login"}
                        </button>
                    </Form>
                </div>)
        }}</Formik>
    )
}

export default LoginForm;