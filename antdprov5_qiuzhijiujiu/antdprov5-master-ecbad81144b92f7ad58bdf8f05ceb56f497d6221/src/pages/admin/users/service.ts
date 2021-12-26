import { request } from 'umi';
import { TableListParams, TableListItem } from './data';

export async function queryUser(params?: TableListParams) {
  return request('/admin/users', {
    params,
  });
}

export async function removeRule(params: { ids: string[] }) {
  return request('/api/rule', {
    method: 'POST',
    data: {
      ...params,
      method: 'delete',
    },
  });
}

export async function addUser(params: TableListItem) {
  return request('/admin/users', {
    method: 'POST',
    data: {
      ...params,
    },
  });
}

export async function updateUser(params: TableListParams) {
  return request(`/admin/users/${params._id}`, {
    method: 'PUT',
    data: {
      ...params,
    },
  });
}
