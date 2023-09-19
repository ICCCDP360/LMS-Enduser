import React, { useState } from 'react';
import { Navigate, Outlet, useNavigate } from "react-router-dom";
import { AnimatePresence, motion } from 'framer-motion';
import './styles/Protected.scss';
import { SideBarContent } from './routingpaths/RoutingPaths';
const ProtectedRouter = () => {
  const isAuth = localStorage.getItem("access-token-user");
  // const isAuth = true;
  const [toogles, setToogles] = useState(false);

  const navigate=useNavigate();

  const PushPaths=(data)=>{
navigate(data);
  }
  return isAuth ? <>
    <motion.div className="main-layout">
      <motion.div className="inside-layout">
        <motion.div animate={{ width: toogles ? '5%' : '14%' }}>
          <motion.div className='sidebar-main-section'>
            <button onClick={() =>
              setToogles((pre) => !pre)}>
              <div>Sidebar</div>
            </button>
            {toogles ? <>
              <div className='side-texts-contents'>
                {SideBarContent?.map((item, index) => {
                  return (
                    <motion.div>
                      {item?.name}
                    </motion.div>
                  )
                })}
                {/* <motion.div>
                  H
                </motion.div>
                <motion.div>
                  C
                </motion.div>
                <motion.div>
                  Q
                </motion.div>
                <motion.div>
                  M
                </motion.div>
                <motion.div>
                  N
                </motion.div>
                <motion.div>
                  N
                </motion.div> */}
              </div>
            </> : <>
              <div className='side-texts-contents'>
                {SideBarContent?.map((item, index) => {
                  return (
                    <motion.div onClick={()=>PushPaths(item?.path)}>
                      {item?.name}
                    </motion.div>
                  )
                })}
                {/* <motion.div>
                  Home
                </motion.div>
                <motion.div>
                  Course
                </motion.div>
                <motion.div>
                  Q&A
                </motion.div>
                <motion.div>
                  My Purchase
                </motion.div>
                <motion.div>
                  News & Article
                </motion.div>
                <motion.div>
                  Notifications
                </motion.div> */}
              </div>
            </>}

          </motion.div>

        </motion.div>
        <motion.div animate={{ width: toogles ? "95%" : "86%" }} >
          <Outlet />
        </motion.div>
      </motion.div>

    </motion.div >
  </> : <Navigate to="/" />;
};

export default ProtectedRouter;
