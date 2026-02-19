import { LineChart, Line, XAxis, YAxis, Tooltip } from "recharts";

const data = [
  { day: "Mon", pollution: 400 },
  { day: "Tue", pollution: 700 },
  { day: "Wed", pollution: 300 },
  { day: "Thu", pollution: 900 },
];

export default function Charts() {
  return (
    <LineChart width={600} height={300} data={data}>
      <XAxis dataKey="day" />
      <YAxis />
      <Tooltip />
      <Line type="monotone" dataKey="pollution" stroke="#00f2ff" />
    </LineChart>
  );
}
