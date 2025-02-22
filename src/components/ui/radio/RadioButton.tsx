import React from 'react';

interface Props {
  id: string;
  name: string;
  value: string;
  label?: string;
  isChecked?: boolean;
  disabled?: boolean;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const RadioButton = (props: Props) => {
  const { id, name, value, label, isChecked, disabled, onChange } = props;

  const className = (() => {
    let baseClasses =
      'flex items-center justify-center w-6 h-6  border-[1px] rounded-full';

    if (disabled) {
      baseClasses += ' bg-Primary pointer-events-none border-Primary';
    } else {
      baseClasses += ` cursor-pointer ${
        isChecked ? 'border-Primary' : 'border-Gray'
      }`;
    }
    return baseClasses;
  })();
  return (
    <div
      className={`flex items-center ${
        disabled ? 'pointer-events-none' : 'cursor-pointer'
      }`}
    >
      <input
        type='radio'
        id={id}
        name={name}
        value={value}
        checked={isChecked}
        onChange={onChange}
        className='hidden'
      />
      <label htmlFor={id} className={className}>
        {isChecked && (
          <span
            className={`w-3 h-3 rounded-full ${
              disabled ? 'bg-Gray pointer-events-none' : 'bg-Primary'
            } `}
          />
        )}
      </label>
      {label && (
        <label
          htmlFor={id}
          className={`ml-2 body3 ${
            disabled ? 'pointer-events-none' : 'cursor-pointer'
          }`}
        >
          {label}
        </label>
      )}
    </div>
  );
};

export default RadioButton;
