// localStorageUtils.js

export const getLocalStorage = (key) => {
  const data = localStorage.getItem(key);
  return data ? JSON.parse(data) : [];
};

export const setLocalStorage = (key, data) => {
  localStorage.setItem(key, JSON.stringify(data));
};

export const addLocalStorageItem = (key, newItem) => {
  const items = getLocalStorage(key);
  items.push(newItem);
  setLocalStorage(key, items);
};

export const updateLocalStorageItem = (key, updatedItem, idKey = "id") => {
  const items = getLocalStorage(key);
  const updatedItems = items.map((item) =>
    item[idKey] === updatedItem[idKey] ? updatedItem : item
  );
  setLocalStorage(key, updatedItems);
};

export const deleteLocalStorageItem = (key, itemId, idKey = "id") => {
  const items = getLocalStorage(key);
  const updatedItems = items.filter((item) => item[idKey] !== itemId);
  setLocalStorage(key, updatedItems);
};
