import { Heading, StoryButton, AddStoryButton } from '@byte3-esf/react';
import { StoriesContainer, StoriesList } from "./styles";
import Link from 'next/link';

export function Stories() {
  return (
    <StoriesContainer>
      <div>
        <Heading size={'sm'}>
          Stories
        </Heading>

        <Link href={""}>
          Ver tudo
        </Link>
      </div>

      <StoriesList>
        <AddStoryButton />
        <StoryButton src={'https://avatars.githubusercontent.com/u/51717305?v=4'} />
        <StoryButton src={'https://avatars.githubusercontent.com/u/51717305?v=4'} />
        <StoryButton src={'https://avatars.githubusercontent.com/u/51717305?v=4'} />
        <StoryButton src={'https://avatars.githubusercontent.com/u/51717305?v=4'} />
        <StoryButton src={'https://avatars.githubusercontent.com/u/51717305?v=4'} />
        <StoryButton src={'https://avatars.githubusercontent.com/u/51717305?v=4'} />
        <StoryButton src={'https://avatars.githubusercontent.com/u/51717305?v=4'} />
      </StoriesList>
    </StoriesContainer>
  )
}