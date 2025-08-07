'use client';

import { useRouter } from 'next/navigation';
import Spline from '@splinetool/react-spline';
import { Plus_Jakarta_Sans } from 'next/font/google';

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  display: 'swap',
});

export default function Home() {
  const router = useRouter();

  const handleDashboardClick = () => {
    router.push('/dashboard');
  };

  return (
    <div className={`w-screen h-screen overflow-hidden ${plusJakarta.className}`}>
      <Spline scene="https://prod.spline.design/b1eSMCnil5CYGj9V/scene.splinecode" />

      <div className="absolute inset-0 flex flex-col items-center justify-center text-white z-10">
        <h1 className="text-4xl sm:text-6xl font-bold drop-shadow-lg">Spectre Inc.</h1>
        <p className="mt-4 text-lg sm:text-xl drop-shadow-md">Built with Next.js and Shadcn</p>
        <button
          onClick={handleDashboardClick}
          className="mt-6 px-6 py-2 bg-white text-black rounded-full hover:bg-gray-200 transition"
        >
          Dashboard
        </button>
      </div>
    </div>
  );
}
