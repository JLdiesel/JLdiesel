import { CHANGE_USER_INFO } from './content';
import { getUserInfo } from '@service/home';
export const changeUserInfo = (payload) => ({
  payload,
  type: CHANGE_USER_INFO
});
export const getUserInfoAction = () => (dispatch) => {
  getUserInfo().then((res) => {
    console.log(res);
    dispatch(changeUserInfo(res));
  });
};
