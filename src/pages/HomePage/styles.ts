import { device } from "./../../styles/breakpoints";
import styled from "styled-components";

import BackgroungImage from "../../assets/images/pizza-man.svg";

export const Container = styled.div`
  display: flex;
  width: 100vw;

  min-height: 100vh;
  max-width: 192rem;
  margin: 0 auto;
`;

export const WelcomeContainer = styled.div`
  display: none;
  position: relative;

  @media ${device.tablet} {
    display: flex;
    flex: 1;
  }
`;

export const BackgroundImage = styled.div`
  width: 100%;
  height: 100%;

  background: url(${BackgroungImage}) no-repeat;
  background-size: cover;
  background-position-y: 45%;
  filter: brightness(0.5);
`;

export const AccountContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${(props) => props.theme.palette.background};
  width: 100%;

  @media ${device.tablet} {
    width: 40%;
    min-width: 40rem;
    max-width: 60rem;
  }
`;
