import React, { useState } from 'react';
import { View, Button, Modal } from 'react-native';
import DatePicker from 'react-native-date-picker';

const MyDatePicker = (props) => {
    const {
      mode = 'calendar', // Folosește valorile implicite aici
      ...rest
    } = props;
  
    return <DatePicker mode={mode} {...rest} />;
  };
  
  export default MyDatePicker;
  
