// src/components/ui/NumberWithChartWidget.js

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Textfit } from 'react-textfit';
import { ResponsiveContainer, LineChart, Line, XAxis } from 'recharts'

const Root = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    padding: 16px 24px;
    border-radius: 8px;
`;

const TextfitTitle = styled(Textfit)`
    flex: 1;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    font-weight: 500;
    color: ${props => props.color ? props.color : '##9b9b9b'};
`;

const Icon = styled.span`
    margin-right: 8px;
`;

const TextfitValue = styled(Textfit)`
    flex: 2;
    font-weight: 700;
    color: ${props => props.color ? props.color : '##9b9b9b'};
`;

const ChartContainer = styled(ResponsiveContainer)`
    margin-top: 8px;
`;

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
        const { left, right } = this.state;
        const { icon, backgroundColor, defaultColor,
            valueColor, title, unit, data } = this.props;

        return (
            <Root
                style={{ background: this.props.backgroundColor }}>
                <TextfitTitle
                    mode='single'
                    min={12}
                    max={28}
                    forceSingleModeWidth={false}
                    style={{color: this.props.defaultColor}}>
                    <Icon>
                        {icon !== undefined && icon}
                    </Icon>
                    <span>
                        {title}
                    </span>
                </TextfitTitle>

                <TextfitValue
                    mode='single'
                    min={12}
                    max={200}
                    forceSingleModeWidth={false}
                    style={{color: valueColor ? valueColor : defaultColor}}>
                    {data[data.length-1].value.toFixed(0).toLocaleString() + unit}
                </TextfitValue>

                <ChartContainer
                    width={'100%'}
                    height={'55%'}>
                    <LineChart
                        data={data}>
                        <XAxis
                            hide={true}
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
                </ChartContainer>
            </Root>
        )
    }
}

export default NumberWithChartWidget;
