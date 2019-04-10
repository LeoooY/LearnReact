import React from 'react'
import { Table, Divider, Tag } from 'antd';
import './antTable.css'
import { Popover, Button } from 'antd';
import AntdCompBox from './antdCompBox.js'
function Mytable(){
  const columns = [{
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
    render: (text,record) => {
      return (<span>
        <a href="javascript:;">{text}</a>
        { record.age>32 && (
          <Popover className='raPoppver' content={'123'}>
          <span className='recentActive'  >
            最近活跃
            
          </span>
        </Popover>
        )
          
        }
        
        
        
      </span>);
      
    },
  }, {
    title: 'Age',
    dataIndex: 'age',
    key: 'age',
  }, {
    title: 'Address',
    dataIndex: 'address',
    key: 'address',
  }, {
    title: 'Tags',
    key: 'tags',
    dataIndex: 'tags',
    render: tags => (
      <span>
        {tags.map(tag => {
          let color = tag.length > 5 ? 'geekblue' : 'green';
          if (tag === 'loser') {
            color = 'volcano';
          }
          return <Tag color={color} key={tag}>{tag.toUpperCase()}</Tag>;
        })}
      </span>
    ),
  }, {
    title: 'Action',
    key: 'action',
    render: (text, record) => (
      <span>
        <a href="javascript:;">Invite {record.name}</a>
        <Divider type="vertical" />
        <a href="javascript:;">Delete</a>
      </span>
    ),
  }];
  
  const data = [{
    key: '1',
    name: 'John Brown',
    age: 32,
    address: 'New York No. 1 Lake Park',
    tags: ['nice', 'developer'],
  }, {
    key: '2',
    name: 'Jim Green',
    age: 42,
    address: 'London No. 1 Lake Park',
    tags: ['loser'],
  }, {
    key: '3',
    name: 'Joe Black',
    age: 32,
    address: 'Sidney No. 1 Lake Park',
    tags: ['cool', 'teacher'],
  }];
  return (
    <AntdCompBox>    
      <Table columns={columns} dataSource={data} />
    </AntdCompBox>);
}

export default Mytable;
