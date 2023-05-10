import React from "react";
import { Button, Container, Menu } from "semantic-ui-react";
export default function NavBar({setFormOpen})
{
return(

    <Menu inverted fixed="top">
        <Container>
            <Menu.Item header>
                <img src="/assets/logo.png" alt="logo"  style={{marginRight: 10}}/ >
                Re-vents
            </Menu.Item>
            <Menu.Item name="Events"></Menu.Item>
            <Menu.Item>
                <Button onClick={()=> setFormOpen(true)} positive inverted content='Create Event'/>
            </Menu.Item>
            <Menu.Item  position="right">
            <Button basic inverted icon='user' content='LOGIN' color='black'/>
            <Button basic inverted icon='user' content='SIGNUP' color='black' style={{marginLeft: 5}}/>
            </Menu.Item>
        </Container>
    </Menu>
)
}