/* global google*/
import React from "react";
import { Button, Header, Segment } from "semantic-ui-react";
import cuid from "cuid";
import { useDispatch, useSelector } from "react-redux";
import { createEvent, updateEvent } from "../eventActions";
import { Formik, Form, isSubmitting, dirty, isValid } from "formik";
import { Link } from "react-router-dom";
import * as Yup from "yup";
import MyTextInput from "../../../app/common/form/MyTextInput";
import MyTextArea from "../../../app/common/form/MyTextArea";
import MySelectInput from "../../../app/common/form/MySelectInput";
import { categoryOptions } from "../../../app/api/categoryOptions";
import MyDateInput from "../../../app/common/form/MyDateInput";
import MyPlaceInput from "../../../app/common/form/MyPlaceInput";

export default function EventForm({ match, history }) {
  const dispatch = useDispatch();
  const selectedEvent = useSelector((state) =>
    state.event.events.find((e) => e.id === match.params.id)
  );

  const initialValues = selectedEvent ?? {
    title: "",
    category: "",
    description: "",
    city: {
      address: '',
      latLng: null
    },
    venue: {
      address: '',
      latLng: null}
    ,
    date: "",
  };

  const validationSchema = Yup.object({
    title: Yup.string().required("A title must be provided"),
    category: Yup.string().required("A category is required"),
    description: Yup.string().required("Description is required"),
    city: Yup.object().shape({
      address: Yup.string().required("City is required")
    }),
    venue: Yup.object().shape({
      address: Yup.string().required("Venue is required")
    }),
    date: Yup.string().required("Date is required"),
  });

  return (
    <Segment clearing>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={(values) => {
          selectedEvent
            ? dispatch(updateEvent({ ...selectedEvent, ...values }))
            : dispatch(
                createEvent({
                  ...values,
                  id: cuid(),
                  hostedBy: "Mahek",
                  attendees: [],
                  hostPhotoURL: "/assets/user.png",
                })
              );
          history.push("/events");
        }}
      >
        {({ isSubmitting, dirty, isValid, values }) => (
          <Form className="ui form">
            <Header content="Event Details" sub color="teal" />
            <MyTextInput name="title" placeholder="Event title" />
            <MySelectInput
              name="category"
              placeholder=" Event Category"
              options={categoryOptions}
            />
            <MyTextArea name="description" placeholder="Description" rows={3} />
            <Header
              content="Event Location and Date Details"
              sub
              color="teal"
            />
            <MyPlaceInput name="city" placeholder="City" />
            <MyPlaceInput 
            name="venue" 
            disabled={!values.city.latLng}
            placeholder="Venue" 
            options={{
              location: new google.maps.LatLng(values.city.latLng),
              radius: 1000,
              types: ['establishment' || 'shopping_mall']
              }} />
            <MyDateInput
              name="date"
              placeholderText="Event Date"
              timeFormat="HH:mm"
              showTimeSelect
              timeCaption="time"
              dateFormat="MMMM d, yyyy h:mm a"
            />

            <Button
              loading={isSubmitting}
              disabled={!isValid || !dirty || isSubmitting}
              type="submit"
              content="Submit"
              floated="right"
              positive
            />
            <Button
              as={Link}
              disabled={isSubmitting}
              to="/events"
              type="submit"
              content="Cancel"
              floated="right"
            />
          </Form>
        )}
      </Formik>
    </Segment>
  );
}
