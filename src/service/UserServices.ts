import { AxiosResponse } from 'axios';
import PagedResponse from '../model/PagedResponse';
import User from '../model/User';
import api from './api';

type UserObjResponse = {
  data: User;
  support: {
    url: string;
    text: string;
  };
};

type EditUserRequest = {
  name: string;
  job: string;
};

interface EditUserResponse extends EditUserRequest {
  updatedAt: string;
}

class UserServices {
  deleteUser = (userID: number) => {
    return api.delete<{}, AxiosResponse<UserObjResponse>>(
      `user/${userID}?delay=2`,
    );
  };

  editUser = (userID: number) => {
    return api.put<EditUserRequest, AxiosResponse<EditUserResponse>>(
      `user/${userID}?delay=2`,
    );
  };

  getUserInfo = (userID: number) => {
    return api.get<{}, AxiosResponse<UserObjResponse>>(
      `user/${userID}?delay=2`,
    );
  };

  getUserListFromPage = (page: number) => {
    return api.delete<{}, AxiosResponse<PagedResponse<User>>>(
      `user?page=${page}&delay=2`,
    );
  };
}

export default UserServices;
