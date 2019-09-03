// src/components/ui/NumberWidget.js

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Textfit } from 'react-textfit';

const Root = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    padding: 16px 24px;
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
    justify-content: flex-end;
    font-weight: 700;
    color: ${props => props.color ? props.color : '##9b9b9b'};
`;

class NumberWidget extends React.Component {
    render () {
        return (
            <Root
                style={{ background: this.props.backgroundColor }}>
                <TextfitTitle
                    mode="single"
                    min={12}
                    max={28}
                    forceSingleModeWidth={false}
                    color={this.props.defaultColor}>
                    <Icon>
                        {this.props.icon !== undefined && this.props.icon}
                    </Icon>
                    <span>
                        {this.props.title}
                    </span>
                </TextfitTitle>

                <TextfitValue
                    mode="single"
                    min={12}
                    max={200}
                    forceSingleModeWidth={false}
                    color={this.props.valueColor ? this.props.valueColor : this.props.defaultColor}>
                    {this.props.value.toLocaleString() + this.props.unit}
                </TextfitValue>
            </Root>
        )
    }
}

export default NumberWidget;
