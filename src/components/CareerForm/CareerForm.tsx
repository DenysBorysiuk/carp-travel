'use client';

import { useForm, FieldValues, SubmitHandler } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import useFormPersist from 'react-hook-form-persist';
import toast from 'react-hot-toast';
import FormBtn from '@/components/ui/FormBtn';
import TextArea from '@/components/ui/TextArea';
import Field from '@/components/ui/Field';
import data from '@/data/career.json';
import { schema } from './schema';
import CheckBox from '../ui/CheckBox';

const { form } = data;
const { inputs, textarea, checkbox } = form;

const CareerForm = () => {
  const {
    register,
    reset,
    handleSubmit,
    watch,
    setValue,
    formState: { errors },
  } = useForm<FieldValues>({
    resolver: yupResolver(schema) as FieldValues | any,
  });

  useFormPersist('formData', { watch, setValue });

  const onSubmit: SubmitHandler<FieldValues> = async data => {
    console.log(data);
    reset();
    toast.success('Successfully sent!');
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="mb-[16px] md:flex md:gap-[24px]">
        <ul className="flex flex-col gap-[16px] xl:gap-[26px] smOnly:mb-[16px]">
          {inputs.map(input => (
            <li key={input.id}>
              <Field
                {...input}
                className="md:w-[222px] xl:w-[290px]"
                register={register}
                errors={errors}
              />
            </li>
          ))}
        </ul>
        <TextArea
          {...textarea}
          className="h-[196px] md:h-[268px] md:w-[221px] xl:h-[268px] xl:w-[292px]"
          register={register}
        />
      </div>
      <CheckBox {...checkbox} className="w-[222px]" register={register} errors={errors} />
      <FormBtn />
    </form>
  );
};

export default CareerForm;
