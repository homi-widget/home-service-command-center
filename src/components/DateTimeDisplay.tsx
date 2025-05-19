
import React from "react";
import { useUserPreferences } from "@/context/UserPreferencesContext";

interface DateTimeDisplayProps {
  date: Date | string;
  showTime?: boolean;
  showDate?: boolean;
  className?: string;
}

export const DateTimeDisplay: React.FC<DateTimeDisplayProps> = ({
  date,
  showTime = true,
  showDate = true,
  className = "",
}) => {
  const { formatDate, formatTime, formatDateTime } = useUserPreferences();
  
  if (!date) return <span className={className}>-</span>;
  
  if (showDate && showTime) {
    return <span className={className}>{formatDateTime(date)}</span>;
  } else if (showDate) {
    return <span className={className}>{formatDate(date)}</span>;
  } else if (showTime) {
    return <span className={className}>{formatTime(date)}</span>;
  }
  
  return null;
};
