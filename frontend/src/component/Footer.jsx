import React from "react";
import XIcon from "@mui/icons-material/X";
import YouTubeIcon from "@mui/icons-material/YouTube";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import HeadsetMicIcon from "@mui/icons-material/HeadsetMic";
import {
  Box,
  Typography,
  Button,
  Divider,
  InputBase,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  Stack,
  Grid,
} from "@mui/material";
const Footer = () => {
  return (
    <Box
      sx={{
        background: "linear-gradient(135deg, #0b1f3b 0%, #0f2f63 100%)",
        color: "#e8edf5",
        mt: 6,
        pt: 5,
        pb: 3,
      }}
    >
      <Box maxWidth="1200px" mx="auto" px={{ xs: 3, md: 0 }}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            gap: 2,
            flexWrap: "wrap",
            p: 3,
            border: "1px solid rgba(255,255,255,0.1)",
            borderRadius: 3,
            background: "rgba(255,255,255,0.05)",
          }}
        >
          <Box>
            <Typography variant="h5" fontWeight={700}>
              Bạn cần hỗ trợ nhanh?
            </Typography>
            <Typography variant="body2" sx={{ color: "#cbd5f5", mt: 0.5 }}>
              Đội ngũ chăm sóc khách hàng sẵn sàng nghe máy và tư vấn ngay.
            </Typography>
          </Box>
          <Button
            endIcon={<HeadsetMicIcon />}
            sx={{
              backgroundColor: "#d3001a",
              color: "#fff",
              fontWeight: 700,
              borderRadius: 999,
              px: 3,
              py: 1.1,
              textTransform: "none",
              boxShadow: "0 10px 30px rgba(211,0,26,0.35)",
              "&:hover": {
                backgroundColor: "#b40017",
              },
            }}
          >
            Liên hệ
          </Button>
        </Box>

        <Grid container spacing={4} mt={4}>
          <Grid item xs={12} md={4}>
            <Typography variant="h5" fontWeight={800} gutterBottom>
              MobileSell
            </Typography>
            <Typography variant="body2" sx={{ color: "#cbd5f5", lineHeight: 1.6 }}>
              Mang đến trải nghiệm mua sắm công nghệ mượt mà, giá tốt và dịch vụ
              chăm sóc khách hàng tận tâm.
            </Typography>
            <Stack direction="row" spacing={1.5} mt={2}>
              {[XIcon, YouTubeIcon, InstagramIcon, FacebookIcon].map((Icon, idx) => (
                <Box
                  key={idx}
                  sx={{
                    width: 40,
                    height: 40,
                    borderRadius: "50%",
                    backgroundColor: "rgba(255,255,255,0.08)",
                    display: "grid",
                    placeItems: "center",
                    color: "#fff",
                  }}
                >
                  <Icon />
                </Box>
              ))}
            </Stack>
          </Grid>

          <Grid item xs={12} md={4}>
            <Typography variant="h5" fontWeight={700} gutterBottom>
              Thông tin liên hệ
            </Typography>
            <List dense disablePadding>
              <ListItem disableGutters>
                <ListItemIcon sx={{ color: "#e8edf5", minWidth: 38 }}>
                  <PhoneIcon />
                </ListItemIcon>
                <ListItemText
                  primary="Điện thoại"
                  secondary="090-909-090"
                  primaryTypographyProps={{ color: "#fff" }}
                  secondaryTypographyProps={{ color: "#cbd5f5" }}
                />
              </ListItem>
              <ListItem disableGutters>
                <ListItemIcon sx={{ color: "#e8edf5", minWidth: 38 }}>
                  <EmailOutlinedIcon />
                </ListItemIcon>
                <ListItemText
                  primary="Email"
                  secondary="abc123@gmail.com"
                  primaryTypographyProps={{ color: "#fff" }}
                  secondaryTypographyProps={{ color: "#cbd5f5" }}
                />
              </ListItem>
              <ListItem disableGutters>
                <ListItemIcon sx={{ color: "#e8edf5", minWidth: 38 }}>
                  <LocationOnIcon />
                </ListItemIcon>
                <ListItemText
                  primary="Địa chỉ"
                  secondary="100 abc St"
                  primaryTypographyProps={{ color: "#fff" }}
                  secondaryTypographyProps={{ color: "#cbd5f5" }}
                />
              </ListItem>
            </List>
          </Grid>

          <Grid item xs={12} md={4}>
            <Typography variant="h5" fontWeight={700} gutterBottom>
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
                  px: 2.4,
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

        <Divider sx={{ my: 3, borderColor: "rgba(255,255,255,0.12)" }} />
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
            © 2018 - MobileSell. All rights reserved.
          </Typography>
          <Stack direction="row" spacing={1}>
            {["Chính sách bảo hành", "Chính sách đổi trả", "Hỗ trợ"]
              .map((item) => (
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
    </Box>
  );
};

export default Footer;
