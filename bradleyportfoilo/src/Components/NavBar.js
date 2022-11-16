import React from "react";
import { BrowserRouter, Link } from "react-router-dom";
import { AppBar, Box, Toolbar, Button, Slide } from "@mui/material";
import Typography from "@mui/material/Typography";
import { Container } from "@mui/system";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import useScrollTrigger from "@mui/material/useScrollTrigger";
import AdminLogIn from "./AdminLogIn";

const pages = [
  <Link to="/">Home</Link>,
  <Link to="/Blog">Blog</Link>,
  <AdminLogIn />,
];
const theme = createTheme({
  palette: {
    primary: {
      main: "#000000",
    },
    secondary: {
      main: "#1E2019",
      contrastText: "#ffcc00",
    },
    secondaryLight: {
      main: "#393E41",
      contrastText: "#D3D0CB",
    },
    contrastThreshold: 3,
    tonalOffset: 0.2,
  },
});

function HideOnScroll(props) {
  const { children, window } = props;
  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
  });

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

export default function NavBar() {
  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ flexGrow: 1 }}>
        <React.Fragment>
          <CssBaseline />
          <HideOnScroll>
            <AppBar position="fixed" color="primary">
              <Container maxWidth="xl">
                <Toolbar disableGutters>
                  <Typography
                    variant="h6"
                    noWrap
                    component="a"
                    href="/"
                    sx={{
                      mr: 2,
                      display: { xs: "none", md: "flex" },
                      fontFamily: "monospace",
                      fontWeight: 700,
                      letterSpacing: ".3rem",
                      color: "inherit",
                      textDecoration: "none",
                    }}
                  >
                    The Bradley Project
                  </Typography>
                  <Box
                    sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}
                  >
                    {pages.map((page) => (
                      <Button
                        color="secondary"
                        key={page}
                        sx={{ my: 2, color: "white", display: "block" }}
                      >
                        {page}
                      </Button>
                    ))}
                  </Box>
                </Toolbar>
              </Container>
            </AppBar>
          </HideOnScroll>
        </React.Fragment>
      </Box>
    </ThemeProvider>
  );
}
