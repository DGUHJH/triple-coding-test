import MainBannerContainer from 'containers/Main';
import MainResultContainer from 'containers/Result';
import * as Styled from './styled';

const Main = () => {
  return (
    <Styled.Root>
      <MainBannerContainer />
      <MainResultContainer />
    </Styled.Root>
  );
};

export default Main;
