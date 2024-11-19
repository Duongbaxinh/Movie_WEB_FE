import { Box, Link, Typography, useTheme } from "@mui/material";
import { grey } from "@mui/material/colors";
import React from "react";
import useFetch from "../../../../hooks/useFetch";
import FormTap from "../../FormTap";


function XemThem(props) {
  const colors = useTheme()
  const { queryName } = props;
  const { data: SeriesData } = useFetch('GET', 'https://movie-web-backend-yui1.onrender.com/api/v1/seris')

  return (
    <Box

      width={{ xs: "100%", md: "750px" }}
      m="0 auto"
      borderRadius="10px"
      sx={{
        backgroundColor: grey[900],
      }}
    >
      {/* ---------------- */}
      {SeriesData &&
        SeriesData.map((Series, index) => (
          <Box
            key={Series.id}
            color={colors.palette.my_white.main}
            sx={{
              textDecorationLine: "none",
            }}
            component={Link}
            href={`/watch/${Series.id}`}
          >
            <FormTap data={Series}>
              <Typography variant="subtitle2">
                Năm phát hành: {Series.id}
              </Typography>
              <Typography variant="subtitle2">
                Xep hang: {Series.id}+
              </Typography>
              <Typography variant="subtitle2">
                Nội Dung Bởi: TMS Entertainment
              </Typography>
              <Typography variant="subtitle2" sx={{ wordWrap: 'break-word' }}>
                {`${Series.title} được mua bản quyền và được cập nhật phát
                sóng mới nhất trên ứng dụng giải trí POPS.`}
              </Typography>
            </FormTap>
          </Box>
        ))}
    </Box>
  );
}

export default XemThem;
