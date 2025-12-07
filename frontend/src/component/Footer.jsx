import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import XIcon from "@mui/icons-material/X";
import YouTubeIcon from "@mui/icons-material/YouTube";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import ShareLocationIcon from "@mui/icons-material/ShareLocation";
import HeadsetMicIcon from "@mui/icons-material/HeadsetMic";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import {
  Box,
  Typography,
  Button,
  Divider,
  InputBase,
  Stack,
  Grid,
  Paper,
  IconButton,
} from "@mui/material";

const socialIcons = [
  { Icon: XIcon, bg: "#0f172a", fg: "#fff" },
  { Icon: YouTubeIcon, bg: "#ff0000", fg: "#fff" },
  { Icon: InstagramIcon, bg: "linear-gradient(135deg, #f9ce34, #ee2a7b, #6228d7)", fg: "#fff" },
  { Icon: FacebookIcon, bg: "#1877f2", fg: "#fff" },
  {
    img: "https://upload.wikimedia.org/wikipedia/commons/1/1b/Zalo_logo.png",
    bg: "#fff",
  },
];
const contactItems = [
  { icon: PhoneIcon, label: "Điện thoại", value: "0366-909-090" },
  { icon: EmailOutlinedIcon, label: "Email", value: "huuvinh366455751@gmail.com" },
  { icon: LocationOnIcon, label: "Địa chỉ", value: "720A Điện Biên Phủ, Phường Thạnh Mỹ Tây,Q1,TP.Hồ Chí Minh" },
];

const paymentLogos = [
  {
    name: "Apple Pay",
    src: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Apple_Pay_logo.svg/320px-Apple_Pay_logo.svg.png",
    bg: "#0f172a",
    fg: "#fff",
  },
  {
    name: "VNPAY",
    src: "https://upload.wikimedia.org/wikipedia/commons/3/3a/VNPAY_logo.png",
    bg: "linear-gradient(135deg, #004aad, #0095ff)",
    fg: "#fff",
  },
  {
    name: "MoMo",
    src: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3b/MoMo_Logo.png/320px-MoMo_Logo.png",
    bg: "#a50064",
    fg: "#fff",
  },
  {
    name: "OnePAY",
    src: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/OnePay_logo.png/320px-OnePay_logo.png",
    bg: "linear-gradient(135deg, #0250c5, #00b4db)",
    fg: "#fff",
  },
  {
    name: "mPOS",
    src: "https://upload.wikimedia.org/wikipedia/commons/9/90/MPOS_logo.png",
    bg: "#f2994a",
    fg: "#0b0f1a",
  },
  {
    name: "Kredivo",
    src: "https://upload.wikimedia.org/wikipedia/commons/3/39/Kredivo_logo.png",
    bg: "#1fa8f5",
    fg: "#0b172a",
  },
  {
    name: "ZaloPay",
    src: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/ZaloPay_logo.png/320px-ZaloPay_logo.png",
    bg: "#0b8cff",
    fg: "#fff",
  },
  {
    name: "AlePay",
    bg: "#1c90f3",
    fg: "#fff",
  },
  {
    name: "Fundiin",
    bg: "#7c3aed",
    fg: "#fff",
  },
];

const appBadges = [
  { name: "App Store", bg: "#111827", fg: "#fff" },
  { name: "Google Play", bg: "linear-gradient(135deg, #34a853, #4285f4)", fg: "#fff" },
  { name: "AppGallery", bg: "#e60012", fg: "#fff" },
];

const policyLinks = ["Chính sách bảo hành", "Chính sách đổi trả", "Hỗ trợ"];

