'use client';

import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import FormBtn from '@/components/ui/FormBtn';

const schema = yup
  .object({
    name: yup.string().required(),
    email: yup.string().email().required(),
    message: yup.string(),
  })
  .required();

type FormData = yup.InferType<typeof schema>;

const ContactForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data: FormData) => console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="mb-[16px] flex flex-col gap-[24px] xl:mb-[24px]">
        <ul className="flex flex-col gap-[24px]">
          <li>
            <label
              className="mb-[4px] block text-[12px] font-extralight leading-loose tracking-[2.4px]"
              htmlFor="name"
            >
              Full name
            </label>
            <input
              className="block h-[24px] w-full bg-white/5 px-[8px] outline-none"
              {...register('name')}
              id="name"
            />
            {errors.name && 'Full name is required'}
          </li>
          <li>
            <label
              className="mb-[4px] block text-[12px] font-extralight leading-loose tracking-[2.4px]"
              htmlFor="email"
            >
              E-mail
            </label>
            <input
              className="block h-[24px] w-full bg-white/5 px-[8px] outline-none"
              {...register('email')}
              id="email"
            />
            {errors.email && 'email is required'}
          </li>
        </ul>
        <div>
          <label
            className="mb-[4px] block text-[12px] font-extralight leading-loose tracking-[2.4px]"
            htmlFor="message"
          >
            Message
          </label>
          <textarea
            className="block h-[193px] w-full resize-none bg-white/5 px-[8px] outline-none"
            {...register('message')}
            id="message"
          />
        </div>
      </div>
      <FormBtn />
    </form>
  );
};

export default ContactForm;
