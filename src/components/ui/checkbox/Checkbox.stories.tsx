import type { Meta, StoryObj } from '@storybook/react';

import Checkbox from './Checkbox'

const meta = {
  title: 'Design System/Checkbox',
  component: Checkbox,
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof Checkbox>;

export default meta;
type Story = StoryObj<typeof meta>;

export const CheckboxBase: Story = {
  args: {
    children: '체크박스',
  },
};

export const CheckboxDisabled: Story = {
  args: {
    children: '체크박스',
    disabled: true,
  },
};

export const CheckboxChecked: Story = {
  args: {
    children: '체크박스',
    isChecked: true,
  },
};
export const CheckboxCheckedDisabled: Story = {
  args: {
    children: '체크박스',
    isChecked: true,
    disabled: true,
  },
};
