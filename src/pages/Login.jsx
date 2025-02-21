import React, { useEffect } from 'react'
import { useUserContext } from '../context/UserContext'
import { useNavigate } from 'react-router-dom';
import { Formik } from 'formik';
import * as Yup from "yup";
import { login } from "../core/services/auth-service"

const Login = () => {
  const { user, setUser} = useUserContext();
  const navigate = useNavigate();

  useEffect(() =>{
    if (user) navigate("/dashboard")
  },[user]);

  const onSubmitLogin = async ({email, password}, { setSubmitting, setErrors, resetForm }) => {
    console.log('onSubmit', {email, password});

    
      login(email, password)
        .then((res) =>{
          setUser(res.data)
        }).catch(error =>{
          console.log('error', error)
        }).finally(() =>{
          setSubmitting(false);
        })
  }

  const validationLoginSchema = Yup.object().shape({
    email: Yup.string().email("el correo no tiene un formato válido").required("El Correo es requerido"),
    password: Yup.string()
      .trim()
      .min(6, "Se requieren minimo 6 carácteres")
      .required("la Contraseña es requerida"),
  });

  return (
    <>
      <div>Login</div>
      <Formik
        initialValues={{ email: "", password: "" }}
        onSubmit={onSubmitLogin}
        validationSchema={validationLoginSchema}
      >
        {({ handleSubmit, 
            handleChange, 
            values, 
            errors,
            touched,
            handleBlur,
            isSubmitting }) => (
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="email"
              value={values.email}
              onChange={handleChange}
              name="email"
              onBlur={handleBlur}
            />
            <input
              type="password"
              placeholder="password"
              value={values.password}
              onChange={handleChange}
              name="password"
              onBlur={handleBlur}
            />
            <button
              type="submit"
              disabled={isSubmitting}
            >
              Login
            </button>
          </form>
        )}
      </Formik>
    </>
    
  )
}

export default Login