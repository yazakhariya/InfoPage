import * as React from 'react'
import * as S from './Main.style'
import { useAction } from 'src/api/hooks/useAction'
import { useTypesSelector } from 'src/api/hooks/useSelector'
import UserList from './components/UserList/UserList'

export default function Main() {
  const [visible, setVisible] = React.useState<number>(4)

  const { user } = useTypesSelector((state) => state.user)

  const { fetchUsers } = useAction()

  React.useEffect(() => {
    fetchUsers()
  }, [])

  function handleButtonClick() {
    setVisible((prevNumber) => prevNumber + 4)
  }

  return (
    <>
      <UserList visible={visible} />
      {visible < user.length ? (
        <S.Button onClick={handleButtonClick}>Load more...</S.Button>
      ) : null}
    </>
  )
}
