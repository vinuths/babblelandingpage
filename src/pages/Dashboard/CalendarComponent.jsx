import React, { useEffect, useState, useMemo } from 'react';
import dayjs from 'dayjs';
import Badge from '@mui/material/Badge';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { PickersDay } from '@mui/x-date-pickers/PickersDay';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';
import { Paper, Typography, Box, Divider } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { checklistCalenderGet } from '../../store/actions/otherActions';
import './Calendar.css';

const ServerDay = ({ highlightedDays = [], day, outsideCurrentMonth, ...other }) => {
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
};

const DateCalendarServerRequest = () => {
  const dispatch = useDispatch();
  const ChecklistInfoCalender = useSelector((state) => state.ChecklistInfoCalender || {});
  const events = ChecklistInfoCalender.calendercheck || [];

  const [selectedDate, setSelectedDate] = useState(dayjs());
  const [highlightedDays, setHighlightedDays] = useState([]);
  const [fetchedMonthYear, setFetchedMonthYear] = useState({
    month: selectedDate.month() + 1,
    year: selectedDate.year()
  });

  // 🔹 Fetch checklist data when the month or year changes
  useEffect(() => {
    const month = selectedDate.month() + 1;
    const year = selectedDate.year();
    if (fetchedMonthYear.month !== month || fetchedMonthYear.year !== year) {
      dispatch(checklistCalenderGet({ month, year }));
      setFetchedMonthYear({ month, year });
    }
  }, [dispatch, selectedDate, fetchedMonthYear]);

  // 🔹 Update highlighted days when events change
  useEffect(() => {
    if (events.length > 0) {
      const dueDates = events.map(event => event.dueDate);
      setHighlightedDays(dueDates);
    }
  }, [events]);

  // 🔹 Get all event details matching selectedDate
  const selectedEvents = useMemo(() => {
    return events.filter(event => event.dueDate === selectedDate.format('YYYY-MM-DD'));
  }, [events, selectedDate]);

  const handleMonthChange = (date) => {
    const newDate = dayjs(date);
    if (fetchedMonthYear.month !== newDate.month() + 1 || fetchedMonthYear.year !== newDate.year()) {
      setSelectedDate(newDate);
    }
  };

  const handleDateChange = (date) => {
    setSelectedDate(dayjs(date));
  };

  // 🔹 Debug logs for Redux updates
  useEffect(() => {
    console.log("Redux Store Data:", ChecklistInfoCalender);
    console.log("Events:", events);
    console.log("Selected Date Events:", selectedEvents);
  }, [ChecklistInfoCalender, selectedEvents]);

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <div className='chart-container' style={{border: '2px solid rgb(126, 126, 126)', padding: '20px', maxWidth: '1000px', margin: 'auto', backgroundColor: 'white',marginTop:'30px', borderRadius:'8px' }}>
        <h2 className='chart-heading'>Compliance Calendar</h2>
        <br />
        <div className="row">
          <div className="col-sm-6"><DateCalendar
            value={selectedDate}
            style={{ boxShadow: '10px 10px 10px lightgray' }}
            onMonthChange={handleMonthChange}
            onChange={handleDateChange}
            slots={{ day: ServerDay }}
            slotProps={{ day: { highlightedDays } }}
            sx={{
              '& .MuiPickersDay-root': {
                '&:hover': { backgroundColor: '#013879', color: 'white' },
              },
              '& .MuiPickersDay-root.Mui-selected': { backgroundColor: '#013879', color: 'white' },
              '& .MuiCalendarPickerHeader-root': { backgroundColor: '#013879', color: 'white' },
              '& .MuiPickersCalendarHeader-label': { color: '#013879', fontWeight:'700'},
              border: '2px solid #013879',
              borderRadius: '8px',
              boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
              width: "80%"
            }}
          />
          </div>
          <div className="col-sm-6" sty>
            {selectedEvents.length > 0 ? (
             <Paper
             style={{
               width: '90%', // Fixed typo ('8w0%' -> '80%')
               padding: '10px',
               backgroundColor: 'white',
               color: '#013879',
               maxHeight: '333px',
               overflowY: 'auto',
               border: '2px solid #013879',
               borderRadius: '8px',
               boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
               scrollbarWidth: 'none', // Hide scrollbar (Firefox)
               msOverflowStyle: 'none', // Hide scrollbar (IE/Edge)
             }}
             className="custom-scrollbar"
           >
           
                <Typography style={{ textAlign: 'center', backgroundColor: '#013879', color: 'white', borderRadius: '8px' }} variant="h6">
                  {selectedDate.format('DD-MMMM-YYYY')}
                </Typography>
                <Box marginTop={1}>
                  {selectedEvents.length > 0 && (
                    selectedEvents.map((event, index) => (
                      <Box key={index} marginBottom={1} padding={1}>
                        <Typography variant="body1">
                          <strong>State:</strong> {event.state}
                        </Typography>
                        <Typography variant="body1">
                          <strong>Act:</strong> {event.act}
                        </Typography>
                        <Typography variant="body2">
                          <strong>Compliance:</strong> {event.compliance}
                        </Typography>
                        {/* <Typography variant="body2">
                          <strong>Form:</strong> {event.formType}
                        </Typography> */}
                        {index !== selectedEvents.length - 1 && (
                          // <Divider sx={{ backgroundColor: 'white', margin: '10px 0' }} />
                          <hr />
                        )}
                      </Box>
                    ))
                  )}
                </Box>

              </Paper>
            ) : (
              <Box padding={2} textAlign="center"  marginTop="25%">
              <Typography sx={{ fontStyle: 'italic',  color: '#013879' }}>
                No Due Dates for the Selected Day
              </Typography>
            </Box>
            )}
          </div>
        </div>


      </div>
    </LocalizationProvider>
  );
};

export default DateCalendarServerRequest;
