
import { useEffect } from 'react'
import Request from '../../../services/http'
const request = new Request()

const AccessControl = () => {
  const getModules = async()=>{
   const response  = await request.get('modules',{})
   console.log(response)

        }      
  useEffect(()=>{
    getModules()
  },[])
  return (
    <div>
      hols
    </div>
  )
}

export default AccessControl
