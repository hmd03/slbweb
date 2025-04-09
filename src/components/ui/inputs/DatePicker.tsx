import React, { useState, useRef, useEffect } from 'react';
import dayjs from 'dayjs';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface DatePickerProps {
  value: dayjs.Dayjs | null;
  onChange: (date: dayjs.Dayjs) => void;
}

const DatePicker: React.FC<DatePickerProps> = ({ value, onChange }) => {
  const [currentMonth, setCurrentMonth] = useState(dayjs());
  const [showCalendar, setShowCalendar] = useState(false);
  const calendarRef = useRef<HTMLDivElement>(null);

  const daysInMonth = currentMonth.daysInMonth();
  const startDay = currentMonth.startOf('month').day();
  const today = dayjs();

  const handleDateClick = (date: dayjs.Dayjs) => {
    onChange(date);
    setShowCalendar(false);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (calendarRef.current && !calendarRef.current.contains(event.target as Node)) {
      setShowCalendar(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className="relative w-64" ref={calendarRef}>
      <input
        type="text"
        readOnly
        value={value ? value.format('YYYY-MM-DD') : ''}
        onClick={() => setShowCalendar(!showCalendar)}
        className="w-full px-4 py-2 border rounded-lg cursor-pointer"
        placeholder="날짜 선택"
      />

      {showCalendar && (
        <div className="absolute top-12 z-10 w-full bg-white border rounded-lg shadow p-4">
          <div className="flex justify-between items-center mb-2">
            <button onClick={() => setCurrentMonth(currentMonth.subtract(1, 'month'))}>
              <ChevronLeft className="w-5 h-5" />
            </button>
            <span className="font-semibold">{currentMonth.format('YYYY년 MM월')}</span>
            <button onClick={() => setCurrentMonth(currentMonth.add(1, 'month'))}>
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>

          <div className="grid grid-cols-7 text-center text-sm text-gray-600 mb-1">
            {['일', '월', '화', '수', '목', '금', '토'].map((d) => (
              <div key={d}>{d}</div>
            ))}
          </div>

          <div className="grid grid-cols-7 gap-1 text-center">
            {Array.from({ length: startDay }).map((_, i) => (
              <div key={i} className="py-1" />
            ))}
            {Array.from({ length: daysInMonth }).map((_, i) => {
              const date = currentMonth.date(i + 1);
              const isToday = date.isSame(today, 'day');
              const isSelected = value?.isSame(date, 'day');

              return (
                <button
                  key={i}
                  onClick={() => handleDateClick(date)}
                  className={`py-1 rounded-full hover:bg-blue-100 transition-all
                    ${isToday ? 'text-red-500 font-bold' : ''}
                    ${isSelected ? 'bg-blue-500 text-white font-semibold' : ''}`}
                >
                  {i + 1}
                </button>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};

export default DatePicker;
