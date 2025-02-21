


export const errorsNasa = (err) =>{

    if(err.code){
        switch(err.code){
            case "ERR_BAD_REQUEST":
                return err.response.data.msg
            case "SERVER_ERROR":
                return "Ocurrio un error inesperado"
            case "ERR_NETWORK":
                return "Al parecer no cuentas con conexión a internet"
            default:
                return "Favor de intentar más tarde"

        }
    }
}