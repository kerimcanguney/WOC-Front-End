import React from 'react'
import {Container, Logo, Title} from './joinedworkspacestyle'

class Joinedworkspaces extends React.Component {

    render(){
        return (
            <Container to={'#'}>
                <Logo src='https://via.placeholder.com/350x150'/>
                <Title>{this.props.Title}</Title>
            </Container>
          )
    }
}
Joinedworkspaces.defaultProps = {
    Title: "Default",
}
export default Joinedworkspaces