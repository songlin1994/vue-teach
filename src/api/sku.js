
import request from '@/utils/request'

export function addSku(addSkuReq) {
  return request({
    url: '/sku/addSku',
    method: 'post',
    data: addSkuReq
  })
}
