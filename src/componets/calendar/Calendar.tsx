import React, {useState} from 'react';
import {Calendar as RNCalendar} from 'react-native-calendars';
import LeftIcon from '../../assets/vectors/left-icon.svg';
import RightIcon from '../../assets/vectors/right-icon.svg';
import dayjs from 'dayjs';
import {Text} from 'react-native';
import styled from 'styled-components/native';

const Calendar = () => {
  const [selectedDate, setSelectedDate] = useState(
    dayjs().format('YYYY-MM-DD'),
  );

  return (
    <RNCalendar
      // eslint-disable-next-line react/no-unstable-nested-components
      dayComponent={({date}) => {
        if (!date) {
          return;
        }
        return (
          <DateBox
            selected={date.dateString === selectedDate}
            onPress={() => {
              setSelectedDate(date.dateString);
            }}>
            {date.dateString === dayjs().format('YYYY-MM-DD') ? (
              <>
                <ImgText>{date.day}</ImgText>
                <ImgBox
                  source={require('../../assets/image/mock-image.png')}
                  resizeMode="cover"
                />
              </>
            ) : (
              <Text>{date.day}</Text>
            )}
          </DateBox>
        );
      }}
      // eslint-disable-next-line react-native/no-inline-styles
      style={{
        marginTop: 30,
        paddingLeft: 20,
        paddingRight: 20,
        height: 390,
      }}
      theme={{
        todayTextColor: '#393F46',
        textDayFontSize: 14,
        textDayFontWeight: 'regular',
        textMonthFontSize: 20,
        textMonthFontWeight: 'bold',
        textSectionTitleColor: 'rgba(138, 138, 138, 1)',
        selectedDotColor: '#608FFF',
        weekVerticalMargin: 2,
      }}
      initialDate={selectedDate}
      hideExtraDays={true}
      monthFormat={'yyyy년 M월'}
      onMonthChange={month => {
        setSelectedDate(month.dateString);
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
    />
  );
};

export default Calendar;

interface DateBoxProps {
  selected: boolean;
}

const DateBox = styled.TouchableOpacity<DateBoxProps>`
  height: 45px;
  width: 45px;
  background-color: #f6f7f8;
  justify-content: center;
  align-items: center;
  border-radius: 12px;
  border-width: 2px;
  border-color: ${props => (props.selected ? '#608FFF' : '#F6F7F8')};
`;

const ImgBox = styled.Image`
  border-radius: 10px;
  width: 42px;
  height: 42px;
`;

const ImgText = styled.Text`
  position: absolute;
  z-index: 2;
  color: #ffffff;
  font-size: 14px;
`;
