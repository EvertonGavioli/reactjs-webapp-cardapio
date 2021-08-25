import styled from "styled-components";

export const Container = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const GroupButtons = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  margin-top: 1rem;

  > button {
    margin-right: 1rem;
  }
`;
