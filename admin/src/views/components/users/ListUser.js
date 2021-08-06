import React, { Component } from 'react';
import { Table, Tag, Space, Input } from 'antd';
import { connect } from 'react-redux';
import { fetchUsers } from '../../../actions/users';
import { EyeOutlined, EditOutlined, DeleteOutlined } from '@ant-design/icons'


const { Search } = Input;

class ListUser extends Component {

    constructor() {
        super()
        this.state = {
            columns: [
                {
                    title: 'Id',
                    dataIndex: 'id',
                    key: 'id',
                },
                {
                    title: 'Name',
                    dataIndex: 'name',
                    key: 'name',
                    render: text => <a>{text}</a>,
                },
                {
                    title: 'Class',
                    dataIndex: 'class',
                    key: 'class',
                },
                {
                    title: 'Tags',
                    key: 'tags',
                    dataIndex: 'tags',
                    render: tags => (
                        <Tag color={"orange"} key={"1"}>
                            Dev
                        </Tag>
                    ),
                },
                {
                    title: 'Action',
                    key: 'action',
                    render: (text, record) => (
                        <Space size="middle">
                            <a><EyeOutlined /></a>
                            <a><EditOutlined /></a>
                            <a><DeleteOutlined /></a>
                        </Space>
                    ),
                },
            ],
            key: "",
            page: 1,
            pageSize: 5,
        };
        this.onSearchDebounce = this.debounce(this.onSearch, 1000)
    }

    componentDidMount() {
        const {key, page, pageSize} = this.state;
        this.props.fetchUsers({key, page, pageSize})
    }

    onFetchUsers = (key, page) => {
        const {pageSize} = this.state
        this.props.fetchUsers({ key, page, pageSize })
    }

    onPageChange = (page) => {
        this.setState({page})
        this.onFetchUsers(this.state.key, page)
    }


    onSearch = (key) => {
        this.setState({key, page:1})
        this.onFetchUsers(key, 1)
    }

    // debounce search
    onSearchChange = (event)=>{
        let key = event.target.value
        this.onSearchDebounce(key)
    }


    debounce = (func, wait) => {
        var timeout;
        return function () {
            const context = this;
            var args = arguments;
            var executeFunction = function () {
                func.apply(context, args);
            };
            clearTimeout(timeout);
            timeout = setTimeout(executeFunction, wait);
        };
    };

    render() {
        const { columns, page, pageSize } = this.state;
        const { list } = this.props;
        return (
            <>
                <Search
                    placeholder="Search..."
                    onSearch={this.onSearch}
                    onChange={this.onSearchChange}
                    enterButton
                    style={{ width: 300, margin: "15px 0" }}
                />

                <Table
                    loading={list.loading}
                    columns={columns}
                    dataSource={list.users}
                    pagination={{
                        pageSize,
                        total: list.total,
                        page,
                        onChange: this.onPageChange,
                    }}
                />
            </>

        );
    }
}

function mapStateToProps(state) {
    return {
        list: state.users.list
    }
}
export default connect(mapStateToProps, { fetchUsers })(ListUser);