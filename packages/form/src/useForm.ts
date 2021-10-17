import {
  useForm as useRhfForm,
  UnpackNestedValue,
  FieldPath,
  Control,
  UseFormRegisterReturn,
} from 'react-hook-form';
import { FieldValues, DefaultValues } from './Fields';

interface UseFormProps<TFieldValues extends FieldValues> {
  defaultValues: DefaultValues<TFieldValues>;
}

interface UseFormReturn<TFieldValues> {
  control: Control<TFieldValues>;
  register: (name: FieldPath<TFieldValues>) => UseFormRegisterReturn;
  unregister: (name: FieldPath<TFieldValues>) => void;
  handleSubmit: (
    onValid: (data: UnpackNestedValue<TFieldValues>) => void
  ) => (event?: React.BaseSyntheticEvent) => Promise<void>;
  reset: (values?: DefaultValues<TFieldValues>) => void;
}

function useForm<TFieldValues extends FieldValues>(
  props: UseFormProps<TFieldValues>,
): UseFormReturn<TFieldValues> {
  const form = useRhfForm<TFieldValues>({
    mode: 'onSubmit',
    reValidateMode: 'onChange',
    ...props,
  });

  return {
    control: form.control,
    register: (name) => form.register(name),
    unregister: (name) => form.unregister(name),
    handleSubmit: (onValid) => form.handleSubmit(onValid),
    reset: (values) => form.reset(values),
  };
}

export default useForm;
