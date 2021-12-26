export interface TableListItem {
  _id: string;
  username: string;
  password?: string;
  updatedAt: string;
  createdAt: string;
  isAdmin: boolean;
}

export interface TableListPagination {
  total: number;
  pageSize: number;
  current: number;
}

export interface TableListData {
  list: TableListItem[];
  pagination: Partial<TableListPagination>;
}

export interface TableListParams {
  _id?: string;
  username?: string;
  password?: string;
  isAdmin?: boolean;
  pageSize?: number;
  currentPage?: number;
  filter?: { [key: string]: any[] };
  sorter?: { [key: string]: any };
}
