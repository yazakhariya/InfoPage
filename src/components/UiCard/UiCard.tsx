import * as S from './UiCard.style'

type Props = {
  name: string
  age?: number
  email: string
  img: string
  phone?: string
  about?: string
  open?: boolean
  onClick?: (event: React.MouseEvent<HTMLElement>) => void
}

export default function UiCard(props: Props) {
  return (
    <S.CardWrapper>
      <S.ImgWrapper
        open={props.open}
        onClick={props.onClick}
        src={props.img}
      ></S.ImgWrapper>
      <S.UserInfoWrapper open={props.open}>
        <div>
          <S.UserCardText>name: </S.UserCardText>
          {props.name}
        </div>
        {props.age ? (
          <div>
            <S.UserCardText>age: </S.UserCardText>
            {props.age}
          </div>
        ) : null}
        <div>
          <S.UserCardText>email: </S.UserCardText>
          {props.email}
        </div>
        {props.phone ? (
          <div>
            <S.UserCardText>phone: </S.UserCardText>
            {props.phone}
          </div>
        ) : null}
        {props.about ? (
          <div>
            <S.UserCardText>about: </S.UserCardText>
            {props.about}
          </div>
        ) : null}
      </S.UserInfoWrapper>
    </S.CardWrapper>
  )
}
