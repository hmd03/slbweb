import type { Meta, StoryObj } from '@storybook/react';
import Loading from './Loading';

const meta = {
  title: 'Design System/Loading',
  component: Loading,
  tags: ['autodocs'],
  argTypes: {
    isLoading: {
      control: { type: 'boolean' },
    },
  },
} satisfies Meta<typeof Loading>;

export default meta;
type Story = StoryObj<typeof meta>;

export const LoadingDefault: Story = {
  args: {
    isLoading: true,
  },
};

export const LoadingHidden: Story = {
  args: {
    isLoading: false,
  },
};
