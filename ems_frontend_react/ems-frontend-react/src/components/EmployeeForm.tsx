import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import type { Employee } from '../features/employeeTypes';

interface Props {
  onSubmit: (data: Employee) => void;
  defaultValues?: Employee;
  onCancel?: () => void;
}

const EmployeeForm: React.FC<Props> = ({ onSubmit, defaultValues, onCancel }) => {
  const { register, handleSubmit, reset } = useForm<Employee>({
    defaultValues: defaultValues || { name: '', email: '', position: '', salary: 0 }
  });

  useEffect(() => { reset(defaultValues); }, [defaultValues, reset]);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register('name')} placeholder="Name" required />
      <input {...register('email')} type="email" placeholder="Email" required />
      <input {...register('position')} placeholder="Position" required />
      <input {...register('salary', { valueAsNumber: true })} type="number" placeholder="Salary" required />
      <button type="submit">Submit</button>
      {onCancel && <button type="button" onClick={onCancel}>Cancel</button>}
    </form>
  );
};

export default EmployeeForm;
