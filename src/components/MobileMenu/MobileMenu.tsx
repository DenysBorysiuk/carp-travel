'use client';

import { Dialog, Transition } from '@headlessui/react';
import { Fragment, useState } from 'react';
import Navigation from '@/components/Navigation';
import Button from '@/components/ui/Button';

const MobileMenu = () => {
  let [isOpen, setIsOpen] = useState(false);

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  return (
    <>
      <Button
        className="w-[46px] tracking-[1.4px]  md:hidden"
        label="Menu"
        type="button"
        onClick={openModal}
      />

      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10 md:hidden" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className=" fixed inset-0 bg-backdrop backdrop-blur-[25px]" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="mx-auto flex min-h-full max-w-[480px] px-[20px] ">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full transform overflow-hidden transition-all">
                  <Button
                    className="mb-[110px] ml-auto mt-[43px] w-[52px] tracking-[1.4px]"
                    label="Close"
                    type="button"
                    onClick={closeModal}
                  />
                  <Navigation
                    variant={'mobile-menu'}
                    className="flex-col items-center gap-[48px]"
                    onClick={closeModal}
                  />
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
};

export default MobileMenu;
