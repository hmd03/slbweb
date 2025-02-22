import type { Meta, StoryObj } from '@storybook/react';
import Dropdown from './Dropdown';
const meta = {
  title: 'Design System/Dropdown',
  component: Dropdown,
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof Dropdown>;
export default meta;
type Story = StoryObj<typeof meta>;
export const DropdownExample: Story = {
  args: {
    placeholder: 'Dropdown',
    items: [
      {
        label: 'item1',
        value: 'item1',
      },
      {
        label: 'item2',
        value: 'item2',
      },
      {
        label: 'item3',
        value: 'item3',
        disable: true,
      },
    ],
  },
};
export const DropdownDefaultValue: Story = {
  args: {
    placeholder: 'Dropdown',
    defaultValue: 'item1',
    items: [
      {
        label: 'item1',
        value: 'item1',
      },
      {
        label: 'item2',
        value: 'item2',
      },
      {
        label: 'item3',
        value: 'item3',
        disable: true,
      },
    ],
  },
};
