import React from 'react';
import Logo from '../../components/Logo';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { clearErrorSignUpAndLogin } from '../../actions/actionCreator';
import RegistrationForm from '../../components/RegistrationForm/RegistrationForm';
import RegistrationFooter from "../../components/RegistrationFooter/RegistationFooter";
import styles from './RegistrationPage.module.sass';
import CONSTANTS from '../../constants';

const RegistrationPage = (props) => {

  const changeRoute = () => {
    props.history.replace('/');
  };

    return (
        <div className={styles.signUpPage}>
            <div className={styles.signUpContainer}>
                <div className={styles.headerSignUpPage}>
                    <Logo src={`${CONSTANTS.STATIC_IMAGES_PATH}logo.png`}/>
                    <div className={styles.linkLoginContainer}>
                        <Link to='/login'
                              style={{ textDecoration: 'none' }}><span>Login</span></Link>
                    </div>
                </div>
                <RegistrationForm changeRoute={changeRoute}/>
            </div>
            <RegistrationFooter/>
        </div>
    );
};


export default RegistrationPage;