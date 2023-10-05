import { Table } from 'antd'
import React from 'react'

function TableData({ column, tableData }) {
    return (
        <div>

            <Table style={{ width: '100%'}} className='col-12 d-flex ' columns={column}
                dataSource={tableData}
                // bordered
            />

        </div>
    )
}

export default TableData