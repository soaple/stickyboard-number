// src/components/ui/NumberWidget.js

import React from 'react';
import PropTypes from 'prop-types';

import { withStyles } from '@material-ui/core/styles';

import { Textfit } from 'react-textfit';

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
        height: '30%',
        fontWeight: 500,
    },
    icon: {
        marginRight: theme.spacing.unit * 1,
    },
    value: {
        height: '70%',
        // fontSize: '3rem',
        fontWeight: 700,
    }
});

class NumberWidget extends React.Component {

    render () {
        const { classes, theme } = this.props;

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
                        {this.props.icon !== undefined && this.props.icon}
                    </span>
                    <span>
                        {this.props.title}
                    </span>
                </Textfit>

                <Textfit
                    mode="single"
                    min={12}
                    max={200}
                    forceSingleModeWidth={false}
                    className={classes.value}
                    style={{color: this.props.valueColor ? this.props.valueColor : this.props.defaultColor}}>
                    {this.props.value.toLocaleString() + this.props.unit}
                </Textfit>
            </div>
        )
    }
}

NumberWidget.propTypes = {
    classes: PropTypes.object.isRequired,
    theme: PropTypes.object.isRequired,
};

export default withStyles(styles, { withTheme: true })(NumberWidget);
