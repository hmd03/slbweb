import type { Meta, StoryObj } from '@storybook/react';

import RightArrowButton from './RightArrowButton';

const meta = {
  title: 'Design System/RightArrowButton',
  component: RightArrowButton,
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof RightArrowButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const RightArrowButtonBase: Story = {
  args: {
    children: 'Button',
  },
};
