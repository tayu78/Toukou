import React from 'react'

const FormInput = ({label,value,setData,inputWidth="",labelWidth="w-16"}) => {
  return (
    <div className='mb-5' >
      <label className={labelWidth+' mr-3 inline-block w-16 text-right'}>{label}</label>
      <input className={inputWidth + ' border rounded'} value={value} onChange={(e)=>setData(e.target.value)} />
    </div>
  )
}

export default FormInput