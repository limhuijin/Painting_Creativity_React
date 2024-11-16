import { BarChart } from "@mui/x-charts/BarChart";

const Chart = ({ aryData }) => {
  return (
    <BarChart
      layout="vertical"
      xAxis={[
        {
          scaleType: "band",
          data: [
            "섬세함",
            "이야기 전달력",
            "객체 다양성",
            "공간 활용력",
            "표현력",
          ],
          colorMap: {
            type: "ordinal",
            values: [
              "섬세함",
              "이야기 전달력",
              "객체 다양성",
              "공간 활용력",
              "표현력",
            ],
            colors: ["#F7A1B5", "#F4B49A", "#A6D8C7", "#7DB8D4", "#C2A0D0"],
          },
        },
      ]}
      yAxis={[
        {
          min: 0,
          max: 5,
        },
      ]}
      series={[{ data: aryData }]}
    />
  );
};

export default Chart;
