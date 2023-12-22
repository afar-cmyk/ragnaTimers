import { createRxDatabase } from 'rxdb';
import { getRxStorageDexie } from 'rxdb/plugins/storage-dexie';

// addRxPlugin(RxDBAdapterDexie);

export const initDatabase = async () => {
  const db = await createRxDatabase({
    name: 'mydatabase',
    storage: getRxStorageDexie(),
  });

  console.log('Base de datos inicializada:', db.name);

  return db;
};
