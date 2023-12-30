'use client';

import { useForm, FieldValues, SubmitHandler } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import useFormPersist from 'react-hook-form-persist';
import toast from 'react-hot-toast';
import Button from '@/components/ui/Button';
import TextArea from '@/components/ui/TextArea';
import Field from '@/components/ui/Field';
import FormConfirm from '@/components/ui/FormConfirm';
import data from '@/data/career.json';
import { schema } from './schema';
import { CareerFormProps } from './type';

const { form, text2 } = data;
const { inputs, textarea, checkbox } = form;

const CareerForm = ({ className, variant }: CareerFormProps) => {
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
    <div className={className}>
      <p className="mb-[24px] block w-[179px] md:w-[221px] xl:w-[234px] smOnly:ml-auto">
        {text2[0]}
        <span className="block">{text2[1]}</span>
      </p>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-[16px] md:mb-[9px] md:flex md:gap-[24px] xl:mb-[24px]">
          <ul className="flex flex-col gap-[16px] xl:gap-[24px] smOnly:mb-[16px]">
            {inputs.map(input => (
              <li key={input.id}>
                <Field
                  {...input}
                  className="md:w-[222px] xl:w-[290px]"
                  register={register}
                  errors={errors}
                  variant={variant}
                />
              </li>
            ))}
          </ul>
          <TextArea
            {...textarea}
            className="h-[196px] md:h-[228px] md:w-[221px] xl:h-[268px] xl:w-[292px]"
            register={register}
            variant={variant}
          />
        </div>
        <div className="md:flex md:items-baseline">
          <FormConfirm
            {...checkbox}
            register={register}
            errors={errors}
            isChecked={watch().confirm}
          />
          <Button
            className="ml-auto text-[30px] font-medium xl:text-[32px]"
            label="Send"
            type="submit"
          />
        </div>
      </form>
    </div>
  );
};

export default CareerForm;
