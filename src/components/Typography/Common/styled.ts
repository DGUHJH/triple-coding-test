import { Typography } from '@mui/material'
import styled from 'styled-components'
import { FontType } from 'types/common'

export const Root = styled(Typography)<FontType>`
  &&& {
    font-family: ${(props) => props.fontFamily};
    font-size: ${(props) => props.fontSize}px;
    font-weight: ${(props) => props.fontWeight ?? 'inherit'};
    color: ${(props) => props.color ?? '#111'};
    line-height: ${(props) => props.lineHeight ?? '120%'};
    text-decoration: ${(props) => props.textDecoration ?? 'none'};
    display: flex;
    align-items: center;
    margin-top: ${(props) => props.marginTop ?? 0}px;
    margin-bottom: ${(props) => props.marginBottom ?? 0}px;
    margin-left: ${(props) => props.marginLeft ?? 0}px;
    margin-right: ${(props) => props.marginRight ?? 0}px;
    ${(props) =>
      props.animationstart === 'true' &&
      `animation: ${props.animationtype ?? 'none'};
      -moz-animation: ${props.animationtype ?? 'none'};
      -webkit-animation: ${props.animationtype ?? 'none'};
      -o-animation: ${props.animationtype ?? 'none'};`}
    word-break: keep-all;
    transition: ${(props) => props.transition};
    cursor: ${(props) => (props.onClick ? `pointer` : `inherit`)};
  }
`
