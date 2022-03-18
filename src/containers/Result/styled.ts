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

export const IconImgContainer = styled.div`
  width: 400px;
  height: 338px;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
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
`;

export const InfoTypoLineContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;

export const InfoAwardContainer = styled.div`
  display: flex;
  align-items: center;
  margin-top: 30px;
`;

export const InfoItemContainer = styled.div`
  width: 200px;
  display: flex;
  align-items: center;
  margin-right: 39px;
`;
