import styled from 'styled-components'
import React from 'react'
export class ProductItem extends React.Component {
    render(){
        return(
            <tr>
                <td>{this.props.id}</td>
                <td>{this.props.category}</td>
                <td>{this.props.type}</td>
                <td>{this.props.title}</td>
                <td>
                <Container>
                    <Progress 
                        progress={this.props.progress}
                        data-label={this.props.progress}
                    />
                </Container>
                </td>
                <td><button>Edit</button></td>
            </tr>
        )
    }
}

ProductItem.defaultProps = {
    id: "{#NaN}",
    category: "{NaN_CATEGORY}",
    type: "{NaN_TYPE}",
    title: "{NaN_TITLE}",
    progress: "",
}

export const Container = styled.div`
    height: 15px;
    background-color: #ccc;
    position: relative;
    width: 60%;
    border-radius: 15px;
    font-size: .7em;
    text-align: center;
    color: black;
    font-weight: bold;
`
export const Progress = styled.div`
    position: absolute;
    height: 100%;
    width: ${props => props.progress || "10%"};

    border-radius: 15px;
    background-color: rgb(0,100,150);
    transition: all .4s linear;

    &::before{
        content: attr(data-label)
    }
`