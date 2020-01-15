import React, { PureComponent } from 'react';
import { PieChart, Pie, Cell, Legend, Sector } from 'recharts';

const COLORS = ['#0088FE', '#00E49F', '#8884d8', '#82ca9d'];

const RADIAN = Math.PI / 180;

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
      activeIndex: 0
    };
  };

  fetchPlayedGamesData() {
    return fetch("/data/played-games.json")
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
    return fetch("/data/kinds-of-games.json")
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

  renderPlayedGamesByKindArr() {
    const data = this.state.playedGames.map( game => {
      return {
        ...game,
        name: this.state.kindsOfGames.find( kind => {
          return kind.kindID === game.kindID}).kindName,
        }
    });

    this.setState({
      playedGamesByKind: data,
    })
  };

  componentDidMount() {
      Promise.all([
        this.fetchKindsOfGamesData(),
        this.fetchPlayedGamesData(),
        ])
        .then(() => {this.renderPlayedGamesByKindArr();
      });
  };

  static jsfiddleUrl = 'https://jsfiddle.net/alidingling/c9pL8k61/';

  renderColorfulLegendText (value, entry) {
    const { color } = entry;
    //IDEA Change newUsers to New users here
    return <span style={{ color }}>{value}</span>;
  };

  renderCustomizedLabel = ({
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

  renderActiveShape = (props) => {
    const {
      cx, cy, midAngle, innerRadius, outerRadius, startAngle, endAngle,
      fill, payload, percent, value,
    } = props;
    const sin = Math.sin(-RADIAN * midAngle);
    const cos = Math.cos(-RADIAN * midAngle);
    const sx = cx + (outerRadius + 10) * cos;
    const sy = cy + (outerRadius + 10) * sin;
    const mx = cx + (outerRadius + 25) * cos;
    const my = cy + (outerRadius + 25) * sin;
    const ex = mx + (cos >= 0 ? 1 : -1) * 11;
    const ey = my;
    const textAnchor = cos >= 0 ? 'start' : 'end';
  
    return (
      <g>
        <Sector
          cx={cx}
          cy={cy}
          innerRadius={innerRadius}
          outerRadius={outerRadius}
          startAngle={startAngle}
          endAngle={endAngle}
          fill={fill}
        />
        <Sector
          cx={cx}
          cy={cy}
          startAngle={startAngle}
          endAngle={endAngle}
          innerRadius={outerRadius + 6}
          outerRadius={outerRadius + 10}
          fill={fill}
        />
        <path d={`M${sx},${sy}L${mx},${my}L${ex},${ey}`} stroke={fill} fill="none" />
        <circle cx={ex} cy={ey} r={2} fill={fill} stroke="none" />
        <text x={ex + (cos >= 0 ? 1 : -1) * 12} y={ey} textAnchor={textAnchor} fill="#333">{payload.name}</text>
        <text x={ex + (cos >= 0 ? 1 : -1) * 12} y={ey} dy={18}textAnchor={textAnchor} fill="#333">{`Played ${value} times`}</text>
        <text x={ex + (cos >= 0 ? 1 : -1) * 12} y={ey} dy={36} textAnchor={textAnchor} fill="#999">
          {`(Rate ${(percent * 100).toFixed(2)}%)`}
        </text>
      </g>
    );
  };

  onPieEnter = (data, index) => {
    this.setState({
      activeIndex: index,
    });
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
        <PieChart width={600} height={450}>
          <Legend verticalAlign="top" width='100%' height={30} formatter={this.renderColorfulLegendText}/>
          <Pie
            activeIndex={this.state.activeIndex}
            activeShape={this.renderActiveShape}
            onMouseEnter={this.onPieEnter}
            data={this.state.playedGamesByKind}
            cx={'50%'}
            cy={'50%'}
            labelLine={false}
            label={this.renderCustomizedLabel}
            outerRadius={150}
            fill="#8884d8"
            dataKey="playedGames"
          >
            {
              this.state.playedGamesByKind.map((entry, index) => <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />)
            }
          </Pie>
        </PieChart>
      </div>
    );
  };
};