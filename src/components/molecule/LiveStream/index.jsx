import { ShopIcon } from "@/assets/svg/ShopIcon";
import Card from "@/components/atom/Card";
import Slidecard from "@/components/atom/Slidecard";
import { Link } from "@mui/material";
import React from "react";
import { SwiperSlide } from "swiper/react";

function LiveStream({ data }) {
  return (
    <Slidecard
      nameCard={"LiveStream"}
      preView={5}
      width={"100%"}
      height={"100%"}
      title={"Livestream Anime Tập Mới Mỗi Ngày ✨"}
      icon={
        <ShopIcon
          color="primary"
          fontSize="large"
          sx={{ marginBottom: "-5px" }}
        />
      }
    >
      {data !== null &&
        data.map(({ id, name, avatar }) => (
          <SwiperSlide key={id}>
            <Link href={`/watch/${id}`}>
              <Card
                title={name}
                Urlimage={avatar}
                anouncement={"sẽ diễn ra"}
                width={"100%"}
                height={"100%"}
              />
            </Link>
          </SwiperSlide>
        ))}
    </Slidecard>
  );
}

export default LiveStream;
