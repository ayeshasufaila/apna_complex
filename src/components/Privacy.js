
import {Table, Grid} from '@material-ui/core';
import React,{useState,useEffect} from 'react'
import { useForm, Form } from './useForm';
import Controls from "./controls/Controls";


const genderItems = [
  { id: 'male', title: 'Male' },
  { id: 'female', title: 'Female' },
  { id: 'other', title: 'Other' },
]


   const initialValues ={
    id:0,
    LivesIn:'',
    Gender:'',
    DateofBirth:'new Date()',
    Anniversary:'',
    Bloodgroup:'',
  medicalpractitioner:'',
  }

const Privacy = () => {
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
      🔒 Privacy Setting
      <div>
      <Form onSubmit={handleSubmit}>
      
<Table container>
  <Table item x6={6}>
    <Controls.Select
    label='Keep Phone Number Private?'
    placeholder='only me'
    name='LivesIn'
    value={values.LivesIn}
    onChange={handleInputChange}
  
    />
                   <Controls.Select
                   
                        name="gender"
                        label="Keep Email ID Private?"
                        value={values.gender}
                        onChange={handleInputChange}
                        items={genderItems}
  
    />
     <Controls.Select
    name='DateofBirth'
    label='Allow in app Calling'
    value={values.DateofBirth}
    onChange={handleInputChange}
    />
     <Controls.Switch
    variant='outlined'
    label='Keep Profile Pic Private'
  
    />
     <Controls.Select
    variant='outlined'
    label='Gender Visible to'
  
    />
     <Controls.Select
     name='medicalpractitioner'
    value={values.medicalpractitioner}
    onChange={handleInputChange}
    variant='outlined'
    label='Date of birth visible to'
  
    />
     <Controls.Select
    
    label='Anniversary visible to'
  
    />
     <Controls.Select

    label='Blood Group visible to'
  
    />
  </Table>

</Table>
</Form>
      </div>
    </div>
  )
}

export default Privacy
