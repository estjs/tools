/**
 * 基于 sessionStorage 的缓存函数
 */
export const sessionCache = {
  set(key: string, value: string) {
    if (!sessionStorage) {
      return;
    }

    if (key != null && value != null) {
      sessionStorage.setItem(key, value);
    }
  },
  get(key: string) {
    if (!sessionStorage) {
      return null;
    }

    if (key == null) {
      return null;
    }

    return sessionStorage.getItem(key);
  },
  setJSON(key: string, jsonValue: any) {
    if (jsonValue != null) {
      this.set(key, JSON.stringify(jsonValue));
    }
  },
  getJSON(key: string) {
    const value = this.get(key);
    if (value != null) {
      return JSON.parse(value);
    }
  },
  remove(key: string) {
    sessionStorage.removeItem(key);
  },
};

/**
 * 基于 localStorage 的缓存函数
 */
export const localCache = {
  set(key: string, value: string) {
    if (!localStorage) {
      return;
    }

    if (key != null && value != null) {
      localStorage.setItem(key, value);
    }
  },
  get(key: string) {
    if (!localStorage) {
      return null;
    }

    if (key == null) {
      return null;
    }

    return localStorage.getItem(key);
  },
  setJSON(key: string, jsonValue: any) {
    if (jsonValue != null) {
      this.set(key, JSON.stringify(jsonValue));
    }
  },
  getJSON(key: string) {
    const value = this.get(key);
    if (value != null) {
      return JSON.parse(value);
    }
  },
  remove(key: string) {
    localStorage.removeItem(key);
  },
};
