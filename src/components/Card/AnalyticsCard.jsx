import styled from "@emotion/styled";
import { Paper } from "@mui/material";

// import { Doughnut } from "react-chartjs-2";
const AnalyticsCard = styled(Paper)(({ theme }) => ({
  display: "flex",
  padding: theme.spacing(2, 2),
  // necessary for content to be below app bar

  justifyContent: "flex-end",
}));

export default AnalyticsCard;
