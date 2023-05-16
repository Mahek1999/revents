import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button } from "semantic-ui-react";
import { decrement, increment } from "./testReducer";
import { openModal } from "../../app/common/modals/modalReducer";

export default function Sandbox()
{
    const dispatch=useDispatch();

    const data= useSelector(state => state.test.data)
    const data2= useSelector(state => state.data2)

    return(
        <>
        <h1>Test 123</h1>
        <h3>Data is {data},{data2}</h3>
        <Button onClick={() => dispatch(increment(20) )} content='Increment' color='green'/>
        <Button onClick={() => dispatch(decrement(10))} content='Decrement' color='red'/>
        <Button onClick={() => dispatch(openModal({modalType : 'TestModal', modalProps: {data}}))} content='Open Modal' color='teal'/>


        </>
    )
}