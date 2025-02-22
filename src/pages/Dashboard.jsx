
import { useEffect, useState } from 'react';
import { useUserContext } from '../context/UserContext';
import { getProfileUser } from '../core/services/users-service';
import { errors } from '../core/util/errors-util';
import { ToastContainer, toast } from 'react-toastify';

const Dashboard = () => {
  const { user} = useUserContext();

  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() =>{
    console.log('user',user);
    setLoading(true);
    getProfileUser(user.token)
              .then((res) =>{
                console.log('res', res);
                setProfile(res.data)
              }).catch(error =>{
                toast.error(errors(error), {
                      position: "top-right"
                    });
              }).finally(() =>{
                setLoading(false);
              })

  },[])

  if (!profile) return "Sin resultados";

  if( loading) return (<><p className="text-3xl text-blue-app-800 font-bold">Cargando...</p></>)

  return (
    <>
      <div className='grid text-center pt-4'>
      <div className='grid gap-4'>
        <h1 className='text-blue-app-800 font-semibold text-2xl'>Bienvenido</h1>
        <p className='font-medium '>{profile.name}</p>
      </div>
      <ToastContainer />
      </div>
      
    </>
  )
}

export default Dashboard