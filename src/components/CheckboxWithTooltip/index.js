import React from 'react';
import {View} from 'react-native';
import Checkbox from '@components/Checkbox';
import Tooltip from '@components/Tooltip';
import withWindowDimensions from '@components/withWindowDimensions';
import CheckboxWithTooltipForMobileWebAndNative from './CheckboxWithTooltipForMobileWebAndNative';
import {defaultProps, propTypes} from './checkboxWithTooltipPropTypes';

function CheckboxWithTooltip(props) {
    if (props.isSmallScreenWidth || props.isMediumScreenWidth) {
        return (
            <CheckboxWithTooltipForMobileWebAndNative
                style={props.style}
                isChecked={props.isChecked}
                onPress={props.onPress}
                text={props.text}
                toggleTooltip={props.toggleTooltip}
                disabled={props.disabled}
                accessibilityLabel={props.accessibilityLabel || props.text}
            />
        );
    }
    const checkbox = (
        <Checkbox
            isChecked={props.isChecked}
            onPress={props.onPress}
            disabled={props.disabled}
            accessibilityLabel={props.accessibilityLabel || props.text}
        />
    );
    return (
        <View style={props.style}>
            {props.toggleTooltip ? (
                <Tooltip text={props.text}>
                    <View>{checkbox}</View>
                </Tooltip>
            ) : (
                checkbox
            )}
        </View>
    );
}

CheckboxWithTooltip.propTypes = propTypes;
CheckboxWithTooltip.defaultProps = defaultProps;
CheckboxWithTooltip.displayName = 'CheckboxWithTooltip';

export default withWindowDimensions(CheckboxWithTooltip);
