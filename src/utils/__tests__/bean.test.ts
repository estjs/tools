import { describe, expect, it } from 'vitest';
import { createBean } from '../';

// 辅助类型
interface UserConfig {
  id: number;
  name: string;
  email: string;
}

describe('createBean', () => {
  describe('array Configuration', () => {
    it('should create a class with default null values for fields', () => {
      const UserBean = createBean(['id', 'name', 'email'] as const);
      const user = new UserBean();

      // 默认值为 null
      expect(user.getId()).toBe(null);
      expect(user.getName()).toBe(null);
      expect(user.getEmail()).toBe(null);
    });

    it('should set initial values if provided', () => {
      const UserBean = createBean(['id', 'name', 'email'] as const);
      const user = new UserBean({ name: 'Alice' });

      // `name` 初始化为 'Alice'，其余为 null
      expect(user.getId()).toBe(null);
      expect(user.getName()).toBe('Alice');
      expect(user.getEmail()).toBe(null);
    });

    it('should set and get values correctly', () => {
      const UserBean = createBean(['id', 'name', 'email'] as const);
      const user = new UserBean();

      // 设置值并验证
      user.setName('Alice');
      user.setId(1);
      user.setEmail('alice@example.com');

      expect(user.getId()).toBe(1);
      expect(user.getName()).toBe('Alice');
      expect(user.getEmail()).toBe('alice@example.com');
    });
  });

  describe('object Configuration', () => {
    it('should create a class with default values for fields', () => {
      const UserBean = createBean<UserConfig>({
        id: 0,
        name: 'Anonymous',
        email: 'unknown@example.com',
      });
      const user = new UserBean();

      // 默认值根据配置初始化
      expect(user.getId()).toBe(0);
      expect(user.getName()).toBe('Anonymous');
      expect(user.getEmail()).toBe('unknown@example.com');
    });

    it('should override default values with initial values', () => {
      const UserBean = createBean<UserConfig>({
        id: 0,
        name: 'Anonymous',
        email: 'unknown@example.com',
      });
      const user = new UserBean({ name: 'Alice', email: 'alice@example.com' });

      // `name` 和 `email` 被初始值覆盖
      expect(user.getId()).toBe(0);
      expect(user.getName()).toBe('Alice');
      expect(user.getEmail()).toBe('alice@example.com');
    });

    it('should allow setting and getting values for non-readonly fields', () => {
      const UserBean = createBean<UserConfig>({
        id: 0,
        name: 'Anonymous',
        email: 'unknown@example.com',
      });
      const user = new UserBean();

      // 设置 `name` 和 `email` 字段值
      user.setName('Bob');
      user.setEmail('bob@example.com');

      expect(user.getName()).toBe('Bob');
      expect(user.getEmail()).toBe('bob@example.com');
    });
  });

  describe('mixed Tests', () => {
    it('should support both configurations without interference', () => {
      // 定义两个不同的 bean 配置
      const UserBean = createBean(['username', 'age'] as const);
      const ProfileBean = createBean({
        id: 1,
        displayName: 'User',
      });

      // 初始化两个实例
      const user = new UserBean({ username: 'Alice' });
      const profile = new ProfileBean();

      // 验证 UserBean 正确工作
      expect(user.getUsername()).toBe('Alice');
      expect(user.getAge()).toBe(null);
      user.setAge(30);
      expect(user.getAge()).toBe(30);

      // 验证 ProfileBean 正确工作
      expect(profile.getId()).toBe(1);
      expect(profile.getDisplayName()).toBe('User');
      profile.setDisplayName('Updated User');
      expect(profile.getDisplayName()).toBe('Updated User');
    });
  });
});
