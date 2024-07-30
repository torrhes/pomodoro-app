import styled from "styled-components";

export const HomeContainer = styled.main`
  flex: 1;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  form {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 3.5rem;
  }
`;

export const BaseCountdownButton = styled.button`
  width: 100%;
  background-color: ${(props) => props.theme["pink-500"]};
  color: ${(props) => props.theme["gray-100"]};
  border: 0;
  padding: 1rem;
  border-radius: 8px;
  display: flex;
  gap: 0.5rem;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }
  &:not(:disabled):hover {
    background-color: ${(props) => props.theme["pink-700"]};
  }
`;

export const StopCountdownButton = styled(BaseCountdownButton)`
  background-color: ${(props) => props.theme["red"]};
  color: ${(props) => props.theme["gray-100"]};
  &:not(:disabled):hover {
    background-color: ${(props) => props.theme["redLow"]};
  }
`;
export const StartCountdownButton = styled(BaseCountdownButton)`
  background-color: ${(props) => props.theme["green-500"]};
  color: ${(props) => props.theme["gray-100"]};
  &:not(:disabled):hover {
    background-color: ${(props) => props.theme["green-700"]};
  }
`;
