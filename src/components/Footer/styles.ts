import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 5.6rem;
  background-color: ${(props) => props.theme.palette.backgroundSecondary};

  > span {
    color: ${(props) => props.theme.palette.textSecondary};
  }
`;
