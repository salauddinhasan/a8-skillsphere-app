import { Button } from '@heroui/react';
import React from 'react';

const Banner = () => {
    return (
        <div className='relative py-20 overflow-hidden bg-background'>
            {/* Background Glow Effect */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10 blur-[120px] opacity-20">
                <div className="aspect-square bg-gradient-to-tr from-primary to-danger rounded-full w-[500px]"></div>
            </div>

            <div className='container mx-auto px-6 text-center space-y-8'>
                {/* Badge Section */}
                <div className='flex justify-center'>
                    <p className='bg-danger/10 text-danger border border-danger/20 rounded-full px-4 py-1 text-sm font-medium'>
                         NEW — 200+ Courses Added This Month
                    </p>
                </div>

                {/* Main Heading */}
                <div className='max-w-4xl mx-auto'>
                    <h1 className='text-5xl md:text-7xl font-extrabold tracking-tight leading-tight'>
                        Upgrade Your Skills <br /> 
                        <span className='bg-gradient-to-r from-danger to-orange-500 bg-clip-text text-transparent'>Today</span>
                    </h1>
                </div>

                {/* Subtext */}
                <div className='max-w-2xl mx-auto'>
                    <p className='text-default-500 text-lg md:text-xl leading-relaxed'>
                        Learn from industry experts. Master Web Development, Design, Marketing and more — at your own pace.
                    </p>
                </div>

                {/* Call to Actions */}
                <div className='flex flex-wrap justify-center gap-4 pt-4'>
                    <Button 
                        size="lg" 
                        color="primary" 
                        radius="full" 
                        className="font-bold shadow-lg shadow-primary/20"
                    >
                        Explore Courses
                    </Button>
                    <Button 
                        size="lg" 
                        variant="outline" 
                        radius="full" 
                        className="font-bold"
                    >
                        Get Started Free
                    </Button>
                </div>

                {/* Stats Section */}
                <div className='grid grid-cols-2 md:grid-cols-4 gap-8 pt-16 border-t border-divider mt-10'>
                    <div className="space-y-1">
                        <h2 className='text-3xl font-bold text-foreground'>50K+</h2>
                        <p className="text-default-400 text-sm">Students</p>
                    </div>
                    <div className="space-y-1">
                        <h2 className='text-3xl font-bold text-foreground'>200+</h2>
                        <p className="text-default-400 text-sm">Courses</p>
                    </div>
                    <div className="space-y-1">
                       <h2 className='text-3xl font-bold text-foreground'>50+</h2>
                       <p className="text-default-400 text-sm">Instructors</p>
                    </div>
                    <div className="space-y-1">
                        <h2 className='text-3xl font-bold text-foreground'>4.8</h2>
                        <p className="text-default-400 text-sm">Avg Rating</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;