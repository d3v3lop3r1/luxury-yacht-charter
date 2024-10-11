import React, { useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'


const Calendar = ({
  onSelectDate,
  selectedDate = new Date(),
  minDate,
  maxDate,
}) => {
  const [currentMonth, setCurrentMonth] = useState(new Date())

  const daysInMonth = (date) => {
    return new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate()
  }

  const firstDayOfMonth = (date) => {
    return new Date(date.getFullYear(), date.getMonth(), 1).getDay()
  }

  const formatDate = (date) => {
    return date.toLocaleDateString('en-US', { month: 'long', year: 'numeric' })
  }

  const isDateDisabled = (date) => {
    if (minDate && date < minDate) return true
    if (maxDate && date > maxDate) return true
    return false
  }

  const handlePrevMonth = () => {
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1, 1))
  }

  const handleNextMonth = () => {
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1, 1))
  }

  const handleSelectDate = (day) => {
    const selectedDate = new Date(currentMonth.getFullYear(), currentMonth.getMonth(), day)
    if (!isDateDisabled(selectedDate)) {
      onSelectDate(selectedDate)
    }
  }

  const renderCalendarDays = () => {
    const days = []
    const totalDays = daysInMonth(currentMonth)
    const firstDay = firstDayOfMonth(currentMonth)

    for (let i = 0; i < firstDay; i++) {
      days.push(<div key={`empty-${i}`} className="h-10"></div>)
    }

    for (let day = 1; day <= totalDays; day++) {
      const date = new Date(currentMonth.getFullYear(), currentMonth.getMonth(), day)
      const isSelected = selectedDate && date.toDateString() === selectedDate.toDateString()
      const isDisabled = isDateDisabled(date)

      days.push(
        <button
          key={day}
          onClick={() => handleSelectDate(day)}
          disabled={isDisabled}
          className={`h-10 w-10 rounded-full flex items-center justify-center text-sm ${
            isSelected
              ? 'bg-blue-600 text-white'
              : isDisabled
              ? 'text-gray-400 cursor-not-allowed'
              : 'hover:bg-gray-200'
          }`}
        >
          {day}
        </button>
      )
    }

    return days
  }

  return (
    <div className="w-full max-w-sm bg-white shadow-lg rounded-lg overflow-hidden">
      <div className="flex justify-between items-center bg-gray-100 px-4 py-2">
        <button onClick={handlePrevMonth} className="p-1 rounded-full hover:bg-gray-200">
          <ChevronLeft className="h-6 w-6" />
        </button>
        <h2 className="font-semibold text-lg">{formatDate(currentMonth)}</h2>
        <button onClick={handleNextMonth} className="p-1 rounded-full hover:bg-gray-200">
          <ChevronRight className="h-6 w-6" />
        </button>
      </div>
      <div className="p-4">
        <div className="grid grid-cols-7 gap-1 mb-2">
          {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((day) => (
            <div key={day} className="text-center text-sm font-medium text-gray-700">
              {day}
            </div>
          ))}
        </div>
        <div className="grid grid-cols-7 gap-1">{renderCalendarDays()}</div>
      </div>
    </div>
  )
}

export default Calendar