import React, {Component} from "react";

import {bindActionCreators} from "redux";
import {connect} from "react-redux";

import {requestEventsApiData} from "../../actions/events";

class Events extends Component {
    componentDidMount() {
        this.props.requestEventsApiData();
    }

    render() {
        console.log("Props: " + this.props.data);
        return (
            <h2>Events Page</h2>
        )
    }
}

const mapStateToProps = state => ({data: state.data})
const mapDispatchToProps = dispatch => bindActionCreators({requestEventsApiData}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Events);