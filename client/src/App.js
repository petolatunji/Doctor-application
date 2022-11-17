import styled from 'styled-components'
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Outlet,
} from 'react-router-dom'
import { redirect } from 'react-router-dom'
import { Navigate } from 'react-router-dom'
import Footer from './components/Footer'

import Contact from './pages/Contact'
import Doctor from './pages/Doctor'
import Home from './pages/Home'
import Login from './pages/Login'
import Register from './pages/Register'
import Profile from './pages/Profile'
import { useSelector } from 'react-redux'
import Navbars from './pages/Navbars'

const Layout = () => {
  return (
    <>
      <Navbars />
      <Outlet />
      <Footer />
    </>
  )
}
const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/contact',
        element: <Contact />,
      },
      {
        path: '/doctors',
        element: <Doctor />,
      },
      {
        path: '/profile',
        element: <Profile />,
      },
    ],
  },
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '/register',
    element: <Register />,
  },
])

function App() {
  const Container = styled.div`
    background-color: #f5f5e9;
  `
  const Wrapper = styled.div`
  width:100%
  max-width:1400px ;
  `
  const user = useSelector((state) => state.user.currentUser)
  return (
    <Container>
      <Wrapper>
        <RouterProvider router={router} />
      </Wrapper>
    </Container>
  )
}

export default App
