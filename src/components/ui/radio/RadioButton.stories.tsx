import type { Meta, StoryObj } from '@storybook/react';

import RadioButton from './RadioButton';

const meta = {
  title: 'Design System/RadioButtonGroup',
  component: RadioButton,
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof RadioButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const RadioButtonBase: Story = {
  args: {
    id: 'option',
    name: 'example',
    value: 'value',
    label: 'Option 1',
  },
};

export const RadioButtonSelected: Story = {
  args: {
    id: 'option',
    name: 'example',
    value: 'value',
    label: 'Option 1',
    isChecked: true,
  },
};

export const RadioButtonDisable: Story = {
  args: {
    id: 'option',
    name: 'example',
    value: 'value',
    label: 'Option 1',
    disabled: true,
  },
};

export const RadioButtonSelectedDisable: Story = {
  args: {
    id: 'option',
    name: 'example',
    value: 'value',
    label: 'Option 1',
    isChecked: true,
    disabled: true,
  },
};
