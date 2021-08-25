import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  font: 1.6rem;
  > span,
  a {
    color: ${(props) => props.theme.palette.textSecondary};
  }

  a:hover {
    font-weight: 700;
  }
`;
