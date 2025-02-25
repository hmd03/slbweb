import React, { useState } from 'react';
import OutlineButton from '../buttons/OutlineButton';

interface PaginationProps {
  totalItems: number;
  itemsPerPage?: number;
  onPageChange: (page: number) => void;
}

const AdminPagination: React.FC<PaginationProps> = ({
  totalItems,
  itemsPerPage = 10,
  onPageChange,
}) => {
  const totalPages = Math.ceil(totalItems / itemsPerPage);
  const [currentPage, setCurrentPage] = useState(1);

  const handlePageChange = (page: number) => {
    if (page < 1 || page > totalPages) return;
    setCurrentPage(page);
    onPageChange(page);
  };

  const renderPageButtons = () => {
    const buttons = [];
    const startPage = Math.floor((currentPage - 1) / 10) * 10 + 1;
    const endPage = Math.min(startPage + 9, totalPages);

    for (let i = startPage; i <= endPage; i++) {
      buttons.push(
        <OutlineButton
          theme='admin'
          key={i}
          className={`m-1 rounded w-10 h-10 p-1 border border-Black text-Black  ${currentPage === i ? 'bg-Gray' : 'bg-White'}`}
          onClick={() => handlePageChange(i)}
        >
          {i}
        </OutlineButton>
      );
    }
    return buttons;
  };

  return (
    <div className="flex items-center justify-center my-4">
      <OutlineButton theme='admin'
        className="m-1 rounded w-10 h-10 border border-Black text-Black bg-White"
        onClick={() => handlePageChange(1)}
        disabled={currentPage === 1}
      >
        &lt;&lt;
      </OutlineButton>
      <OutlineButton theme='admin'
        className="m-1 rounded w-10 h-10 border border-Black text-Black bg-White"
        onClick={() => handlePageChange(currentPage - 1)}
        disabled={currentPage === 1}
      >
        &lt;
      </OutlineButton>
      {renderPageButtons()}
      <OutlineButton theme='admin'
        className="m-1 rounded w-10 h-10 border border-Black text-Black bg-White"
        onClick={() => handlePageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
      >
        &gt;
      </OutlineButton>
      <OutlineButton theme='admin'
        className="m-1 rounded w-10 h-10 border border-Black text-Black bg-White"
        onClick={() => handlePageChange(totalPages)}
        disabled={currentPage === totalPages}
      >
        &gt;&gt;
      </OutlineButton>
    </div>
  );
};

export default AdminPagination;
