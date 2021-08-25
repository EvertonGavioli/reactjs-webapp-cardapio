import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  min-width: 20rem;

  padding: 1rem 1rem;
  border-radius: 1rem;

  background-color: ${(props) => props.theme.palette.backgroundSecondary};

  > strong {
    color: ${(props) => props.theme.palette.textSecondary};
  }

  > span {
    font-size: 2.4rem;
  }
`;
