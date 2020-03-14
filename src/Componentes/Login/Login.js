import React from 'react';
import './Login.css'
import { Form, Input, Button } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';

class Login extends React.Component {
  constructor(props) {
    super(props)
  }



  render() {
    const { onFinish } = this.props
    return (
      <div className="containerr">
        <Form
          name="normal_login"
          className="login-form"
          initialValues={{ remember: true }}
          onFinish={onFinish}
        >
          <Form.Item
            name="username"
            rules={[{ required: true, message: 'Please input your Username!' }]}
          >
            <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
          </Form.Item>
          <Form.Item
            name="password"
            rules={[{ required: true, message: 'Please input your Password!' }]}
          >
            <Input
              prefix={<LockOutlined className="site-form-item-icon" />}
              type="password"
              placeholder="Password"
            />
          </Form.Item>
          <Form.Item>
            <Button className='btn' type="primary" htmlType="submit" className="login-form-button">
              Log in
        </Button>
          </Form.Item>
        </Form>
      </div >
    )
  }


}

export default Login;