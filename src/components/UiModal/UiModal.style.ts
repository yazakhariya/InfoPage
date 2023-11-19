import { styled } from 'styled-components'

export const ModalScreen = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  z-index: 999;
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(170, 170, 170, 0.9);
`
export const ModalContentBox = styled.div`
  position: relative;
  border-radius: 15px;
`
export const Children = styled.div`
  background-color: #ffffff;
  border-radius: 15px;
`
export const ImageWrapper = styled.div`
  position: absolute;
  z-index: 999;
  top: 0;
  right: 0;
  padding: 10px;
  cursor: pointer;
`
