import { Box, Typography } from "@mui/material";
import styles from "./styles.module.css";
import Card from "../Card/Card";
import IconSupervisor from "../../assets/icon-supervisor.svg";
import IconCalculator from "../../assets/icon-calculator.svg";
import IconKarma from "../../assets/icon-karma.svg";
import IconTeamBuilder from "../../assets/icon-team-builder.svg";
import classNames from "classnames";

import cards from "../../cards.json";

type Icon =
  | "icon-supervisor"
  | "icon-calculator"
  | "icon-karma"
  | "icon-team-builder";

const icon: { [n in Icon]: any } = {
  "icon-supervisor": IconSupervisor,
  "icon-calculator": IconCalculator,
  "icon-karma": IconKarma,
  "icon-team-builder": IconTeamBuilder,
};

const color: { [n in Icon]: any } = {
  "icon-supervisor": "hsl(180, 62%, 55%)",
  "icon-calculator": "hsl(212, 86%, 64%)",
  "icon-karma": "hsl(34, 97%, 64%)",
  "icon-team-builder": "hsl(0, 78%, 62%)",
};

const FourCardFeature = () => {
  return (
    <Box className={styles["container"]}>
      <Box className={styles["header"]}>
        <Typography className={styles["title"]} variant="h1">
          Reliable, efficient delivery
          <span>Powered by Technology</span>
        </Typography>
        <Typography className={styles["text"]}>
          Our Artificial Intelligence powered tools use millions of project data
          points to ensure that your project is successful
        </Typography>
      </Box>
      <Box className={styles["cards"]}>
        <ConcreteCard title="Supervisor" />
        <Box className={styles["center"]}>
          <ConcreteCard title="Team Builder" />
          <ConcreteCard title="Karma" />
        </Box>
        <ConcreteCard
          className={styles["card-calculator"]}
          title="Calculator"
        />
      </Box>
    </Box>
  );
};

const ConcreteCard = ({
  title,
  className,
}: {
  className?: any;
  title: "Supervisor" | "Team Builder" | "Karma" | "Calculator";
}) => {
  const card = cards.find((x) => x.title === title)!;
  return (
    <Box className={classNames(styles["card-container"], className)}>
      <Card
        className={classNames(styles["card"])}
        {...card}
        icon={icon[card.icon as Icon]}
        topColor={color[card.icon as Icon]}
      />
    </Box>
  );
};

export default FourCardFeature;
