import React, { Suspense, lazy, useEffect } from 'react';

import { Route, Routes } from "react-router-dom";



// routing paths
const Signin = lazy(() => import('../components/auth/signin/Signin'));
const ProtectedRouter = lazy(() => import('./ProtectedRouter'));
const PageNotFound = lazy(() => import('../components/pagenotfound/PageNotFound'));
const Dashboard = lazy(() => import('../components/dashborad/Dashboard'));
const Courses = lazy(() => import('../components/courses/Courses'));





function RouterIndex() {
  return (
    <section>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<Signin />}></Route>
          <Route element={<ProtectedRouter></ProtectedRouter>}>
            <Route path="/dashboard" element={<Dashboard />}></Route>
            <Route path="/course" element={<Courses />}></Route>
          </Route>
          <Route path="*" element={<PageNotFound />}>
          </Route>
        </Routes>
      </Suspense>
    </section>
  )
}

export default RouterIndex