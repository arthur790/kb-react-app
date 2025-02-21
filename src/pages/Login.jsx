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
          <form 
          className='w-[90%] h-full max-w-md mx-auto py-16 px-6 flex flex-col gap-4 justify-center'
          onSubmit={handleSubmit}>
            <article className="space-y-4 mb-8">
              <h2 className="text-3xl font-medium text-blue-app-600">Inicio de sesión</h2>
              <p className="font-light text-zinc-600">Bienvenido a <b className="text-blue-app-700 font-bold"> Kapital Bank</b></p>
            </article>

            <div className="grid">
              <label htmlFor="email" >Correo</label>
              <input
              type="text"
              placeholder="Ingrese correo"
               className="input-reset"
              value={values.email}
              onChange={handleChange}
              name="email"
              onBlur={handleBlur}
            />
              </div>
              <div className="grid">
                <label htmlFor="email" >Contraseña</label>
                <input
                type="password"
                placeholder="password"
                className="input-reset"
                value={values.password}
                onChange={handleChange}
                name="password"
                onBlur={handleBlur}
              />
              </div>

              <article className="grid gap-6 mt-8">
                <button
                className=' bg-blue-app-500 text-black text-center p-4 rounded-3xl border
              hover:bg-blue-app-600 hover:text-white  transition-colors'
                type="submit"
                disabled={isSubmitting}
              >
                Login
              </button>

              </article>
           
           
          </form>
        )}
      </Formik>
    </>
    
  )
}

export default Login