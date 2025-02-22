import type { Meta, StoryObj } from '@storybook/react';
import { MemoryRouter } from 'react-router-dom';
import {
  MdHome,
  MdCalendarMonth,
  MdOutlineGroups,
  MdAccountCircle,
} from 'react-icons/md';

import BottomNavigation from './BottomNavigation';

const meta = {
  title: 'Design System/BottomNavigation',
  component: BottomNavigation,
  tags: ['autodocs'],
  argTypes: {},
  decorators: [
    (Story) => (
      <MemoryRouter>
        <Story />
      </MemoryRouter>
    ),
  ],
} satisfies Meta<typeof BottomNavigation>;

export default meta;
type Story = StoryObj<typeof meta>;

export const TabBase: Story = {
  args: {
    items: [
      { label: '홈', icon: <MdHome size={24} />, path: '/' },
      { label: '일정', icon: <MdCalendarMonth size={24} />, path: '/calendar' },
      {
        label: '',
        icon: <MdOutlineGroups size={24} />,
        path: '/group',
        disabled: true,
      },
      {
        label: '프로필',
        icon: <MdAccountCircle size={24} />,
        path: '/profile',
      },
    ],
  },
};
