import type { Meta, StoryObj } from '@storybook/react';
import { MemoryRouter } from 'react-router-dom';

import AdminHeader from './AdminHeader';

const meta = {
  title: 'Design System/AppBar',
  component: AdminHeader,
  tags: ['autodocs'],
  argTypes: {},
  decorators: [
    (Story) => (
      <MemoryRouter>
        <Story />
      </MemoryRouter>
    ),
  ],
} satisfies Meta<typeof AdminHeader>;

export default meta;
type Story = StoryObj<typeof meta>;

export const AdminHeaderBase: Story = {
};
