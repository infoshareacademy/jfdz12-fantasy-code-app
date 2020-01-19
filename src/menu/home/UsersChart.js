import React, { PureComponent } from 'react';
import {
  AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, Legend
} from 'recharts';
import './UsersChart.css'

const CustomTooltip = ({ active, payload, label }) => {
  if (active) {
    return (
      <div className="Home__Charts--UsersChart--tooltip--container">
        <p>{`${label}`}</p>
        <p className="Home__Charts--UsersChart--tooltip--intro1">{`New Users : ${payload[0].value}`}</p>
        <p className="Home__Charts--UsersChart--tooltip--intro2">{`Total Users : ${payload[1].value}`}</p>
      </div>
    );
  };

  return null;
};

export default class UsersChart extends PureComponent {
  constructor (props) {
    super (props);
    this.state = {
      registeredUsers:[],
      isLoading: true,
      hasError: false,
      error: '',
    };
  };

  fetchRegisteredUsersData() {
    fetch("/data/registered-users.json")
      .then( response => response.json())
      .then( fetchedData => {
        this.setState({
          registeredUsers: fetchedData,
          isLoading: false,
          hasError: false,
          error: '',
        });
      })
      .catch( error => {
        this.setState({
          hasError: true,
          error: error,
        });
      });
  };

  componentDidMount() {
      this.fetchRegisteredUsersData();
  };

  renderColorfulLegendText (value, entry) {
    const { color } = entry;
    const dataLabel = value;
    const dataLabelTransformed = dataLabel.charAt(0).toUpperCase() + dataLabel.slice(1, dataLabel.length-5) + ' ' + dataLabel.slice(dataLabel.length-5);
    return <span style={{ color }}>{dataLabelTransformed}</span>;
  };

  static jsfiddleUrl = 'https://jsfiddle.net/alidingling/c1rLyqj1/';

  render() {
    if (this.state.hasError) {
      return (
        <div>
          Error! {this.state.error}
        </div>
      );
    };
    
    if (this.state.isLoading) {
      return (
        <div>
          Please wait, loading registered players data...
        </div>
      );
    };

    return (
      <div>
        <div>Current number of users</div>
        <AreaChart width={600} height={450} data={this.state.registeredUsers} >
          <Legend verticalAlign="top" width='100%' height={30} formatter={this.renderColorfulLegendText} />
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="monthName" />
          <YAxis />
          <Tooltip content={<CustomTooltip />} />
          <Area type="monotone" dataKey="newUsers" stackId="1" stroke="#8884d8" fill="#8884d8" />
          <Area type="monotone" dataKey="totalUsers" stackId="1" stroke="#82ca9d" fill="#82ca9d" />
        </AreaChart>
      </div>
    );
  };
};
