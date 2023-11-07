import { ReactNode } from 'react'
import { LayoutContainer, LayoutContent } from "./styles";
import { Header } from '../../components/Header';

interface LayoutProps {
  children: ReactNode;
}

export function Layout({ children }: LayoutProps) {
  return (
    <>
      <Header />
      <LayoutContainer>
        <LayoutContent>
          {children}
        </LayoutContent>
      </LayoutContainer>
    </>
  )
}