import { Box, Card, CardContent, Typography } from "@mui/material";
import React from "react";
import { DoughnutChart } from "../components/Charts/DoughnutChart";
import { LineChart } from "../components/Charts/LineChart";
import PieChart from "../components/Charts/PieChart";
function Dashboard() {
  return (
    <Box
      sx={{
        display: "flex",
        gap: 3,
        flexWrap: "wrap",
        width: "100%",
      }}
    >
      <Card>
        <CardContent sx={{ width: "100%", flexGrow: 1 }}>
          <Typography gutterBottom variant="p" component="div">
            Technologies liked
          </Typography>
          <PieChart />
        </CardContent>
      </Card>
      <Card>
        <CardContent>
          <Typography gutterBottom variant="p" component="div">
            Technologies used
          </Typography>
          <DoughnutChart />
        </CardContent>
      </Card>
      <Card>
        <CardContent sx={{ minWidth: 500 }}>
          <Typography gutterBottom variant="p" component="div">
            Internet useres
          </Typography>
          <LineChart />
        </CardContent>
      </Card>
      {/* <Paper elevation={3}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores fuga
        repellendus, earum consequatur, eveniet odit sit quos excepturi
        blanditiis dignissimos impedit cumque quam aut explicabo id
        exercitationem laborum recusandae amet?
      </Paper>
      <Paper elevation={3}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores fuga
        repellendus, earum consequatur, eveniet odit sit quos excepturi
        blanditiis dignissimos impedit cumque quam aut explicabo id
        exercitationem laborum recusandae amet?
      </Paper> */}
    </Box>
  );
}

export default Dashboard;
