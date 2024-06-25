import React from 'react';
import { TextField, TextFieldProps } from '@mui/material';
import { NumericFormatProps, PatternFormat, PatternFormatProps } from 'react-number-format';

interface NumberFormatCustomProps extends PatternFormatProps {
    inputRef: (instance: NumericFormatProps<PatternFormatProps> | null) => void;
}

const NumberFormatCustom = (props: NumberFormatCustomProps) => {
    const { inputRef, onValueChange, ...other } = props;

    return (
        <PatternFormat
            {...other}
            getInputRef={inputRef}
            onValueChange={onValueChange}
        />
    );
};

interface CustomTextFieldProps extends Omit<TextFieldProps, 'onChange'> {
    onChange: (value: string) => void;
    format: string;
    mask: string;
}

const CustomTextField: React.FC<CustomTextFieldProps> = (props) => {
    const { onChange, format, mask, ...other } = props;

    return (
        <TextField
            {...other}
            InputProps={{
                inputComponent: NumberFormatCustom as any,
                inputProps: {
                    format,
                    mask,
                    onValueChange: (values: any) => {
                        onChange(values.formattedValue);
                    },
                    ...other.InputProps?.inputProps,
                },
            }}
        />
    );
};

export default CustomTextField;
