import styled, { keyframes } from "styled-components";

const Wrapper = styled.div`
  display: flex;
  height: 100vh;
  align-items: center;
  justify-content: center;
`;
const rotateAni = keyframes`
  0% {
    transform: rotate(0deg);
    border-radius: 0;
  }
  50% {
    border-radius: 100px;
  }
  100%{
    transform: rotate(360deg);
    border-radius: 0;
  }
`;

const Emoji = styled.span`
  font-size: 60px;
  transition: font-size 0.4s ease-in-out;
`;

const Box = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 200px;
  height: 200px;
  background-color: tomato;
  animation: ${rotateAni} 1s linear infinite;
  ${Emoji}:hover {
    font-size: 100px;
  }
`;

function App() {
  return (
    <Wrapper>
      <Box>
        <Emoji>😍</Emoji>
      </Box>
      <Emoji>🍙</Emoji>
    </Wrapper>
  );
}

export default App;
