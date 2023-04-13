import { makeStyles } from "@mui/styles";

export const useStylesHome = makeStyles(() => ({
  container: {
    position: "relative",
  },
  left: {
    position: "absolute",
    left: "0",
  },
  right: {
    position: "absolute",
    right: "0",
    top: "0",
    width: "372px !important",
    padding: "30px 70px 16px 16px !important",
  },
  wrapper: {
    width: "250px",
    background: "#F5F5F7",
    height: "calc(100vh - 64px)",
    padding: "0 4px",
    borderLeft: "1px solid #DDDDDF",
    borderRight: "1px solid #DDDDDF",
  },
  search: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "#fff",
    margin: "0 -4px 15px -4px",
    padding: "0 4px 0 7px",
  },
  chapterBlock: {
    display: "flex",
    background: "#E9E9EB",
    width: "100%",
    padding: "7px 9px",
    borderRadius: "4px",
    marginBottom: "7px",
  },
  innerBlock: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: "15px",
  },
  features: {
    borderBottom: "1px solid #E9E9EB",
    width: "69px",
    marginRight: "39px",
    display: "block",
  },
  checkbox: {
    marginRight: "46px",
    display: "block",
  },
  colorPicker: {
    border: " 1px solid #DDDDDF",
    width: "13px",
    height: "13px",
    borderRadius: "50%",
  },
  panelHeader: {
    borderRadius: "1px",
    width: "4px",
    height: "4px",
  },
  center: {
    position: "absolute",
    left: "25%",
    zIndex: -1,
    transform: "translateX(-5%)",
  },
  centerImg: {
    maxWidth: "100%",
    height: "80vh",
  },
  outlinedInput: {
    borderRadius: "30px !important",
    fontWeight: "400 !important",
    margin: "6px 0",
    height: 24,
    width: "60% !important",
    position: "relative",
    border: "none",
    fontSize: "12px",
    "&:placeholder": {
      fontSize: "12px",
    },
  },
}));
