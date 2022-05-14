import React from 'react'
import 'antd/dist/antd.css'
import './stylesSheets/loginForm.css'
import { Form, Input, Button, Checkbox } from 'antd'
import { useState } from 'react'

const Admin_Login_page = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const userLoggingIn = () => {}
  const logger = () => {
    console.log(username, password)
  }
  return (
    <div className='loginForm'>
      <Form
        name='basic'
        initialValues={{
          remember: true
        }}
        autoComplete='off'
      >
        <Form.Item
          label='Username'
          name='username'
          rules={[
            {
              required: true,
              message: 'Please input your username!'
            }
          ]}
        >
          <Input
            onChange={e => {
              setUsername(e.target.value)
            }}
          />
        </Form.Item>

        <Form.Item
          label='Password'
          name='password'
          rules={[
            {
              required: true,
              message: 'Please input your password!'
            }
          ]}
        >
          <Input.Password
            onChange={e => {
              setPassword(e.target.value)
            }}
          />
        </Form.Item>

        <Form.Item
          name='remember'
          valuePropName='checked'
          wrapperCol={{
            offset: 8,
            span: 16
          }}
        >
          <Checkbox>Remember me</Checkbox>
        </Form.Item>

        <Form.Item
          wrapperCol={{
            offset: 8,
            span: 16
          }}
        >
          <Button type='primary' htmlType='submit' onClick={logger}>
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  )
}

export default Admin_Login_page
