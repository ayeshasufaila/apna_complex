
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

const Others = () => {
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
      👨‍👧 Other Details
      <div>
      <Form onSubmit={handleSubmit}>
      
<Table container>
  <Table item x6={6}>
    <Controls.Select
    label='LivesIn'
    name='LivesIn'
    value={values.LivesIn}
    onChange={handleInputChange}
  
    />
                   <Controls.RadioGroup
                   
                        name="gender"
                        label="Gender"
                        value={values.gender}
                        onChange={handleInputChange}
                        items={genderItems}
  
    />
     <Controls.DatePicker
    name='DateofBirth'
    label='   DateofBirth'
    value={values.DateofBirth}
    onChange={handleInputChange}
    />
     <Controls.Input
    variant='outlined'
    label=' Anniversary'
  
    />
     <Controls.Select
    variant='outlined'
    label='Bloodgroup'
  
    />
     <Controls.Switch
     name='medicalpractitioner'
    value={values.medicalpractitioner}
    onChange={handleInputChange}
    variant='outlined'
    id=''
    label='Are you medical practitioner?'
  
    />
     <Controls.Input
    variant='outlined'
    label='Govt.ID number'
  
    />
  </Table>

</Table>
</Form>
      </div>
    </div>
  )
}

export default Others
