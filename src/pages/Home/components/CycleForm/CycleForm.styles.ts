import styled from 'styled-components';

export const FormContainer = styled.div`
  width: 100%;
  display: flex;
  gap: 0.5rem;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  font-size: 1.125rem;
  font-weight: bold;
`;
const BaseInput = styled.input`
  background-color: transparent;
  height: 2.5rem;
  border: 0;
  border-bottom: 2px solid ${(props) => props.theme['gray-500']};
  font-weight: bold;
  font-size: 1.125rem;
  padding: 0 0.5rem;
  color: ${(props) => props.theme['gray-100']};

  &:focus {
    box-shadow: none;
    color: ${(props) => props.theme['pink-500']};
  }
  &::placeholder {
    color: ${(props) => props.theme['gray-500']};
  }
`;

export const TaskInput = styled(BaseInput)`
  flex: 1;
  &::-webkit-calendar-picker-indicator {
    display: none !important;
  }
`;
export const MinutesAmoutInput = styled(BaseInput)`
  width: 4rem;
`;
