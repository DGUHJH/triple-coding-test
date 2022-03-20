import { Container } from '@mui/material';
import styled from 'styled-components';

export const Root = styled.div`
  width: 100%;
  height: 1000px;
  background: center center / cover rgb(245, 245, 245);
  overflow: hidden;
`;

export const SectionContainer = styled(Container)`
  &&& {
    width: 1040px;
    display: flex;
    box-sizing: border-box;
    position: relative;
  }
`;

export const TypoContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  top: 240px;
  position: absolute;
`;

type ImgWrapperProps = {
  top: number;
  right: number;
};

export const ImgWrapper = styled.div<ImgWrapperProps>`
  position: absolute;
  top: ${(props) => props.top}px;
  right: ${(props) => props.right}px;
`;
