import React from "react";

const styles = {
    wrapper: {
        margin: 0,
        padding: 8,
        display: "flex",
        flexDirection: "row",
        border: "1px solid grey",
        borderRadius: 16,
    },
    messageText: {
        color: "black",
        fontSize: 16,
    },
};

class Notification extends React.Component {
    constructor(props) {
        super(props);

        this.state = {};
    }

    componentDidMount() {
        console.log(`${this.props.id}componentDidMount`);
    }
    componentDidUpdate() {
        console.log(`${this.props.id}componentDidUpdate`);
    }
    componentWillUnmount() {
        console.log(`${this.props.id}componentWillUnmount`);
    }

    render() {
        return (
            <div style={styles.wrapper}>
                <span style={styles.messageText}>{this.props.message}</span>
            </div>
        )
    }
}

export default Notification;