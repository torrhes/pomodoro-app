import styled from "styled-components";

export const CountdownContainer = styled.div`
  font-family: "Roboto Momo", monospace;
  font-size: 10rem;
  line-height: normal;
  color: ${(props) => props.theme["gray-100"]};
  display: flex;
  gap: 1rem;
  span {
    background-color: ${(props) => props.theme["gray-700"]};
    padding: 2rem 1rem;
    border-radius: 8px;
  }
`;
export const CountdownSeparator = styled.div`
  padding: 2rem 0;
  color: ${(props) => props.theme["pink-500"]};
  width: 4rem;
  overflow: hidden;
  display: flex;
  justify-content: center;
`;
