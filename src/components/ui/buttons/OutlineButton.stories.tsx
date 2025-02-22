import type { Meta, StoryObj } from '@storybook/react';

import OutlineButton from './OutlineButton';

const meta = {
  title: 'Design System/OutlineButton',
  component: OutlineButton,
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof OutlineButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const OutlineButtonPrimary: Story = {
  args: {
    children: 'Button',
    theme: 'primary',
  },
};

export const OutlineButtonPrimaryDisabled: Story = {
  args: {
    children: 'Button',
    theme: 'primary',
    disabled: true,
  },
};

export const OutlineButtonSecondary: Story = {
  args: {
    children: 'Button',
    theme: 'secondary',
  },
};

export const OutlineButtonSecondaryDisabled: Story = {
  args: {
    children: 'Button',
    theme: 'secondary',
    disabled: true,
  },
};
export const OutlineButtonAdmin: Story = {
  args: {
    children: 'Button',
    theme: 'admin',
  },
};
  
export const OutlineButtonAdminDisabled: Story = {
  args: {
    children: 'Button',
    theme: 'admin',
    disabled: true,
  },
};
