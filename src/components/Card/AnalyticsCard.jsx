import React from "react";
import styled from "@emotion/styled";
import { Paper } from "@mui/material";

// import { Doughnut } from "react-chartjs-2";
const CustomCard = styled(Paper)(({ theme }) => ({
  display: "flex",
  padding: theme.spacing(1, 1),
  // necessary for content to be below app bar

  justifyContent: "flex-end",
}));

export default function AnalyticsCard({ data }) {
  return <CustomCard></CustomCard>;
}
