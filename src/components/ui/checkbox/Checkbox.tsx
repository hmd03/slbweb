import React, { ReactNode } from 'react';
import { MdCheck } from 'react-icons/md';

interface Props {
  isChecked?: boolean;
  disabled?: boolean;
  children: ReactNode;
  onValueChangeHandler?: (checked: boolean) => void;
}

const Checkbox = (props: Props) => {
  const { children, disabled, isChecked, onValueChangeHandler } = props;
  const onClickHandler = () => {
    if (!disabled) {
      if (onValueChangeHandler) {
        onValueChangeHandler(!isChecked);
      }
    }
  };

  const className = (() => {
    let baseClasses =
      'w-6 h-6 flex items-center justify-center border-[1px] border-Gray rounded relative cursor-pointer';

    if (disabled) {
      baseClasses += ` pointer-events-none ${
        isChecked ? 'bg-LightGray' : 'bg-Gray'
      }`;
    } else {
      baseClasses += isChecked ? ' bg-Primary border-Primary' : '';
    }
    return baseClasses;
  })();

  return (
    <div
      className={`flex items-center cursor-pointer ${
        disabled ? 'pointer-events-none' : ''
      }`}
      onClick={onClickHandler}
    >
      <div className={className}>
        {isChecked && (
          <MdCheck
            size={16}
            className={`text-base ${disabled ? 'text-DeepGray' : 'text-White'}`}
          />
        )}
      </div>
      {children && (
        <div
          className={`ml-2 body3 cursor-pointer ${
            disabled ? 'pointer-events-none' : ''
          }`}
        >
          {children}
        </div>
      )}
    </div>
  );
};

export default Checkbox;
