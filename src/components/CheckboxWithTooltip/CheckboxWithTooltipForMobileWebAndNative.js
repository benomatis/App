import React from 'react';
import {View} from 'react-native';
import Checkbox from '@components/Checkbox';
import withWindowDimensions from '@components/withWindowDimensions';
import Growl from '@libs/Growl';
import {defaultProps, propTypes} from './checkboxWithTooltipPropTypes';

class CheckboxWithTooltipForMobileWebAndNative extends React.Component {
    constructor(props) {
        super(props);
        this.showGrowlOrTriggerOnPress = this.showGrowlOrTriggerOnPress.bind(this);
    }

    componentDidUpdate(prevProps) {
        if (!this.props.toggleTooltip) {
            return;
        }

        if (prevProps.toggleTooltip !== this.props.toggleTooltip) {
            Growl.show(this.props.text, this.props.growlType, 3000);
        }
    }

    /**
     * Show warning modal on mobile devices since tooltips are not supported when checkbox is disabled.
     */
    showGrowlOrTriggerOnPress() {
        if (this.props.toggleTooltip) {
            Growl.show(this.props.text, this.props.growlType, 3000);
            return;
        }
        this.props.onPress();
    }

    render() {
        return (
            <View style={this.props.style}>
                <Checkbox
                    isChecked={this.props.isChecked}
                    onPress={this.showGrowlOrTriggerOnPress}
                    disabled={this.props.disabled}
                    accessibilityLabel={this.props.accessibilityLabel || this.props.text}
                />
            </View>
        );
    }
}

CheckboxWithTooltipForMobileWebAndNative.propTypes = propTypes;
CheckboxWithTooltipForMobileWebAndNative.defaultProps = defaultProps;

export default withWindowDimensions(CheckboxWithTooltipForMobileWebAndNative);
