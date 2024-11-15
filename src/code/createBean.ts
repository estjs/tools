import { capitalize } from '../string';

type Config = any[] | Record<string, any>;

type coreArr<T extends any[]> = T extends [infer F, ...infer O]
  ? { [K in F & string]: any | null } & coreArr<O>
  : {};

type coreGetSet<T> =
  T extends Record<string, any>
    ? { [K in keyof T as `get${Capitalize<string & K>}`]: () => T[K] } & {
        [K in keyof T as `set${Capitalize<string & K>}`]: (value: T[K]) => void;
      }
    : {};

type BeanInstance<T extends Config> = T extends any[]
  ? coreArr<T> & coreGetSet<coreArr<T>>
  : T & coreGetSet<T>;

// 支持两种配置形式：数组和对象
type FieldConfig<T> = T extends any[]
  ? T
  : {
      [K in keyof T]: T[K]; // 对象配置直接使用字段类型
    };

export function createBean<T extends Config>(config: FieldConfig<T>) {
  // 动态类定义
  const DynamicClass = class {
    private fields: any;

    constructor(initialValues: Partial<any> = {}) {
      this.fields = {} as any;

      // 根据配置初始化字段
      if (Array.isArray(config)) {
        // 数组配置：每个字段默认为 null
        for (const key of config) {
          this.fields[key as string] = initialValues[key as keyof T] ?? null;
        }
      } else {
        // 对象配置：使用传入的初始值
        for (const key in config) {
          this.fields[key] = initialValues[key as keyof T] ?? config[key];
        }
      }
    }

    // 生成 Getter 方法
    static createGetters(proto: any) {
      if (Array.isArray(config)) {
        for (const key of config) {
          Object.defineProperty(proto, `get${capitalize(key as string)}`, {
            value() {
              return this.fields[key as string];
            },
            writable: false,
          });
        }
      } else {
        for (const key in config) {
          Object.defineProperty(proto, `get${capitalize(key)}`, {
            value() {
              return this.fields[key];
            },
            writable: false,
          });
        }
      }
    }

    // 生成 Setter 方法
    static createSetters(proto: any) {
      if (Array.isArray(config)) {
        for (const key of config) {
          Object.defineProperty(proto, `set${capitalize(key as string)}`, {
            value(value: any) {
              this.fields[key as string] = value;
            },
            writable: false,
          });
        }
      } else {
        for (const key in config) {
          Object.defineProperty(proto, `set${capitalize(key)}`, {
            value(value: any) {
              this.fields[key] = value;
            },
            writable: false,
          });
        }
      }
    }
  };

  // 添加 Getter 和 Setter
  DynamicClass.createGetters(DynamicClass.prototype);
  DynamicClass.createSetters(DynamicClass.prototype);

  return DynamicClass as unknown as new (initialValues?: Partial<any>) => BeanInstance<T>;
}
