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
                <div className='flex justify-center mb-8'>
                    <span className='bg-red-500 text-white px-4 py-2 rounded-full text-xl font-semibold'>
                        {title}
                    </span>
                </div>
                <hr className='border-t-4 border-red-500 w-full mt-2 mb-0' />
            </>
        )}

        <table className='w-full table-fixed border-collapse border-spacing-0'>
            <tbody>
                {rows.map((row, idx) => (
                    <tr key={idx}>
                        <td className='py-4 px-6 border-r-2 border-black text-center text-xl font-bold'>
                            {row.label}
                        </td>
                        <td className='py-4 px-6 text-center text-2xl font-semibold'>
                            {row.amount}
                        </td>
                        <td className='py-4 px-6 text-right text-2xl font-semibold'>
                            {row.percent}
                        </td>
                    </tr>
                ))}

                {highlight && (
                    <tr className='bg-red-500 text-white'>
                        <td className='p-0'>
                            <div className='w-full border-r-2 border-white py-2 my-1 text-center text-2xl font-semibold'>
                                {highlight.title}
                            </div>
                        </td>
                        <td className='py-6 px-6 text-center text-3xl font-bold'>
                            {highlight.amount}
                        </td>
                        <td className='py-6 px-6 text-right text-3xl font-bold'>
                            {highlight.percent}
                        </td>
                    </tr>
                )}
            </tbody>
        </table>

        {description && (
            <p className='text-lg text-gray-500 text-right mt-2'>
                {description}
            </p>
        )}
    </div>
);
