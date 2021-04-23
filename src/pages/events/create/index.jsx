import React, { Component, useState } from 'react';
import { Form } from 'react-bootstrap';
import { connect } from 'react-redux';
import { Formik } from 'formik';
import { parseDateString } from '../../../util/dateParser'
import PropTypes from 'prop-types';
import _ from 'lodash';
import * as yup from 'yup';
import { DateTime } from 'react-datetime';

import { createdEventApiData } from '../../../actions/events';

class CreateEvent extends Component {
  render() {
    const { loading } = this.props;
    const validTypes = ['Tour', 'Camping', 'Hiking', 'Cruise', 'Road Trip', 'Scenic Views', 'Restaurants', 'Live'];
    const validStatuses = ['Preparation', 'Pending Confirmation', 'Confirmed', 'In Progress', 'Completed', 'Cancelled', 'Unprocessable']
    const schema = yup.object().shape({
      type: yup.string().test(
          'isValidType',
          'The provided type is not valid',
          function(item) {
              return _.includes(validTypes, item)
          }
      ).required(),
      status: yup.string().test(
        'isValidStatus',
        'The provided status is not valid',
        function(item) {
            return _.includes(validStatuses, item)
        }
      ).required(),
      name: yup.string()
      .min(2, 'Not long enough')
      .max(100, 'Too many characters')
      .required(),
      description: yup.string().required(),
      minimumAmountOfPeople: yup.number().required().positive().integer(),
      maximumAmountOfPeople: yup.number().required().positive().integer().moreThan(yup.ref('minimumAmountOfPeople')),
      images: yup.array().of(yup.string()),
      startTime: yup.date().transform(parseDateString).max(new Date()).required(),
      endTime: yup.date().transform(parseDateString).min(
        yup.ref("startTime"),
        "Selected end time for event can't be before start time"
      ).required(),
      streetOne: yup.string.required(),
      streetTwo: yup.string(),
      apartmentNumber: yup.string(),
      city: yup.string.required(),
      state: yup.string.required(),
      country: yup.string.required(),
      zipCode: yup.string.required(),
      adultOnly: yup.bool(),
      notes: yup.string,
    });

    return (
      <Formik
        validationSchema={schema}
        onSubmit={console.log}
        initialValues={{
          type: 'Tour',
          status: 'Preparation',
          name: '',
          description: '',
          minimumAmountOfPeople: 1,
          maximumAmountOfPeople: 10,
          images: [],
          startTime: new Date(),
          endTime: new Date(),
          streetOne: '',
          streetTwo: '',
          apartmentNumber: '',
          city: '',
          state: '',
          country: '',
          zipCode: '',
          adultOnly: false,
          notes: '',
        }}
      >
        {({
        handleSubmit,
        handleChange,
        handleBlur,
        values,
        touched,
        isValid,
        errors,
      }) => (
          <Form noValidate onSubmit={handleSubmit}>
              <Form.Row>
                  <Form.Group as={Col} md="4" controlId="validationType">
                      <Form.Label>Choose Type</Form.Label>
                      <Form.Control as="select" type="text" name="type" value={values.type} onChange={handleChange} isValid={touched.type && !errors.type}>
                          <option>Tour</option>
                          <option>Camping</option>
                          <option>Hiking</option>
                          <option>Cruise</option>
                          <option>Road Trip</option>
                          <option>Scenic Views</option>
                          <option>Restaurants</option>
                          <option>Live</option>
                      </Form.Control>
                  </Form.Group>
                  <Form.Group as={Col} md="4" controlId="status-id">
                      <Form.Label>Status of Event</Form.Label>
                      <Form.Control as="select" type="text" name="status" value={values.status} onChange={handleChange} isValid={touched.status && !errors.status}>
                          <option>Preparation</option>
                          <option>Pending Confirmation</option>
                          <option>Confirmed</option>
                          <option>In Progress</option>
                      </Form.Control>
                  </Form.Group>
                  <Form.Group as={Col} md="4" controlId="name-id">
                        <Form.Label>Name of Event</Form.Label>
                        <Form.Control type="text" name="name" value={values.name} onChange={handleChange} isValid={touched.name && !errors.name}/>
                        <Form.Control.Feedback>Looks Good!</Form.Control.Feedback>
                  </Form.Group>
                  <Form.Group as={Col} md="4" controlId="description-id">
                        <Form.Label>Description of Event</Form.Label>
                        <Form.Control as="textarea" rows={5} type="text" name="description" value={values.description} onChange={handleChange} isValid={touched.description && !errors.description}/>
                        <Form.Control.Feedback>Looks Good!</Form.Control.Feedback>
                  </Form.Group>
                  <Form.Group as={Col} md="2" controlId="minimum-amount-of-people-id">
                        <Form.Label>Minimum number of people</Form.Label>
                        <Form.Control type="number" name="minimumAmountOfPeople" value={values.minimumAmountOfPeople} onChange={handleChange} isValid={touched.minimumAmountOfPeople && !errors.minimumAmountOfPeople}/>
                        <Form.Control.Feedback>Looks Good!</Form.Control.Feedback>
                  </Form.Group>
                  <Form.Group as={Col} md="2" controlId="maximum-amount-of-people-id">
                        <Form.Label>Maximum number of people</Form.Label>
                        <Form.Control type="number" name="maximumAmountOfPeople" value={values.maximumAmountOfPeople} onChange={handleChange} isValid={touched.maximumAmountOfPeople && !errors.maximumAmountOfPeople}/>
                        <Form.Control.Feedback>Looks Good!</Form.Control.Feedback>
                  </Form.Group>
                  <Form.Group as={Col} md="4" controlId="images-id">
                    <Form.Label>Add images of event</Form.Label>
                    <Form.Control type="file" multiple name="images" onChange={handleChange}/>
                  </Form.Group>
                  <DateTime id="start-time-id" name="startTime" placeHolder="Enter Starting Time and Date" value={values.startTime} onChange={handleChange} onBlur={handleBlur} isValid={touched.startTime && !errors.startTime}/>
                  <DateTime id="end-time-id" name="endTime" placeHolder="Enter Finishing Time and Date" value={values.endTime} onChange={handleChange} onBlur={handleBlur} isValid={touched.endTime && !errors.endTime}/>
                  <Form.Group as={Col} md="4" controlId="street-one-id">
                      <Form.Label>Street One</Form.Label>
                      <Form.Control type="text" name="streetOne" value={values.streetOne} onChange={handleChange} isValid={touched.streetOne && !errors.streetOne}/>
                      <Form.Control.Feedback>Looks Good!</Form.Control.Feedback>
                  </Form.Group>
                  <Form.Group as={Col} md="4" controlId="street-two-id">
                      <Form.Label>Street Two</Form.Label>
                      <Form.Control type="text" name="streetTwo" value={values.streetTwo} onChange={handleChange} isValid={touched.streetTwo && !errors.streetTwo}/>
                      <Form.Control.Feedback>Looks Good!</Form.Control.Feedback>
                  </Form.Group>
                  <Form.Group as={Col} md="4" controlId="apartment-number-id">
                      <Form.Label>Apartment Number</Form.Label>
                      <Form.Control type="text" name="apartmentNumber" value={values.apartmentNumber} onChange={handleChange} isValid={touched.apartmentNumber && !errors.apartmentNumber}/>
                      <Form.Control.Feedback>Looks Good!</Form.Control.Feedback>
                  </Form.Group>
                  <Form.Group as={Col} md="4" controlId="city-id">
                      <Form.Label>City</Form.Label>
                      <Form.Control type="text" name="city" value={values.city} onChange={handleChange} isValid={touched.city && !errors.city}/>
                      <Form.Control.Feedback>Looks Good!</Form.Control.Feedback>
                  </Form.Group>
                  <Form.Group as={Col} md="4" controlId="state-id">
                      <Form.Label>State</Form.Label>
                      <Form.Control type="text" name="state" value={values.state} onChange={handleChange} isValid={touched.state && !errors.state}/>
                      <Form.Control.Feedback>Looks Good!</Form.Control.Feedback>
                  </Form.Group>
                  <Form.Group as={Col} md="4" controlId="country-id">
                      <Form.Label>Country</Form.Label>
                      <Form.Control type="text" name="country" value={values.country} onChange={handleChange} isValid={touched.country && !errors.country}/>
                      <Form.Control.Feedback>Looks Good!</Form.Control.Feedback>
                  </Form.Group>
                  <Form.Group as={Col} md="4" controlId="zip-code-id">
                      <Form.Label>Zip Code</Form.Label>
                      <Form.Control type="text" name="zipCode" value={values.zipCode} onChange={handleChange} isValid={touched.zipCode && !errors.zipCode}/>
                      <Form.Control.Feedback>Looks Good!</Form.Control.Feedback>
                  </Form.Group>
                  <Form.Group as={Col} md="4">
                      <Form.Check type="checkbox" name="adultOnly" label="Adult Only?" onChange={handleChange} id="adult-only-id" />
                  </Form.Group>
                  <Form.Group as={Col} md="4" controlId="notes-id">
                        <Form.Label>Additional Notes about the Event</Form.Label>
                        <Form.Control as="textarea" rows={5} type="text" name="notes" value={values.notes} onChange={handleChange}/>
                  </Form.Group>
              </Form.Row>
          </Form>
      )

    </Formik>
    );
  }
}

const mapStateToProps = (state) => ({
  loading: state.eventsData.loading,
});

const mapDispatchToProps = (dispatch) => ({
  sendEventData: (data) => dispatch(createdEventApiData(data)),
});

CreateEvent.propTypes = {
  loading: PropTypes.bool.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(CreateEvent);
