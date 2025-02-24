import type { Meta, StoryObj } from '@storybook/react';
import { MemoryRouter } from 'react-router-dom';

import SideBar from './SideBar'; // Sidebar로 수정

const meta = {
  title: 'Design System/SideBar', // 제목 수정
  component: SideBar,
  tags: ['autodocs'],
  argTypes: {},
  decorators: [
    (Story) => (
      <MemoryRouter>
        <Story />
      </MemoryRouter>
    ),
  ],
} satisfies Meta<typeof SideBar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const TabBase: Story = {
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
