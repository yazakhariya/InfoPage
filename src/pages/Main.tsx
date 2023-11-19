import * as React from 'react'
import { useAction } from 'src/api/hooks/useAction'
import { useTypesSelector } from 'src/api/hooks/useSelector'
import UiCard from 'src/components/UiCard/UiCard'

export default function Main() {
  const [visible, setVisible] = React.useState(4)

  const { user, error, loading } = useTypesSelector((state) => state.user)

  const { fetchUsers } = useAction()

  React.useEffect(() => {
    fetchUsers()
  }, [])

  function handleButtonClick() {
    setVisible((prevNumber) => prevNumber + 4)
  }

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
      {visible < user.length ? (
        <button onClick={handleButtonClick}></button>
      ) : null}
    </>
  )
}
