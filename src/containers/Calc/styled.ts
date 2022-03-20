import { Container } from '@mui/material';
import styled from 'styled-components';

export const Root = styled.div`
  width: 100%;
  height: 1000px;
  background: url('https://triple.guide/intro/images/bg-section-06.svg') center
    center / cover rgb(80, 227, 194);
  overflow: hidden;
`;

export const SectionContainer = styled(Container)`
  &&& {
    width: 1040px;
    display: flex;
    flex-direction: column;
    align-items: center;
    box-sizing: border-box;
    position: relative;
  }
`;

export const CarouselContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
`;

export const CarouselHeaderContainer = styled.div`
  width: 550px;
  display: flex;
  position: relative;
  margin-top: 60px;
`;

export const CarouselHeaderItemWrapper = styled.div`
  width: 110px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  z-index: 2;
`;

type CarouselBodyContainerProps = {
  isChanging: boolean;
  arrowType: 'left' | 'right';
};

export const CarouselBodyContainer = styled.div<CarouselBodyContainerProps>`
  height: 300px;
  box-shadow: rgb(0 0 0 / 5%) 0px 10px 20px 0px;
  position: relative;
  margin-top: 50px;
  ${(props) =>
    props.isChanging &&
    (props.arrowType === 'left'
      ? `transform: translateX(50%); opacity: 0;`
      : `transform: translateX(-50%); opacity: 0;`)}
  ${(props) => !props.isChanging && `opacity: 1`}
  transition: all 300ms ease-in-out 200ms;
`;

type CarouselArrowImgWrapperProps = {
  top: number;
  right: number;
  isActive: boolean;
};

export const CarouselArrowImgWrapper = styled.div<CarouselArrowImgWrapperProps>`
  position: absolute;
  top: ${(props) => props.top}px;
  right: ${(props) => props.right}px;
  opacity: 0.3;
  transition: all 300ms ease-in-out 0s;
  &:hover {
    ${(props) => props.isActive && `opacity: 1;`}
  }
`;

type CarouselHeaderPointBoxProps = {
  left: number;
};

export const CarouselHeaderPointBox = styled.div<CarouselHeaderPointBoxProps>`
  width: 110px;
  height: 50px;
  background-color: rgb(255, 255, 255);
  transition: all 300ms ease-in-out 200ms;
  position: absolute;
  box-shadow: rgb(0 0 0 / 5%) 0px 5px 10px 0px;
  top: 0px;
  left: ${(props) => props.left}px;
  border-radius: 27px;
  z-index: 1;
`;
