import React from 'react'
import {
  Card,
  ImgWrapper,
  Img,
  TextWrapper,
  TopText,
  BodyText,
  FooterText,
  ButtonWrapper,
  Button,
  CheckIcon
} from "./workspacestyle";

export default class WorkspaceItem extends React.Component {
    handleClick = () =>{
        try {
            const requestOptions = {
                method: 'POST',
                // headers: { 'Content-Type': 'application/json' },
            };
            fetch(`https://localhost:44310/Workspace/AcceptJoinRequest?userId=${this.props.accountId}&workspaceId=${this.props.workspaceId}`, requestOptions)
                .then(response => response.json())
                .then(data => console.log(data));  
        } catch (error) {
            console.log(error)
        }
        
    }
    render(){
    return (
        <Card bgColor={this.props.Accepted}>
            <ImgWrapper>
                <Img>{this.props.Image}</Img>
            </ImgWrapper>
            <TextWrapper>
                <TopText>request to join {this.props.Company}</TopText>
                <BodyText>{this.props.User} has requested your assistance on {this.props.Workspace}</BodyText>
                <FooterText>{this.props.Time}</FooterText>
            </TextWrapper>
            <ButtonWrapper>
                {this.props.Accepted !== true &&
                <Button onClick={this.handleClick}><CheckIcon/></Button>
                }
            </ButtonWrapper>
        </Card>
        )
    }
}

WorkspaceItem.defaultProps = {
    User: 'USER',
    Host: 'HOST',
    Workspace: 'WORKSPACE',
    Company: 'COMPANY_NAME',
    Time: '24-05-2022 at 15:32',
    Image: 'LOGO_IMG',
    Accepted: false
};
