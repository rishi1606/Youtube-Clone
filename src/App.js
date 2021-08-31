import React, { useEffect, useState } from 'react'
import { Container } from 'react-bootstrap'

import Header from './components/header/Header'
import Sidebar from './components/sidebar/Sidebar'
import HomeScreen from './screens/homeScreen/HomeScreen'
import Login from './Login'

import { BrowserRouter, Redirect, Route, Switch, useHistory } from 'react-router-dom'

import './app.css'
import { useSelector } from 'react-redux'
import WatchScreen from './screens/watchScreen/WatchScreen'
import SearchScren from './screens/SearchScreen/SearchScren'

const Layout = ({ children }) => {
   const [sidebar, toggleSidebar] = useState(false) //Hooks at top level only 

   const handleToggleSidebar = () => toggleSidebar(value => !value)

   return (
      <>
         <Header handleToggleSidebar={handleToggleSidebar} />
         <div className='app__container'>
            <Sidebar
               sidebar={sidebar}
               handleToggleSidebar={handleToggleSidebar}
            />
            <Container fluid className='app__main '>
               {children}
            </Container>
         </div>
      </>
   )
}

const App = () => {
   

   return (
      <BrowserRouter>
      <Switch>
      <Route path='/auth'>
      <Layout>
         <Login/>
      </Layout>
   </Route>
         <Route path='/' exact>
            <Layout>
               <HomeScreen />
            </Layout>
         </Route>
         <Route path='/search/:query'>
            <Layout>
                <SearchScren/>
            </Layout>
         </Route>
         
         <Route path='/watch/:id'>
            <Layout>
               <WatchScreen />
            </Layout>
         </Route>

         <Route>
            <Redirect to='/' />
         </Route>
      </Switch>
      </BrowserRouter>
   )
}

export default App