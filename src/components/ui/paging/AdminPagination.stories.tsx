import type { Meta, StoryObj } from '@storybook/react';
import AdminPagination from './AdminPagination';

const meta = {
  title: 'Design System/Pagination',
  component: AdminPagination,
  tags: ['autodocs'],
  argTypes: {
    onPageChange: { action: 'page changed' },
  },
} satisfies Meta<typeof AdminPagination>;

export default meta;
type Story = StoryObj<typeof meta>;

const handlePageChange = (page: number) => {
  console.log(`현재 페이지: ${page}`);
};

export const Default: Story = {
  args: {
    totalItems: 200,
    itemsPerPage: 10,
    onPageChange: handlePageChange,
  },
};

export const WithCustomItemsPerPage: Story = {
  args: {
    totalItems: 50,
    itemsPerPage: 5,
    onPageChange: handlePageChange,
  },
};

export const NoItems: Story = {
  args: {
    totalItems: 0,
    itemsPerPage: 10,
    onPageChange: handlePageChange,
  },
};
