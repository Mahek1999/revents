import React from "react";
import { useDispatch } from "react-redux";
import { Button, Menu } from "semantic-ui-react";
import { openModal } from "../../app/common/modals/modalReducer";

export default function SignedOutMenu({setAuthenticated}) {
  const dispatch=useDispatch();
  return (
    <Menu.Item position="right">
      <Button onClick={() => dispatch(openModal({modalType: 'LoginForm'}))} basic inverted icon="user" content="LOGIN" color="black" />
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
