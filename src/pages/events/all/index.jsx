import React, { Component } from 'react';
import { Spinner, Card } from 'react-bootstrap';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { requestEventsApiData } from '../../../actions/events';

class Events extends Component {
  componentDidMount() {
    this.props.fetchEvents();
  }

  render() {
    const { events, loading } = this.props;

    return (
      <div>
        {loading
          ? <Spinner animation="border" />
          : events.map((eventData, _) => (
            <Card>
              <Card.Img variant="top" src={eventData.images[0]} />
              <Card.Body>
                <Card.Title>{eventData.name}</Card.Title>
                <Card.Text>
                  {eventData.description}
                </Card.Text>
                <Card.Text>
                  Minimum Number of people:
                  {' '}
                  {eventData.minimumAmountOfPeople}
                </Card.Text>
                <Card.Text>
                  Maximum Number of people:
                  {' '}
                  {eventData.maximumAmountOfPeople}
                </Card.Text>
              </Card.Body>
            </Card>
          ))}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  loading: state.eventsData.loading,
  events: state.eventsData.events,
});

const mapDispatchToProps = (dispatch) => ({
  fetchEvents: () => dispatch(requestEventsApiData()),
});

Events.propTypes = {
  loading: PropTypes.bool.isRequired,
  events: PropTypes.arrayOf(React.propTypes.string).isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Events);
