import * as React from 'react';

import { Card, CardContent } from '@/components/ui/card';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';

export function HeroCarousel() {
  return (
    <Carousel className='w-full'>
      <CarouselContent className='h-screen'>
        {Array.from({ length: 5 }).map((_, index) => (
          <CarouselItem
            key={index}
            className='flex flex-col items-center justify-center space-y-4 bg-gradient-to-r from-blue-500 to-purple-500 w-full text-white'
          >
            <h1 className='text-6xl font-bold'>Section {index + 1}</h1>
            <p className='text-xl'>Your hero content here</p>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className='left-4' />
      <CarouselNext className='right-4' />
    </Carousel>
  );
}
