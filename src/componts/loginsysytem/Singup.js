import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom/cjs/react-router-dom";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import { ErrorMessage, Field, Form, Formik } from "formik";
import axios from "axios";
import { Url } from "../Url";
import * as Yup from "yup";
import './Log.css'

export const Singup = () => {
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

  let signupSchema = Yup.object().shape({
    fullname: Yup.string().min(2, 'Too Short!').max(70, 'Too Long!').required('*required fname'),
    uname: Yup.string().min(2, 'Too Short!').max(70, 'Too Long!').required('*required username'),
    password: Yup.string()
      .min(8, 'Min 8 characters')
      .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
        'Password must lower,upper,spcial,digits be use'
      )
      .required('*required password'),
    email: Yup.string().min(2, 'Too Short!').max(70, 'Too Long!').required('*required email'),
  });
  return (
    <Formik
      initialValues={{
        uname: "",
        password: "",
        email : "",
        fullname : ""
      }}
      validationSchema={signupSchema}
      onSubmit={async (values, action) => {
        axios
          .post(Url() + "/user/singup", values)
          .then((res) => {
            // console.log(res.data);
            localStorage.setItem("token", res.data.token);
            if (res) {
              setError("");
            }

            action.resetForm();
          })
          .catch((err) => {
            if (err) {
              setError(err.response.data.message);
            }
          });
        console.log(values);
      }}
    >
      <Form>
        <div className="instagram-login-page">
          <div className="login-container">
            <span className="instagram-logo" alt="Instagram Logo" />
            <div>Sign up to see photos and videos from your friends.</div>
            <button
              className="facebook-login"
              style={{
                position: "relative",
                zIndex: "1",
              }}
            >
              Log in with Facebook
            </button>
            <div
              className="or-divider"
              style={{ position: "relative", zIndex: 1 }}
            >
              <div className="line"></div>
              <div className="or-text">OR</div>
              <div className="line"></div>
            </div>
            <div className="login-form">
              <label htmlFor="">
                <Field type="text" name="email" id="email"/>
                <span> Email</span>
              </label>
              <i className="error"><ErrorMessage name='email'/></i>

              <label
                htmlFor=""
                style={{
                  marginTop: "30px",
                }}
              >
                <Field type="text" name="fullname" id="fullname"/>
                <span>Full Name</span>
              </label>
              <i className="error"><ErrorMessage name='fullname'/></i>

              <label
                htmlFor=""
                style={{
                  marginTop: "30px",
                }}
              >
                <Field type="text" name="uname" id="uname" />
                <span>Username</span>
              </label>
              <i className="error">{Error}</i>
              <i className="error"><ErrorMessage name='uname'/></i>

              <label
                htmlFor=""
                style={{
                  marginTop: "30px",
                }}
              >
                <Field type={passShow ? "password" : "text"} name="password" id="password"/>
                <span>Password</span>
                <button
                  onClick={Showhide}
                  className="hideshowbtn"
                  title={passShow ? "hide" : "show"}
                >
                  {passShow ? <VisibilityOffIcon /> : <VisibilityIcon />}
                </button>
              </label>

              <i className="error"><ErrorMessage name='password'/></i>

              <input type="submit" className="login-button" />

              <Link to="/">Forgot password?</Link>
            </div>
            <div className="sign-up-link">
              <span>Do You have an account?</span>
              <Link to="/">Login</Link>
            </div>
          </div>
        </div>
      </Form>
    </Formik>
  );
};
