import React, { useEffect, useState } from 'react'
import AuthNavBar from '../../components/AuthNavBar.jsx/AuthNavBar'
import { Card, Form, message } from 'antd'
import { Button, Checkbox, Input } from 'antd';

import "./register.css"
import FormItem from 'antd/es/form/FormItem'
import { useNavigate } from 'react-router-dom';
import ROUTES from '../../Routes/Routes';
import axios from 'axios';
import base_url_auth from '../../API/Api';

function Register() {
  const navigate = useNavigate();

  const url = 'http://localhost:8000/users/login';

  const [alert, setAlert] = useState(false);


  const handleLogin = async (value) => {
    try {
      const res = await axios.post(url, value);

      console.log("ttt",res?.data?.data.password);

      if (res?.data?.message ) {
        const token = res?.data?.data?.password

        localStorage.setItem('token', token)
        navigate(`${ROUTES.HOME}`)
        console.log("res", res.data);



      }else{
        setAlert(true)
      }

    } catch (error) {
      console.error("Error:", error);
    }
  };

  useEffect(() => {
    setTimeout(() => {
      setAlert(false)
    }, 2000);
  }, [alert]);





  return (<>
    <AuthNavBar />
    <div className='col-12 d-flex justify-content-center align-items-center base'>
      <Card className='card p-3 shadow-lg' style={{ maxWidth: 500, border: 'none' }}>
        <h1 className='head'>LOGIN</h1>
        {alert && (
          <span className='alert'>Invalid Username and Password !</span>
        )}
        <Form
          name="basic"
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 16 }}
          style={{ maxWidth: 600 }}
          initialValues={{ remember: true }}
          autoComplete="off"
          onFinish={(value) => {
            console.log("value", value);
            handleLogin(value)
          }}
        >
          <Form.Item
            label="Username"
            name="username"
            rules={[{ required: true, message: 'Please input your username!' }]}
          >
            <Input />

          </Form.Item>

          <Form.Item
            label="Password"
            name="password"
            rules={[{ required: true, message: 'Please input your password!' }]}
          >
            <Input.Password />
          </Form.Item>

          {/* <Form.Item
        name="remember"
        valuePropName="checked"
        wrapperCol={{ offset: 8, span: 16 }}
      >
        <Checkbox>Remember me</Checkbox>
      </Form.Item> */}

          <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
      </Card>
    </div>

    {/* </AuthNavBar> */}
  </>
  )
}

export default Register