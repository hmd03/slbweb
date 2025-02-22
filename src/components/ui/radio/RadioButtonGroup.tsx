import React from 'react';
import RadioButton from './RadioButton';

interface Option {
  id: string;
  name: string;
  value: string;
  label: string;
}

interface Props {
  options: Option[];
  selectedOption?: string;
  disabled?: boolean;
  onChange?: (value: string) => void;
  className?: string;
}

const RadioButtonGroup = (props: Props) => {
  const { options, selectedOption, disabled, onChange, className } = props;
  const handleChange = (value: string) => {
    if (onChange) {
      onChange(value);
    }
  };
  return (
    <div className={className}>
      {options.map((v) => (
        <RadioButton
          id={v.id}
          name={v.name}
          value={v.value}
          label={v.label}
          isChecked={selectedOption === v.value}
          disabled={disabled}
          onChange={() => handleChange(v.value)}
          key={v.id}
        />
      ))}
    </div>
  );
};

export default RadioButtonGroup;
