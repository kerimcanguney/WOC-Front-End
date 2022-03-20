import React from 'react'
import {Form, Input} from './styled'


function basicInfo ({formData, setFormData}){
    return (
      <Form>
        <Input 
          type="text" 
          placeholder='company'
          value={formData.company}
          onChange={(event) => 
            setFormData({...formData, company: event.target.value})
          }
        />
        <Input placeholder='product name'/>
        <Input placeholder='description'/>
      </Form>
    )
}

export default basicInfo
