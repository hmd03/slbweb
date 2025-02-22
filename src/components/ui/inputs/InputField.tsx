import React, { InputHTMLAttributes, forwardRef } from 'react';
import { MdClose } from 'react-icons/md';

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  isError?: boolean;
  errorMessage?: string;
}

const InputField = forwardRef<HTMLInputElement, Props>(
  ({ isError = false, errorMessage, ...props }, ref) => {
    let filteredProps = { ...props };

    const className = (() => {
      let baseClasses =
        'px-4 py-3 rounded body1 border-Black bg-White w-full border-[2px] focus:outline-none';
      if (isError) {
        baseClasses += ' border-Error focus:border-Error text-Error';
      } else {
        baseClasses += ' border-Black '; // focus:border-Primary text-Secondary
      }

      if (props.disabled) {
        baseClasses += ' border-Gray placeholder:text-Gray text-Gray';
      }

      if (props.className) {
        baseClasses += ` ${props.className}`;
      }

      filteredProps = Object.fromEntries(
        Object.entries(props).filter(([key]) => key !== 'className')
      );

      return baseClasses;
    })();

    return (
      <div className='w-full h-fit'>
        <input ref={ref} className={className} {...filteredProps} />
        {isError && !!errorMessage && (
          <span className='flex items-center mt-2 body3 text-Error'>
            <MdClose className='ml-1 mr-2' />
            <p>{errorMessage}</p>
          </span>
        )}
      </div>
    );
  }
);

export default InputField;
