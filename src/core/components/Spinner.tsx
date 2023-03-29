import {FC, memo} from 'react'
import styled, {keyframes} from 'styled-components/macro'

const ratio = 0.75
const Spin = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`
type TProps = {
    widthHeight?: number
}

// 75%percent
const LoaderStyled = styled.section<TProps>`
  width: ${({widthHeight}) => widthHeight}px;
  height: ${({widthHeight}) => widthHeight}px;
  border-radius: 50%;
  display: inline-block;
  position: relative;
  background: conic-gradient(from 114.04deg at 50% 50%, #0052D9 -3.75deg,
  rgba(22, 93, 255, 0) 331.83deg, #0052D9 339.88deg, #0052D9 356.25deg,
  rgba(22, 93, 255, 0) 691.83deg);
  animation: ${Spin} 1s linear infinite;

  &:after {
    content: '';
    box-sizing: border-box;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    width: ${({widthHeight}) => widthHeight && widthHeight * ratio}px;
    height: ${({widthHeight}) => widthHeight && widthHeight * ratio}px;
    border-radius: 50%;
    background: ${({theme}) => theme.colors.grey};
  }
`

const SpinnerContainerStyled = styled.article`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  min-height: calc(50vw - 25px);
`

const Spinner: FC<TProps> = ({widthHeight = 32}) => (
    <SpinnerContainerStyled>
        <LoaderStyled widthHeight={widthHeight}/>
    </SpinnerContainerStyled>
)

export default memo(Spinner)
