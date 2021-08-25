import styled from "styled-components";
import { device } from "../../../styles/breakpoints";

export const Container = styled.div`
  position: absolute;

  display: flex;
  flex-direction: column;
  align-items: center;

  width: 100%;
  height: 100%;
  padding-top: 56px;
`;

export const Logo = styled.img`
  width: 20rem;
`;

export const MessageContainer = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  margin-top: -28rem;

  > p {
    font-weight: 200;
    font-size: 4.8rem;
    display: inline;
    color: ${(props) => props.theme.palette.common.white};
  }

  > span {
    font-weight: 500;
    font-size: 2.4rem;
    display: inline;
    color: ${(props) => props.theme.palette.common.white};
    text-align: center;

    padding: 0rem 8rem;
  }

  @media ${device.laptop} {
    > p {
      font-size: 6rem;
    }

    > span {
      font-size: 3.2rem;
    }
  }
`;
