import * as S from './UiCard.style'

type Props = {
  name: string
  email: string
  img: string
}

export default function UiCard({ name, email, img }: Props) {
  return (
    <S.CardWrapper>
      <S.ImgWrapper><S.UserImg src={img}></S.UserImg></S.ImgWrapper>
      
      <S.UserName>{name}</S.UserName>
      <S.UserEmail>{email}</S.UserEmail>
    </S.CardWrapper>
  )
}
