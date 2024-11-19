import { Box, Link, Stack, Typography, useTheme } from "@mui/material";
import { grey, red } from "@mui/material/colors";
import React, { useEffect, useRef, useState } from "react";



function Detail(props) {
  const colors = useTheme()
  const [full, setFull] = useState(true);
  const [show, setShow] = useState(true)
  const handleFull = () => {
    setFull(!full);
  };
  const { Data, description } = props;
  const textRef = useRef(null)

  useEffect(() => {

    window.addEventListener("resize", () => {
      const textLength = textRef.current;
      if (textLength.scrollHeight > textLength.offsetHeight) {
        setShow(true)
      } else {
        setShow(false)
      }
      console.log("check text length :::: ", textLength.scrollHeight, textLength.offsetHeight)
    });

    return () => {
      window.removeEventListener("resize", () => {
        const textLength = textRef.current;
        if (textLength.scrollHeight > textLength.offsetHeight) {
          setShow(true)
        } else {
          setShow(false)
        }
        console.log("check text length :::: ", textLength.scrollHeight, textLength.offsetHeight)
      });
    };
  }, [])
  const label = {
    link: (item) => (
      <Link
        href="trinhtham"
        sx={{
          textDecorationLine: "none",
          fontSize: "medium",
          fontWeight: "500",
          color: red[800],
        }}
      >
        {item}
      </Link>
    ),
    text: (item) => (
      <Typography
        component="span"
        style={{
          textDecorationLine: "none",
          fontSize: "medium",
          fontWeight: "500",
        }}
      >
        {item || "heelo"}
      </Typography>
    ),
  };
  return (
    <Stack
      sx={{
        flexDirection: {
          xs: "column",
          md: "row",
        },
      }}
      gap="20px"
      mb="73px"

    >
      {" "}
      <Box flex='1'>
        <Typography
          ref={textRef}
          variant="subtitle1"
          sx={{
            overflow: "hidden",
            textOverflow: "ellipsis",
            display: "-webkit-box",
            WebkitBoxOrient: "vertical",
            lineHeight: '1.5em',
            WebkitLineClamp: `${full ? 3 : ''}`,
          }}
        >
          <Typography component="span" variant="subtitle1" color={grey[500]}>
            Mô Tả:
          </Typography>
          {description}
        </Typography>

        {show && (<Typography
          variant="subtitle1"
          color={colors.palette.my_white.main}
          onClick={handleFull}
          style={{
            cursor: "pointer",
            textDecorationLine: "underline",
          }}
        >
          {!full ? "Thu gọn" : "Xem Thêm"}
        </Typography>)}
      </Box>
      <Stack gap="10px" maxWidth="324px">
        {Object.keys(Data).map((item, index) => {

          return (
            <Stack
              key={index}
              direction="row"
              justifyContent="flex-start"
              alignItems="flex-start"
              gap="20px"
            >
              <Typography
                component="span"
                style={{
                  textTransform: "capitalize",
                  color: grey[500],
                  fontSize: "medium",
                  fontWeight: "500",
                }}
              >
                {item}:
              </Typography>
              <Typography
                component="span"
                style={{
                  textDecorationLine: "none",
                  fontSize: "medium",
                  fontWeight: "500",
                }}
              >
                {Data[item]}
              </Typography>
            </Stack>
          );

        })}
      </Stack>
    </Stack>
  );
}

export default Detail;
