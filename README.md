# Configuración de proyecto FrontEnd
A continuación se describen los pasos a seguir para levantar el proyecto Front de manera local

Stack utilizado:

    - Vite
    - React
    - Tailwind


## Configurar variables de entorno

crear un archivo .env.local a partir del archivo .example.env y define las siguientes variables:

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `VITE_API_KB_BASE_URL` | `string` | **Required**. Define la url de la api rest, por defecto es http://localhost:8080/api |
| `VITE_API_NASA_BASE_URL` | `string` | **Required**. Define la url de la api rest de la nasa, se deja seteado en el archivo de ejemplo |
| `VITE_API_NASA_KEY` | `string` | **Required**. Necesitas registrarte en la url https://api.nasa.gov/ en la opción de generar llave |



## Instalación
Ejecutar en el directorio raiz el siguiente comando:

```bash
  npm install 
```

## Ejecutar proyecto de manera local
Ejecutar el siguiente comando:

```bash
  npm run dev 
```