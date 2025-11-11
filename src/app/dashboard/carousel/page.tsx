"use client"


import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import Autoplay from 'embla-carousel-autoplay'

export default function page() {
    return(
        <div className="flex flex-col sm:flex-row sm:flex-wrap justify-center items-center gap-20 w-full" >
       <Carousel className="w-full max-w-xs"
       plugins={[Autoplay({ delay: 1000 })]}
       opts={{
        
        loop: true,
       }}
       >
      <CarouselContent>
        {Array.from({ length: 5 }).map((_, index) => (
          <CarouselItem key={index}>
            <div className="p-1">
              <Card>
                <CardContent className="flex aspect-square items-center justify-center p-6 bg-cyan-200">
                  <span className="text-4xl font-semibold">{index + 1}</span>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="hidden sm:flex justify-center items-center" />
      <CarouselNext className="hidden sm:flex justify-center items-center" />
    </Carousel>

    <div>
        <Carousel
        
       plugins={[Autoplay({ delay: 1000 })]}

      opts={{
        align: "start",
      }}
      className="w-full max-w-sm"
    >
      <CarouselContent>
        {Array.from({ length: 5 }).map((_, index) => (
          <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
            <div className="p-1">
              <Card>
                <CardContent className="flex aspect-square items-center justify-center p-6  bg-cyan-200 ">
                  <span className="text-3xl font-semibold">{index + 1}</span>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="hidden sm:flex justify-center items-center" />
      <CarouselNext className="hidden sm:flex justify-center items-center" />
    </Carousel>
    </div>
    <div><Carousel className="w-full max-w-sm" 
       plugins={[Autoplay({ delay: 1000 })]}
    
    >
      <CarouselContent className="-ml-1  ">
        {Array.from({ length: 5 }).map((_, index) => (
          <CarouselItem key={index} className="pl-1 md:basis-1/2 lg:basis-1/3">
            <div className="p-1">
              <Card>
                <CardContent className="flex aspect-square items-center justify-center p-6   bg-cyan-200">
                  <span className="text-2xl font-semibold">{index + 1}</span>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="hidden sm:flex justify-center items-center" />
      <CarouselNext className="hidden sm:flex justify-center items-center" />
    </Carousel></div>

    <div>    <Carousel

       plugins={[Autoplay({ delay: 1000 })]}

      opts={{
        align: "start",
      }}
      orientation="vertical"
      className="w-full max-w-xs"
    >
      <CarouselContent className="-mt-1 h-[200px] text-blue-50">
        {Array.from({ length: 5 }).map((_, index) => (
          <CarouselItem key={index} className="pt-1 md:basis-1/2">
            <div className="p-1">
              <Card>
                <CardContent className="flex items-center justify-center p-6  bg-cyan-200 ">
                  <span className="text-3xl font-semibold">{index + 1}</span>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
</div>
        </div>
    )
}