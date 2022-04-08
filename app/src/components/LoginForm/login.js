import React, {useState} from 'react';
import PropTypes from 'prop-types';

async function loginUser(credentials){
    console.log(credentials);
    //https://localhost:44310/Account/Login?email=test%40test.com&password=test
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
        <div className="login-wrapper">
          <h1>Please Log In</h1>
          <form onSubmit={handleSubmit}>
            <label>
              <p>Email</p>
              <input type="text" onChange={e => setEmail(e.target.value)}/>
            </label>
            <label>
              <p>Password</p>
              <input type="password" onChange={e => setPassword(e.target.value)}/>
            </label>
            <div>
              <button type="submit">Submit</button>
            </div>
          </form>
        </div>
    )
}

Login.propTypes = {
    setToken: PropTypes.func.isRequired
}