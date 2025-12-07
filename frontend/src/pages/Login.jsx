import React, { useState, useEffect } from "react";
import {
  Box,
  Button,
  Typography,
  IconButton,
  InputAdornment,
  Snackbar,
  Alert,
  TextField,
  Paper,
  Stack,
  Divider,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import PhoneAndroidIcon from "@mui/icons-material/PhoneAndroid";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import { login } from "../services/ProductService";
import GoogleIcon from "@mui/icons-material/Google";
import ChatOutlinedIcon from "@mui/icons-material/ChatOutlined";

const Login = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState("");
  const [snackbarType, setSnackbarType] = useState("success");
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Khi component được render lần đầu, kiểm tra trạng thái đăng nhập từ localStorage
  useEffect(() => {
    const storedUser = localStorage.getItem("loggedInUser");
    if (storedUser) {
      setIsLoggedIn(true);
      setUserName(storedUser); // Lấy tên người dùng từ localStorage
    }
  }, []);

  const handleSignUp = () => {
    navigate("/SignUp");
  };

  const handleLogin = () => {
    login(userName, password)
      .then(() => {
        setSnackbarType("success");
        setSnackbarMessage("Đăng nhập thành công");
        setOpenSnackbar(true);
        setIsLoggedIn(true);

        // Lưu trạng thái vào localStorage
        localStorage.setItem("loggedInUser", userName);
      })
      .catch(() => {
        setSnackbarType("error");
        setSnackbarMessage(
          "Đăng nhập thất bại, số điện thoại hoặc mật khẩu không hợp lệ."
        );
        setOpenSnackbar(true);
      });
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setUserName("");
    setPassword("");

    // Xóa trạng thái khỏi localStorage
    localStorage.removeItem("loggedInUser");
  };

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  if (isLoggedIn) {
    // Giao diện hồ sơ sau khi đăng nhập thành công
    return (
      <Box
        sx={{
          textAlign: "center",
          marginTop: 5,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          width: "100%",
        }}
      >
        <img
          src="https://via.placeholder.com/150"
          alt="Profile"
          style={{
            borderRadius: "50%",
            width: "150px",
            height: "150px",
            marginBottom: "20px",
          }}
        />
        <Typography variant="h4" sx={{ fontWeight: "bold", mb: 3 }}>
          Hồ sơ của bạn
        </Typography>
        <Box
          sx={{
            padding: 2,
            backgroundColor: "#F0F8FF",
            borderRadius: "10px",
            boxShadow: 3,
            width: "60%",
            textAlign: "left",
          }}
        >
          <Typography variant="h6" sx={{ mb: 1 }}>
            Tên người dùng: {userName}
          </Typography>
          <Typography variant="h6" sx={{ mb: 2 }}>
            {`Email: ${userName}@example.com`}
          </Typography>
          <Button
            sx={{
              borderRadius: 15,
              backgroundColor: "#33CCFF",
              color: "white",
              fontWeight: "bold",
              width: "100%",
            }}
            onClick={handleLogout}
          >
            Đăng xuất
          </Button>
        </Box>
      </Box>
    );
  }

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
          width: { xs: "100%", sm: 520 },
          p: { xs: 3, sm: 4 },
          borderRadius: 4,
          background: "#fff",
          boxShadow: "0 25px 70px rgba(15, 23, 42, 0.12)",
          border: "1px solid rgba(15,23,42,0.04)",
        }}
      >
        <Stack spacing={3} alignItems="center">
          <Box sx={{ textAlign: "center" }}>
            <Typography variant="h4" fontWeight={900} sx={{ color: "#c3001a", letterSpacing: 0.2 }}>
              Đăng nhập SMEMBER
            </Typography>
          </Box>

          <Stack spacing={2} width="100%">
            <TextField
              fullWidth
              variant="outlined"
              label="Số điện thoại"
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <PhoneAndroidIcon fontSize="small" />
                  </InputAdornment>
                ),
              }}
            />

            <TextField
              fullWidth
              variant="outlined"
              label="Mật khẩu"
              type={showPassword ? "text" : "password"}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <LockOutlinedIcon fontSize="small" />
                  </InputAdornment>
                ),
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton onClick={handleClickShowPassword} edge="end">
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
          </Stack>

          <Stack direction="row" spacing={1} alignItems="center" sx={{ width: "100%", justifyContent: "center" }}>
            <Typography sx={{ fontSize: 14, color: "#475467" }}>
              Chưa có tài khoản?
            </Typography>
            <Button
              onClick={handleSignUp}
              sx={{
                textTransform: "none",
                color: "#d3001a",
                fontWeight: 800,
                fontSize: 14,
                px: 0,
                minWidth: 0,
              }}
            >
              Đăng ký ngay
            </Button>
          </Stack>

          <Button
            fullWidth
            sx={{
              mt: 1,
              borderRadius: 2,
              background: "linear-gradient(135deg, #e6001f 0%, #c4001b 100%)",
              color: "#fff",
              fontWeight: 800,
              py: 1.2,
              boxShadow: "0 16px 32px rgba(196,0,27,0.25)",
              textTransform: "none",
              fontSize: 15,
              "&:hover": {
                background: "linear-gradient(135deg, #d2001c 0%, #ad0017 100%)",
              },
            }}
            onClick={handleLogin}
          >
            Đăng nhập
          </Button>

          <Button
            variant="text"
            sx={{
              textTransform: "none",
              color: "#2563eb",
              fontWeight: 700,
              fontSize: 14,
            }}
            onClick={() => navigate("/forgot-password")}
          >
            Quên mật khẩu?
          </Button>

          <Stack direction="row" alignItems="center" spacing={1} sx={{ width: "100%" }}>
            <Divider sx={{ flex: 1 }} />
            <Typography variant="body2" sx={{ color: "#475467", fontWeight: 600 }}>
              Hoặc đăng nhập bằng
            </Typography>
            <Divider sx={{ flex: 1 }} />
          </Stack>

          <Stack direction={{ xs: "column", sm: "row" }} spacing={2} sx={{ width: "100%" }}>
            <Button
              fullWidth
              variant="outlined"
              sx={{
                borderColor: "rgba(15,23,42,0.1)",
                textTransform: "none",
                fontWeight: 700,
                color: "#0f172a",
                height: 54,
                backgroundColor: "#fff",
              }}
            >
              <GoogleIcon sx={{ mr: 1 }} /> Google
            </Button>
            <Button
              fullWidth
              variant="outlined"
              sx={{
                borderColor: "rgba(15,23,42,0.1)",
                textTransform: "none",
                fontWeight: 700,
                color: "#0f172a",
                height: 54,
                backgroundColor: "#fff",
              }}
            >
              <ChatOutlinedIcon sx={{ mr: 1 }} /> Zalo
            </Button>
          </Stack>
        </Stack>
      </Paper>

      <Snackbar
        open={openSnackbar}
        autoHideDuration={3000}
        onClose={() => setOpenSnackbar(false)}
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
      >
        <Alert
          onClose={() => setOpenSnackbar(false)}
          severity={snackbarType}
          sx={{ width: "100%" }}
        >
          {snackbarMessage}
        </Alert>
      </Snackbar>
    </Box>
  );
};

export default Login;
