import { Button, Heading, Text } from "@byte3-esf/react";
import { PostList } from "./PostList";
import { FeedContainer, FeedHeader } from "./styles";

import PostSvg from '../../assets/Post.svg'
import Link from "next/link";
import Image from "next/image";

export function Feed() {
  return (
    <FeedContainer>
      <FeedHeader>
        <div>
          <Heading size={'sm'}>
            Feed
          </Heading>

          <Link href={""}>
            Ver tudo
          </Link>
        </div>

        <Button>
          <Image src={PostSvg} alt="Publicar" />
          <Text>
            Criar publicação
          </Text>
        </Button>
      </FeedHeader>

      <PostList />
    </FeedContainer>
  )
}