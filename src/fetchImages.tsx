import * as storage from 'firebase/storage';
import { storageRef } from './firebase';

export const fetchImages = async () => {
  const urls = await storage
    .listAll(storageRef)
    .then((result: storage.ListResult) => {
      const urls = result.items.map((item) => storage.getDownloadURL(item));
      return Promise.all(urls);
    })
    .catch((error: Error) => {
      console.error(error);
    });
  return urls;
};
