import React from 'react'
import { Sidebar } from 'flowbite-react';
import { HiArrowSmRight, HiChartPie, HiInbox, HiOutlineCloudUpload, HiShoppingBag, HiSupport, HiTable, HiUser, HiViewBoards } from 'react-icons/hi';

import userImg from "../assets/profilee.jpg"

export const SideBar = () => {
  return (
    <Sidebar aria-label="Sidebar with content separator example" >
      <Sidebar.Logo 
      href="#" 
      img={userImg} 
      imgAlt="Flowbite logo">
       <p>Flowbite</p>
      </Sidebar.Logo>
      <Sidebar.Items>
        <Sidebar.ItemGroup>
          <Sidebar.Item href="/admin/dashboard" icon={HiChartPie} className="justify-start">
            Dashboard
          </Sidebar.Item>
          <Sidebar.Item href="/admin/dashboard/upload" icon={HiOutlineCloudUpload} className="justify-start">
            Upload Books
          </Sidebar.Item>
          <Sidebar.Item href="/admin/dashboard/manage" icon={HiInbox} className="justify-start">
            Manage Books
          </Sidebar.Item>
          <Sidebar.Item href="#" icon={HiUser} className="justify-start">
            Users
          </Sidebar.Item>
          <Sidebar.Item href="#" icon={HiShoppingBag} className="justify-start">
            Products
          </Sidebar.Item>
          <Sidebar.Item href="/login" icon={HiArrowSmRight} className="justify-start">
            Sign In
          </Sidebar.Item>
          <Sidebar.Item href="/logout" icon={HiTable} className="justify-start">
            Log Out
          </Sidebar.Item>
        </Sidebar.ItemGroup>
        <Sidebar.ItemGroup>
          <Sidebar.Item href="#" icon={HiChartPie} className="justify-start">
            Upgrade to Pro
          </Sidebar.Item>
          <Sidebar.Item href="#" icon={HiViewBoards} className="justify-start">
            Documentation
          </Sidebar.Item>
          <Sidebar.Item href="#" icon={HiSupport} className="justify-start">
            Help
          </Sidebar.Item>
        </Sidebar.ItemGroup>
      </Sidebar.Items>
    </Sidebar>
  );
};
