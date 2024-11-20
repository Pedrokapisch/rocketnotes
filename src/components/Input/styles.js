import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;

  margin-bottom: 8px;
  border-radius: 10px;

  color: ${({ theme }) => theme.COLORS.GRAY_300};
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_900};
  
  > svg {
      margin-left: 16px;
  }

  > input {
      height: 56px;
      width: 100%;

      padding: 12px;

      color: ${({ theme }) => theme.COLORS.WHITE};
      background: transparent;
      border: none;

      &:placeholder {
        color: ${({ theme }) => theme.COLORS.GRAY_300};
      }
  }
`;