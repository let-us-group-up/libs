import MuiTextField from '@mui/material/TextField';

export interface MultilineTextFieldProps {
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
  onChange?: React.ChangeEventHandler<HTMLTextAreaElement>;
}

const MultilineTextField: React.VFC<MultilineTextFieldProps> = ({
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
    multiline
    minRows={3}
    maxRows={3}
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

export default MultilineTextField;
