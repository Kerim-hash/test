import React, { useState } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Checkbox from "@mui/material/Checkbox";

import { useStylesHome } from "./theme";

const RightSide: React.FC = () => {
  const classes = useStylesHome();

  const [color, setСolor] = useState<string>("");

  return (
    <div className={`${classes.wrapper} ${classes.right}`}>
      <Box className={classes.innerBlock}>
        <Typography variant="body2">Пример 1</Typography>
        <Typography variant="body2" className={classes.features}>
          Полилинии
        </Typography>
      </Box>
      <Box className={classes.innerBlock}>
        <Typography variant="body2">Наименование</Typography>
        <Typography variant="body2" className={classes.features}>
          line-2
        </Typography>
      </Box>
      <Box className={classes.innerBlock}>
        <Typography variant="body2">Кол-во точек</Typography>
        <Typography variant="body2" className={classes.features}>
          14
        </Typography>
      </Box>
      <Box className={classes.innerBlock}>
        <Typography variant="body2">Длина</Typography>
        <Typography variant="body2" className={classes.features}>
          12.53
        </Typography>
      </Box>
      <Box className={classes.innerBlock}>
        <Typography variant="body2">Проецир-я длина</Typography>
        <Typography variant="body2" className={classes.features}>
          7.29
        </Typography>
      </Box>
      <Box className={classes.innerBlock}>
        <Typography variant="body2">Пощадь</Typography>
        <Typography variant="body2" className={classes.features}>
          10.88
        </Typography>
      </Box>
      <Box className={classes.innerBlock}>
        <Typography variant="body2">Проецирование площадь</Typography>
        <Typography variant="body2" className={classes.features}>
          0.16
        </Typography>
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
        <Typography variant="body2" className={classes.features}>
          4
        </Typography>
      </Box>
      <Box className={classes.innerBlock}>
        <Typography variant="body2">X</Typography>
        <Typography variant="body2" className={classes.features}>
          10477,242
        </Typography>
      </Box>
      <Box className={classes.innerBlock}>
        <Typography variant="body2">Y</Typography>
        <Typography variant="body2" className={classes.features}>
          6457,262
        </Typography>
      </Box>
      <Box className={classes.innerBlock}>
        <Typography variant="body2">Z</Typography>
        <Typography variant="body2" className={classes.features}>
          3534,319
        </Typography>
      </Box>
    </div>
  );
};

export default RightSide;
