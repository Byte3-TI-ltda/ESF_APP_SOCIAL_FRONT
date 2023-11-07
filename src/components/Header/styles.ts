import { styled } from '@byte3-esf/react';
import { TextInputContainer, Input } from '@byte3-esf/react/src/components/TextInput/styles';
import { AvatarContainer, AvatarImage } from '@byte3-esf/react/src/components/Avatar/styles';

export const HeaderContainer = styled('header', {
  "margin": "0 auto",
  "maxWidth": "85.375rem",
  "width": "100%",
  "minHeight": "3.125rem",
  "padding": "1.875rem 0",
  "display": "flex",
  "alignItems": "center",
  "justifyContent": "space-between",

  "background": "$gray400",
  "zIndex": "9999",


  "position": "sticky",
  "top": "0"
})

export const CurrentPage = styled('div', {
  "display": "flex",
  "alignItems": "center",
  "justifyContent": "space-between",
  "gap": "12px"
})

export const HeaderInputSearchContainer = styled(TextInputContainer, {
  "width": "36.875rem",
  "backgroundColor": "$gray100",
  "display": "flex",
  "alignItems": "center",
  "gap": "12px",

  "svg": {
    "color": "$gray400"
  }
})

export const HeaderInputSearch = styled(Input, {
  "height": "100%",
  "color": "$gray400",
  "fontSize": "14px",

  "&::placeholder": {
    "color": "$gray400"
  }
})

export const HeaderActions = styled('div', {
  "display": "flex",
  "alignItems": "center",
  "justifyContent": "space-between",
  "gap": "26px"
})

export const UserAvatarContainer = styled(AvatarContainer, {
  "height": "1.875rem",
  "width": "1.875rem",
})

export const UserAvatar = styled(AvatarImage, {
  "height": "1.875rem",
  "width": "1.875rem",
})
