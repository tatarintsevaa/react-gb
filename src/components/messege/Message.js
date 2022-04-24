import React from "react";
import PropTypes from "prop-types";

export class Message extends React.Component {
    static propTypes = {
        message: PropTypes.shape({
            author: PropTypes.string,
            value: PropTypes.string,
        }),
    };

    render() {
        const { message } = this.props;
        const { author, value } = message;

        return (
            <div>
                <strong>{author}: </strong>
                <span>{value}</span>
            </div>
        );
    }
}
