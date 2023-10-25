import { useState } from "react";
import styled from "styled-components";

const Container = styled.div`
  background-color: ${(props) => props.theme.bgColor};
`;

const H1 = styled.h1`
  color: ${(props) => props.theme.textColor};
`;

interface DummyProps {
  text: string;
  otherTingHere: boolean;
}

function Dummy({ text }: DummyProps) {
  return <H1>{text}</H1>;
}

function App() {
  return <Container></Container>;
}

export default App;
