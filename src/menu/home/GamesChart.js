import React, { PureComponent } from 'react';
import { PieChart, Pie, Cell, Legend, Sector, ResponsiveContainer } from 'recharts';

const COLORS = ['#eddaa6', '#00E49F', '#f2d43f', '#82ca9d'];
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
      activeIndex: 0,
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
        const kindsOfGamesWithCapitalizedFirstLetter = fetchedData.map( kind => {
            const kindName = kind.kindName;
            const kindNameCapitalized = kindName.charAt(0).toUpperCase() + kindName.slice(1);
            return {
              kindID: kind.kindID,
              kindName: kindNameCapitalized,
            };
          }
        );

        this.setState({
          kindsOfGames: kindsOfGamesWithCapitalizedFirstLetter,
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
    });
  };

  componentDidMount() {
      Promise.all([
        this.fetchKindsOfGamesData(),
        this.fetchPlayedGamesData(),
        ])
        .then(() => {this.renderPlayedGamesByKindArr();
      });
  };

  renderColorfulLegendText (value, entry) {
    const { color } = entry;
    return <span style={{ color }}>{value}</span>;
  };

  renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent }) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);
  
    return (
      <text x={x} y={y} fill="black" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
        {`${(percent * 100).toFixed(0)}%`}
      </text>
    );
  };

  renderActiveShape = (props) => {
    const {
      cx, cy, midAngle, innerRadius, outerRadius, startAngle, endAngle,
      fill, payload, value
    } = props;
    const sin = Math.sin(-RADIAN * midAngle);
    const cos = Math.cos(-RADIAN * midAngle);
    const sx = cx + (outerRadius + 5) * cos;
    const sy = cy + (outerRadius + 5) * sin;
    const mx = cx + (outerRadius + 30) * cos;
    const my = cy + (outerRadius + 30) * sin;
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
        <text x={ex + (cos >= 0 ? 1 : -1) * 12} y={ey} dy={-8} dominantBaseline="central" textAnchor={textAnchor} fill="#333">{payload.name}</text>
        <text x={ex + (cos >= 0 ? 1 : -1) * 12} y={ey} dy={10} dominantBaseline="central" textAnchor={textAnchor} fill="#333">{`${value} games`}</text>
      </g>
    );
  };

  onPieEnter = (data, index) => {
    this.setState({
      activeIndex: index,
    });
  };

  static jsfiddleUrl = 'https://jsfiddle.net/alidingling/c9pL8k61/';

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
      <div className="Home__Charts--items--Games">
        <h3>Games played this month. Thank you for playing!</h3>
        <ResponsiveContainer width={'100%'} height={450}>
          <PieChart >
            <Legend verticalAlign="top" width='100%' height={30} formatter={this.renderColorfulLegendText} />
            <Pie
              activeIndex={this.state.activeIndex}
              activeShape={this.renderActiveShape}
              onMouseEnter={this.onPieEnter}
              data={this.state.playedGamesByKind}
              cx={'50%'}
              cy={'50%'}
              labelLine={false}
              label={this.renderCustomizedLabel}
              outerRadius={160}
              fill="#8884d8"
              dataKey="playedGames"
            >
              {
                this.state.playedGamesByKind.map((entry, index) => <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />)
              }
            </Pie>
          </PieChart>
        </ResponsiveContainer>
      </div>
    );
  };
};