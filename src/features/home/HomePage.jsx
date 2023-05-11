import React from "react";
import { Container, Header, Segment, Image, Button, Icon } from "semantic-ui-react";

export default function HomePage()
{
    return(
        <Segment inverted textAlign="center" vertical className="masthead">
            <Container>
                <Header as="h1" inverted>
                    <Image size="massive" src="/assets/logo.png" style={{marginBottom: 12}}/>
                    Re-vents
                </Header>
                <Button href="/events" size='huge' inverted>
                    Get Started!
                    <Icon name="right arrow" inverted/>
                </Button>
            </Container>
        </Segment>
    )
}