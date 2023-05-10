import React from "react";
import { Button, Form, Header, Segment } from "semantic-ui-react";
export default function EventForm({setFormOpen})
{
    return(
        <Segment clearing>
            <Header content='Create New Event'/>
            <Form>
                <Form.Field>
                    <input type="text" placeholder="Event Title"/>
                </Form.Field>
                <Form.Field>
                    <input type="text" placeholder="Category"/>
                </Form.Field>
                <Form.Field>
                    <input type="text" placeholder="Description"/>
                </Form.Field>
                <Form.Field>
                    <input type="text" placeholder="City"/>
                </Form.Field>
                <Form.Field>
                    <input type="text" placeholder="Venue"/>
                </Form.Field>
                <Form.Field>
                    <input type="date" placeholder="Date"/>
                </Form.Field>
                
                <Button onClick={()=> setFormOpen(false)} type="submit" content="Cancel" floated="right"/>
                <Button  type="submit" content="Submit" floated="right" positive/>
            </Form>
        </Segment>
    )
}