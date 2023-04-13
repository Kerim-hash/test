import React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import InputAdornment from "@mui/material/InputAdornment";
import OutlinedInput from "@mui/material/OutlinedInput";
import IconButton from "@mui/material/IconButton";

import ServerIcon from "../../assets/images/server-icon.svg";
import LinkIcon from "../../assets/images/link.svg";
import EyeIcon from "../../assets/images/eye.svg";
import BlockIcon from "../../assets/images/block.svg";
import EllipseIcon from "../../assets/images/ellipse.png";
import Ellipse1Icon from "../../assets/images/ellipse1.png";
import Ellipse2Icon from "../../assets/images/ellipse2.png";
import SearchIcon from "../../assets/images/search-icon--small.svg";
import SettingsIcon from "../../assets/images/settings.svg";
import { useStylesHome } from "./theme";
import Tools from "../../components/Tools/tools";

const LeftSide: React.FC = () => {
  const classes = useStylesHome();

  const data = [
    {
      active: true,
      color: "#3660F4",
    },
    {
      active: true,
      color: "#2BBB6A",
    },
    {
      active: true,
      icon: EllipseIcon,
    },
    {
      active: false,
      color: "#9C27B0",
    },
    {
      active: false,
      icon: Ellipse1Icon,
    },
    {
      active: false,
      icon: Ellipse2Icon,
    },
  ];

  return (
    <Box className={`${classes.wrapper} ${classes.left}`}>
      <Box className={classes.search}>
        <OutlinedInput
          fullWidth
          className={classes.outlinedInput}
          placeholder="Поиск"
          startAdornment={
            <InputAdornment position="start">
              <img src={SearchIcon} alt="" />
            </InputAdornment>
          }
        />
        <IconButton>
          <img src={SettingsIcon} alt="settings-icon" />
        </IconButton>
      </Box>
      <Box className={classes.chapterBlock}>
        <img src={ServerIcon} alt="server-icon" />
        <Typography variant="subtitle1" sx={{ ml: "6px" }} color="text.primary">
          Базы данных
        </Typography>
      </Box>

      <Accordion elevation={0}>
        <AccordionSummary
          expandIcon={
            <svg
              width="6"
              height="11"
              viewBox="0 0 6 11"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1.12565 1.74738L4.87565 5.49738L1.12565 9.24738"
                stroke="#898989"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          }
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography variant="subtitle1">Интервальные данные</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion elevation={0}>
        <AccordionSummary
          expandIcon={
            <svg
              width="6"
              height="11"
              viewBox="0 0 6 11"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1.12565 1.74738L4.87565 5.49738L1.12565 9.24738"
                stroke="#898989"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          }
          aria-controls="panel3a-content"
          id="panel3a-header"
        >
          <Typography variant="subtitle1">Событийные данные</Typography>
        </AccordionSummary>
        <AccordionDetails>
          {data.map((item) => {
            return (
              <Accordion elevation={0}>
                <AccordionSummary
                  expandIcon={
                    <svg
                      width="6"
                      height="11"
                      viewBox="0 0 6 11"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M1.12565 1.74738L4.87565 5.49738L1.12565 9.24738"
                        stroke="#898989"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  }
                  aria-controls="panel2a-content"
                  id="panel2a-header"
                  sx={{ flexDirection: "row-reverse" }}
                >
                  <Box
                    display="flex"
                    justifyContent="space-between"
                    alignItems="center"
                    sx={{ width: "100%" }}
                  >
                    <Typography
                      sx={{ ml: item.active ? "10px" : "30px" }}
                      color="text.primary"
                    >
                      Пример
                    </Typography>
                    <Box
                      display="flex"
                      justifyContent="space-between"
                      alignItems="center"
                      sx={{ columnGap: "4px" }}
                    >
                      <Box
                        className={classes.colorPicker}
                        sx={{
                          backgroundColor: item?.color,
                          backgroundImage: `url(${item.icon})`,
                          backgroundPosition: "center",
                        }}
                      ></Box>
                      <img src={EyeIcon} alt="eye-icon" />
                      <img src={LinkIcon} alt="eye-icon" />
                      <img src={BlockIcon} alt="block-icon" />
                      <Box
                        className={classes.panelHeader}
                        sx={{ background: item.active ? "#FB8C00" : "" }}
                      ></Box>
                    </Box>
                  </Box>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Suspendisse malesuada lacus ex, sit amet blandit leo
                    lobortis eget.
                  </Typography>
                </AccordionDetails>
              </Accordion>
            );
          })}
        </AccordionDetails>
      </Accordion>

      <Tools />
    </Box>
  );
};

export default LeftSide;
