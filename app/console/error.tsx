'use client' // Error components must be Client Components

import { useEffect } from 'react'
import { useLottie } from 'lottie-react';
import ErrorAnimation from '@/app/static/Error.json';
import { Button } from '@/components/ui/button';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
  }, [error])
  const style = {
    height: 420,
  };
  const options = {
    animationData: ErrorAnimation,
    loop: true
  }
  const { View } = useLottie(options, style);

  return (
    <div className="h-max w-full flex flex-col justify-center items-center gap-2">
      {View}
      <h2 className='text-xl'>Something went wrong!</h2>
      <h2 className='text-slate-400 text-sm'>{error.message}</h2>
      <h2 className='text-slate-400 text-sm'>{error.digest}</h2>
      <Button
        onClick={
          () => reset()
        }
      >
        Try again
      </Button>
    </div>
  )
}




