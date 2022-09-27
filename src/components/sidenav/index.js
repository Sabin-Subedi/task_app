import { Avatar, Box, Paper, Typography } from "@mui/material";
import React from "react";
// import Logo from "../../assets/Logo";
import { HiChevronDoubleLeft } from "react-icons/hi";
import NavigationLinkTab from "./NavigationLinkTab";
import { MdSpeed } from "react-icons/md";
import { BsCalendarDateFill, BsPatchQuestionFill } from "react-icons/bs";
import { IoAnalyticsOutline } from "react-icons/io5";
import { FaUser } from "react-icons/fa";
import { SiContentful } from "react-icons/si";

const menus = [
  {
    title: "General",
    menuItems: [
      {
        label: "Dashboard",
        icon: <MdSpeed />,
        link: "/app",
      },
      {
        label: "Analytics",
        icon: <IoAnalyticsOutline />,
        link: "/analytics",
      },
      {
        label: "Booking",
        icon: <BsCalendarDateFill />,
        link: "booking",
      },
    ],
  },
  {
    title: "Managements",
    menuItems: [
      {
        label: "User",
        icon: <FaUser />,
        link: "/user",
        subMenuItems: [
          {
            label: "Lists",
            link: "/user/lists",
          },
        ],
      },
      {
        label: "Content",
        icon: <SiContentful />,
      },
    ],
  },
];

function SideNavbar() {
  return (
    <Paper
      sx={{
        py: 3,
        px: 2,
        maxHeight: "100vh",
        overflow: "scroll",
        height: "100%",
        borderRight: "1px dashed ",
        borderColor: "grey.300",
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          color: "grey.600",
        }}
      >
        <Box sx={{ maxWidth: "20%" }}>{/* <Logo /> */}</Box>
        <HiChevronDoubleLeft />
      </Box>
      <Box>
        <Box
          sx={{
            backgroundColor: "grey.200",
            display: "flex",
            p: 2,
            alignItems: "center",
            borderRadius: "10px",
            mt: 1,
          }}
        >
          <Box sx={{ marginRight: "0.5rem" }}>
            <Avatar size="lg" />
          </Box>
          <Box>
            <Typography variant="h6">Sabin Subedi</Typography>
            <Typography variant="body2" sx={{ color: "grey.500" }}>
              admin
            </Typography>
          </Box>
        </Box>
      </Box>

      {menus.map((nav) => (
        <Box key={nav.title} mt={3}>
          <Typography
            mb={2}
            variant="subtitle1"
            sx={{ textTransform: "uppercase" }}
          >
            {nav.title}
          </Typography>

          {nav.menuItems.map((menu) => (
            <NavigationLinkTab
              key={menu.label}
              label={menu.label}
              icon={menu.icon}
              link={menu.link}
              subList={menu?.subMenuItems}
            />
          ))}
        </Box>
      ))}
    </Paper>
  );
}

export default SideNavbar;
