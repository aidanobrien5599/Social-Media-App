import {Label} from 'semantic-ui-react';
import React from 'react';

export default function WarningLabel(props){
    console.log(props.isVisible);
    return props.isVisible && <Label>{props.text}</Label>
}