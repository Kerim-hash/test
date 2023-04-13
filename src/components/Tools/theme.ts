import { makeStyles } from "@mui/styles";

export const useStylesTools = makeStyles(() => ({

  tools: {
    position: "absolute",
    userSelect: "none",
    background: "#F5F5F7",
    padding: "12px 8px",
    top: '35px',
    right: '-55px',
    cursor: "move",
    zIndex: -1
  },
  toolItem: {
    position: 'relative',
    marginBottom: "2px",
    transition: "all .3s",
    borderRadius: '4px',
    cursor: "pointer",
    padding: "3px 2px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    "&:nth-child(4)":{
      marginBottom: "12px",
    },
    "&:nth-child(7)":{
      marginBottom: "12px",
    },
    "&::after": {
      content: `"" !important`,
      position: 'absolute',
      width: 0,
      height: 0,
      bottom: "3px",
      right: "2px",
      borderStyle: "solid",
      borderWidth: "0 0 4px 4px",
      borderColor: "transparent transparent #171717 transparent",
    },
    "&:hover":{
      background: "#E9E9EB",
       
    },
  },
  toolItemActive: {
    background: "#7AA7FF",
    padding: "4px 3px",
    borderRadius: '8px',
  },
  

}));
