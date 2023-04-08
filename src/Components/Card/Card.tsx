import { Box, Typography } from "@mui/material";
import styles from "./styles.module.css";
import classNames from "classnames";

interface ICardProps {
  title?: string;
  text?: string;
  icon?: any;
  topColor?: any;
  className?: any;
}

const Card = ({ title, text, icon, topColor, className }: ICardProps) => {
  return (
    <Box className={classNames(styles["container"], className)}>
      <div className={styles["top-border"]} style={{ background: topColor }} />
      <Typography className={styles["title"]} variant="h1">
        {title}
      </Typography>
      <Typography className={styles["text"]}>{text}</Typography>
      <img className={styles["icon"]} src={icon} />
    </Box>
  );
};

export default Card;
