declare namespace API {
  export interface CurrentUser {
    success: boolean,
    data: {
      avatar: string;
      name: string;
      isAdmin: boolean;
    }
  }

  export interface LoginStateType {
    success?: boolean;
    message?: string;
    errors?: {
      general?: string;
    };
    data?: {
      id: string;
      token: string;
    }
  }

  export interface NoticeIconData {
    id: string;
    key: string;
    avatar: string;
    title: string;
    datetime: string;
    type: string;
    read?: boolean;
    description: string;
    clickClose?: boolean;
    extra: any;
    status: string;
  }
}
