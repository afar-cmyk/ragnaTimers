import React, { useState } from 'react';
import { initDatabase } from './rxdbService';

const useDb = () => {
  const [db, setDb] = useState('');
  useEffect(() => {
    const initializeDb = async () => {
      try {
        const database = await initDatabase();
        setDb(database);
        console.log('Database initialized:', database.name);
      } catch (error) {
        console.error('Error initializing database:', error);
      }
    };
    initializeDb();
  }, []);
  return db;
};

export default useDb;
