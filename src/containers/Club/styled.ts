import { Container } from '@mui/material'
import styled from 'styled-components'

export const Root = styled.div`
  width: 100%;
  height: 1000px;
  background: url('https://triple.guide/intro/images/group-section-8.svg')
    center center / cover rgb(54, 102, 255);
  overflow: hidden;
`

export const SectionContainer = styled(Container)`
  &&& {
    width: 1040px;
    display: flex;
    flex-direction: column;
    align-items: center;
    box-sizing: border-box;
    position: relative;
  }
`

export const JoinButtonWrapper = styled.div`
  width: 200px;
  height: 60px;
  background: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 30px;
`
