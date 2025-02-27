import type { Meta, StoryObj } from '@storybook/react';
import AlterModal from './AlterModal';

const meta = {
  title: 'Design System/Modal',
  component: AlterModal,
  tags: ['autodocs'],
  argTypes: {
    onConfirm: { action: 'confirmed' },
    onCancel: { action: 'cancelled' },
  },
} satisfies Meta<typeof AlterModal>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    message: '이 작업을 확인하시겠습니까?',
    isCancelVisible: true,
    onConfirm: () => console.log('확인 버튼 클릭됨'),
    onCancel: () => console.log('취소 버튼 클릭됨'),
  },
};

export const WithoutCancel: Story = {
  args: {
    message: '이 작업을 확인하시겠습니까?',
    isCancelVisible: false,
    onConfirm: () => console.log('확인 버튼 클릭됨'),
  },
};
