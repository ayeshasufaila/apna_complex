import { Grid} from '@material-ui/core';
import React,{useState,useEffect} from 'react'
import { useForm, Form } from './useForm';
import Controls from "./controls/Controls";



const initialValues ={
  id:0,
  fullName:'',
  mobile:'',
  email:'',
}

const Basic = () => {
  const validate = (fieldValues = values) => {
    let temp = { ...errors }
    if ('fullName' in fieldValues)
        temp.fullName = fieldValues.fullName ? "" : "This field is required."
    if ('email' in fieldValues)
        temp.email = (/$^|.+@.+..+/).test(fieldValues.email) ? "" : "Email is not valid."
    if ('mobile' in fieldValues)
        temp.mobile = fieldValues.mobile.length > 9 ? "" : "Minimum 10 numbers required."
    
    setErrors({
        ...temp
    })
    if (fieldValues === values)
    return Object.values(temp).every(x => x === "")
}
const {
  values,
  setValues,
  errors,
  setErrors,
  handleInputChange,
  resetForm
} = useForm(initialValues, true, validate);

const handleSubmit = e => {
  e.preventDefault()
  if (validate()){
    
      resetForm()
  }
}
 
  return (
    <div>
      <div className="basic">👨‍👧 Basic Details</div>
      <div>
      <Form onSubmit={handleSubmit}>
<Grid container>
  <Grid item x6={6}>
    <Controls.Input
    label='Full Name'
    name='fullName'
    value={values.fullName}
    onChange={handleInputChange}
    
    />
     <Controls.Input
    label='Mobile'
    name='mobile'
    value={values.mobile}
    onChange={handleInputChange}
    />

<Controls.Input
    label='Add alternate phone no(optional)'
    name='mobile'
    value={values.mobile}
    onChange={handleInputChange}
    />
    
     <Controls.Input
    name='email'
    value={values.email}
    onChange={handleInputChange}
    label='Email'
    />

<Controls.Input
    name='email'
    value={values.email}
    onChange={handleInputChange}
    label='Add alternate email(optional)'
 />
  
  </Grid>
</Grid>
      </Form>
      </div>
    </div>
    
  )
}

export default Basic
