import { Container } from '@mui/material'
import styled from 'styled-components'

export const Root = styled.div`
  width: 100%;
  height: 1000px;
  background: center center / cover rgb(245, 245, 245);
  overflow: hidden;
`

export const SectionContainer = styled(Container)`
  &&& {
    width: 1040px;
    display: flex;
    justify-content: space-between;
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

export const PhoneContainer = styled.div`
  position: relative;
`

type PhoneWrapperProps = {
  top: number
  right: number
}

export const PhoneWrapper = styled.div<PhoneWrapperProps>`
  position: absolute;
  top: ${(props) => props.top}px;
  right: ${(props) => props.right}px;
`
