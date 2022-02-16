import styled from 'styled-components'

import { ReactComponent as GithubImage } from '../../assets/github-icon.svg'

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  /* justify-content: ${(showImage) => (showImage ? 'center' : 'none')}; */
  /* align-items: ${(showImage) => (showImage ? 'none' : 'center')}; */
`

export const SearchWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: ${(showImage) => (showImage ? '5%' : '0')};
`

export const Image = styled(GithubImage)`
  width: 50vw;
  height: 50vh;
`

export const LoadingWrapper = styled.div`
  position: absolute;
  transform: translate(-50%, -50%);
  top: 60%;
  left: 50%;
`

export const UserInfoWrapper = styled.div`
  height: 100vh;
  display: flex;
  align-items: flex-start;
  margin-left: 5%;
`

export const ReposWrapper = styled.div`
  display: flex;
`
