// 全局类型
declare module '*.scss';

/** 后端接口返回数据类型 */
declare type BaseType<T> = {
  code: number;
  msg: string;
  data: T;
};
