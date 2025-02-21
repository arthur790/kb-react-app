import { Formik } from 'formik';
import { validationRegisterSchema } from '../core/schemas/users-schema'
import { registerUser } from '../core/services/users-service';
import { useNavigate } from 'react-router-dom';


const Register = () => {

  const navigate = useNavigate();


    const onSubmitRegister = async ({name, email, password}, { setSubmitting, setErrors, resetForm }) => {
      console.log('onSubmit', {email, password});
  
      
      registerUser(name, 1, email, password)
          .then((res) =>{
            navigate("/login")
          }).catch(error =>{
            console.log('error', error)
          }).finally(() =>{
            setSubmitting(false);
          })
    }

  return (
    <>
      <div>Register</div>

      <Formik
              initialValues={{ name: "", email: "", password: "" }}
              onSubmit={onSubmitRegister}
              validationSchema={validationRegisterSchema}
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
                    placeholder="nombre completo"
                    value={values.name}
                    onChange={handleChange}
                    name="name"
                    onBlur={handleBlur}
                  />
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
                    Registrar
                  </button>
                </form>
              )}
            </Formik>
    </>
  )
}

export default Register