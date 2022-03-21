import styled from 'styled-components'
import { ImageType } from 'types/common'

export const Root = styled.img<ImageType>`
  width: ${(props) => (props.width ? `${props.width}px` : `100%`)};
  height: ${(props) => props.height ?? 'auto'};
  margin-top: ${(props) => props.marginTop ?? 0}px;
  margin-bottom: ${(props) => props.marginBottom ?? 0}px;
  margin-left: ${(props) => props.marginLeft ?? 0}px;
  margin-right: ${(props) => props.marginRight ?? 0}px;
  border-radius: ${(props) => props.borderRadius ?? 0}px;
  transform: ${(props) => `rotate(${props.rotate}deg)`};
  opacity: ${(props) => props.opacity};
  cursor: ${(props) => (props.onClick ? `pointer` : `default`)};
  background-repeat: no-repeat;
  background-size: 100% 100%;
  transition: ${(props) => props.transition};
`
