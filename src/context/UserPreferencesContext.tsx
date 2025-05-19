
import React, { createContext, useContext, useState, useEffect } from "react";

export type DateFormat = "DD/MM/YYYY" | "MM/DD/YYYY" | "YYYY-MM-DD";
export type TimeFormat = "24h" | "12h";
export type Currency = "EUR" | "USD" | "GBP" | "CAD" | "JPY" | "AUD";

interface UserPreferences {
  timezone: string;
  dateFormat: DateFormat;
  timeFormat: TimeFormat;
  currency: Currency;
  locale: string;
}

interface UserPreferencesContextType {
  preferences: UserPreferences;
  updatePreferences: (newPreferences: Partial<UserPreferences>) => void;
  formatDate: (date: Date | string) => string;
  formatTime: (date: Date | string) => string;
  formatDateTime: (date: Date | string) => string;
  formatCurrency: (amount: number) => string;
}

const defaultPreferences: UserPreferences = {
  timezone: "Europe/Paris",
  dateFormat: "DD/MM/YYYY",
  timeFormat: "24h",
  currency: "EUR",
  locale: "fr-FR"
};

const UserPreferencesContext = createContext<UserPreferencesContextType | undefined>(undefined);

export const UserPreferencesProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [preferences, setPreferences] = useState<UserPreferences>(() => {
    // Essayer de charger les préférences depuis localStorage
    const savedPreferences = localStorage.getItem('userPreferences');
    return savedPreferences ? JSON.parse(savedPreferences) : defaultPreferences;
  });

  useEffect(() => {
    // Sauvegarder les préférences dans localStorage quand elles changent
    localStorage.setItem('userPreferences', JSON.stringify(preferences));
  }, [preferences]);

  const updatePreferences = (newPreferences: Partial<UserPreferences>) => {
    setPreferences(prev => ({
      ...prev,
      ...newPreferences
    }));
  };

  // Fonction pour formater une date selon les préférences
  const formatDate = (date: Date | string) => {
    const d = typeof date === 'string' ? new Date(date) : date;
    
    if (isNaN(d.getTime())) {
      return 'Date invalide';
    }

    const day = d.getDate().toString().padStart(2, '0');
    const month = (d.getMonth() + 1).toString().padStart(2, '0');
    const year = d.getFullYear();

    switch (preferences.dateFormat) {
      case 'DD/MM/YYYY':
        return `${day}/${month}/${year}`;
      case 'MM/DD/YYYY':
        return `${month}/${day}/${year}`;
      case 'YYYY-MM-DD':
        return `${year}-${month}-${day}`;
      default:
        return `${day}/${month}/${year}`;
    }
  };

  // Fonction pour formater une heure selon les préférences
  const formatTime = (date: Date | string) => {
    const d = typeof date === 'string' ? new Date(date) : date;
    
    if (isNaN(d.getTime())) {
      return 'Heure invalide';
    }

    const hours = d.getHours();
    const minutes = d.getMinutes().toString().padStart(2, '0');

    if (preferences.timeFormat === '12h') {
      const period = hours >= 12 ? 'PM' : 'AM';
      const hours12 = hours % 12 || 12;
      return `${hours12}:${minutes} ${period}`;
    } else {
      return `${hours.toString().padStart(2, '0')}:${minutes}`;
    }
  };

  // Fonction pour formater date et heure
  const formatDateTime = (date: Date | string) => {
    const d = typeof date === 'string' ? new Date(date) : date;
    return `${formatDate(d)} ${formatTime(d)}`;
  };

  // Fonction pour formater un montant selon la devise
  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat(preferences.locale || 'fr-FR', {
      style: 'currency',
      currency: preferences.currency || 'EUR'
    }).format(amount);
  };

  return (
    <UserPreferencesContext.Provider value={{ 
      preferences, 
      updatePreferences,
      formatDate,
      formatTime,
      formatDateTime,
      formatCurrency
    }}>
      {children}
    </UserPreferencesContext.Provider>
  );
};

export const useUserPreferences = () => {
  const context = useContext(UserPreferencesContext);
  if (context === undefined) {
    throw new Error('useUserPreferences must be used within a UserPreferencesProvider');
  }
  return context;
};
