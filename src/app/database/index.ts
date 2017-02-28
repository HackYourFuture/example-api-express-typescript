import * as NeDBDataStore from 'nedb';

export const db = new NeDBDataStore({
  filename: 'database/database.db'
});