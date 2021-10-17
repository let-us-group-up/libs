import {
  UnpackNestedValue,
  DeepPartial,
} from 'react-hook-form';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type FieldValues = Record<string, any>;

export type DefaultValues<TFieldValues> = UnpackNestedValue<DeepPartial<TFieldValues>>;
