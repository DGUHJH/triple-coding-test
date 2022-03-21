import Header from 'components/Header'
import MainAnywayContainer from 'containers/Anyway'
import MainBannerContainer from 'containers/Banner'
import MainCalcContainer from 'containers/Calc'
import MainClubContainer from 'containers/Club'
import MainGuideContainer from 'containers/Guide'
import MainOnceContainer from 'containers/Once'
import MainResultContainer from 'containers/Result'
import MainReviewContainer from 'containers/Review'
import MainScheduleContainer from 'containers/Schedule'
import { throttle } from 'lodash'
import { useCallback, useEffect, useState } from 'react'
import * as Styled from './styled'

const Main = () => {
  const [scrollY, setScrollY] = useState<number>(0)

  const throttled = useCallback(
    throttle((f) => f(), 200),
    [window.pageYOffset],
  )

  useEffect(() => {
    window.addEventListener('scroll', onScroll)
    return () => {
      window.removeEventListener('scroll', onScroll)
    }
  }, [])

  const onScroll = () =>
    throttled(() => {
      setScrollY(window.pageYOffset)
    })

  return (
    <Styled.Root>
      <Header scrollY={scrollY} />
      <MainBannerContainer scrollY={scrollY} />
      <MainResultContainer scrollY={scrollY} />
      <MainOnceContainer scrollY={scrollY} />
      <MainGuideContainer scrollY={scrollY} />
      <MainScheduleContainer scrollY={scrollY} />
      <MainAnywayContainer scrollY={scrollY} />
      <MainReviewContainer scrollY={scrollY} />
      <MainCalcContainer scrollY={scrollY} />
      <MainClubContainer scrollY={scrollY} />
    </Styled.Root>
  )
}

export default Main
