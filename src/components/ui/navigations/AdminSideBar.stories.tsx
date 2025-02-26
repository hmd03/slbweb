import type { Meta, StoryObj } from '@storybook/react';
import { MemoryRouter } from 'react-router-dom';

import AdminSideBar from './AdminSideBar'; // Sidebar로 수정

const meta = {
  title: 'Design System/SideBar', // 제목 수정
  component: AdminSideBar,
  tags: ['autodocs'],
  argTypes: {},
  decorators: [
    (Story) => (
      <MemoryRouter>
        <Story />
      </MemoryRouter>
    ),
  ],
} satisfies Meta<typeof AdminSideBar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const AdminSideBarBase: Story = {
  args: {
    items: [
      { label: '홈', path: '/' },
      { label: '일정', path: '/calendar' },
      {
        label: '그룹',
        path: '/group',
        disabled: true,
      },
      {
        label: '프로필',
        path: '/profile',
      },
    ],
  },
};