const Footer = () => {
  const navigate = useNavigate();
  const [showContactFab, setShowContactFab] = useState(false);

  const handleContactNavigate = () => {
    navigate("/zalo");
  };

  return (
    <Box
      sx={{
        background: "radial-gradient(120% 140% at 20% 10%, #172033 0%, #0c1220 40%, #060910 100%)",
        color: "#e8edf5",
        mt: 6,
        pt: 6,
        pb: 5,
        borderTopLeftRadius: 28,
        borderTopRightRadius: 28,
        boxShadow: "0 -28px 60px rgba(0,0,0,0.32)",
      }}
    >
      <Box maxWidth="1280px" mx="auto" px={{ xs: 3, md: 4 }}>
        <Grid container spacing={4}>
           <Grid item xs={12} md={5}>
            <Typography variant="h4" fontWeight={800} gutterBottom>
               PhoneExE
            </Typography>
            <Typography variant="body2" sx={{ color: "#cbd5f5", lineHeight: 1.7 }}>
              Mang đến trải nghiệm mua sắm công nghệ mượt mà, giá tốt và dịch vụ chăm sóc khách hàng tận tâm.
            </Typography>
            <Stack direction="row" spacing={1.4} mt={2.5}>
              {socialIcons.map(({ Icon, img, bg, fg }, idx) => (
                <Box
                  key={idx}
                  sx={{
                    width: 44,
                    height: 44,
                    borderRadius: "50%",
                    background: bg,
                    display: "grid",
                    placeItems: "center",
                    color: fg,
                    boxShadow: "0 10px 24px rgba(0,0,0,0.25)",
                    transition: "all 0.2s ease",
                    overflow: "hidden",
                    "&:hover": {
                      transform: "translateY(-2px)",
                    },
                  }}
                >
                  {img ? (
                    <Box component="img" src={img} alt="Zalo" sx={{ width: 26, height: 26 }} />
                  ) : (
                    <Icon />
                  )}
                </Box>
              ))}
            </Stack>
          </Grid>

          <Grid item xs={12} md={4}>
            <Typography variant="h5" fontWeight={800} gutterBottom>
              Thông tin liên hệ
            </Typography>
            <Stack spacing={1.6}>
              {contactItems.map(({ icon: Icon, label, value }) => (
                <Stack key={label} direction="row" spacing={1.5} alignItems="center">
                  <Box
                    sx={{
                      width: 42,
                      height: 42,
                      borderRadius: "50%",
                      display: "grid",
                      placeItems: "center",
                      backgroundColor: "rgba(255,255,255,0.08)",
                    }}
                  >
                    <Icon />
                  </Box>
                  <Box>
                    <Typography variant="body2" sx={{ color: "#cbd5f5" }}>
                      {label}
                    </Typography>
                    <Typography variant="subtitle1" fontWeight={700} color="#fff">
                      {value}
                    </Typography>
                  </Box>
                </Stack>
              ))}
            </Stack>
          </Grid>

          <Grid item xs={12} md={3}>
            <Typography variant="h5" fontWeight={800} gutterBottom>
              Nhận bản tin ưu đãi
            </Typography>
            <Typography variant="body2" sx={{ color: "#cbd5f5", mb: 2 }}>
              Đừng bỏ lỡ những khuyến mãi mới nhất mỗi tuần.
            </Typography>
            <Box
              sx={{
                display: "flex",
                gap: 1,
                background: "rgba(255,255,255,0.08)",
                borderRadius: 2,
                p: 1,
                alignItems: "center",
              }}
            >
              <InputBase
                placeholder="Nhập email của bạn"
                sx={{ color: "#fff", flex: 1, px: 1 }}
              />
              <Button
                sx={{
                  backgroundColor: "#d3001a",
                  color: "#fff",
                  textTransform: "none",
                  px: 2.6,
                  borderRadius: 1.6,
                  "&:hover": {
                    backgroundColor: "#b40017",
                  },
                }}
              >
                Gửi
              </Button>
            </Box>
          </Grid>
        </Grid>

        <Paper
          elevation={0}
          sx={{
            mt: 2,
            p: { xs: 2.5, md: 3 },
            borderRadius: 3,
            backgroundColor: "rgba(255,255,255,0.03)",
            border: "1px solid rgba(255,255,255,0.06)",
          }}
        >
          <Grid container spacing={3} alignItems="center">
            <Grid item xs={12} md={4} >
              <Stack direction="row" spacing={1.2} alignItems="center" >
                <ShareLocationIcon />
                <Box>
                  <Typography variant="h6" fontWeight={800} sx={{ color: "#f9f9f9ff" }}>
                    Kết nối với chúng tôi
                  </Typography>
                  <Typography variant="body2" sx={{ color: "#f9f9f9ff" }}>
                    Theo dõi để cập nhật ưu đãi mỗi ngày
                  </Typography>
                </Box>
              </Stack>
            </Grid>
            <Grid
              item
              xs={12}
              md={4}
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: { xs: "flex-start", md: "flex-end" },
                textAlign: { xs: "left", md: "right" },
              }}
            >
              <Typography variant="h6" fontWeight={900} sx={{ letterSpacing: 0.2, color: "#f5f7fb" }} gutterBottom>
                Phương thức thanh toán
              </Typography>
              <Stack
                direction="row"
                spacing={1.2}
                flexWrap="wrap"
                useFlexGap
                sx={{ justifyContent: { xs: "flex-start", md: "flex-end" } }}
              >
                {paymentLogos.map(({ name, bg, fg }) => (
                  <Box
                    key={name}
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      background: bg,
                      color: fg,
                      borderRadius: 1.6,
                      px: 1.5,
                      py: 0.7,
                      fontWeight: 900,
                      fontSize: 14,
                      boxShadow: "0 12px 26px rgba(0,0,0,0.24)",
                      border: "1px solid rgba(255,255,255,0.14)",
                      minHeight: 40,
                      minWidth: 92,
                    }}
                  >
                    <Typography component="span" sx={{ fontWeight: 900, color: fg }}>
                      {name}
                    </Typography>
                  </Box>
                ))}
              </Stack>
            </Grid>
            <Grid item xs={12} md={4}>
              <Typography variant="h6" fontWeight={900} sx={{ letterSpacing: 0.2, color: "#f5f7fb" }} gutterBottom>
                Tải ứng dụng
              </Typography>
              <Stack direction="row" spacing={1.2} flexWrap="wrap" useFlexGap>
                {appBadges.map(({ name, bg, fg }) => (
                  <Button
                    key={name}
                    variant="contained"
                    sx={{
                      color: fg,
                      background: bg,
                      textTransform: "none",
                      borderRadius: 1.6,
                      px: 2.2,
                      py: 0.9,
                      fontWeight: 900,
                      fontSize: 15,
                      boxShadow: "0 14px 30px rgba(0,0,0,0.26)",
                      "&:hover": {
                        filter: "brightness(1.05)",
                      },
                    }}
                  >
                    {name}
                  </Button>
                ))}
              </Stack>
            </Grid>
          </Grid>
        </Paper>

        <Divider sx={{ my: 3, borderColor: "rgba(255,255,255,0.08)" }} />
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: 2,
          }}
        >
          <Typography variant="body2" sx={{ color: "#cbd5f5" }}>
            © 2025 - PhoneExE. All rights reserved.
          </Typography>
          <Stack direction="row" spacing={1} flexWrap="wrap">
            {policyLinks.map((item) => (
              <Box
                key={item}
                sx={{
                  px: 1.4,
                  py: 0.6,
                  borderRadius: 999,
                  backgroundColor: "rgba(255,255,255,0.08)",
                  color: "#e8edf5",
                  fontSize: 13,
                }}
              >
                {item}
              </Box>
            ))}
          </Stack>
        </Box>
      </Box>

      <Box
        sx={{
          position: "fixed",
          right: 16,
          bottom: 20,
          zIndex: 1200,
          display: "flex",
          alignItems: "center",
          gap: 1,
        }}
      >
        {showContactFab ? (
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 1,
              backgroundColor: "#d3001a",
              color: "#fff",
              borderRadius: 999,
              boxShadow: "0 16px 32px rgba(0,0,0,0.35)",
              pl: 2.2,
              pr: 0.4,
              py: 0.9,
            }}
          >
            <Button
              startIcon={<HeadsetMicIcon />}
              onClick={handleContactNavigate}
              sx={{
                color: "#fff",
                textTransform: "none",
                fontWeight: 800,
                px: 0.5,
                "&:hover": { backgroundColor: "rgba(255,255,255,0.08)" },
              }}
            >
              Liên hệ
            </Button>
            <IconButton
              size="small"
              onClick={() => setShowContactFab(false)}
              sx={{
                color: "#fff",
                backgroundColor: "rgba(0,0,0,0.12)",
                border: "1px solid rgba(255,255,255,0.28)",
                "&:hover": { backgroundColor: "rgba(0,0,0,0.2)" },
              }}
            >
              <CloseRoundedIcon fontSize="small" />
            </IconButton>
          </Box>
        ) : (
          <IconButton
            size="large"
            onClick={() => setShowContactFab(true)}
            sx={{
              backgroundColor: "#d3001a",
              color: "#fff",
                boxShadow: "0 14px 28px rgba(0,0,0,0.32)",
                "&:hover": { backgroundColor: "#b40017" },
            }}
          >
            <HeadsetMicIcon />
          </IconButton>
        )}
      </Box>
    </Box>
  );
};

export default Footer;
