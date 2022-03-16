import React from 'react'
import {Container, Wrapper, Card, Input, Button, FormH1, Form, TextArea, InputWrapper, ButtonWrapper} from './styled'
const index = () => {
  return (
    <Container>
      <Card>
        <Form>
            <FormH1>Required</FormH1>
            <InputWrapper>
              <Input placeholder='Company'/>
              <Input placeholder='Product name'/>
              <Input placeholder='Description'/>
              <Input placeholder='Type'/>
              <Input placeholder='Category'/>
            </InputWrapper>
            <ButtonWrapper>
              <Button>Confirm</Button>
            </ButtonWrapper>
        </Form>
      </Card>
    </Container>
  )
}

export default index