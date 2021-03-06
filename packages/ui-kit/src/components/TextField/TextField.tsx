import MuiTextField from '@mui/material/TextField';

export interface TextFieldProps {
  className?: string;
  id: string;
  name: string;
  value?: string;
  label?: string;
  placeholder?: string;
  defaultValue?: string;
  disabled?: boolean;
  error?: boolean;
  fullWidth?: boolean;
  helperText?: string;
  required?: boolean;
  inputRef?: React.Ref<unknown>;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
}

const TextField: React.VFC<TextFieldProps> = ({
  className,
  id,
  name,
  value,
  label,
  placeholder,
  defaultValue,
  disabled,
  error,
  fullWidth,
  helperText,
  required,
  inputRef,
  onChange,
}) => (
  <MuiTextField
    variant="outlined"
    className={className}
    id={id}
    name={name}
    value={value}
    label={label}
    placeholder={placeholder}
    defaultValue={defaultValue}
    disabled={disabled}
    error={error}
    fullWidth={fullWidth}
    helperText={helperText}
    required={required}
    inputRef={inputRef}
    onChange={onChange}
  />
);

export default TextField;
