import React from 'react'

const FormInput = ({label,value,setData}) => {
  return (
    <div className='mb-5' >
          <label  className='mr-3 inline-block w-16 text-right'>{label}</label>
          <input  className='border rounded' value={value} onChange={(e)=>setData(e.target.value)} />
    </div>
  )
}

export default FormInput