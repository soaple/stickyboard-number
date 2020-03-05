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
    justify-content: flex-end;
    font-weight: 700;
    color: ${props => props.color ? props.color : '##9b9b9b'};
`;

class NumberWidget extends React.Component {
    render () {
        const {
            defaultColor,
            backgroundColor,
            valueColor,
            icon,
            title,
            value,
            unit,
        } = this.props;

        return (
            <Root
                style={{ background: backgroundColor }}>
                <TextfitTitle
                    mode="single"
                    min={12}
                    max={28}
                    forceSingleModeWidth={false}
                    color={defaultColor}>
                    <Icon>
                        {icon && icon}
                    </Icon>
                    <span>
                        {title}
                    </span>
                </TextfitTitle>

                <TextfitValue
                    mode="single"
                    min={12}
                    max={200}
                    forceSingleModeWidth={false}
                    color={valueColor ? valueColor : defaultColor}>
                    {`${value.toLocaleString()}${unit}`}
                </TextfitValue>
            </Root>
        )
    }
}

export default NumberWidget;
