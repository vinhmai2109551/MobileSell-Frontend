import React, { useState } from "react";
import {
  Box,
  Paper,
  Stack,
  Typography,
  TextField,
  Button,
  Alert,
} from "@mui/material";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = () => {
    // Placeholder submit handler
    setSubmitted(true);
  };

  return (
    <Box
      sx={{
        minHeight: "calc(100vh - 80px)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        px: 2,
        py: 4,
        background: "linear-gradient(180deg, #fafafa 0%, #f5f5f7 100%)",
      }}
    >
      <Paper
        elevation={8}
        sx={{
          width: { xs: "100%", sm: 500 },
          p: { xs: 3, sm: 4 },
          borderRadius: 4,
          background: "#fff",
          boxShadow: "0 25px 70px rgba(15, 23, 42, 0.12)",
          border: "1px solid rgba(15,23,42,0.04)",
        }}
      >
        <Stack spacing={3}>
          <Box sx={{ textAlign: "center" }}>
            <Typography variant="h4" fontWeight={900} sx={{ color: "#c3001a" }}>
              Quên mật khẩu
            </Typography>
            <Typography variant="body2" sx={{ mt: 1, color: "#475467" }}>
              Nhập email để nhận hướng dẫn đặt lại mật khẩu.
            </Typography>
          </Box>

          <TextField
            fullWidth
            label="Email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            InputProps={{
              startAdornment: <EmailOutlinedIcon sx={{ mr: 1, color: "#94a3b8" }} />,
            }}
          />

          <Button
            fullWidth
            sx={{
              borderRadius: 2,
              background: "linear-gradient(135deg, #e6001f 0%, #c4001b 100%)",
              color: "#fff",
              fontWeight: 800,
              py: 1.1,
              textTransform: "none",
              fontSize: 15,
              "&:hover": {
                background: "linear-gradient(135deg, #d2001c 0%, #ad0017 100%)",
              },
            }}
            onClick={handleSubmit}
          >
            Gửi hướng dẫn
          </Button>

          {submitted && (
            <Alert severity="success" sx={{ borderRadius: 2 }}>
              Nếu email hợp lệ, chúng tôi đã gửi hướng dẫn đặt lại mật khẩu.
            </Alert>
          )}
        </Stack>
      </Paper>
    </Box>
  );
};

export default ForgotPassword;
