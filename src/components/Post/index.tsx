import { Text, Avatar, Box, Heading } from '@byte3-esf/react';
import { PostActions, PostActionsItem, PostBody, PostContainer, PostFooter, PostHeader, PostVideo } from "./styles";

import { DotsThree, Heart, ChatTeardropDots, PaperPlaneTilt, Star, MagnifyingGlass } from 'phosphor-react'

export function Post() {
  return (
    <PostContainer>
      <PostHeader>
        <div className='userInfo'>
          <Avatar src={'https://avatars.githubusercontent.com/u/51717305?v=4'} />
          <div>
            <Text>
              Julia Mauro
            </Text>
            <Text size={'sm'}>
              Há 1 minuto
            </Text>
          </div>
        </div>

        <DotsThree size={30} weight='bold' />
      </PostHeader>

      <PostBody>
        <Heading>
          Post Title
        </Heading>

        <Text>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore laborum, est quasi quo impedit dignissimos ratione deserunt molestias sunt, provident voluptates vel non aperiam modi corrupti perspiciatis porro maxime corporis!
        </Text>

        <PostVideo>
          <MagnifyingGlass size={25} weight="bold" />
        </PostVideo>
      </PostBody>

      <PostFooter>

        <PostActions>
          <PostActionsItem>
            <Heart size={25} weight='fill' />
            <Text>1.12K</Text>
          </PostActionsItem>
          <PostActionsItem>
            <ChatTeardropDots size={25} weight='fill' />
            <Text>2.3K</Text>
          </PostActionsItem>
          <PostActionsItem>
            <PaperPlaneTilt size={25} weight='fill' />
            <Text>1.3K</Text>
          </PostActionsItem>
        </PostActions>

        <PostActionsItem>
          <Star size={25} weight='fill' />
          <Text>Favoritar</Text>
        </PostActionsItem>

      </PostFooter>
    </PostContainer>
  )
}