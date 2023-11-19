import * as S from './UiCard.style'

type Props = {
  name: string
  age?: number
  email: string
  img: string
  phone?: string
  about?: string
  onClick?: (event: React.MouseEvent<HTMLElement>) => void
}

export default function UiCard({
  name,
  email,
  img,
  age,
  phone,
  about,
  onClick,
}: Props) {
  return (
    <S.CardWrapper>
      <S.ImgWrapper>
        <S.UserImg onClick={onClick} src={img}></S.UserImg>
      </S.ImgWrapper>
      <S.UserInfoWrapper>
        <S.UserName>name: {name}</S.UserName>
        {age ? <span>age: {age}</span> : null}
        <S.UserEmail>email: {email}</S.UserEmail>
        {phone ? <span>phone: {phone}</span> : null}
        {about ? <span>about: {about}</span> : null}
      </S.UserInfoWrapper>
    </S.CardWrapper>
  )
}
