import React, { useState } from 'react';
import Icon from 'components/AppIcon';
import Button from 'components/ui/Button';

const BookingsSection = () => {
  const [viewMode, setViewMode] = useState('week'); // 'week', 'month'
  const [selectedDate, setSelectedDate] = useState(new Date());

  const bookings = [
    {
      id: 1,
      clientName: 'Sarah Johnson',
      date: '2025-08-26',
      time: '09:00',
      duration: 50,
      type: 'Individual Therapy',
      status: 'confirmed',
      isOnline: false,
      notes: 'Anxiety management follow-up'
    },
    {
      id: 2,
      clientName: 'Michael Chen',
      date: '2025-08-26',
      time: '10:30',
      duration: 50,
      type: 'Couples Therapy',
      status: 'pending',
      isOnline: true,
      notes: 'First session intake'
    },
    {
      id: 3,
      clientName: 'Emily Rodriguez',
      date: '2025-08-26',
      time: '14:00',
      duration: 50,
      type: 'EMDR Therapy',
      status: 'confirmed',
      isOnline: false,
      notes: 'Trauma processing session 4'
    },
    {
      id: 4,
      clientName: 'David Thompson',
      date: '2025-08-27',
      time: '15:30',
      duration: 50,
      type: 'Individual Therapy',
      status: 'confirmed',
      isOnline: true,
      notes: 'Depression assessment'
    },
    {
      id: 5,
      clientName: 'Lisa Wang',
      date: '2025-08-28',
      time: '16:00',
      duration: 50,
      type: 'Individual Therapy',
      status: 'confirmed',
      isOnline: false,
      notes: 'Anxiety and panic disorder'
    }
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case 'confirmed':
        return 'bg-success/10 text-success border-success/20';
      case 'pending':
        return 'bg-warning/10 text-warning border-warning/20';
      case 'cancelled':
        return 'bg-error/10 text-error border-error/20';
      case 'completed':
        return 'bg-muted/10 text-muted-foreground border-muted/20';
      default:
        return 'bg-muted/10 text-muted-foreground border-muted/20';
    }
  };

  const weekDays = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
  const timeSlots = [
    '08:00', '09:00', '10:00', '11:00', '12:00', '13:00', 
    '14:00', '15:00', '16:00', '17:00', '18:00', '19:00'
  ];

  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-3xl font-heading font-bold text-foreground">
            Booking Management
          </h1>
          <p className="text-muted-foreground font-body mt-1">
            Manage appointments, view calendar, and handle scheduling conflicts.
          </p>
        </div>
        <div className="flex gap-2">
          <Button
            variant="outline"
            size="sm"
            iconName="Download"
            iconPosition="left"
          >
            Export Schedule
          </Button>
          <Button
            size="sm"
            iconName="Plus"
            iconPosition="left"
            className="bg-primary hover:bg-primary/90"
          >
            New Booking
          </Button>
        </div>
      </div>
      {/* Calendar Controls */}
      <div className="bg-card rounded-lg border border-border p-6 shadow-soft">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <div className="flex items-center space-x-4">
            <div className="flex bg-muted rounded-lg p-1">
              <button
                onClick={() => setViewMode('week')}
                className={`px-3 py-2 text-sm font-body rounded-md transition-colors ${
                  viewMode === 'week' ?'bg-background text-foreground shadow-sm' :'text-muted-foreground hover:text-foreground'
                }`}
              >
                Week View
              </button>
              <button
                onClick={() => setViewMode('month')}
                className={`px-3 py-2 text-sm font-body rounded-md transition-colors ${
                  viewMode === 'month' ?'bg-background text-foreground shadow-sm' :'text-muted-foreground hover:text-foreground'
                }`}
              >
                Month View
              </button>
            </div>
            <h2 className="text-lg font-heading font-semibold text-foreground">
              Week of Aug 25 - Aug 31, 2025
            </h2>
          </div>
          
          <div className="flex items-center space-x-2">
            <Button variant="outline" size="sm" iconName="ChevronLeft" />
            <Button variant="outline" size="sm">
              Today
            </Button>
            <Button variant="outline" size="sm" iconName="ChevronRight" />
          </div>
        </div>
      </div>
      {/* Calendar Grid */}
      <div className="bg-card rounded-lg border border-border shadow-soft overflow-hidden">
        <div className="overflow-x-auto">
          <div className="grid grid-cols-8 min-w-full">
            {/* Time column header */}
            <div className="p-4 border-r border-border bg-muted/30">
              <span className="text-sm font-heading font-semibold text-muted-foreground">
                Time
              </span>
            </div>
            
            {/* Day headers */}
            {weekDays?.map((day, index) => (
              <div key={day} className="p-4 border-r border-border bg-muted/30 text-center">
                <div className="text-sm font-heading font-semibold text-foreground">
                  {day}
                </div>
                <div className="text-xs text-muted-foreground font-body mt-1">
                  Aug {25 + index}
                </div>
              </div>
            ))}
          </div>

          {/* Time slots grid */}
          {timeSlots?.map((time) => (
            <div key={time} className="grid grid-cols-8 border-t border-border">
              {/* Time label */}
              <div className="p-4 border-r border-border text-center bg-muted/10">
                <span className="text-sm font-mono text-muted-foreground">
                  {time}
                </span>
              </div>
              
              {/* Day cells */}
              {weekDays?.map((day, dayIndex) => {
                const dayBookings = bookings?.filter(booking => {
                  const bookingDate = new Date(booking.date);
                  const cellDate = new Date(2025, 7, 25 + dayIndex); // Aug 25 + dayIndex
                  return bookingDate?.toDateString() === cellDate?.toDateString() &&
                         booking?.time === time;
                });

                return (
                  <div
                    key={`${day}-${time}`}
                    className="p-2 border-r border-border min-h-[80px] hover:bg-muted/20 transition-colors relative"
                  >
                    {dayBookings?.map((booking) => (
                      <div
                        key={booking?.id}
                        className={`p-2 rounded-md text-xs mb-1 cursor-pointer hover:shadow-sm transition-shadow ${getStatusColor(booking?.status)}`}
                      >
                        <div className="font-heading font-medium truncate">
                          {booking?.clientName}
                        </div>
                        <div className="flex items-center justify-between mt-1">
                          <span className="font-body">
                            {booking?.duration}min
                          </span>
                          <Icon
                            name={booking?.isOnline ? "Video" : "MapPin"}
                            size={10}
                            className={booking?.isOnline ? "text-primary" : "text-success"}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                );
              })}
            </div>
          ))}
        </div>
      </div>
      {/* Booking Statistics */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-card rounded-lg border border-border p-6 shadow-soft">
          <div className="flex items-center space-x-3">
            <div className="p-3 bg-primary/10 rounded-lg">
              <Icon name="Calendar" size={24} className="text-primary" />
            </div>
            <div>
              <p className="text-2xl font-heading font-bold text-foreground">12</p>
              <p className="text-sm text-muted-foreground font-body">This Week</p>
            </div>
          </div>
        </div>
        
        <div className="bg-card rounded-lg border border-border p-6 shadow-soft">
          <div className="flex items-center space-x-3">
            <div className="p-3 bg-success/10 rounded-lg">
              <Icon name="CheckCircle" size={24} className="text-success" />
            </div>
            <div>
              <p className="text-2xl font-heading font-bold text-foreground">10</p>
              <p className="text-sm text-muted-foreground font-body">Confirmed</p>
            </div>
          </div>
        </div>
        
        <div className="bg-card rounded-lg border border-border p-6 shadow-soft">
          <div className="flex items-center space-x-3">
            <div className="p-3 bg-warning/10 rounded-lg">
              <Icon name="Clock" size={24} className="text-warning" />
            </div>
            <div>
              <p className="text-2xl font-heading font-bold text-foreground">2</p>
              <p className="text-sm text-muted-foreground font-body">Pending</p>
            </div>
          </div>
        </div>
        
        <div className="bg-card rounded-lg border border-border p-6 shadow-soft">
          <div className="flex items-center space-x-3">
            <div className="p-3 bg-success/10 rounded-lg">
              <Icon name="Video" size={24} className="text-primary" />
            </div>
            <div>
              <p className="text-2xl font-heading font-bold text-foreground">5</p>
              <p className="text-sm text-muted-foreground font-body">Online Sessions</p>
            </div>
          </div>
        </div>
      </div>
      {/* Upcoming Bookings List */}
      <div className="bg-card rounded-lg border border-border p-6 shadow-soft">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-heading font-semibold text-foreground">
            Upcoming Appointments
          </h2>
          <Button variant="ghost" size="sm" iconName="MoreHorizontal" />
        </div>
        
        <div className="space-y-4">
          {bookings?.slice(0, 3)?.map((booking) => (
            <div
              key={booking?.id}
              className="flex items-center justify-between p-4 border border-border rounded-lg hover:bg-muted/20 transition-colors"
            >
              <div className="flex items-center space-x-4">
                <div className="text-center min-w-0">
                  <p className="text-sm font-mono font-semibold text-foreground">
                    {booking?.time}
                  </p>
                  <p className="text-xs text-muted-foreground font-body">
                    {new Date(booking?.date)?.toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}
                  </p>
                </div>
                
                <div className="flex-1 min-w-0">
                  <p className="font-heading font-medium text-foreground">
                    {booking?.clientName}
                  </p>
                  <p className="text-sm text-muted-foreground font-body">
                    {booking?.type} • {booking?.duration}min
                  </p>
                </div>
                
                <div className="flex items-center space-x-2">
                  <span className={`inline-flex items-center px-2 py-1 text-xs font-body rounded-full border ${getStatusColor(booking?.status)}`}>
                    {booking?.status}
                  </span>
                  <Icon
                    name={booking?.isOnline ? "Video" : "MapPin"}
                    size={16}
                    className={booking?.isOnline ? "text-primary" : "text-success"}
                  />
                </div>
              </div>
              
              <div className="flex space-x-1 ml-4">
                <Button variant="ghost" size="xs" iconName="Edit" />
                <Button variant="ghost" size="xs" iconName="Trash2" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BookingsSection;