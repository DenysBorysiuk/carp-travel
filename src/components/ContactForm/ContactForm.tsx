'use client';

import { useForm, FieldValues, SubmitHandler } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import useFormPersist from 'react-hook-form-persist';
import toast from 'react-hot-toast';
import Field from '@/components/ui/Field';
import TextArea from '@/components/ui/TextArea';
import FormBtn from '@/components/ui/FormBtn';
import data from '@/data/contacts.json';
import { schema } from './schema';

const ContactForm = () => {
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
      <div className="mb-[16px] flex flex-col gap-[24px] md:gap-[20px] xl:mb-[24px] xl:gap-[40px] mdOnly:flex-row">
        <ul className="flex flex-col gap-[24px] xl:flex-row">
          {data.form.inputs.map(input => (
            <li key={input.id}>
              <Field
                {...input}
                className="md:w-[221px] xl:h-[28px] xl:w-[293px]"
                register={register}
                errors={errors}
              />
            </li>
          ))}
        </ul>
        <TextArea
          {...data.form.textarea}
          className="h-[193px] md:h-[221px] md:w-[464px] xl:h-[174px] xl:w-[607px]"
          register={register}
        />
      </div>
      <FormBtn />
    </form>
  );
};

export default ContactForm;
