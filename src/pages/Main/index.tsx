import MainAnywayContainer from 'containers/Anyway';
import MainBannerContainer from 'containers/Banner';
import MainCalcContainer from 'containers/Calc';
import MainClubContainer from 'containers/Club';
import MainGuideContainer from 'containers/Guide';
import MainOnceContainer from 'containers/Once';
import MainResultContainer from 'containers/Result';
import MainReviewContainer from 'containers/Review';
import MainScheduleContainer from 'containers/Schedule';
import * as Styled from './styled';

const Main = () => {
  return (
    <Styled.Root>
      <MainBannerContainer />
      <MainResultContainer />
      <MainOnceContainer />
      <MainGuideContainer />
      <MainScheduleContainer />
      <MainAnywayContainer />
      <MainReviewContainer />
      <MainCalcContainer />
      <MainClubContainer />
    </Styled.Root>
  );
};

export default Main;
