import React from "react";
import styled from "styled-components";
import Button from "@material-ui/core/Button";

const Title = styled(Button)`
  background-color: red;
  font-size: 50px;
`;

const Title2 = styled(Button)`
  background-color: green;
  font-size: 50px;
`;

export default () => (
  <>
    <Title>My page</Title>
    <Title2>My page</Title2>
  </>
);
