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
