import {
  getLocalStorageItem,
  removeLocalStorageItem,
  setLocalStorageItem
} from "../storage";

describe("localStorage utilities", () => {
  beforeEach(() => {
    // Clear any existing localStorage values before each test
    localStorage.clear();
  });

  test("setLocalStorageItem should set an item in localStorage", () => {
    // Arrange
    const key = "testKey";
    const value = { foo: "bar" };

    // Act
    setLocalStorageItem(key, value);

    // Assert
    expect(localStorage.getItem(key)).toBe(JSON.stringify(value));
  });

  test("getLocalStorageItem should return an item from localStorage", () => {
    // Arrange
    const key = "testKey";
    const value = { foo: "bar" };
    localStorage.setItem(key, JSON.stringify(value));

    // Act
    const result = getLocalStorageItem(key);

    // Assert
    expect(result).toEqual(value);
  });

  test("getLocalStorageItem should return null for non-existent key", () => {
    // Arrange
    const key = "nonExistentKey";

    // Act
    const result = getLocalStorageItem(key);

    // Assert
    expect(result).toBeNull();
  });

  test("removeLocalStorageItem should remove an item from localStorage", () => {
    // Arrange
    const key = "testKey";
    const value = { foo: "bar" };
    localStorage.setItem(key, JSON.stringify(value));

    // Act
    removeLocalStorageItem(key);

    // Assert
    expect(localStorage.getItem(key)).toBeNull();
  });
});
