import type { Meta, StoryObj } from '@storybook/react';

import ProfileImg from './ProfileImg';

const meta = {
  title: 'Design System/ProfileImg',
  component: ProfileImg,
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof ProfileImg>;

export default meta;
type Story = StoryObj<typeof meta>;

export const ProfileImgDefault: Story = {
  args: {
    size: 48,
  },
};

export const ProfileImgSrc: Story = {
  args: {
    src: 'https://cdn.pixabay.com/photo/2022/04/12/04/43/kiwi-7127148_1280.png',
    size: 48,
  },
};
