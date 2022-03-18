import CommonImage from 'components/Image/Common';
import * as Styled from './styled';

type Props = {
  src: string;
  width: number;
  height: number;
};

const Phone: React.FC<Props> = ({ src, width, height }) => {
  return (
    <Styled.PhoneImgContainer width={width} height={height}>
      <Styled.PhoneImgWrapper width={width} height={height}>
        <CommonImage src={src} width={width - 30} height={height - 30} />
      </Styled.PhoneImgWrapper>
      <Styled.PhoneImgDesignWrapper />
    </Styled.PhoneImgContainer>
  );
};

export default Phone;
