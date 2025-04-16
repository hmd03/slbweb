import Slider from 'react-slick';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

interface RollingCardProps {
  images: string[];
}

function NextArrow(props: any) {
  const { onClick } = props;
  return (
    <div
      className='hidden sm:block absolute -right-12 top-1/2 -translate-y-1/2 z-10 cursor-pointer p-2'
      onClick={onClick}
    >
      <ChevronRight className='w-8 h-8 text-gray-500 hover:text-black' />
    </div>
  );
}

function PrevArrow(props: any) {
  const { onClick } = props;
  return (
    <div
      className='hidden sm:block absolute -left-12 top-1/2 -translate-y-1/2 z-10 cursor-pointer p-2'
      onClick={onClick}
    >
      <ChevronLeft className='w-8 h-8 text-gray-500 hover:text-black' />
    </div>
  );
}

const RollingCard: React.FC<RollingCardProps> = ({ images }) => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className='relative w-[full] mx-auto py-10 px-4'>
      <Slider {...settings}>
        {images.map((src, idx) => (
          <div key={idx} className='px-2'>
            <img
              src={src}
              alt={`review-${idx}`}
              className='w-full max-w-[80vw] h-auto mx-auto rounded-xl shadow-md'
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default RollingCard;
