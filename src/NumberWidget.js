// src/components/ui/NumberWidget.js

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Textfit } from 'react-textfit';

const Root = styled.div`
    width: 100%;
    height: 100%;
    padding-left: 24px;
    padding-top: 16px;
    padding-right: 24px;
    padding-bottom: 16px;
`;

const TextfitTitle = styled(Textfit)`
    height: 30%;
    font-weight: 500;
`;

const Icon = styled.span`
    margin-right: 8px;
`;

const TextfitValue = styled(Textfit)`
    height: 70%;
    font-weight: 700;
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
                    style={{color: this.props.defaultColor}}>
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
                    style={{color: this.props.valueColor ? this.props.valueColor : this.props.defaultColor}}>
                    {this.props.value.toLocaleString() + this.props.unit}
                </TextfitValue>
            </Root>
        )
    }
}

export default NumberWidget;
