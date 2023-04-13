import React, { useState } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Checkbox from "@mui/material/Checkbox";

import { useStylesHome } from "./theme";
import { TextField } from "@mui/material";

const RightSide: React.FC = () => {
  const classes = useStylesHome();

  const [color, setСolor] = useState<string>("");

  return (
    <div className={`${classes.wrapper} ${classes.right}`}>
      <Box className={classes.innerBlock}>
        <Typography variant="body2">Пример 1</Typography>
 
        <TextField   className={classes.featuresInput} defaultValue="Полилинии" variant="standard"></TextField>
      </Box>
      <Box className={classes.innerBlock}>
        <Typography variant="body2">Наименование</Typography>
        <TextField   className={classes.featuresInput} defaultValue="line-2" variant="standard"></TextField>
      </Box>
      <Box className={classes.innerBlock}>
        <Typography variant="body2">Кол-во точек</Typography>
        <TextField   className={classes.featuresInput} defaultValue="14" variant="standard"></TextField>
      </Box>
      <Box className={classes.innerBlock}>
        <Typography variant="body2">Длина</Typography>
        <TextField   className={classes.featuresInput} defaultValue="12.53" variant="standard"></TextField>
      </Box>
      <Box className={classes.innerBlock}>
        <Typography variant="body2">Проецир-я длина</Typography>
          <TextField   className={classes.featuresInput} defaultValue="7.29" variant="standard"></TextField>
      </Box>
      <Box className={classes.innerBlock}>
        <Typography variant="body2">Пощадь</Typography>
        <TextField   className={classes.featuresInput} defaultValue="10.88" variant="standard"></TextField>
      </Box>
      <Box className={classes.innerBlock}>
        <Typography variant="body2">Проецирование площадь</Typography>
        <TextField   className={classes.featuresInput} defaultValue=" 0.16" variant="standard"></TextField>
      </Box>
      <Box className={classes.innerBlock}>
        <Typography variant="body2">Узор</Typography>
        <Typography variant="body2" className={classes.features}>
          <input type="file" name="file" id="file" className="inputfile" />
          <label htmlFor="file">Выбрать</label>
        </Typography>
      </Box>
      <Box className={classes.innerBlock}>
        <Typography variant="body2">Цвет</Typography>
        <Typography variant="body2" className={classes.features}>
          <Box display="flex" alignItems="center">
            <input
              className="colorPicker"
              id="style1"
              type="color"
              onChange={(e) => setСolor(e.target.value)}
            />
            <label htmlFor="style1"></label>
            {color}
          </Box>
        </Typography>
      </Box>
      <Box className={classes.innerBlock}>
        <Typography variant="body2">Метки точек</Typography>
        <Box className={classes.checkbox}>
          <Checkbox />
        </Box>
      </Box>
      <Box className={classes.innerBlock}>
        <Typography variant="body2">Метки полилиний</Typography>
        <Box className={classes.checkbox}>
          <Checkbox />
        </Box>
      </Box>
      <Box className={classes.innerBlock}>
        <Typography variant="body2">Показать точки</Typography>
        <Box className={classes.checkbox}>
          <Checkbox />
        </Box>
      </Box>
      <Box className={classes.innerBlock}>
        <Typography variant="body2">Показать точку опоры</Typography>
        <Box className={classes.checkbox}>
          <Checkbox />
        </Box>
      </Box>
      <Box className={classes.innerBlock}>
        <Typography variant="body2">Обратить порядок точек</Typography>
        <Box className={classes.checkbox}>
          <Checkbox />
        </Box>
      </Box>
      <Box className={classes.innerBlock}>
        <Typography variant="body2">Метка точки</Typography>
        <TextField   className={classes.featuresInput} defaultValue="4" variant="standard"></TextField>
      </Box>
      <Box className={classes.innerBlock}>
        <Typography variant="body2">X</Typography>
        <TextField   className={classes.featuresInput} defaultValue="10477,242" variant="standard"></TextField>
      </Box>
      <Box className={classes.innerBlock}>
        <Typography variant="body2">Y</Typography>
        <TextField   className={classes.featuresInput} defaultValue="6457,262" variant="standard"></TextField>
      </Box>
      <Box className={classes.innerBlock}>
        <Typography variant="body2">Z</Typography>
        <TextField   className={classes.featuresInput} defaultValue="3534,319" variant="standard"></TextField>

      </Box>
    </div>
  );
};

export default RightSide;
