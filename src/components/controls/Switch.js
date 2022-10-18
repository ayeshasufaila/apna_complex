import { Box, FormControlLabel,Switch as MuiSwitch } from '@material-ui/core'
import React from 'react'
import { useState } from 'react'


const Switch = (props) => {
    const [checked, setChecked] = useState(false)
    const { name, label, value } = props
    const handleChange = (event) => {
      setChecked(event.target.checked);
    };

  return (
    <Box>
<FormControlLabel control={<MuiSwitch 
                color="primary"
           variant="outlined"
           id={label}
            label={label}
            name={name}
            value={value}
                checked={checked}
                onChange={handleChange}
  
            />}  />
            
    </Box>
      
    
  )
}

export default Switch
