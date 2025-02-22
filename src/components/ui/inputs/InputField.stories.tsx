import type { Meta, StoryObj } from '@storybook/react';

import InputField from './InputField';

const meta = {
  title: 'Design System/InputField',
  component: InputField,
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof InputField>;

export default meta;
type Story = StoryObj<typeof meta>;

export const InputFieldBase: Story = {
  args: {
    placeholder: 'placeholder',
  },
};

export const InputFieldDisabled: Story = {
  args: {
    placeholder: 'placeholder',
    disabled: true,
  },
};

export const InputFieldError: Story = {
  args: {
    placeholder: 'placeholder',
    isError: true,
    errorMessage: 'errorMessage',
  },
};
