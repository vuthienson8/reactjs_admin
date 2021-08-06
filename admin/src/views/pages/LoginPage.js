import React, { Component } from 'react';
import { Card, Form, Input, Button } from 'antd';
import { Redirect } from 'react-router-dom';

import { login } from "../../actions/loginAction";
import { connect } from 'react-redux';


class LoginPage extends Component {
    onFinish = (values) => {
        console.log('Success:', values);
        //call action Login
        this.props.login(values);
    };

    onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };
    render() {
        const { isLoggedIn } = this.props;
        return isLoggedIn ? (
            <Redirect to="/" />
        ) : (
            <Card title="Login" style={{ width: 500, textAlign: 'center', margin: '20px auto' }}>
                <Form
                    name="basic"
                    labelCol={{ span: 6 }}
                    wrapperCol={{ span: 18 }}
                    initialValues={{ remember: true }}
                    onFinish={this.onFinish}
                    onFinishFailed={this.onFinishFailed}
                >
                    <Form.Item
                        label="Username"
                        name="username"
                        rules={[
                            { required: true, message: 'Please input your username!' },
                            {
                                validator: (_, value) => {
                                    if (value && value.length < 3) {
                                        return Promise.reject("Username length must more than 3!");
                                    }
                                    if (value && value.length > 16) {
                                        return Promise.reject("Username length must less 16!");
                                    }
                                    return Promise.resolve();
                                }
                            }
                        ]}
                    >
                        <Input />
                    </Form.Item>

                    <Form.Item
                        label="Password"
                        name="password"
                        rules={[
                            { required: true, message: 'Please input your password!' },
                            {
                                validator: (_, value) => {
                                    if (value && value.length < 6) {
                                        return Promise.reject("Password length must more than 6!");
                                    }
                                    if (value && value.length > 16) {
                                        return Promise.reject("Password length must less 16!");
                                    }
                                    return Promise.resolve();
                                }
                            }
                        ]}
                    >
                        <Input.Password />
                    </Form.Item>

                    <p>{this.props.message}</p>
                    <Form.Item wrapperCol={{ span: 24 }}>
                        <Button loading={this.props.loading} type="primary" htmlType="submit">
                            Submit
                        </Button>
                    </Form.Item>
                </Form>
            </Card>
        )
    }
}


function mapStateToProps({auth}) {
    return {
        isLoggedIn: auth.isLoggedIn,
        message: auth.message,
        loading: auth.loading
    }
}
export default connect(mapStateToProps, { login })(LoginPage);