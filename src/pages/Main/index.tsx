import MainBannerContainer from 'containers/Banner';
import MainOnceContainer from 'containers/Once';
import MainResultContainer from 'containers/Result';
import * as Styled from './styled';

const Main = () => {
  return (
    <Styled.Root>
      <MainBannerContainer />
      <MainResultContainer />
      <MainOnceContainer />
    </Styled.Root>
  );
};

export default Main;
