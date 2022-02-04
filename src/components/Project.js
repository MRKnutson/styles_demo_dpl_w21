import React from "react";
import { Card, Icon } from "semantic-ui-react";
import styled, { keyframes } from "styled-components";

const Project = ({ full_name, description }) => {
  return (
    <StyledCard>
      <Card.Content>
        <Card.Header>
          <Truncated>{full_name}</Truncated>
        </Card.Header>
        <Card.Meta>{description}</Card.Meta>
        <Card.Meta>
          <Star>
            <Icon name= "star"/>
          </Star>
        </Card.Meta>
      </Card.Content>
    </StyledCard>
  );
};

export default Project;

const rotate360 = keyframes`
  from{ transform: rotate(0deg); color: red;}
  to{ transform: rotate(360deg); color: blue;}
`;

const Star = styled.div`
display: inline-block;
// color: yellow;
text-shadow: 1px black;
font-size: 2rem;
animation: ${rotate360} 8s linear infinite;`


const Truncated = styled.div `
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

 const StyledCard = styled(Card)`
  height: 200px;
 `