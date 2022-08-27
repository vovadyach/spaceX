import React from 'react';
import { SkeletonStyled } from './Skeletong.styled';
import { FlexGridItem, FlexGrid } from '../FlexGrid';

type Props = {
  items: number;
  height: number;
  space: number;
};

export function SkeletonGrid({ items, height, space }: Props) {
  const skeletons = Array.from(Array(items).keys());

  return (
    <FlexGrid>
      {skeletons.map(skeleton => (
        <FlexGridItem key={skeleton}>
          <SkeletonStyled height={height} space={space} />
        </FlexGridItem>
      ))}
    </FlexGrid>
  );
}
