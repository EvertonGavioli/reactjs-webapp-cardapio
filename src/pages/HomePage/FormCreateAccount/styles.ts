import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;

  width: 100%;
  padding: 0% 5%;
`;

export const Form = styled.form`
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Titulo = styled.h1`
  color: ${(props) => props.theme.palette.text};
  font-size: 3.6rem;
`;

export const PolicaTermosContainer = styled.div`
  display: flex;
  align-items: center;
  min-height: 5rem;

  > label {
    padding-left: 1rem;
    font-size: 1.6rem;
    color: ${(props) => props.theme.palette.text};
    cursor: pointer;
  }
`;

export const LinkPoliticaTermos = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 10rem;

  > span,
  a {
    color: ${(props) => props.theme.palette.text};
    font-size: 1.6rem;
  }

  a:hover {
    font-weight: 700;
  }
`;
