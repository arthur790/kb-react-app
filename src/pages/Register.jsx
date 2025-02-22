import { Formik } from 'formik';
import { validationRegisterSchema } from '../core/schemas/users-schema'
import { registerUser } from '../core/services/users-service';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import { errors } from '../core/util/errors-util';


const Register = () => {

  const navigate = useNavigate();


    const onSubmitRegister = async ({name, email, password}, { setSubmitting, setErrors, resetForm }) => {
      console.log('onSubmit', {email, password});
  
      
      registerUser(name, 1, email, password)
          .then((res) =>{
            toast.success("Registro exitoso", {
              position: "top-right"
            });
            navigate("/login")
          }).catch(error =>{
             toast.error(errors(error), {
                        position: "top-right"
                      });
          }).finally(() =>{
            setSubmitting(false);
          })
    }

  return (
    <>

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
                <form
                 className='w-[90%] h-full max-w-md mx-auto py-16 px-6 flex flex-col gap-4 justify-center'
                 onSubmit={handleSubmit}>
                   <article className="space-y-4 mb-8">
                    <h2 className="text-3xl font-medium text-blue-app-600">Registro</h2>
                  </article>
                  <div className="grid">
                      <label htmlFor="name" >Nombre completo</label>
                      <input
                            type="text"
                            placeholder="ingrese nombre completo"
                            value={values.name}
                            onChange={handleChange}
                            className="input-reset"
                            name="name"
                            onBlur={handleBlur}
                          />
                    </div>
                
                    <div className="grid">
                      <label htmlFor="email" >Correo</label>
                      <input
                        type="text"
                        placeholder="Ingrese correo"
                        value={values.email}
                        onChange={handleChange}
                        className="input-reset"
                        name="email"
                        onBlur={handleBlur}
                      />
                    </div>
                 
                    <div className="grid">
                        <label htmlFor="email" >Contraseña</label>
                        <input
                        type="password"
                        placeholder="password"
                        value={values.password}
                        onChange={handleChange}
                        className="input-reset"
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
                        Registrar
                      </button>

                    </article>
                 
                 
                </form>
              )}
            </Formik>
             <ToastContainer />
    </>
  )
}

export default Register