import React, { PureComponent } from 'react';
import {
  AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, Legend
} from 'recharts';

export default class UsersChart extends PureComponent {
  constructor(props) {
    super(props)
    this.state = {
        registeredUsers:[],
        isLoading: true,
        hasError: false,
        error: '',
    }
  }

  fetchRegisteredUsersData(){
      fetch("/data/registered-users.json")
          .then( response => response.json())
          .then( fetchedData => {
            this.setState({
                  registeredUsers: fetchedData,
                  isLoading: false,
                  hasError: false,
                  error: '',
            })
          })
          .catch((error) => {
            this.setState({
              hasError: true,
              error: error,
            })
          });
  };

  componentDidMount(){
    setTimeout(() => {
      this.fetchRegisteredUsersData();
    }, 100);
  };

  static jsfiddleUrl = 'https://jsfiddle.net/alidingling/c1rLyqj1/';

  renderColorfulLegendText(value, entry) {
    const { color } = entry;
    //IDEA Change newUsers to New users here
    return <span style={{ color }}>{value}</span>;
  };

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
        <div>Number of users</div>
        <AreaChart
          width={500}
          height={450}
          data={this.state.registeredUsers}
          margin={{
            top: 10, right: 30, left: 0, bottom: 0,
          }}
        >
          <Legend verticalAlign="top" height={30} formatter={this.renderColorfulLegendText}/>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip />
          <Area type="monotone" dataKey="newUsers" stackId="1" stroke="#8884d8" fill="#8884d8" />
          <Area type="monotone" dataKey="totalUsers" stackId="1" stroke="#82ca9d" fill="#82ca9d" />
        </AreaChart>
      </div>
    );
  }
}
