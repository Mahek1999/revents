import React from "react";
import { Button, Menu } from "semantic-ui-react";

export default function SignedOutMenu({setAuthenticated}) {
  return (
    <Menu.Item position="right">
      <Button onClick={() => setAuthenticated(true)} basic inverted icon="user" content="LOGIN" color="black" />
      <Button
        basic
        inverted
        icon="user"
        content="SIGNUP"
        color="black"
        style={{ marginLeft: 5 }}
      />
    </Menu.Item>
  );
}
