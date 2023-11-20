import { styled } from 'styled-components'

export const Button = styled.button`
  outline: none;
  border: none;
  color: #fff;
  border-radius: 5px;
  font-weight: 600;
  font-size: 20px;
  width: 200px;
  background: #37acfd;
  cursor: pointer;
  transition: all 0.3s ease;
  position: relative;
  display: inline-block;
  padding: 10px 36px;
  box-shadow:
    inset 2px 2px 2px 0px rgba(255, 255, 255, 0.5),
    7px 7px 20px 0px rgba(0, 0, 0, 0.1),
    4px 4px 5px 0px rgba(0, 0, 0, 0.1);

  &&:active {
    box-shadow: 2px 2px 5px #000;
  }
`
export const MainWrapper = styled.div`
  padding: 50px;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-items: center;

  // tablet version
  @media (max-width: 1024px) {
    padding: 40px;
  }

  // mobile version
  @media (max-width: 768px) {
    padding: 25px;
  }
`
export const UserListWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 55px;
  justify-items: center;

  // tablet version
  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 30px;
  }

  // mobile version
  @media (max-width: 768px) {
    grid-template-columns: repeat(1, 1fr);
    grid-gap: 15px;
  }
`
