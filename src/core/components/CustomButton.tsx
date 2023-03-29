import styled from 'styled-components/macro'
import { Button as MuiButton, ButtonProps } from '@mui/material'
import { FC } from 'react'

export const BaseButton = styled(MuiButton)`
&&{
  font-weight: 500;
  font-size: 16px;
  border: none;
  border-radius: 5px;
  text-transform: none;
  box-shadow: none;
  letter-spacing: 0;
  
  &:hover{
    box-shadow: none;
  }
}
`

type TButtonProps = {
    text: string
} & ButtonProps

const CustomButton: FC<TButtonProps> = ({ text, children, ...props }) => (
    <BaseButton {...props}>{text || children}</BaseButton>
)

export default CustomButton
