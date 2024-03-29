import { styled } from 'styled-components'

export const CardWrapper = styled.div`
  @-webkit-keyframes shadow-drop-center {
    0% {
      -webkit-box-shadow: 0 0 0 0 rgba(0, 0, 0, 0);
      box-shadow: 0 0 0 0 rgba(0, 0, 0, 0);
    }
    100% {
      -webkit-box-shadow: 0 0 20px 0px rgba(0, 0, 0, 0.35);
      box-shadow: 0 0 20px 0px rgba(0, 0, 0, 0.35);
    }
  }
  @keyframes shadow-drop-center {
    0% {
      -webkit-box-shadow: 0 0 0 0 rgba(0, 0, 0, 0);
      box-shadow: 0 0 0 0 rgba(0, 0, 0, 0);
    }
    100% {
      -webkit-box-shadow: 0 0 20px 0px rgba(0, 0, 0, 0.35);
      box-shadow: 0 0 20px 0px rgba(0, 0, 0, 0.35);
    }
  }

  border-radius: 15px;
  margin-bottom: 20px;
  -webkit-animation: shadow-drop-center 0.4s
    cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
  animation: shadow-drop-center 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
`
export const ImgWrapper = styled.div<{ src?: string; open?: boolean }>`
  ${(props) =>
    props.open === true
      ? `width: 400px;
  height: 300px;`
      : `width: 300px;
  height: 200px;
  cursor: pointer;
  `}
  overflow: hidden;
  background-image: url(${(props) => props.src});
  background-position: top;
  background-size: cover;
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;

  // tablet version
  @media (max-width: 1024px) {
    ${(props) =>
      props.open === true
        ? `width: 375px;
    height: 275px;`
        : `width: 275px;
    height: 175px;
    cursor: pointer;
    `}
  }

  // mobile version
  @media (max-width: 768px) {
    ${(props) =>
      props.open === true
        ? `width: 350px;
    height: 250px;`
        : `width: 250px;
    height: 150px;
    cursor: pointer;
    `}
  }
`

export const UserInfoWrapper = styled.div<{ open?: boolean }>`
  padding: 15px;
  display: flex;
  flex-direction: column;
  ${(props) => (props.open === true ? `width: 400px;` : `width: 300px;`)}
  text-align: justify;

  // tablet version
  @media (max-width: 1024px) {
    ${(props) => (props.open === true ? `width: 375px;` : `width: 275px;`)}
  }

  // mobile version
  @media (max-width: 768px) {
    ${(props) => (props.open === true ? `width: 350px;` : `width: 250px;`)}
  }
`

export const UserCardText = styled.span`
  color: #aaaaaa;
`
