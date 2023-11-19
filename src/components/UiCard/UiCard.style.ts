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
  width: 300px;
  -webkit-animation: shadow-drop-center 0.4s
    cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
  animation: shadow-drop-center 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
`
export const ImgWrapper = styled.div`
  width: 300px;
  height: 200px;
  overflow: hidden;
  cursor: pointer;
`
export const UserImg = styled.img`
  width: 300px;
  height: 310px;
  border-radius: 15px;
`

export const UserInfoWrapper = styled.div`
  padding: 15px;
  display: flex;
  flex-direction: column;
  gap: 5px;
`

export const UserName = styled.span`
  
`

export const UserEmail = styled.span``
