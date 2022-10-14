import React from 'react'
import './List.scss';
import Sidebar from "../../components/sidebar/Sidebar"
import Navbar from "../../components/navbar/Navbar"
import DataTable from '../../components/datatable/Datatable';

const List = ({ column, row }) => {



  return (
    <div className="list">
      <Sidebar />
      <div className="listContainer">
        <Navbar />
        <DataTable column={column} row={row} />
      </div>
    </div>
  )
}

export default List