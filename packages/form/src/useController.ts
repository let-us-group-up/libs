import {
  useController as useRhfController,
  FieldPath,
  Control,
  ControllerRenderProps,
} from 'react-hook-form';
import { FieldValues } from './Fields';

interface UseControllerProps<TFieldValues> {
  name: FieldPath<TFieldValues>;
  control: Control<TFieldValues>;
}

interface UseControllerReturn<TFieldValues> {
  field: ControllerRenderProps<TFieldValues>;
}

function useController<TFieldValues extends FieldValues>(
  props: UseControllerProps<TFieldValues>,
): UseControllerReturn<TFieldValues> {
  const { field } = useRhfController<TFieldValues>(props);

  return {
    field,
  };
}

export default useController;
