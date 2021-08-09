import { CHANGE_USER_INFO, CHANGE_ORDER } from './content';
import { getUserInfo, getUserOriderList } from '@service/home';

export const changeOrder = (payload) => ({
  payload,
  type: CHANGE_ORDER
});

export const changeUserInfo = (payload) => ({
  payload,
  type: CHANGE_USER_INFO
});
export const getUserInfoAction = () => (dispatch) => {
  getUserInfo().then((res) => {
    dispatch(changeUserInfo(res));
  });
};
export const getUserOriderListAction = () => (dispatch) => {
  getUserOriderList().then((res) => {
    if (res.oriderList) {
      dispatch(changeOrder(res));
    } else {
      dispatch(changeOrder([]));
    }
  });
};
