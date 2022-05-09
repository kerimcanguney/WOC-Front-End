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

    render(){
    return (
        <Card>
            <ImgWrapper>
                <Img>{this.props.Image}</Img>
            </ImgWrapper>
            <TextWrapper>
                <TopText>request to join {this.props.Company}</TopText>
                <BodyText>{this.props.User} has requested your assistance on {this.props.Workspace}</BodyText>
                <FooterText>{this.props.Time}</FooterText>
            </TextWrapper>
            <ButtonWrapper>
                <Button><CheckIcon/></Button>
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
    Image: 'LOGO_IMG'
};
