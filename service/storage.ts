export const setLocalStorageItem = (key: string, value: any) => {
  if (typeof window !== "undefined") {
    window.localStorage.setItem(key, JSON.stringify(value));
  }
};

export const getLocalStorageItem = (key: string): any => {
  if (typeof window !== "undefined") {
    const item = window.localStorage.getItem(key);
    return item ? JSON.parse(item) : null;
  }
};

export const removeLocalStorageItem = (key: string) => {
  if (typeof window !== "undefined") {
    window.localStorage.removeItem(key);
  }
};
