import * as yup from 'yup';

export interface ValidationError {
  path: string;
  msg: string;
}

export const findErrorById = (name: string, errors: ValidationError[] | undefined): string | undefined => {
  const error = errors && errors.find(err => err.path === name);
  return error ? error.msg : undefined;
};

export function validate<T>(
  formObject: T,
  schema: yup.SchemaOf<unknown>,
): { isValid: boolean; errors: ValidationError[] | undefined } {
  let isValid = true;
  let errors: ValidationError[] | undefined;
  try {
    schema.validateSync(formObject, { abortEarly: false });
  } catch (err) {
    isValid = false;
    errors = err.inner.map((e: { path: string; message: string }) => ({
      path: e.path,
      msg: e.message,
    }));
  }
  return { isValid, errors };
}
