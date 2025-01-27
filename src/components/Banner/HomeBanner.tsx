import Autoplay from "embla-carousel-autoplay"
import {
   Carousel,
   CarouselContent,
   CarouselItem,
   CarouselPrevious,
   CarouselNext,
} from "../ui/carousel";
const lst_banner = [
   "https://vieclam24h.vn/_next/image?url=https%3A%2F%2Fcdn1.vieclam24h.vn%2Fimages%2Fseeker-banner%2F2025%2F01%2F17%2Funnamed_173710883481.jpg&w=1920&q=75",
   "https://vieclam24h.vn/_next/image?url=https%3A%2F%2Fcdn1.vieclam24h.vn%2Fimages%2Fseeker-banner%2F2025%2F01%2F21%2FABBank%2520PC%2520(1)-min_173745101798.png&w=1920&q=75",
   "https://vieclam24h.vn/_next/image?url=https%3A%2F%2Fcdn1.vieclam24h.vn%2Fimages%2Fseeker-banner%2F2024%2F03%2F08%2FPC-Banner-AWO-Mar2024_170988353144.jpg&w=1920&q=75",
];
export const HomeBanner = () => {
   return (
      <Carousel  plugins={[Autoplay({
        delay:2000
      })]} opts={{align:"start", loop:true}} className="w-full relative ">
         <CarouselContent>
            {Array.from({ length: 3 }).map((_, index) => (
               <CarouselItem key={index}>
                 <img src={lst_banner[index]}></img>
               </CarouselItem>
            ))}
         </CarouselContent>
         <CarouselPrevious />
         <CarouselNext />
      </Carousel>
   );
};
