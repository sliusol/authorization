export const AuthErrors: formErrors = {
  required: 'Field is required',
  email: 'Invalid email format',
  minlength: 'Field length is too short',
  pattern: 'Invalid input format',
};

interface formErrors {
  [key: string]: string | undefined;
  required?: string;
  email?: string;
  minlength?: string;
  pattern?: string;
}
