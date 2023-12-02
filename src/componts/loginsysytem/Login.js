import React, { useState} from "react";
import { useHistory } from 'react-router-dom';

import { Link } from "react-router-dom/cjs/react-router-dom.min";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import { Field, Form, Formik } from "formik";
import axios from "axios";
import { Url } from "../../Url";
import './Log.css'

export const Login = () => {
  
  const history = useHistory()
  const [passShow, setPassshow] = useState(true);
  const [count, setcount] = useState(0);
  const [Error , setError] = useState('')


  const Showhide = () => {
    if (count % 2) {
      setPassshow(true);
    } else {
      setPassshow(false);
    }
    setcount(count + 1);
    console.log(count);
  };

  return (
    <Formik
      initialValues={{
        uname: "",
        password: "",
      }}
      validationSchema={''}
      onSubmit={async (values, action) => {
        axios.post(Url() + '/user/login',values)
        .then((res)=>{
          // console.log(res.data);
          localStorage.setItem('token',res.data.token)
          localStorage.setItem('uid',res.data.data._id)
          if(res){
            setError('')
          }

          action.resetForm()
          history.push('/home')
        })
        .catch((err)=>{
          console.log(err.response.data.message);
          if(err){
            setError(err.response.data.message)
          }
        })
      }}
    >
      <Form>
        
        <div className="instagram-login-page">
          <div className="login-container">
            <span className="instagram-logo" alt="Instagram Logo" />
            <div className="login-form">
              <label htmlFor="">
                <Field type="text" id="uname" name="uname" required="required"/>
                <span>Phone number, username, or email</span>
              </label>
              <label
                htmlFor=""
                style={{
                  marginTop: "30px",
                }}
              >
                <Field type={passShow ? "password" : "text"} id="password" name="password" required="required"/>
                <span>Password</span>
                <button
                  onClick={Showhide}
                  className="hideshowbtn"
                  title={passShow ? "hide" : "show"}
                >
                  {passShow ? <VisibilityOffIcon /> : <VisibilityIcon />}
                </button>
              </label>
              {/* <i className="error">user name</i> */}
              <i className="error">{Error}</i>

              <input type="submit" className="login-button" />
              <div className="or-divider">
                <div className="line"></div>
                <div className="or-text">OR</div>
                <div className="line"></div>
              </div>
              <button className="facebook-login">Log in with Facebook</button>
              <Link to="/">Forgot password?</Link>
            </div>
            <div className="sign-up-link">
              <span>Don't have an account?</span>
              <Link to="/singup">Sign up</Link>
            </div>
            {/* <div className="app-download">
              Get the app.
              <div className="app-icons">
                <img
                  src="https://www.instagram.com/static/images/appstore-install-badges/badge_ios_english-en.png"
                  alt="iOS App"
                />
                <img
                  src="https://www.instagram.com/static/images/appstore-install-badges/badge_android_english-en.png"
                  alt="Android App"
                />
              </div>
            </div> */}
          </div>
        </div>
      </Form>
    </Formik>
  );
};
