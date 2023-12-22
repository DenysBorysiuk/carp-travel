'use client';

import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import FormBtn from '@/components/ui/FormBtn';
import { schema } from './schema';
import { FormData } from './type';
import ErrorMsg from '@/components/ui/ErrorMsg';

const CareerForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data: FormData) => console.log(data);

  return (
    <form className="md:h-[592px] md:w-[704px]" onSubmit={handleSubmit(onSubmit)}>
      <div className="md:flex ">
        <ul className="flex flex-col gap-[24px] xl:flex-row">
          <li className="relative">
            <label
              className="mb-[4px] block text-[12px] font-extralight leading-loose tracking-[2.4px] outline-none "
              htmlFor="name"
            >
              Full name
            </label>
            <input
              className={`block h-[24px] w-full bg-white/5 px-[8px] font-extralight outline-none
              placeholder:text-[13px] placeholder:text-white/20 md:w-[221px] xl:h-[28px] xl:w-[293px] xl:text-[20px]
               ${errors.name ? 'text-error' : ''}`}
              {...register('name')}
              placeholder="John Smith"
              id="name"
            />
            {errors.name && <ErrorMsg>{errors.name.message}</ErrorMsg>}
          </li>
          <li className="relative">
            <label
              className="mb-[4px] block text-[12px] font-extralight leading-loose tracking-[2.4px]"
              htmlFor="email"
            >
              E-mail
            </label>
            <input
              className={`block h-[24px] w-full bg-white/5 px-[8px] font-extralight outline-none 
              placeholder:text-[13px] placeholder:text-white/20 md:w-[221px] xl:h-[28px] xl:w-[293px] xl:text-[20px]
               ${errors.name ? 'text-error' : ''}`}
              {...register('email')}
              placeholder="support@carptravel.com"
              id="email"
            />
            {errors.email && <ErrorMsg>{errors.email.message}</ErrorMsg>}
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
            className="block h-[193px] w-full resize-none bg-white/5 px-[8px] outline-none 
            md:h-[221px] md:w-[464px] xl:h-[174px] xl:w-[607px]"
            {...register('message')}
            id="message"
          />
        </div>
      </div>
      <FormBtn />
    </form>
  );
};

export default CareerForm;
