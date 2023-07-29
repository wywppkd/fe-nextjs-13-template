import request from '../_utils/request';

type AboutParams = {
  platformType: string;
};
type UserType = {
  id: number;
  name: string;
  age: number;
  ctime: number;
};
type AboutData = {
  total: number;
  list: UserType[];
  errcode: number;
  errmsg: string;
};

export const getUserList = (params: AboutParams): Promise<BaseType<AboutData>> => {
  return request.get('/user/list', { params });
};
