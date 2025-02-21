import * as Yup from "yup";


export  const validationRegisterSchema = Yup.object().shape({
    email: Yup.string().required("El Nombre es requerido"),
    email: Yup.string().email("el correo no tiene un formato válido").required("El Correo es requerido"),
    password: Yup.string()
      .trim()
      .min(6, "Se requieren minimo 6 carácteres")
      .required("la Contraseña es requerida"),
  });