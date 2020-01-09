import React, { PureComponent } from 'react';
import { PieChart, Pie, Cell, Legend } from 'recharts';

const data = [
  { name: 'GamesRPG', value: 10 },
  { name: 'GamesDice', value: 20 },
  { name: 'GamesBoard', value: 50 },
  { name: 'GamesOther', value: 5 },
];

const COLORS = ['#0088FE', '#00E49F', '#8884d8', '#82ca9d'];

const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({
  cx, cy, midAngle, innerRadius, outerRadius, percent, index,
}) => {
   const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};

export default class GamesChart extends PureComponent {
  static jsfiddleUrl = 'https://jsfiddle.net/alidingling/c9pL8k61/';

  renderColorfulLegendText(value, entry) {
    const { color } = entry;
    //IDEA Change newUsers to New users here
    return <span style={{ color }}>{value}</span>;
  }

  render() {
    return (
      <div>
        <div>Types of games played last month</div>
        <PieChart width={500} height={450} >
          <Legend verticalAlign="top" height={30} formatter={this.renderColorfulLegendText}/>
          <Pie
            data={data}
            cx={'50%'}
            cy={'50%'}
            labelLine={false}
            label={renderCustomizedLabel}
            outerRadius={190}
            fill="#8884d8"
            dataKey="value"
          >
            {
              data.map((entry, index) => <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />)
            }
          </Pie>
        </PieChart>
      </div>
    );
  }
}