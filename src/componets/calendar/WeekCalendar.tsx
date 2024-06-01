import React from 'react';
import {
  CalendarProvider,
  WeekCalendar as RNWeekCalendar,
} from 'react-native-calendars';

const WeekCalendar = () => {
  return (
    <CalendarProvider date={'2024-06-01'}>
      <RNWeekCalendar initialDate={new Date().toISOString().split('T')[0]} />
    </CalendarProvider>
  );
};

export default WeekCalendar;
