export type TypeUseSessionStorage<T> = [
  () => T | undefined,
  (value: T) => void,
  () => void,
];

export const useSessionStorage = <T>(key: string): TypeUseSessionStorage<T> => {

  const getSessionStorageItem = (): T | undefined => {
    try {
      const value = sessionStorage.getItem(key);
      if (!value) return undefined;
      return JSON.parse(value);
    } catch (e) {
      console.error(e);
      return undefined;
    }
  };

  const setSessionStorageItem = (value: T): void => {
    try {
      sessionStorage.setItem(key, JSON.stringify(value));
    } catch (e) {
      console.error(e);
    }
  };

  const removeSessionStorageItem = (): void => {
    try {
      sessionStorage.removeItem(key);
    } catch (e) {
      console.error(e);
    }
  };

  return [
    getSessionStorageItem,
    setSessionStorageItem,
    removeSessionStorageItem,
  ];
}