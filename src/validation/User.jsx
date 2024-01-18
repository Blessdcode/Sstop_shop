import { useFormik } from 'formik'
import React from 'react'
import Register from '../pages/Register'




const User = () => {

const formik = useFormik({
    initialValues:{
        name:"",
        lastName:"",
        username:"",
        email:"",
        password:"",
        confirm:"",
    }
})

  return (
    <div>
      <Register data={formik}/>
    </div>
  )
}

export default User
