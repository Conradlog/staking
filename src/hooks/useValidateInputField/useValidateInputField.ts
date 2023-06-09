import { ChangeEvent, ChangeEventHandler, useCallback, useState } from 'react';

import { validateOnlyNumbers, ValidationTypes } from './index';

export const useValidateInputField = (
  type = ValidationTypes.string,
  decimals = 18,
  maxValue?: number,
): [string, ChangeEventHandler<HTMLTextAreaElement | HTMLInputElement>, (value: string) => void] => {
  const [inputValue, setInputValue] = useState('');

  const handleChangeValue = (event: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
    const { value } = event.target;

    if (maxValue !== undefined && maxValue >= 0) {
      if (+value > maxValue) {
        return;
      }
    }
    if (value === '' || type === ValidationTypes.string) {
      setInputValue(value);
    }

    if (type === ValidationTypes.number) {
      const isNumber = validateOnlyNumbers({ value, decimals });
      if (isNumber) {
        setInputValue(value);
      }
    }

    if (type === ValidationTypes.int) {
      const isInteger = validateOnlyNumbers({ value, isInteger: true, decimals });
      if (isInteger) {
        setInputValue(value);
      }
    }
  };

  const handleSetOriginValue = useCallback((value: string) => {
    setInputValue(value);
  }, []);

  return [inputValue, handleChangeValue, handleSetOriginValue];
};
