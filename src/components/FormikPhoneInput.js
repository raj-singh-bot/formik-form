import React from 'react'
import PhoneInput from 'react-phone-number-input'
import 'react-phone-number-input/style.css'


const FormikPhoneInput = React.forwardRef (({name, onChange}, ref) => {
  return (
    <PhoneInput ref={ref} name={name} onChange={onChange} />
  )
})

export default FormikPhoneInput;