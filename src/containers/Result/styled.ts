import { Container } from '@mui/material';
import styled from 'styled-components';

export const Root = styled.div`
  width: 100%;
  height: 551px;
  position: relative;
  overflow: hidden;
`;

export const SectionContainer = styled(Container)`
  &&& {
    width: 1040px;
    display: flex;
    padding-top: 150px;
    box-sizing: border-box;
  }
`;

type IconImgContainerProps = {
  isActive: boolean;
};

export const IconImgContainer = styled.div<IconImgContainerProps>`
  width: 400px;
  height: 338px;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  opacity: 0;
  transform: translateY(10%);
  ${(props) =>
    props.isActive &&
    `opacity: 1;
  transform: translateY(0%);
  transition: all 700ms ease-in-out 0s;`}
`;

export const IconImgTypoWrapper = styled.div`
  position: absolute;
  top: 285px;
`;

export const InfoContainer = styled.div`
  width: 517px;
  display: flex;
  flex-direction: column;
  margin-left: 200px;
  transform: translateY(10%);
`;

type InfoTypoContainerProps = {
  isActive: boolean;
};

export const InfoTypoContainer = styled.div<InfoTypoContainerProps>`
  display: flex;
  flex-direction: column;
  opacity: 0;
  transform: translateY(10%);
  ${(props) =>
    props.isActive &&
    `opacity: 1;
  transform: translateY(0%);
  transition: all 700ms ease-in-out 0s;
  transition-delay: 100ms;`}
`;

export const InfoTypoLineContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;

type InfoAwardContainerProps = {
  isActive: boolean;
};

export const InfoAwardContainer = styled.div<InfoAwardContainerProps>`
  display: flex;
  align-items: center;
  margin-top: 30px;
  opacity: 0;
  transform: translateY(10%);
  ${(props) =>
    props.isActive &&
    `opacity: 1;
  transform: translateY(0%);
  transition: all 700ms ease-in-out 0s;
  transition-delay: 200ms;`}
`;

export const InfoItemContainer = styled.div`
  width: 200px;
  display: flex;
  align-items: center;
  margin-right: 39px;
`;
