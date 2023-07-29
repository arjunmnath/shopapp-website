'use client'
import EmptyAnimation from '@/app/static/empty.json';
import Lottie from "lottie-react";

function Loading() {
    return (
        <div className="h-max flex flex-col justify-center items-center">
            <Lottie className='w-3/5' loop={false} autoplay={true} animationData={EmptyAnimation}/>
        </div>
    );
}

export default Loading;