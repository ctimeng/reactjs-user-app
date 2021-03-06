import './App.css'
import React from 'react'
import { BrowserRouter, Route, Routes} from 'react-router-dom'
import Layout from './components/Layout'
import Dashboard from './components/Dashboard'
import UserIndex from './components/user/Index'
import UserList from './components/user/List'
import UserEdit from './components/user/Edit'
import UserCreate from './components/user/Create'
import RoleList from './components/role/List'
import Login from './components/login/Login'
import Permission from './components/permission/List'
import NoPage from './components/NoPage'
import useToken from './useToken'
import "admin-lte/dist/css/adminlte.min.css"
import "admin-lte/dist/js/adminlte.min.js"
import TodoIndex from './components/todo/Index'
import TodoList from './components/todo/List'
import TodoEdit from './components/todo/Edit'
import TodoCreate from './components/todo/Create'

function App() {
  const { token, setToken } = useToken();
  if(!token) {
    return <Login setToken={setToken} />
  }
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout setToken={setToken}/>}>
          <Route index element={<Dashboard />} />
          <Route path="user" element={<UserIndex />} >
            <Route index element={<UserList />} />
            <Route path=":id/edit" element={<UserEdit />} />
            <Route path="create" element={<UserCreate />} />
          </Route>
          <Route path="role" element={<RoleList />} />
          <Route path="permission" element={<Permission />} />
          <Route path="todo" element={<TodoIndex />} >
            <Route index element={<TodoList />} />
            <Route path=":id/edit" element={<TodoEdit />} />
            <Route path="create" element={<TodoCreate />} />
          </Route>
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
