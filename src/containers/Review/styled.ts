import { Container } from '@mui/material'
import styled from 'styled-components'

export const Root = styled.div`
  width: 100%;
  height: 1000px;
  background: center center / cover rgb(250, 250, 250);
  overflow: hidden;
`

export const SectionContainer = styled(Container)`
  &&& {
    width: 1040px;
    display: flex;
    box-sizing: border-box;
    position: relative;
  }
`

export const TypoContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 298px;
  gap: 20px;
`

type ReviewContainerProps = {
  top: number
  right: number
}

export const ReviewContainer = styled.div<ReviewContainerProps>`
  display: flex;
  flex-direction: column;
  gap: 20px;
  position: absolute;
  top: ${(props) => props.top}px;
  right: ${(props) => props.right}px;
`
