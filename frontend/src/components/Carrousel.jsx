import Data from '../components/Data.js'
import '../styles/styles.css'


// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/grid";
import "swiper/css/pagination";

// import required modules
import { Grid, Pagination,Autoplay,Navigation } from "swiper";

export default function Carrousel() {
  return (
    <div className='App'>
      <div className='text-carrousel'> <h4>Popular MYtineraries</h4>
      </div>

    <>
      <Swiper
       slidesPerGroup={2}
        slidesPerView={2}
        grid={{
          rows: 2,
        }}
        spaceBetween={10}
        pagination={{
          clickable: true,
        }}
        autoplay={{
            delay: 6500,
            disableOnInteraction: false,
          }}
        navigation={true}
        modules={[Grid, Pagination,Autoplay,Navigation]}
        className="mySwiper"
      >

        {Data.map(e=> <SwiperSlide className='conteiner-card' key={e.id}>
          <img className='country' src={e.imagen} alt={e.className}/>
          <div className='Cityname'>{e.name}</div>
        </SwiperSlide>
        )}
      </Swiper>
    </>
    </div>
  );
}