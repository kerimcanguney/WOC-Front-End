import React, {useState} from 'react';
import PropTypes from 'prop-types';
import {Wrapper,Button, InputWrapper, Card, Input, Header, MailIcon, LockIcon, EyeIcon, Span, Footer} from './loginstyle';
async function loginUser(credentials){
    console.log(credentials);
    let email = credentials.email.replace("@","%40");
    let password = credentials.password;
    
    let fetchUrl = 'https://localhost:44310/Account/Login?email='+email+"&password="+password;
    
    console.log(fetchUrl);
    return fetch(fetchUrl,{
        method: 'POST',
        credentials: 'include',
        headers:{   
            'accept': 'text/plain'
        }
    })
    .then(data=>data.json())
}

export default function Login({setToken}) {
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()

    const handleSubmit = async e => {
        e.preventDefault();
        const token = await loginUser({
          email,
          password
        });
        setToken(token);
      }

    return(
        <>
        <Wrapper>
            <Card onSubmit={handleSubmit}>
                <Header>Welcome, please login</Header>
                <InputWrapper className='email'>
                    <label for="email">Email address</label>
                    <div style={{width: '200px'}}className='sec-2'>
                        <MailIcon/>
                        <Input placeholder='username@gmail.com' type='email' onChange={e => setEmail(e.target.value)}/>
                    </div>
                </InputWrapper>
                <InputWrapper  className='password'>
                    <label for="password">Password</label>
                    <div style={{width: '200px'}}className='sec-2'>
                        <LockIcon/>
                        <Input placeholder='·····' type='password' onChange={e => setPassword(e.target.value)}/>
                        <EyeIcon/>
                    </div>
                </InputWrapper>
                <Button type='submit'>
                    Login
                </Button>
                <Footer className='footer'>
                    <Span href='#'>Forgot password?</Span>
                </Footer>
            </Card>
        </Wrapper>
        </>
    )

}

Login.propTypes = {
    setToken: PropTypes.func.isRequired
}