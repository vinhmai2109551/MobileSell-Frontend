import React from "react";
import {
  Avatar,
  Box,
  Button,
  Chip,
  Divider,
  Paper,
  Stack,
  Typography,
} from "@mui/material";
import HeadsetMicIcon from "@mui/icons-material/HeadsetMic";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";

const ZALO_LINK = "https://zalo.me/4204593961068390595";
const qrUrl = `https://chart.googleapis.com/chart?chs=320x320&cht=qr&chl=${encodeURIComponent(
  ZALO_LINK
)}`;

const ZaloContact = () => {
  const openZalo = () => {
    window.open(ZALO_LINK, "_blank", "noopener,noreferrer");
  };

  return (
    <Box
      sx={{
        minHeight: "100vh",
        background: "linear-gradient(180deg, #f7f8fb 0%, #eef1f7 100%)",
        py: { xs: 4, md: 6 },
        px: 2,
      }}
    >
      <Box maxWidth="1100px" mx="auto">
        <Paper
          sx={{
            p: { xs: 3, md: 4 },
            borderRadius: 4,
            boxShadow: "0 30px 80px rgba(15, 23, 42, 0.16)",
            background: "linear-gradient(135deg, #ffffff 0%, #f5f7fb 100%)",
          }}
        >
          <Stack direction={{ xs: "column", md: "row" }} spacing={4} alignItems="center">
            <Stack spacing={2} flex={1} minWidth={0}>
              <Stack direction="row" spacing={2} alignItems="center">
                <Avatar
                  alt="Zalo OA"
                  sx={{ width: 72, height: 72, bgcolor: "#d3001a", fontWeight: 800, fontSize: 26 }}
                >
                  Z
                </Avatar>
                <Box>
                  <Stack direction="row" spacing={1} alignItems="center">
                    <Typography variant="h5" fontWeight={800}>
                      CellphoneS Zalo OA
                    </Typography>
                    <Chip label="Official" size="small" color="success" variant="filled" />
                  </Stack>
                  <Typography variant="body2" sx={{ color: "#475467", mt: 0.5 }}>
                    Công nghệ & Thiết bị
                  </Typography>
                </Box>
              </Stack>

              <Typography variant="body1" sx={{ color: "#1d2939", lineHeight: 1.6 }}>
                Nhắn Zalo để được tư vấn nhanh, nhận ưu đãi độc quyền và hỗ trợ 24/7. Quét mã hoặc
                nhấn nút bên dưới để mở trực tiếp.
              </Typography>

              <Stack direction={{ xs: "column", sm: "row" }} spacing={2} alignItems={{ xs: "stretch", sm: "center" }}>
                <Button
                  variant="contained"
                  startIcon={<HeadsetMicIcon />}
                  onClick={openZalo}
                  sx={{
                    textTransform: "none",
                    fontWeight: 800,
                    px: 3,
                    py: 1.2,
                    borderRadius: 2,
                    background: "linear-gradient(135deg, #d3001a 0%, #b10016 100%)",
                    boxShadow: "0 16px 32px rgba(211,0,26,0.35)",
                  }}
                >
                  Nhắn Zalo
                </Button>
                <Button
                  variant="outlined"
                  endIcon={<OpenInNewIcon />}
                  onClick={openZalo}
                  sx={{
                    textTransform: "none",
                    fontWeight: 700,
                    px: 3,
                    py: 1.2,
                    borderRadius: 2,
                    borderColor: "#d3001a",
                    color: "#b10016",
                    "&:hover": {
                      borderColor: "#b10016",
                      backgroundColor: "rgba(211,0,26,0.06)",
                    },
                  }}
                >
                  Mở trong tab mới
                </Button>
              </Stack>

              <Divider sx={{ my: 1.5 }} />

              <Stack spacing={1}>
                <Typography variant="subtitle1" fontWeight={700}>
                  Cách quét mã
                </Typography>
                <Typography variant="body2" sx={{ color: "#475467", lineHeight: 1.6 }}>
                  - Mở ứng dụng Zalo, chọn tab <strong>Khám phá</strong> / <strong>QR</strong> và quét mã bên phải.
                </Typography>
                <Typography variant="body2" sx={{ color: "#475467", lineHeight: 1.6 }}>
                  - Hoặc nhấn nút "Nhắn Zalo" để mở trực tiếp OA trong trình duyệt.
                </Typography>
              </Stack>
            </Stack>

            <Box
              sx={{
                flexShrink: 0,
                display: "grid",
                placeItems: "center",
                p: 2,
                borderRadius: 3,
                background: "linear-gradient(180deg, #f9fafb 0%, #eef2f7 100%)",
                boxShadow: "inset 0 1px 0 rgba(255,255,255,0.8)",
              }}
            >
              <Box
                component="img"
                src={qrUrl}
                alt="Quét mã Zalo"
                sx={{ width: { xs: 240, sm: 280, md: 320 }, height: "auto", borderRadius: 2 }}
              />
              <Typography
                variant="caption"
                sx={{ color: "#475467", mt: 1.5, textAlign: "center", maxWidth: 320 }}
              >
                Quét mã để mở CellphoneS Zalo OA và chat ngay.
              </Typography>
            </Box>
          </Stack>
        </Paper>
      </Box>
    </Box>
  );
};

export default ZaloContact;
