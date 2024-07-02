import Typography from '@/components/atom/Typography/Typography'
import { Input } from '@/components/ui/input'
import { ErrorMessage } from '@hookform/error-message'
import { FieldErrors, RegisterOptions, UseFormRegister } from 'react-hook-form';


interface FormFieldProps {
  id: string;
  type: string;
  label: string;
  register: UseFormRegister<any>;
  errors: FieldErrors;
  rules: RegisterOptions;
}

const FormField = ({
  id,
  type,
  label,
  register,
  errors,
  rules,
}: FormFieldProps) => {
  return (
    <div>
      <Input id={id} type={type} label={label} {...register(id, rules)} />
      <ErrorMessage
        errors={errors}
        name={id}
        render={({ message }) => (
          <Typography color="red" size="14" className="px-4">
            {message}
          </Typography>
        )}
      />
    </div>
  )
}

export default FormField
