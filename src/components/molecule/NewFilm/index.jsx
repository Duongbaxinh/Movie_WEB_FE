import { Link } from "@mui/material";
import React from "react";
import { SwiperSlide } from "swiper/react";
import Card from "@/components/atom/Card";
import Slidecard from "@/components/atom/Slidecard";

NewPhim.propTypes = {};

function NewPhim({ data }) {
  return (
    <Slidecard
      nameCard={"NewPhim"}
      preView={5}
      width={"100%"}
      height={"100%"}
      title={'Phim Mới Xem Ngay !'}
    >
      {data?.map(({ id, name, avatar, dubbing, chapter }, index) => (
        <SwiperSlide key={index} style={{ flexShrink: 1 }}>
          <Link href={`/views/${id}`}>
            {" "}
            <Card
              title={name}
              Urlimage={avatar}
              form={dubbing}
              episode={chapter}
              width={"100%"}

            />
          </Link>
        </SwiperSlide>
      ))}
    </Slidecard>
  );
}

export default NewPhim;
