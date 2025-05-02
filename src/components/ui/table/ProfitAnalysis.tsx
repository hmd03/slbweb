import React from 'react';

export interface TableRow {
    label: string;
    amount: string;
    percent: string;
}

export interface HighlightRow {
    title: string;
    amount: string;
    percent: string;
}

export interface CustomTableProps {
    title?: string;
    description?: string;
    rows: TableRow[];
    highlight?: HighlightRow;
}

export const ProfitAnalysisTable: React.FC<CustomTableProps> = ({
    title,
    description,
    rows,
    highlight,
}) => (
    <div className='w-full mx-auto p-4 font-sans text-gray-800'>
        {title && (
            <>
                <div className='flex justify-center'>
                    <span className='inline-block bg-red-500 text-white px-4 py-1 rounded-full text-base font-medium'>
                        {title}
                    </span>
                </div>
                <hr className='border-t-4 border-red-500 w-full my-4 mb-0' />
            </>
        )}

        <table className='w-full table-fixed'>
            <tbody>
                {rows.map((row, idx) => (
                    <tr key={idx}>
                        <td className='py-4 px-6 border-r-2 border-gray-300 text-center text-base'>
                            {row.label}
                        </td>
                        <td className='py-4 px-6 text-center text-lg'>
                            {row.amount}
                        </td>
                        <td className='py-4 px-6 text-right text-base'>
                            {row.percent}
                        </td>
                    </tr>
                ))}

                {highlight && (
                    <tr className='bg-red-500 text-white font-semibold'>
                        <td className='py-5 px-6 border-r-2 border-white text-center text-base'>
                            {highlight.title}
                        </td>
                        <td className='py-5 px-6 text-center text-lg font-semibold'>
                            {highlight.amount}
                        </td>
                        <td className='py-5 px-6 text-right text-lg font-semibold'>
                            {highlight.percent}
                        </td>
                    </tr>
                )}
            </tbody>
        </table>

        {description && (
            <p className='text-xs text-gray-500 text-right mt-2'>
                {description}
            </p>
        )}
    </div>
);
