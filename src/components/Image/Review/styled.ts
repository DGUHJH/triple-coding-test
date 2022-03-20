import styled from 'styled-components';

type RootProps = {
  width: number;
  height: number;
};

export const Root = styled.div<RootProps>`
  width: ${(props) => props.width}px;
  height: ${(props) => props.height}px;
  border-radius: 6px;
  box-shadow: rgb(0 0 0 / 5%) 0px 10px 20px 0px;
`;
