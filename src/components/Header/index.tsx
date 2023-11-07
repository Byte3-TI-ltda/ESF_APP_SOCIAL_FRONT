import { Text } from '@byte3-esf/react';

import {
  CurrentPage,
  HeaderActions,
  HeaderContainer,
  HeaderInputSearch,
  HeaderInputSearchContainer,
  UserAvatar,
  UserAvatarContainer
} from "./styles";

import ESFLogo from '../../../public/esf-logo.svg'
import Image from "next/image";

import { ListDashes, House, MagnifyingGlass, Microphone, Envelope, Bell, Wrench } from 'phosphor-react'

export function Header() {
  return (
    <HeaderContainer>
      <ListDashes size={30} weight="bold" />
      <Image src={ESFLogo} width={150} height={40} quality={100} alt="Exploradores Sem Fronteira" />

      <CurrentPage>
        <House size={30} weight="bold" />
        <Text>Página inicial</Text>
      </CurrentPage>

      <HeaderInputSearchContainer>
        <MagnifyingGlass size={20} weight="bold" />
        <HeaderInputSearch placeholder="Explorar" />
        <Microphone size={20} weight="fill" />
      </HeaderInputSearchContainer>

      <HeaderActions>
        <Envelope size={30} weight="fill" />
        <Bell size={30} weight="fill" />
        <Wrench size={30} weight="fill" />
        <UserAvatarContainer>
          <UserAvatar src={'https://avatars.githubusercontent.com/u/51717305?v=4'} />
        </UserAvatarContainer>
      </HeaderActions>
    </HeaderContainer>
  )
}