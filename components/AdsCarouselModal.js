"use client";

import { Fragment, useEffect, useRef, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import {
  ChevronLeftIcon,
  ChevronRightIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import Image from "next/image";
import Ad1 from "@/public/images/products/product-1.jpg";
import Ad2 from "@/public/images/products/product-2.jpg";
import Ad3 from "@/public/images/products/product-3.jpg";
import Ad4 from "@/public/images/products/product-4.jpg";
import Ad5 from "@/public/images/products/product-5.jpg";
import Ad6 from "@/public/images/products/product-6.jpg";

const ads = [Ad1, Ad2, Ad3, Ad4, Ad5, Ad6];
const AUTOPLAY_MS = 4500;

export default function AdsCarouselModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [index, setIndex] = useState(0);
  const timerRef = useRef(null);

  useEffect(() => {
    if (!sessionStorage.getItem("ads-modal-shown")) {
      sessionStorage.setItem("ads-modal-shown", "1");
      setIsOpen(true);
    }
  }, []);

  const goTo = (nextIndex) => {
    setIndex((nextIndex + ads.length) % ads.length);
  };

  useEffect(() => {
    if (!isOpen) return;

    timerRef.current = setInterval(() => {
      setIndex((prev) => (prev + 1) % ads.length);
    }, AUTOPLAY_MS);

    return () => clearInterval(timerRef.current);
  }, [isOpen, index]);

  const handleManualNav = (nextIndex) => {
    clearInterval(timerRef.current);
    goTo(nextIndex);
  };

  return (
    <Transition show={isOpen} as={Fragment} appear>
      <Dialog
        onClose={() => setIsOpen(false)}
        className="relative z-[70]"
      >
        <Transition.Child
          as={Fragment}
          enter="transition ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="transition ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black/70 backdrop-blur-sm" />
        </Transition.Child>

        <div className="fixed inset-0 flex items-center justify-center p-4">
          <Transition.Child
            as={Fragment}
            enter="transition ease-out duration-300"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="transition ease-in duration-200"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            <Dialog.Panel className="relative w-full max-w-md border border-[#d4a63c]/30 bg-[#080808] shadow-[0_24px_80px_rgba(0,0,0,.65)]">
              <button
                type="button"
                onClick={() => setIsOpen(false)}
                aria-label="ปิด"
                className="absolute right-3 top-3 z-10 flex h-9 w-9 items-center justify-center border border-white/20 bg-black/50 text-white transition hover:border-[#d4a63c] hover:text-[#d4a63c]"
              >
                <XMarkIcon className="h-5 w-5" />
              </button>

              <div className="relative aspect-[4/5] w-full overflow-hidden bg-black">
                <Image
                  src={ads[index]}
                  alt={`โปรโมชั่น ${index + 1}`}
                  className="h-full w-full object-cover"
                  fill
                  priority
                />

                <button
                  type="button"
                  onClick={() => handleManualNav(index - 1)}
                  aria-label="รูปก่อนหน้า"
                  className="absolute left-2 top-1/2 flex h-9 w-9 -translate-y-1/2 items-center justify-center border border-white/20 bg-black/50 text-white transition hover:border-[#d4a63c] hover:text-[#d4a63c]"
                >
                  <ChevronLeftIcon className="h-5 w-5" />
                </button>

                <button
                  type="button"
                  onClick={() => handleManualNav(index + 1)}
                  aria-label="รูปถัดไป"
                  className="absolute right-2 top-1/2 flex h-9 w-9 -translate-y-1/2 items-center justify-center border border-white/20 bg-black/50 text-white transition hover:border-[#d4a63c] hover:text-[#d4a63c]"
                >
                  <ChevronRightIcon className="h-5 w-5" />
                </button>
              </div>

              <div className="flex items-center justify-center gap-2 border-t border-white/10 py-3">
                {ads.map((_, dotIndex) => (
                  <button
                    key={dotIndex}
                    type="button"
                    onClick={() => handleManualNav(dotIndex)}
                    aria-label={`ไปที่รูปที่ ${dotIndex + 1}`}
                    className={`h-2 w-2 transition ${
                      dotIndex === index ? "bg-[#d4a63c]" : "bg-white/25"
                    }`}
                  />
                ))}
              </div>
            </Dialog.Panel>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition>
  );
}
