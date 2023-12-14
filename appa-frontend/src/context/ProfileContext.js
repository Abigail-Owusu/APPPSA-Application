// ProfileContext.js
import React, { createContext, useContext, useState, useEffect } from 'react';

const ProfileContext = createContext();

export const useProfile = () => {
  const context = useContext(ProfileContext);
  if (!context) {
    throw new Error('useProfile must be used within a ProfileProvider');
  }
  return context;
};

export const ProfileProvider = ({ children }) => {
  const [profileData, setProfileData] = useState(() => {
    const storedProfileData = localStorage.getItem('profileData');
    return storedProfileData ? JSON.parse(storedProfileData) : null;
  });

  const setProfile = (data) => {
    setProfileData(data);
    localStorage.setItem('profileData', JSON.stringify(data));
  };

  useEffect(() => {
    // Clear profile data from localStorage when the component unmounts
    return () => {
      localStorage.removeItem('profileData');
    };
  }, []);

  return (
    <ProfileContext.Provider value={{ profileData, setProfile }}>
      {children}
    </ProfileContext.Provider>
  );
};
