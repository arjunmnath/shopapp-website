'use client'
import { useLottie } from 'lottie-react';
import NotFoundAnimation from './static/404.json';

function App() {
    const style = {
        height: 400,
      };
    const options = {
        animationData: NotFoundAnimation,
        loop: true
    }
    const { View } = useLottie(options, style);

    return (
        <div className="w-screen h-screen bg-[#020817] flex justify-center items-center">
            <div className='h-4/5'>{View}</div>
            
        </div>
    );
}

export default App;