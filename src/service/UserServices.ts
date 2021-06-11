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
const delay = false;
class UserServices {
  deleteUser = (userID: number) => {
    return api.delete<{}, AxiosResponse<UserObjResponse>>(
      `users/${userID}${delay && '?delay=2'}`,
    );
  };

  editUser = (userID: number) => {
    return api.put<EditUserRequest, AxiosResponse<EditUserResponse>>(
      `users/${userID}${delay && '?delay=2'}`,
    );
  };

  getUserInfo = (userID: number) => {
    return api.get<{}, AxiosResponse<UserObjResponse>>(
      `users/${userID}${delay && '?delay=2'}`,
    );
  };

  getUserListFromPage = (page: number) => {
    console.log('GETLIST');
    return api.get<{}, AxiosResponse<PagedResponse<User>>>(
      `users?page=${page}${delay && '&delay=2'}`,
    );
  };
}

export default UserServices;
