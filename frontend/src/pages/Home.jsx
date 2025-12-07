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
            gridTemplateColumns: "1fr",
            gap: 3,
            alignItems: "stretch",
          }}
        >
          <Box
            sx={{
              position: "relative",
              overflow: "hidden",
              borderRadius: 4,
              background: "linear-gradient(145deg, #ffffff, #f4f6ff)",
              boxShadow: "0 18px 45px rgba(15, 23, 42, 0.18)",
              minHeight: { xs: 280, md: 380 },
              border: "1px solid rgba(15,23,42,0.06)",
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
                transition: "transform 0.6s ease-in-out",
                borderRadius: 4,
              }}
            />

            <Box
              sx={{
                position: "absolute",
                inset: 0,
                background: "linear-gradient(180deg, rgba(0,0,0,0.0) 45%, rgba(0,0,0,0.35) 100%)",
                pointerEvents: "none",
              }}
            />

            <IconButton
              onClick={handlePrevSlide}
              sx={{
                position: "absolute",
                top: "50%",
                left: 16,
                transform: "translateY(-50%)",
                color: "#fff",
                backgroundColor: "rgba(0,0,0,0.55)",
                boxShadow: "0 10px 25px rgba(0,0,0,0.25)",
                border: "1px solid rgba(255,255,255,0.2)",
                "&:hover": {
                  backgroundColor: "rgba(0,0,0,0.75)",
                },
                width: 44,
                height: 44,
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
                color: "#fff",
                backgroundColor: "rgba(0,0,0,0.55)",
                boxShadow: "0 10px 25px rgba(0,0,0,0.25)",
                border: "1px solid rgba(255,255,255,0.2)",
                "&:hover": {
                  backgroundColor: "rgba(0,0,0,0.75)",
                },
                width: 44,
                height: 44,
              }}
            >
              <ArrowForwardIos />
            </IconButton>

            <Stack
              direction="row"
              spacing={1}
              sx={{
                position: "absolute",
                bottom: 14,
                left: "50%",
                transform: "translateX(-50%)",
                backgroundColor: "rgba(0,0,0,0.45)",
                borderRadius: 999,
                px: 1.4,
                py: 0.6,
                backdropFilter: "blur(6px)",
              }}
            >
              {banners.map((_, idx) => (
                <Box
                  key={idx}
                  sx={{
                    width: idx === currentSlide ? 18 : 10,
                    height: 10,
                    borderRadius: 999,
                    backgroundColor: idx === currentSlide ? "#fff" : "rgba(255,255,255,0.5)",
                    transition: "all 200ms ease",
                  }}
                />
              ))}
            </Stack>
          </Box>
        </Box>

        <Stack
          direction={{ xs: "column", md: "row" }}
          spacing={2}
          mt={{ xs: 3, md: 4 }}
          sx={{
            background: "linear-gradient(135deg, rgba(255,255,255,0.9), rgba(244,246,255,0.9))",
            borderRadius: 3,
            p: { xs: 2, md: 3 },
            boxShadow: "0 18px 45px rgba(15, 23, 42, 0.08)",
            border: "1px solid rgba(15,23,42,0.04)",
          }}
        >
          <Typography
            variant="h6"
            sx={{ fontWeight: 800, color: "#0f172a", minWidth: 160 }}
          >
            Lý do chọn chúng tôi
          </Typography>
          <Stack direction={{ xs: "column", md: "row" }} spacing={2} flex={1}>
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
                  boxShadow: "0 10px 25px rgba(15, 23, 42, 0.06)",
                  border: "1px solid rgba(15,23,42,0.03)",
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
