import request from '../index';

export const getUserInfo = () => request.get({ url: '/user' });
