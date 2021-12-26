import React from 'react';
import { Input, Modal, Form } from 'antd';
import ProForm, {
  ProFormText,
} from '@ant-design/pro-form';


import { TableListItem } from '../data';

export interface FormValueType extends Partial<TableListItem> {
}

export interface UpdateFormProps {
  onCancel: (flag?: boolean, formVals?: FormValueType) => void;
  onSubmit: (values: FormValueType) => Promise<void>;
  updateModalVisible: boolean;
  values: Partial<TableListItem>;
}

const FormItem = Form.Item;

const UpdateForm: React.FC<UpdateFormProps> = (props) => (
  <Modal
    width={640}
    bodyStyle={{ padding: '32px 40px 48px' }}
    destroyOnClose
    title="修改员工"
    visible={props.updateModalVisible}
    footer={false}
    onCancel={() => props.onCancel()}
  >
    <ProForm
      initialValues={{ ...props.values }}
      onFinish={async (values) => {
        props.onSubmit(values);
      }}
    >
      <ProFormText
        name="username"
        label="用户名"
        rules={[{ required: true, message: '请输入用户名！' }]}
      />
      <ProFormText
        name="password"
        label="密码"
        rules={[{ required: true, message: '请输入密码！' }]}
      />
      <FormItem style={{ display: 'none' }} name="_id" label={false}>
        <Input type="hidden" />
      </FormItem>
    </ProForm>
  </Modal>
);

export default UpdateForm;
