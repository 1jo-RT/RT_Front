import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from '../components/layout/Home';
import Login from '../components/pages/Login';
import Kakao from '../components/kakao/Kakao';
import Detail from '../components/pages/Detail';

export default function Router() {

    return (
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/boards/:id" element={<Detail />} />
            <Route path="/api/user/login" element={<Login />}/>
            <Route path="/api/user/kakao/callback" element={<Kakao />}></Route>
          </Routes>
        </BrowserRouter>
      );

}
