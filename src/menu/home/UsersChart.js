import React, { PureComponent } from 'react';
import {
  AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip,
} from 'recharts';

const data = [
  {
    name: 'Jan', newUsers: 10, totalUsers: 10,
  },
  {
    name: 'Feb', newUsers: 20, totalUsers: 30,
  },
  {
    name: 'Mar', newUsers: 5, totalUsers: 35,
  },
  {
    name: 'Apr', newUsers: 0, totalUsers: 35,
  },
  {
    name: 'May', newUsers: 27, totalUsers: 62,
  },
  {
    name: 'Jun', newUsers: 10, totalUsers: 72,
  },
  {
    name: 'Jul', newUsers: 0, totalUsers: 72,
  },
  {
    name: 'Jul', newUsers: 18, totalUsers: 90,
  },
  {
    name: 'Aug', newUsers: 9, totalUsers: 99,
  },
  {
    name: 'Sep', newUsers: 18, totalUsers: 117,
  },
  {
    name: 'Oct', newUsers: 1, totalUsers: 118,
  },
  {
    name: 'Nov', newUsers: 22, totalUsers: 140,
  },
  {
    name: 'Dec', newUsers: 10, totalUsers: 150,
  },
];

export default class UsersChart extends PureComponent {
  static jsfiddleUrl = 'https://jsfiddle.net/alidingling/c1rLyqj1/';

  render() {
    return (
      <div>
        New users and total users chart
        <AreaChart
          width={500}
          height={400}
          data={data}
          margin={{
            top: 10, right: 30, left: 0, bottom: 0,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Area type="monotone" dataKey="newUsers" stackId="1" stroke="#8884d8" fill="#8884d8" />
          <Area type="monotone" dataKey="totalUsers" stackId="1" stroke="#82ca9d" fill="#82ca9d" />
        </AreaChart>
      </div>
    );
  }
}
