import React from 'react';
import { Switch } from 'react-native-paper';

const MySwitch = ({ value, onValueChange }) => {
  return (
    <Switch value={value} onValueChange={onValueChange} />
  );
};
export default MySwitch;

