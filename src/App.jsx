import React from 'react'
import Home from '../src/pages/home/Home'
import Login from '../src/pages/login/Login'
import List from '../src/pages/list/List'
import New from '../src/pages/new/New'
import SinglePage from '../src/pages/single/Single'
import Sidebar from './components/sidebar/Sidebar'
import { productColumns, productRows, userColumns, userRows } from './datatablesource'

import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
  Routes,
  BrowserRouter,
} from "react-router-dom";
import { userInputs, productInputs } from './formSource'

const App = () => {
  return (

    <BrowserRouter>

      <Routes>
        <Route path="/">
          <Route index element={<Home />} />
          <Route path="login" element={<Login />} />
          <Route path="users">
            <Route index element={<List column={userColumns} row={userRows} />} />
            <Route path=":userId" element={<SinglePage />} />
            <Route
              path="new"
              element={<New inputs={userInputs} title="Add New User" />}
            />
          </Route>

          <Route path="products">
            <Route index element={<List column={productColumns} row={productRows} />} />
            <Route path=":productId" element={<SinglePage />} />
            <Route
              path="new"
              element={<New inputs={productInputs} title="Add New Product" />}
            />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App