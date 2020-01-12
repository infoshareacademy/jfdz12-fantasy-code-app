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
  constructor (props) {
    super (props);
    this.state = {
      playedGames:[],
      kindsOfGames: [],
      playedGamesByKind: [],
      isLoading: true,
      hasError: false,
      error: '',
    };
  };

  fetchPlayedGamesData() {
    fetch("/data/played-games.json")
      .then( response => response.json())
      .then( fetchedData => {
        this.setState({
          playedGames: fetchedData,
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

  fetchKindsOfGamesData() {
    fetch("/data/kinds-of-games.json")
      .then( response => response.json())
      .then( fetchedData => {
        this.setState({
          kindsOfGames: fetchedData,
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
      this.fetchKindsOfGamesData();
      this.fetchPlayedGamesData();
  };

  renderPlayedGamesByKindArr() {
    return data = {
      //to be continued from here
    };
  };

  static jsfiddleUrl = 'https://jsfiddle.net/alidingling/c9pL8k61/';

  renderColorfulLegendText (value, entry) {
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
          Please wait, loading recently played games data...
        </div>
      );
    };

    return (
      <div>
        <div>Number of games by type played last month</div>
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
  };
};