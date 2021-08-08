import request from '../index';

export const getShopList = (offset, top) =>
  request.get({
    url: '/shop',
    params: {
      offset,
      top
    }
  });

export const getShopInfo = (shopId) =>
  request.get({
    url: `/shop/getShopById/${shopId}`
  });
