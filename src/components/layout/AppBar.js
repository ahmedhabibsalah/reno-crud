import React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import NotificationsIcon from "@mui/icons-material/Notifications";
import ThirtyFpsIcon from "@mui/icons-material/ThirtyFps";
import { Avatar, Drawer } from "@mui/material";
import { deepPurple } from "@mui/material/colors";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { Menu } from "react-admin";
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";
import { IconButton, Accordion, AccordionSummary } from "@mui/material";
import DashboardIcon from "@mui/icons-material/Dashboard";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MenuIcon from "@mui/icons-material/Menu";
import MuiAppBar from "@mui/material/AppBar";

const data = [
  { main: "ATM Settings", path: [{ name: "None", path: "/" }] },
  { main: "Business Setup", path: [{ name: "None", path: "/" }] },
  {
    main: "User Managements",
    path: [
      { name: "Users", path: "/users" },
      { name: "Profiles", path: "/profiles" },
      { name: "groups", path: "/groups" },
    ],
  },
  { main: "User License" },
];

const drawerWidth = 260;

const Main = styled("main", { shouldForwardProp: (prop) => prop !== "open" })(
  ({ theme, open }) => ({
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: `-${drawerWidth}px`,
    ...(open && {
      transition: theme.transitions.create("margin", {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginLeft: 0,
    }),
  })
);

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  transition: theme.transitions.create(["margin", "width"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: `${drawerWidth}px`,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: "flex-end",
}));

export default function MyAppBar({ children }) {
  const [open, setOpen] = React.useState(true);
  const [filteredList, setFilteredList] = React.useState(data);

  const [searchQuery, setSearchQuery] = React.useState("");
  const handleSearch = (event) => {
    const query = event.target.value;
    setSearchQuery(query);

    const searchList = data.filter((item) => {
      return item.main.toLowerCase().indexOf(query.toLowerCase()) !== -1;
    });

    setFilteredList(searchList);
  };
  const handleDrawerOpen = () => {
    setOpen(!open);
  };

  return (
    <Box sx={{ display: "flex" }}>
      <AppBar
        sx={{
          background: "#fff",
          color: "#000",
          height: "60px",
          display: "flex",
          alignItems: "center",
        }}
        open={open}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            width: "100%",
          }}
        >
          <Toolbar sx={{ display: "flex", alignItems: "center", gap: "8px" }}>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              onClick={handleDrawerOpen}
              edge="start"
            >
              <MenuIcon />
            </IconButton>
            <Typography
              variant="p"
              sx={{ fontSize: "16px", fontWeight: "700" }}
            >
              Good Morning
            </Typography>
            <Typography
              variant="p"
              sx={{ fontSize: "12px", fontWeight: "400", color: "#949494" }}
            >
              {new Date().toLocaleDateString()}{" "}
              {new Date().toLocaleTimeString()}
            </Typography>
          </Toolbar>
          <Toolbar sx={{ display: "flex", alignItems: "center", gap: "8px" }}>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "6px",
                paddingRight: "10px",
                borderRight: "solid 0.8px #949494",
              }}
            >
              <HelpOutlineIcon
                color="#545454"
                sx={{
                  color: "#545454",
                }}
              />
              <Box sx={{ position: "relative" }}>
                <NotificationsIcon
                  sx={{
                    zIndex: "1",
                    marginTop: "4px",
                    color: "#545454",
                  }}
                />
                <ThirtyFpsIcon
                  sx={{
                    position: "absolute",
                    top: "4px",
                    color: "#fff",
                    fontSize: "12px",
                    left: "10px",
                    zIndex: "2",
                    background: "red",
                  }}
                />
              </Box>
            </Box>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: "6px",
              }}
            >
              <Typography
                variant="p"
                sx={{ fontSize: "17px", fontWeight: "700" }}
              >
                Ahmed Habib
              </Typography>
              <Box sx={{ display: "flex", alignItems: "center" }}>
                <Avatar
                  sx={{
                    bgcolor: deepPurple[500],
                    width: 24,
                    height: 24,
                    fontSize: "12px",
                  }}
                >
                  AH
                </Avatar>
                <KeyboardArrowDownIcon
                  sx={{ cursor: "pointer", fontSize: "20px", color: "#545454" }}
                />
              </Box>
            </Box>
          </Toolbar>
        </Box>
      </AppBar>

      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
            background: "#080c2c",
          },
        }}
        variant="persistent"
        anchor="left"
        open={open}
      >
        <Menu
          sx={{
            background: "#080c2c",
            height: "100%",

            display: "flex",
            flexDirection: "column",
            textAlign: "left",
            color: "#808080",
          }}
        >
          <Box sx={{ alignSelf: "center" }}>
            <img src="./logo.png" alt="logo" width="100px" height="100px" />
          </Box>

          <Paper
            component="form"
            sx={{
              p: "2px 4px",
              display: "flex",
              alignItems: "center",
              width: "220px !important",
              background: "#fff !important",
              alignSelf: "center",
              borderRadius: "20px",
            }}
          >
            <InputBase
              sx={{ ml: 1, flex: 1, background: "#fff" }}
              placeholder="Quick Search"
              inputProps={{ "aria-label": "quick search" }}
              value={searchQuery}
              onChange={handleSearch}
            />
            <IconButton type="submit" sx={{ p: "10px" }} aria-label="search">
              <SearchIcon />
            </IconButton>
          </Paper>

          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              padding: "10px",
              gap: "8px",
              cursor: "pointer",
              marginTop: "10px",
            }}
          >
            <DashboardIcon />
            <Typography fontWeight="600">Dashboard</Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              padding: "10px",
              gap: "8px",
              cursor: "pointer",
              marginTop: "10px",
              flexDirection: "column !important",
              color: "",
            }}
          >
            <Typography variant="p" fontWeight="400" fontSize={14}>
              SETTINGS
            </Typography>

            {filteredList.map((item, index) => (
              <Accordion
                sx={{
                  padding: "none !important",
                  color: "#808080 !important",
                  boxShadow: "none !important",
                  background: "transparent !important",
                }}
                key={index}
              >
                <AccordionSummary
                  expandIcon={
                    <ExpandMoreIcon
                      sx={{
                        color: `${
                          item.path
                            ? "#808080 !important"
                            : "transparent !important"
                        }`,
                      }}
                    />
                  }
                >
                  <Typography
                    sx={{
                      color: "#808080 !important",
                      fontWeight: "700 !important",
                      fontSize: "16px !important",
                    }}
                  >
                    {item.main}
                  </Typography>
                </AccordionSummary>

                {item.path?.map((route, index) => (
                  <Menu.Item
                    to={route.path}
                    primaryText={route.name}
                    key={index}
                    sx={{
                      color: "#808080 !important",
                      "&.active": {
                        background: "#588bae",
                      },
                    }}
                  />
                ))}
              </Accordion>
            ))}
          </Box>
        </Menu>
      </Drawer>
      <Main open={open}>
        <DrawerHeader />
        {children}
      </Main>
    </Box>
  );
}
