import React, { useEffect, useState } from "react";
import { Navigation, Pagination, A11y } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import HomePost from "./HomePost";

function SwiperPost({ array }) {
  const [screen, setScreen] = useState(3.5);
  useEffect(() => {
    setScreen(window.innerWidth > 850 ? 3.5 : 2.2);
  }, []);
  window.addEventListener("resize", () => {
    if (window.innerWidth < 865) {
      setScreen(2.2);
    } else {
      setScreen(3.5);
    }
  });
  return (
    <div>
      <Swiper
        // install Swiper modules
        modules={[A11y]}
        spaceBetween={15}
        slidesPerView={screen}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log("slide change")}
      >
        {array.map((item, index) => (
          <SwiperSlide key={index}>
            <HomePost item={item} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default SwiperPost;
