'use client';

import { useForm, FieldValues, SubmitHandler } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import useFormPersist from 'react-hook-form-persist';
import toast from 'react-hot-toast';

import { sendToGoogleSheet } from '@/actions/sendToGoogleSheet';

import { Field, TextArea, Button, Spinner } from '@/components/ui';

import data from '@/data/contacts.json';

import { schema } from './schema';

export const ContactForm = () => {
  const { form } = data;
  const { inputs, textarea } = form;
  const {
    register,
    reset,
    handleSubmit,
    watch,
    setValue,
    formState: { errors, isSubmitting },
  } = useForm<FieldValues>({
    resolver: yupResolver(schema) as FieldValues | any,
  });

  useFormPersist('formData', { watch, setValue });

  const onSubmit: SubmitHandler<FieldValues> = async data => {
    try {
      await sendToGoogleSheet(data);
      reset();
      toast.success('Successfully sent!');
    } catch (error) {
      toast.error('Something went wrong');
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="mb-[16px] flex flex-col gap-[24px] md:gap-[20px] xl:mb-[24px] xl:gap-[40px] mdOnly:flex-row">
        <ul className="flex flex-col gap-[24px] xl:flex-row">
          {inputs.map(input => (
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
          {...textarea}
          className="h-[193px] md:h-[221px] md:w-[464px] xl:h-[174px] xl:w-[607px]"
          register={register}
        />
      </div>

      {isSubmitting ? (
        <Spinner />
      ) : (
        <Button
          className="ml-auto text-[30px] font-medium xl:text-[32px]"
          label="Send"
          type="submit"
        />
      )}
    </form>
  );
};
