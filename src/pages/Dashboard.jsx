
import { useEffect, useState } from 'react';
import { useUserContext } from '../context/UserContext';
import { getProfileUser } from '../core/services/users-service';

const Dashboard = () => {
  const { user, setUser} = useUserContext();

  const [profile, setProfile] = useState(null);

  useEffect(() =>{
    console.log('user',user);

    getProfileUser(user.token)
              .then((res) =>{
                console.log('res', res);
                setProfile(res.data)
              }).catch(error =>{
                console.log('error', error);
              }).finally(() =>{
              })

  },[])

  if (!profile) return "Sin resultados";

  return (
    <>
      <div className='grid text-center'>Dashboard is private page</div>
      <div>
        <h1>Bienvenido</h1>
        <p>{profile.name}</p>
      </div>
    </>
  )
}

export default Dashboard