import { Box, Stack, Typography, useTheme } from "@mui/material";
import { grey, red } from "@mui/material/colors";
import React, { useEffect, useState } from "react";
import Comment from "./Comment";
import Tap from "./Tap";
import XemThem from "./XemThem";
import useSaveLocal from '../../../hooks/useSaveLocal'


function Interact({ Data, dataMovie }) {
  const colors = useTheme()
  const Select = ["Tập", "Xem thêm", "Bình luận"];
  const Component = [
    <Tap key={1} data={dataMovie} />,
    <XemThem key={2} queryName={Data.mainName} />,
    <Comment key={3} />,
  ];
  const [isActive, handleActive] = useSaveLocal('interact', 1);
  const handleFull = () => {
    setFull(!full);
  };
  console.log('render')
  return (
    <Box>
      <Stack

        width="100%"
        direction="row"
        justifyContent="center"
        alignItems="center"
        height="50px"
        mb="23px"
        gap="15px"
        sx={{
          backgroundColor: grey[900],
        }}
      >
        {Select.map((item, index) => (
          <Typography
            variant="h3"
            onClick={() => handleActive(index)}
            key={index}
            sx={{
              cursor: "pointer",
              color: Number.parseInt(isActive) === index ? red[200] : colors.palette.my_white.main,
            }}
          >
            {item}
          </Typography>
        ))}
      </Stack>

      {Component[isActive]}
    </Box>
  );
}

export default Interact;
