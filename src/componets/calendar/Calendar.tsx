import React, {useState} from 'react';
import {StyleSheet} from 'react-native';
import {Calendar as RNCalendar} from 'react-native-calendars';
import LeftIcon from '../assets/vectors/left-icon.svg';
import RightIcon from '../assets/vectors/right-icon.svg';
import dayjs from 'dayjs';

const Calendar = () => {
  const [selectedDate, setSelectedDate] = useState(
    dayjs().format('YYYY-MM-DD'),
  );
  return (
    <RNCalendar
      style={styles.calendar}
      theme={{
        todayTextColor: '#393F46',
        textDayFontSize: 14,
        textDayFontWeight: 'regular',
        textMonthFontSize: 20,
        textMonthFontWeight: 'medium',
        textSectionTitleColor: 'rgba(138, 138, 138, 1)',
        selectedDotColor: '#608FFF',
      }}
      initialDate={selectedDate}
      onDayPress={day => {
        setSelectedDate(day.dateString);
      }}
      hideExtraDays={true}
      monthFormat={'M월'}
      onMonthChange={month => {
        console.log(month);
      }}
      renderArrow={direction =>
        direction === 'left' ? <LeftIcon /> : <RightIcon />
      }
      markedDates={{
        [selectedDate]: {
          selected: true,
          marked: true,
          selectedColor: '#608FFF',
        },
      }}
      // dayComponent={({date, state}) => {
      //   return <LeftIcon />;
      // }}
    />
  );
};

export default Calendar;

const styles = StyleSheet.create({
  calendar: {
    paddingTop: 54,
    paddingBottom: 30,
    paddingLeft: 20,
    paddingRight: 20,
  },
});
