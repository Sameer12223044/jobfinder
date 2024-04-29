import React, { useEffect, useContext } from 'react'
import "./App.css";
import { Context } from "./main";
import {  BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './components/Auth/Login';
import Register from './components/Auth/Register';
import Home from './components/Home/Home';
import Jobs from './components/Job/Jobs';
import MyJobs from './components/Job/MyJobs';
import PostJobs from './components/Job/PostJobs';
import JobDetails from './components/Job/JobDetails';
import Footer from './components/Layout/Footer';
import Navbar from './components/Layout/Navbar';
import NotFound from './components/NotFound/NotFound';
import Application from './components/Application/Application';
import MyApplications from './components/Application/MyApplications';

import axios from "axios";
import { Toaster } from "react-hot-toast";


const App = () => {
  const { isAuthorized, setIsAuthorized, setUser } = useContext(Context);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await axios.get("https://jobfinder-9slc.onrender.com/api/v1/user/getuser", { withCredentials: true });
        setUser(response.data.user);
        setIsAuthorized(true);
      } catch (error) {
        setIsAuthorized(false);
      }
    };
    fetchUser();
  }, [isAuthorized]);



  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/Register" element={<Register />} />
          <Route path="/" element={<Home />} />
          <Route path="/job/getall" element={<Jobs />} />
          <Route path="/job/:id" element={<JobDetails />} />
          <Route path="/job/post" element={<PostJobs />} />
          <Route path="/job/me" element={<MyJobs />} />
          <Route path="/application/:id" element={<Application />} />
          <Route path="/applications/me" element={<MyApplications />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
        <Toaster />
      </BrowserRouter>
    </>
  )
}

export default App
