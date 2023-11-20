import * as React from 'react'
import { useTypesSelector } from 'src/api/hooks/useSelector'
import UiCard from 'src/components/UiCard/UiCard'
import UiModal from 'src/components/UiModal/UiModal'

type Props = {
  visible: number
}
// TODO доделать карточку (оформление шрифта) 
// grid layout
// адаптировать

export default function UserList({ visible }: Props) {
  const { user, error, loading } = useTypesSelector((state) => state.user)
  const [openModal, setOpenModal] = React.useState<boolean | null>(null)
  const [userInfo, setUserInfo] = React.useState(Array(0))

  function handleCardClick(event: React.MouseEvent<HTMLElement>) {
    setOpenModal(true)
    const info = user.filter(
      (item: { picture: string }) =>
        item.picture === (event.target as HTMLElement).getAttribute('src')
    )
    setUserInfo(info)
  }

  const ExtraUserInfo = openModal ? (
    <UiModal modalClose={() => setOpenModal(null)}>
      <UiCard
        open={openModal}
        name={userInfo[0].name}
        age={userInfo[0].age}
        about={userInfo[0].about}
        email={userInfo[0].email}
        img={userInfo[0].picture}
        phone={userInfo[0].phone}
      />
    </UiModal>
  ) : null

  const UserList = (
    <>
      {error ? (
        <h1>{error}</h1>
      ) : loading ? (
        <h1>Loading...</h1>
      ) : (
        user
          .slice(0, visible)
          .map((el) => (
            <UiCard
              onClick={(event) => handleCardClick(event)}
              key={el.name}
              name={el.name}
              email={el.email}
              img={el.picture}
            />
          ))
      )}
    </>
  )

  return (
    <>
      {UserList ? UserList : null}
      {ExtraUserInfo ? ExtraUserInfo : null}
    </>
  )
}
