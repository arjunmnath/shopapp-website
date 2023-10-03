'use client'
import { useLottie } from 'lottie-react';
import LoadingAnimation from '@/app/static/fetching.json';

function Fetching() {
    const style = {
        height: 120,
    };
    const options = {
        animationData: LoadingAnimation,
        loop: true
    }
    const { View } = useLottie(options, style);

    return (
        <div className="h-max flex flex-col justify-center items-center">
            {View}
        </div>
    );
}

export default Fetching;