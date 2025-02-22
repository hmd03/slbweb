import type { Meta, StoryObj } from '@storybook/react';
import { MemoryRouter } from 'react-router-dom';

import AppBar from './AppBar';

const meta = {
  title: 'Design System/AppBar',
  component: AppBar,
  tags: ['autodocs'],
  argTypes: {},
  decorators: [
    (Story) => (
      <MemoryRouter>
        <Story />
      </MemoryRouter>
    ),
  ],
} satisfies Meta<typeof AppBar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const AppBarBase: Story = {
  args: {
    title: 'Title',
  },
};
