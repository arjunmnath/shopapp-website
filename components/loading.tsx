'use client'
import { useLottie } from 'lottie-react';
import NotFoundAnimation from '@/app/static/loading.json';

function Loading() {
    const style = {
        height: 420,
    };
    const options = {
        animationData: NotFoundAnimation,
        loop: true
    }
    const { View } = useLottie(options, style);

    return (
        <div className="h-max flex flex-col justify-center items-center">
            {View}
        </div>
    );
}

export default Loading;