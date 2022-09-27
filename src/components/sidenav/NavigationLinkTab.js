import styled from "@emotion/styled";
import {
  Box,
  Collapse,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  MenuItem,
  Typography,
} from "@mui/material";
import React from "react";
import { HiChevronDown, HiChevronRight } from "react-icons/hi";

import Link from "next/link";
import { BsDot } from "react-icons/bs";
import { useRouter } from "next/router";

function NavigationLinkTab({
  icon,
  label,
  link = "/app",
  subList = [],
  ...props
}) {
  const location = useRouter();
  const active = location.pathname.includes(link);

  const [open, setOpen] = React.useState(active ? true : false);

  const handleClick = () => {
    setOpen(!open);
  };

  const listItem = (
    <>
      <ListItemButton
        onClick={subList.length > 0 ? handleClick : undefined}
        {...props}
        sx={{
          borderRadius: "8px",
          color: active ? "primary.main" : "grey.600",
          backgroundColor: active ? "primary.lighter" : "transparent",
          my: 1,
          "&:hover": {
            backgroundColor: "grey.200",
          },
        }}
      >
        <ListItemIcon
          sx={{
            fontSize: "1rem",
            color: active ? "primary.main" : "grey.600",
          }}
        >
          {icon}
        </ListItemIcon>
        <ListItemText primary={label} />
        {subList.length > 0 && (open ? <HiChevronDown /> : <HiChevronRight />)}
      </ListItemButton>
      {subList.length > 0 && (
        <Collapse in={open} timeout="auto" unmountOnExit>
          <List disablePadding>
            {subList.map((item) => (
              <Link key={item.label} href={item.link}>
                <ListItemButton
                  key={item.label}
                  {...props}
                  sx={{
                    borderRadius: "8px",
                    color: "grey.600",
                    my: 1,
                    "&:hover": {
                      backgroundColor: "grey.200",
                    },
                  }}
                >
                  <ListItemIcon
                    sx={{
                      fontSize: active ? "2rem" : "1.5rem",
                      color: active ? "primary.main" : "grey.600",
                    }}
                  >
                    <BsDot />
                  </ListItemIcon>
                  <ListItemText primary={item.label} />
                </ListItemButton>
              </Link>
            ))}
          </List>
        </Collapse>
      )}
    </>
  );

  return subList.length > 0 ? (
    <>{listItem}</>
  ) : (
    <Link href={link}>{listItem}</Link>
  );
}

export default NavigationLinkTab;
