import type { Meta, StoryObj } from '@storybook/react';
import { MemoryRouter } from 'react-router-dom';

import Tab from './Tab';

const meta = {
  title: 'Design System/Tab',
  component: Tab,
  tags: ['autodocs'],
  argTypes: {},
  decorators: [
    (Story) => (
      <MemoryRouter>
        <Story />
      </MemoryRouter>
    ),
  ],
} satisfies Meta<typeof Tab>;

export default meta;
type Story = StoryObj<typeof meta>;

export const TabBase: Story = {
  args: {
    label: 'Tab',
  },
};

export const TabActive: Story = {
  args: {
    label: 'Tab',
    isActive: true,
  },
};

export const TabDisabled: Story = {
  args: {
    label: 'Tab',
    disabled: true,
  },
};
