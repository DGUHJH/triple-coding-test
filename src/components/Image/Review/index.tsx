import CommonImage from '../Common'
import * as Styled from './styled'

type Props = {
  src: string
  width: number
  height: number
}

const ReviewImage: React.FC<Props> = ({ src, width, height }) => {
  return (
    <Styled.Root width={width} height={height}>
      <CommonImage src={src} />
    </Styled.Root>
  )
}

export default ReviewImage
