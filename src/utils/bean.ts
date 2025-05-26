import { capitalize } from "../string";

/**
 * Creates a dynamic bean class with fields and auto-generated getters/setters.
 * Supports both array and object configuration.
 * @param config Array of field names or object with default values
 * @returns A class constructor for the bean
 * @example
 * ```ts
 * // Array config
 * const UserBean = createBean(['name', 'age']);
 * const user = new UserBean({ name: 'Alice' });
 * user.getName(); // 'Alice'
 * user.setAge(30);
 * user.getAge(); // 30
 *
 * // Object config
 * const ProductBean = createBean({ id: 0, title: '' });
 * const product = new ProductBean({ title: 'Book' });
 * product.getId(); // 0
 * product.getTitle(); // 'Book'
 * ```
 */
export function createBean<T extends any[] | Record<string, any>>(config: T) {
  class DynamicBean {
    private fields: Record<string, any>;

    constructor(initialValues: Partial<any> = {}) {
      this.fields = {};
      if (Array.isArray(config)) {
        for (const key of config) {
          this.fields[key as string] = initialValues[key as string] ?? null;
        }
      } else {
        for (const key in config) {
          this.fields[key] = initialValues[key] ?? config[key];
        }
      }
    }
  }

  // Add getters
  if (Array.isArray(config)) {
    for (const key of config) {
      Object.defineProperty(DynamicBean.prototype, `get${capitalize(key as string)}`, {
        value() {
          return this.fields[key as string];
        },
        writable: false,
      });
    }
  } else {
    for (const key in config) {
      Object.defineProperty(DynamicBean.prototype, `get${capitalize(key)}`, {
        value() {
          return this.fields[key];
        },
        writable: false,
      });
    }
  }

  // Add setters
  if (Array.isArray(config)) {
    for (const key of config) {
      Object.defineProperty(DynamicBean.prototype, `set${capitalize(key as string)}`, {
        value(value: any) {
          this.fields[key as string] = value;
        },
        writable: false,
      });
    }
  } else {
    for (const key in config) {
      Object.defineProperty(DynamicBean.prototype, `set${capitalize(key)}`, {
        value(value: any) {
          this.fields[key] = value;
        },
        writable: false,
      });
    }
  }

  return DynamicBean as unknown as new (initialValues?: Partial<any>) => any;
}
