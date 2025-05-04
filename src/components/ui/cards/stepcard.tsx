import React from 'react';

interface StepCardProps {
    number: number | string;
    imageUrl: string;
    title: string;
    description: string;
}

export const StepCard: React.FC<StepCardProps> = ({
    number,
    imageUrl,
    title,
    description,
}) => {
    return (
        <div className='w-full relative overflow-hidden rounded'>
            {/* 이미지 + 넘버 배지 영역 */}
            <div className='relative'>
                <img
                    src={imageUrl}
                    alt={title}
                    className='w-full object-cover'
                />
                <div
                    className='absolute top-0 left-0
                    bg-red-500 text-white
                    font-bold
                    w-10 h-12 flex items-center justify-center
                    rounded-br-lg'
                >
                    {number}
                </div>
            </div>

            {/* 검은바탕 텍스트 영역 */}
            <div className='bg-black/90 text-white pt-4 px-4 pb-6 w-full text-center'>
                <h3 className='text-[1.5rem] font-semibold mt-3 mb-5 leading-tight'>
                    {title}
                </h3>
                <hr className='border-t-2 border-gray-500 mb-4' />
                <p className='text-[1.25rem] leading-relaxed whitespace-pre-line'>
                    {description}
                </p>
            </div>
        </div>
    );
};
