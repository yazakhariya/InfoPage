import * as S from './UiModal.style'
import cross from 'src/assets/cross.svg'

type PropsType = {
  children: React.ReactNode
  modalClose: () => void
}

const UiModal = ({ children, modalClose }: PropsType) => {
  return (
    <S.ModalScreen>
      <S.ModalContentBox>
        <S.ImageWrapper onClick={modalClose}>
          <img src={cross} width="20px" height="20px" />
        </S.ImageWrapper>
        <S.Children>
              {children}
        </S.Children>
      </S.ModalContentBox>
    </S.ModalScreen>
  )
}

export default UiModal
