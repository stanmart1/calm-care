import React, { useState } from 'react';
import Icon from 'components/AppIcon';
import Button from 'components/ui/Button';

const BookingCalendar = ({ selectedService, onDateSelect, onTimeSelect, selectedDate, selectedTime }) => {
  const [currentMonth, setCurrentMonth] = useState(new Date());

  // Mock available dates and times
  const availableDates = [
    new Date(2025, 0, 27), // Jan 27, 2025
    new Date(2025, 0, 28), // Jan 28, 2025
    new Date(2025, 0, 29), // Jan 29, 2025
    new Date(2025, 0, 30), // Jan 30, 2025
    new Date(2025, 0, 31), // Jan 31, 2025
    new Date(2025, 1, 3),  // Feb 3, 2025
    new Date(2025, 1, 4),  // Feb 4, 2025
    new Date(2025, 1, 5),  // Feb 5, 2025
    new Date(2025, 1, 6),  // Feb 6, 2025
    new Date(2025, 1, 7),  // Feb 7, 2025
  ];

  const timeSlots = [
    { time: '9:00 AM', available: true },
    { time: '10:00 AM', available: true },
    { time: '11:00 AM', available: false },
    { time: '1:00 PM', available: true },
    { time: '2:00 PM', available: true },
    { time: '3:00 PM', available: true },
    { time: '4:00 PM', available: false },
    { time: '5:00 PM', available: true },
    { time: '6:00 PM', available: true }
  ];

  const getDaysInMonth = (date) => {
    const year = date?.getFullYear();
    const month = date?.getMonth();
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    const daysInMonth = lastDay?.getDate();
    const startingDayOfWeek = firstDay?.getDay();

    const days = [];
    
    // Add empty cells for days before the first day of the month
    for (let i = 0; i < startingDayOfWeek; i++) {
      days?.push(null);
    }
    
    // Add days of the month
    for (let day = 1; day <= daysInMonth; day++) {
      days?.push(new Date(year, month, day));
    }
    
    return days;
  };

  const isDateAvailable = (date) => {
    if (!date) return false;
    return availableDates?.some(availableDate => 
      availableDate?.toDateString() === date?.toDateString()
    );
  };

  const isDateSelected = (date) => {
    if (!date || !selectedDate) return false;
    return date?.toDateString() === selectedDate?.toDateString();
  };

  const handlePrevMonth = () => {
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1));
  };

  const handleNextMonth = () => {
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1));
  };

  const handleDateClick = (date) => {
    if (isDateAvailable(date)) {
      onDateSelect(date);
    }
  };

  const handleTimeClick = (timeSlot) => {
    if (timeSlot?.available) {
      onTimeSelect(timeSlot?.time);
    }
  };

  const monthNames = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];

  const dayNames = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

  if (!selectedService) {
    return (
      <div className="bg-card border border-border rounded-lg p-6">
        <div className="text-center text-muted-foreground">
          <Icon name="Calendar" size={48} className="mx-auto mb-4 opacity-50" />
          <h3 className="text-lg font-heading font-medium mb-2">Select a Service First</h3>
          <p className="text-sm font-body">
            Choose a therapy service to view available appointment times.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-card border border-border rounded-lg shadow-soft">
      <div className="p-6">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-lg font-heading font-semibold text-foreground">
            Book Appointment
          </h3>
          <div className="flex items-center space-x-2 text-sm text-muted-foreground">
            <Icon name="Clock" size={16} />
            <span className="font-body">{selectedService?.title}</span>
          </div>
        </div>

        {/* Calendar */}
        <div className="mb-6">
          <div className="flex items-center justify-between mb-4">
            <h4 className="text-md font-heading font-medium text-foreground">
              Select Date
            </h4>
            <div className="flex items-center space-x-2">
              <Button
                variant="ghost"
                size="sm"
                onClick={handlePrevMonth}
                iconName="ChevronLeft"
                className="w-8 h-8 p-0"
              />
              <span className="text-sm font-body font-medium text-foreground min-w-[120px] text-center">
                {monthNames?.[currentMonth?.getMonth()]} {currentMonth?.getFullYear()}
              </span>
              <Button
                variant="ghost"
                size="sm"
                onClick={handleNextMonth}
                iconName="ChevronRight"
                className="w-8 h-8 p-0"
              />
            </div>
          </div>

          <div className="grid grid-cols-7 gap-1 mb-2">
            {dayNames?.map(day => (
              <div key={day} className="text-center text-xs font-body font-medium text-muted-foreground p-2">
                {day}
              </div>
            ))}
          </div>

          <div className="grid grid-cols-7 gap-1">
            {getDaysInMonth(currentMonth)?.map((date, index) => (
              <button
                key={index}
                onClick={() => date && handleDateClick(date)}
                disabled={!date || !isDateAvailable(date)}
                className={`
                  aspect-square p-2 text-sm font-body rounded-md transition-gentle
                  ${!date ? 'invisible' : ''}
                  ${isDateAvailable(date) 
                    ? isDateSelected(date)
                      ? 'bg-primary text-primary-foreground'
                      : 'text-foreground hover:bg-muted' :'text-muted-foreground cursor-not-allowed opacity-50'
                  }
                `}
              >
                {date?.getDate()}
              </button>
            ))}
          </div>
        </div>

        {/* Time Slots */}
        {selectedDate && (
          <div>
            <h4 className="text-md font-heading font-medium text-foreground mb-4">
              Available Times
            </h4>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
              {timeSlots?.map((slot, index) => (
                <button
                  key={index}
                  onClick={() => handleTimeClick(slot)}
                  disabled={!slot?.available}
                  className={`
                    p-3 text-sm font-body rounded-md border transition-gentle
                    ${slot?.available
                      ? selectedTime === slot?.time
                        ? 'bg-primary border-primary text-primary-foreground'
                        : 'border-border text-foreground hover:bg-muted hover:border-muted-foreground' :'border-border text-muted-foreground cursor-not-allowed opacity-50'
                    }
                  `}
                >
                  {slot?.time}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Selected Summary */}
        {selectedDate && selectedTime && (
          <div className="mt-6 p-4 bg-primary/5 border border-primary/20 rounded-lg">
            <div className="flex items-start space-x-3">
              <Icon name="CheckCircle" size={20} className="text-primary mt-0.5" />
              <div>
                <h5 className="text-sm font-heading font-medium text-foreground mb-1">
                  Appointment Selected
                </h5>
                <p className="text-sm text-muted-foreground font-body">
                  {selectedService?.title} on {selectedDate?.toLocaleDateString('en-US', { 
                    weekday: 'long', 
                    year: 'numeric', 
                    month: 'long', 
                    day: 'numeric' 
                  })} at {selectedTime}
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default BookingCalendar;