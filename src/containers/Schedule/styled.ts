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
    flex-direction: column;
    align-items: center;
    padding-top: 150px;
    box-sizing: border-box;
    position: relative;
  }
`

export const PhoneContainer = styled.div`
  display: flex;
  gap: 25px;
  margin-top: 70px;
`
