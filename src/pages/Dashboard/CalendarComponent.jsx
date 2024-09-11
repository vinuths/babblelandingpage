import React, { useEffect, useState, useRef } from 'react';
import dayjs from 'dayjs';
import Badge from '@mui/material/Badge';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { PickersDay } from '@mui/x-date-pickers/PickersDay';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';
import { Paper, Typography, Box } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { checklistCalenderGet } from '../../store/actions/otherActions';
import './Graph.css';

function ServerDay(props) {
  const { highlightedDays = [], day, outsideCurrentMonth, ...other } = props;
  const formattedDate = day.format('YYYY-MM-DD');
  const isSelected = !outsideCurrentMonth && highlightedDays.includes(formattedDate);

  return (
    <Badge
      key={formattedDate}
      overlap="circular"
      badgeContent={isSelected ? <div style={{ width: 8, height: 8, borderRadius: '50%', backgroundColor: '#013879' }} /> : undefined}
    >
      <PickersDay {...other} outsideCurrentMonth={outsideCurrentMonth} day={day} />
    </Badge>
  );
}

export default function DateCalendarServerRequest() {
  const dispatch = useDispatch();
  const requestAbortController = useRef(null);
  const { events } = useSelector(state => ({
    events: state.ChecklistInfoCalender.calendercheck || [],
  }));

  const [highlightedDays, setHighlightedDays] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [selectedDate, setSelectedDate] = useState(dayjs()); // Auto-select the current date
  const [eventDetails, setEventDetails] = useState(null);

  useEffect(() => {
    dispatch(checklistCalenderGet());
  }, [dispatch]);

  useEffect(() => {
    if (events.length > 0) {
      const dueDates = events.map(event => event.dueDate);
      setHighlightedDays(dueDates);
    }
  }, [events]);

  useEffect(() => {
    const formattedDate = dayjs().format('YYYY-MM-DD');
    setSelectedDate(dayjs(formattedDate));
    const event = events.find(event => event.dueDate === formattedDate);
    setEventDetails(event ? event.extendedProps : null);
  }, [events]);

  const handleMonthChange = (date) => {
    if (requestAbortController.current) {
      requestAbortController.current.abort();
    }

    const month = dayjs(date).format('YYYY-MM');
    const hasDueDatesInMonth = highlightedDays.some(day => day.startsWith(month));

    setIsLoading(hasDueDatesInMonth && highlightedDays.length === 0);
  };

  const handleDateChange = (date) => {
    const formattedDate = dayjs(date).format('YYYY-MM-DD');
    setSelectedDate(dayjs(formattedDate));
    const event = events.find(event => event.dueDate === formattedDate);
    setEventDetails(event ? event.extendedProps : null);
  };

  const renderLoading = (date) => {
    const selectedDate = dayjs(date).format('YYYY-MM-DD');
    return highlightedDays.includes(selectedDate) && isLoading ? <div style={{ width: 8, height: 8, borderRadius: '50%', backgroundColor: '#013879' }} /> : null;
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <div className='chart-container' style={{ padding: '20px', maxWidth: '800px', margin: 'auto' }}>
        <h2 className='chart-heading'>Due Date Calender :</h2>
        <br/>
        <DateCalendar
          value={selectedDate}
          style={{ boxShadow: '10px 10px 10px lightgray' }}
          onMonthChange={handleMonthChange}
          onChange={handleDateChange}
          renderLoading={renderLoading}
          slots={{
            day: ServerDay,
          }}
          slotProps={{
            day: {
              highlightedDays,
            },
          }}
          sx={{
            '& .MuiPickersDay-root': {
              '&:hover': {
                backgroundColor: '#013879',
                color: 'white',
              },
            },
            '& .MuiPickersDay-root.Mui-selected': {
              backgroundColor: '#013879',
              color: 'white',
            },
            '& .MuiCalendarPickerHeader-root': {
              backgroundColor: '#013879',
              color: 'white',
            },
            border: '2px solid #013879',
            borderRadius: '8px',
            boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
          }}
        />
        {eventDetails && (
            <Paper  style={{ width:'100%', marginTop: '20px', padding: '10px', backgroundColor: '#013879', color: 'white', maxHeight: '200px', overflowY: 'auto' }}>
            <Typography style={{textAlign: 'center'}}variant="h6">{selectedDate.format('DD-MMMM-YYYY')}</Typography>
              <table><ul><li>
            {/* <Typography>Month: {selectedDate.format('MMMM')}</Typography> */}
            {/* <Typography>Year: {selectedDate.format('YYYY')}</Typography> */}
            <Box marginTop={1}>
              <Typography><strong>{eventDetails.state}</strong> {eventDetails.act}</Typography>
              {/* <Typography><strong>State:</strong> {eventDetails.state}</Typography> */}
              <Typography>{eventDetails.complianceType}</Typography>
            </Box>
          </li></ul></table>
          </Paper>
        )}
      </div>
    </LocalizationProvider>
  );
}
