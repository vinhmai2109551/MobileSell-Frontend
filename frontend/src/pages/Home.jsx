import React, { useEffect, useState } from "react";
import {
  Box,
  Typography,
  Button,
  Divider,
  Menu,
  MenuItem,
  IconButton,
  Stack,
  Paper,
} from "@mui/material";
import { ArrowBackIos, ArrowForwardIos } from "@mui/icons-material";
import HeadsetMicIcon from "@mui/icons-material/HeadsetMic";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import VerifiedUserIcon from "@mui/icons-material/VerifiedUser";
import AutorenewIcon from "@mui/icons-material/Autorenew";
import iphone from "../assets/iphone.png";
import huawei from "../assets/huawei.png";
import realme from "../assets/Realme.png";
import samsung from "../assets/samsung.png";
import macbook from "../assets/macbook.png";
import Item from "../component/Item";
import { listProduct } from "../services/ProductService";

const banners = [iphone,samsung,macbook,realme,huawei];
const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [dataTest, setDataTest] = useState([]);

  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleSelectOption = (option) => {
    handleClose();

    let sortedData;

    switch (option) {
      case "A-Z":
        sortedData = [...dataTest.data].sort((a, b) => a.name.localeCompare(b.name));
        break;
      case "Z-A":
        sortedData = [...dataTest.data].sort((a, b) => b.name.localeCompare(a.name));
        break;
      case "Price Up":
        sortedData = [...dataTest.data].sort((a, b) => a.purchasePrice - b.purchasePrice);
        break;
      case "Price Down":
        sortedData = [...dataTest.data].sort((a, b) => b.purchasePrice - a.purchasePrice);
        break;
      default:
        sortedData = dataTest;
    }

    setDataTest((prevDataTest) => ({
      ...prevDataTest,
      data: sortedData,
    }));
  };

  useEffect(() => {
    listProduct()
      .then((response) => {
        setDataTest(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % banners.length);
    }, 3500);
    return () => clearInterval(interval);
  }, []);

  const handlePrevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide - 1 + banners.length) % banners.length);
  };

  const handleNextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % banners.length);
  };
  const featureBadges = [
    {
      icon: <LocalShippingIcon fontSize="medium" />,
      title: "Giao nhanh 2h",
      subtitle: "Miễn phí nội thành với đơn từ 1 triệu",
    },
    {
      icon: <VerifiedUserIcon fontSize="medium" />,
      title: "Hàng chính hãng",
      subtitle: "Bảo hành rõ ràng, đổi trả dễ dàng",
    },
    {
      icon: <AutorenewIcon fontSize="medium" />,
      title: "Đổi trả 30 ngày",
      subtitle: "Không hài lòng hoàn tiền nhanh chóng",
    },
  ];

  const servicePerks = [
    "Đội ngũ hỗ trợ luôn sẵn sàng 24/7",
    "Tư vấn chọn máy phù hợp nhu cầu và ngân sách",
    "Cập nhật ưu đãi độc quyền mỗi tuần",
  ];

  return (
    <Box
      sx={{
        minHeight: "100vh",
        pb: 6,
      }}
    >
      <Box maxWidth="1200px" mx="auto" px={{ xs: 2, md: 0 }} pt={4}>
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr", md: "1.1fr 0.9fr" },
            gap: 3,
            alignItems: "stretch",
          }}
        >
          <Box
            sx={{
              position: "relative",
              overflow: "hidden",
              borderRadius: 3,
              backgroundColor: "#fff",
              boxShadow: "0 18px 45px rgba(15, 23, 42, 0.18)",
              minHeight: { xs: 280, md: 360 },
            }}
          >
            <Box
              component="img"
              src={banners[currentSlide]}
              alt={`Banner ${currentSlide + 1}`}
              sx={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                transition: "transform 0.5s ease-in-out",
              }}
            />

            <IconButton
              onClick={handlePrevSlide}
              sx={{
                position: "absolute",
                top: "50%",
                left: 16,
                transform: "translateY(-50%)",
                color: "white",
                backgroundColor: "rgba(0, 0, 0, 0.5)",
                "&:hover": {
                  backgroundColor: "rgba(0, 0, 0, 0.8)",
                },
              }}
            >
              <ArrowBackIos />
            </IconButton>

            <IconButton
              onClick={handleNextSlide}
              sx={{
                position: "absolute",
                top: "50%",
                right: 16,
                transform: "translateY(-50%)",
                color: "white",
                backgroundColor: "rgba(0, 0, 0, 0.5)",
                "&:hover": {
                  backgroundColor: "rgba(0, 0, 0, 0.8)",
                },
              }}
            >
              <ArrowForwardIos />
            </IconButton>
          </Box>

          <Paper
            sx={{
              p: 4,
              borderRadius: 3,
              background: "linear-gradient(135deg, #d3001a 0%, #b10016 100%)",
              color: "#fff",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              gap: 2.5,
              boxShadow: "0 18px 45px rgba(211, 0, 26, 0.35)",
            }}
          >
            <Typography variant="h5" fontWeight={700}>
              Liên hệ ngay
            </Typography>
            <Typography variant="body1" sx={{ opacity: 0.9 }}>
              Đội ngũ tư vấn sẵn sàng hỗ trợ chọn sản phẩm phù hợp và giữ ưu đãi
              tốt nhất cho bạn.
            </Typography>

            <Stack spacing={1.4}>
              {servicePerks.map((perk) => (
                <Box key={perk} sx={{ display: "flex", alignItems: "center", gap: 1.5 }}>
                  <Box
                    sx={{
                      width: 40,
                      height: 40,
                      borderRadius: "50%",
                      backgroundColor: "rgba(255,255,255,0.16)",
                      display: "grid",
                      placeItems: "center",
                    }}
                  >
                    <VerifiedUserIcon fontSize="small" />
                  </Box>
                  <Typography variant="body2" sx={{ color: "#f5f7ff" }}>
                    {perk}
                  </Typography>
                </Box>
              ))}
            </Stack>

            <Button
              endIcon={<HeadsetMicIcon />}
              sx={{
                backgroundColor: "#fff",
                color: "#b10016",
                fontWeight: 700,
                borderRadius: 999,
                px: 3,
                py: 1.2,
                alignSelf: "flex-start",
                textTransform: "none",
                boxShadow: "0 8px 20px rgba(0,0,0,0.15)",
                "&:hover": {
                  backgroundColor: "#f4f4f4",
                },
              }}
            >
              Liên hệ
            </Button>
          </Paper>
        </Box>

        <Stack direction={{ xs: "column", md: "row" }} spacing={2} mt={4}>
          {featureBadges.map((badge) => (
            <Paper
              key={badge.title}
              elevation={0}
              sx={{
                flex: 1,
                p: 2.4,
                display: "flex",
                alignItems: "center",
                gap: 1.5,
                borderRadius: 2,
                backgroundColor: "#fff",
                boxShadow: "0 10px 25px rgba(15, 23, 42, 0.08)",
              }}
            >
              <Box
                sx={{
                  width: 46,
                  height: 46,
                  borderRadius: "50%",
                  display: "grid",
                  placeItems: "center",
                  backgroundColor: "#f4f6ff",
                  color: "#c3001a",
                }}
              >
                {badge.icon}
              </Box>
              <Box>
                <Typography fontWeight={700}>{badge.title}</Typography>
                <Typography variant="body2" sx={{ color: "#475467" }}>
                  {badge.subtitle}
                </Typography>
              </Box>
            </Paper>
          ))}
        </Stack>

        <Paper
          sx={{
            mt: 5,
            p: 3,
            borderRadius: 3,
            backgroundColor: "#fff",
            boxShadow: "0 14px 36px rgba(15, 23, 42, 0.12)",
          }}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              flexWrap: "wrap",
              gap: 2,
            }}
          >
            <Box>
              <Typography
                variant="h4"
                sx={{
                  fontWeight: "700",
                  color: "#c3001a",
                }}
              >
                SẢN PHẨM MỚI
              </Typography>
              <Divider
                sx={{
                  width: "220px",
                  backgroundColor: "#c3001a",
                  height: 3,
                }}
              />
            </Box>
            <Button onClick={handleClick} variant="contained" sx={{ textTransform: "none" }}>
              Sort
            </Button>
            <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleClose}>
              <MenuItem onClick={() => handleSelectOption("A-Z")}>A-Z</MenuItem>
              <MenuItem onClick={() => handleSelectOption("Z-A")}>Z-A</MenuItem>
              <MenuItem onClick={() => handleSelectOption("Price Up")}>Giá tăng</MenuItem>
              <MenuItem onClick={() => handleSelectOption("Price Down")}>Giá giảm</MenuItem>
            </Menu>
          </Box>
          <Box
            sx={{
              flexWrap: "wrap",
              display: "flex",
              flexDirection: "row",
              gap: "30px",
              mt: 2,
            }}
          >
            {dataTest.data &&
              dataTest.data.slice(0, 8).map((item, index) => (
                <Item
                  name={item.name}
                  image={item.url}
                  new_price={item.purchasePrice}
                  old_price={item.salePrice}
                  sale={item.percentDiscount}
                  id={item.id}
                  key={index}
                />
              ))}
          </Box>
        </Paper>

        <Paper
          sx={{
            mt: 5,
            p: 3,
            borderRadius: 3,
            backgroundColor: "#fff",
            boxShadow: "0 14px 36px rgba(15, 23, 42, 0.12)",
          }}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              flexWrap: "wrap",
              gap: 2,
            }}
          >
            <Box>
              <Typography
                variant="h4"
                sx={{
                  fontWeight: "700",
                  color: "#c3001a",
                }}
              >
                SIÊU ƯU ĐÃI
              </Typography>
              <Divider
                sx={{
                  width: "220px",
                  backgroundColor: "#c3001a",
                  height: 3,
                }}
              />
            </Box>
            <Button onClick={handleClick} variant="contained" sx={{ textTransform: "none" }}>
              Sort
            </Button>
            <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleClose}>
              <MenuItem onClick={() => handleSelectOption("A-Z")}>A-Z</MenuItem>
              <MenuItem onClick={() => handleSelectOption("Z-A")}>Z-A</MenuItem>
              <MenuItem onClick={() => handleSelectOption("Price Up")}>Giá tăng</MenuItem>
              <MenuItem onClick={() => handleSelectOption("Price Down")}>Giá giảm</MenuItem>
            </Menu>
          </Box>
          <Box
            sx={{
              flexWrap: "wrap",
              display: "flex",
              flexDirection: "row",
              gap: "30px",
              mt: 2,
            }}
          >
            {dataTest.data &&
              dataTest.data.slice(8, 16).map((item, index) => (
                <Item
                  name={item.name}
                  image={item.url}
                  new_price={item.purchasePrice}
                  old_price={item.salePrice}
                  sale="10"
                  id={item.id}
                  key={index}
                />
              ))}
          </Box>
        </Paper>
      </Box>
    </Box>
  );
};

export default Home;
