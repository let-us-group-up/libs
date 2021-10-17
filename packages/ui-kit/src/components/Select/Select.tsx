export interface SelectProps {
  className?: string;
  id: string;
  value: string;
  fullWidth?: string;
  onChange: (value: React.ChangeEvent<HTMLSelectElement>) => void;
}

const Select: React.FC<SelectProps> = ({
  children,
  className,
  id,
  value,
  onChange,
}) => (
  <select
    className={className}
    id={id}
    value={value}
    onChange={onChange}
  >
    {children}
  </select>
);

export default Select;
