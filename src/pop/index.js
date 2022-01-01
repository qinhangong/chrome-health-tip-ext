import ReactDOM from 'react-dom';
import React, { useEffect } from 'react';
import { SUBMITMSG, RESETMSG, STORAGEKEY, getStorage } from '../utils';
import { Form, Input, Button, Radio, message, InputNumber } from 'antd';

import 'antd/dist/antd.less';
import './index.less';


const App = () => {
  const [form] = Form.useForm();

  useEffect(async () => {
    const values = await getStorage(STORAGEKEY);
    form.setFieldsValue(values)
  }, [])

  const onFinish = (values) => {
    message.success("配置成功");
    chrome.runtime.sendMessage({ msgType: SUBMITMSG, data: values });
  };

  const onReset = () => {
    form.resetFields();
    chrome.runtime.sendMessage({ msgType: RESETMSG });
  };


  return (
    <div className="pop_container">
      <div className='pop_title'>程序员健康提醒</div>
      <Form
        name="basic"
        form={form}
        autoComplete="off"
        onFinish={onFinish}
      >
        <Form.Item
          label="提醒文案"
          name="content"
          rules={[{ required: true, message: '请输入健康提醒文案' }]}
        >
          <Input placeholder='请输入健康提醒文案' />
        </Form.Item>

        <Form.Item
          label="提醒位置"
          name="position"
          rules={[{ required: true, message: '请输入提醒位置' }]}
        >
          <Radio.Group name="position_group">
            <Radio value="left_bottom">左下</Radio>
            <Radio value="right_bottom">右下</Radio>
          </Radio.Group>
        </Form.Item>
        <Form.Item
          label="提醒时间"
          name="interval"
          rules={[{ required: true, message: '请设置提醒时间' }]}
        >
          <InputNumber min={0} precision={0} addonBefore="每间隔" addonAfter="s" />
        </Form.Item>


        <Form.Item style={{ marginBottom: 8, textAlign: "center" }} >
          <Button className="reset_btn footer_btn" onClick={onReset}>
            重置
          </Button>
          <Button className="footer_btn" type="primary" htmlType="submit">
            提交
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};


ReactDOM.render(<App />, document.getElementById('root'));
