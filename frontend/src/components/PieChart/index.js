import React, { PureComponent } from "react";
import { PieChart, Pie, Sector, Cell } from "recharts";

const data = [
  { name: "Group A", value: 10 },
  { name: "Group B", value: 15 },
  { name: "Group C", value: 25 },
  { name: "Group D", value: 60 },
];
const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

export default class Example extends PureComponent {
  render() {
    return (
      <PieChart width={400} height={235} onMouseEnter={this.onPieEnter}>
        <Pie
          data={data}
          cx={175}
          cy={100}
          innerRadius={60}
          outerRadius={80}
          fill="#8884d8"
          paddingAngle={0}
          dataKey="value"
          label
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
      </PieChart>
    );
  }
}
