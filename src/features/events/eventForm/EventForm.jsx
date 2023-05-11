import React, { useState } from "react";
import { Button, Form, Header, Segment } from "semantic-ui-react";
import cuid from 'cuid';

export default function EventForm({setFormOpen, setEvents, createEvent, selectedEvent, updateEvent})
{
    const initialValues = selectedEvent ?? {
        title: '',
        category:'',
        description:'',
        city:'',
        venue:'',
        date:''
    }
    const [values, setValues] = useState(initialValues);

function handleFormSubmit()
{
    selectedEvent? updateEvent({...selectedEvent,...values}) : 
    createEvent(
        { ...values, 
            id: cuid(), 
            hostedBy: "Mahek", 
            attendees: [] 
        });
   setFormOpen(false);
}

function handleInputChange(e)
{
    const {name, value} = e.target;
    setValues({...values,[name]:value});
}

    return(
        <Segment clearing>
            <Header content={selectedEvent?'Edit Event': 'Create New Event'}/>
            <Form onSubmit={handleFormSubmit}>
                <Form.Field>
                    <input 
                    type="text" 
                    placeholder="Event Title"
                    value={values.title}
                    name="title"
                    onChange={(e) => handleInputChange(e)}
                    />
                </Form.Field>
                <Form.Field>
                    <input type="text" placeholder="Category"
                    value={values.category}
                    name="category"
                    onChange={(e) => handleInputChange(e)}/>
                </Form.Field>
                <Form.Field>
                    <input type="text" placeholder="Description" 
                    value={values.description}
                    name="description"
                    onChange={(e) => handleInputChange(e)}/>
                </Form.Field>
                <Form.Field>
                    <input type="text" placeholder="City" 
                    value={values.city}
                    name="city"
                    onChange={(e) => handleInputChange(e)}/>
                </Form.Field>
                <Form.Field>
                    <input type="text" placeholder="Venue"
                    value={values.venue}
                    name="venue"
                    onChange={(e) => handleInputChange(e)}/>
                </Form.Field>
                <Form.Field>
                    <input type="date" placeholder="Date"
                    value={values.date}
                    name="date"
                    onChange={(e) => handleInputChange(e)}/>
                </Form.Field>
                
                <Button onClick={()=> setFormOpen(false)} type="submit" content="Cancel" floated="right"/>
                <Button  type="submit" content="Submit" floated="right" positive/>
            </Form>
        </Segment>
    )
}