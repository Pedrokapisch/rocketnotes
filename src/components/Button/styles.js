import styled from "styled-components";

export const Container = styled.button`
  width: 100%;

  color: ${({ theme }) => theme.COLORS.BACKGROUND_800};
  background-color: ${({ theme }) => theme.COLORS.ORANGE};

  height: 56px;
  border: 0;
  padding: 0;
  margin-top: 16px;
  border-radius: 10px;
  font-weight: 500;

  &:disabled {
    opacity: 0.5;
  }
`;