export const saveToLocalStorage = <T>(data: T, key: string): boolean => {
  try {
    const stringifiedData = JSON.stringify(data);
    localStorage.setItem(key, stringifiedData);
    return true;
  } catch (error) {
    return false;
  }
};

export const getFromLocalStorage = <T>(key: string): T | null => {
  if (typeof window !== "undefined" && window.localStorage) {
    const storedItem = localStorage.getItem(key);

    if (storedItem && storedItem !== "undefined") {
      try {
        return JSON.parse(storedItem) as T;
      } catch (error) {
        return null;
      }
    }
  }
  return null;
};

export const removeFromLocalStorage = (key: string): void => {
  localStorage.removeItem(key);
};

export const formatDateTimeToLocaleString = (
  dateTimeString: string
): string => {
  const date = new Date(dateTimeString);
  const day = date.getDate();
  const month = date.toLocaleString("en-US", { month: "short" });
  const year = date.getFullYear();
  const hour = date.getHours() % 12 || 12;
  const minutes = date.getMinutes().toString().padStart(2, "0");
  const ampm = date.getHours() >= 12 ? "PM" : "AM";

  return `${day} ${month}, ${year} at ${hour}:${minutes} ${ampm}`;
};

export function removeDuplicates<T>(array: T[], key: keyof T): T[] {
  const uniqueMap: Record<string, boolean> = {};
  return array.filter((obj) => {
    const keyValue = String(obj[key]);
    if (!uniqueMap[keyValue]) {
      uniqueMap[keyValue] = true;
      return true;
    }
    return false;
  });
}
