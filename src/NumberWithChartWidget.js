// src/components/ui/NumberWithChartWidget.js

import React from 'react';
import PropTypes from 'prop-types';

import { withStyles } from '@material-ui/core/styles';

import { Textfit } from 'react-textfit';

import { AreaChart, Area, XAxis, YAxis, Tooltip, CartesianGrid,
  Line, LineChart, Legend, ResponsiveContainer, PieChart, Pie, Bar,
  BarChart, Sector, Cell, RadarChart, Radar, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ComposedChart,
  RadialBarChart, RadialBar, Treemap, ReferenceLine } from 'recharts'

const styles = theme => ({
    root: {
        // background: '#FFFFFF',
        width: '100%',
        height: '100%',
        paddingLeft: theme.spacing.unit * 3,
        paddingTop: theme.spacing.unit * 2,
        paddingRight: theme.spacing.unit * 3,
        paddingBottom: theme.spacing.unit * 2,
    },
    title: {
        height: '15%',
        fontWeight: 500,
    },
    icon: {
        marginRight: theme.spacing.unit * 1,
    },
    value: {
        height: '25%',
        fontWeight: 700,
    },
    chartContainer: {
        marginTop: '5%',
    }
});

class NumberWithChartWidget extends React.Component {

    constructor (props) {
        super(props)

        this.state = {
            left: 0,
            right: 0,
        }
    }

    componentWillReceiveProps (nextProps) {
        if (nextProps.data !== this.props.data) {
            this.setState({
                left: this.state.left - 45,
            });
        }
    }

    render () {
        const { classes, theme } = this.props;
        const { icon, backgroundColor, defaultColor,
            valueColor, title, unit, data } = this.props;

        const { left, right } = this.state;

        return (
            <div
                className={classes.root}
                style={{ background: this.props.backgroundColor }}>
                <Textfit
                   mode="single"
                   min={12}
                   max={28}
                   forceSingleModeWidth={false}
                   className={classes.title}
                   style={{color: this.props.defaultColor}}>
                   <span className={classes.icon}>
                       {icon !== undefined && icon}
                   </span>
                   <span>
                       {title}
                   </span>
                </Textfit>

                <Textfit
                    mode="single"
                    min={12}
                    max={200}
                    forceSingleModeWidth={false}
                    className={classes.value}
                    style={{color: valueColor ? valueColor : defaultColor}}>
                    {data[data.length-1].value.toFixed(0).toLocaleString() + unit}
                </Textfit>

                <ResponsiveContainer
                    width={'100%'}
                    height={'55%'}
                    className={classes.chartContainer}>
                    <LineChart
                        data={data}>
                        <XAxis
                            dataKey='time'
                            padding={{left: left, right: right}}
                            domain={['dataMin -5', 'dataMax + 5']}
                            tick={false}
                            stroke={backgroundColor} />
                        <Line
                            type='monotone'
                            dataKey='value'
                            stroke={defaultColor}
                            strokeWidth={2}
                            dot={false}
                            activeDot={false}
                            isAnimationActive={true}
                            animationEasing={'linear'}
                            animationDuration={1000} />
                    </LineChart>
                </ResponsiveContainer>
            </div>
        )
    }
}

NumberWithChartWidget.propTypes = {
    classes: PropTypes.object.isRequired,
    theme: PropTypes.object.isRequired,
};

export default withStyles(styles, { withTheme: true })(NumberWithChartWidget);
