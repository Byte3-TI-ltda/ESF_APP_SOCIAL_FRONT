
import { Feed } from "../../components/Feed";
import { Stories } from "../../components/Stories";
import { HomeContainer } from "./styles";

export default function Home() {
  return (
    <HomeContainer>
      <Stories />
      <Feed />
    </HomeContainer>
  )
}
