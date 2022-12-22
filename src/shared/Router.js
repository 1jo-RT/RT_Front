import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from '../components/layout/Home';
import Login from '../components/pages/Login';
import Kakao from '../components/kakao/Kakao';
import Detail from '../components/pages/Detail';
import SignUp from '../components/pages/SignUp';
import Post from '../components/pages/Post';

export default function Router() {

    return (
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/api/user" element={<SignUp />} />
            <Route path="/api/boards/newboard" element={<Post />} />
            <Route path="/boards/:id" element={<Detail />} />
            <Route path="/api/user/login" element={<Login />}/>
            <Route path="/api/user/kakao/callback" element={<Kakao />}></Route>
          </Routes>
        </BrowserRouter>
      );

}
