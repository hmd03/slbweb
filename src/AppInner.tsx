import React, { Suspense } from 'react';
import { RecoilRoot } from 'recoil';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const Login = React.lazy(() => import('./pages/Login'));

const AppInner = () => {
  return (
    <RecoilRoot>
      <BrowserRouter>
        <Suspense fallback={<div>...loading</div>}>
            <Routes>
              <Route path='/admin/login' element={<Login />} />
            </Routes>
        </Suspense>
      </BrowserRouter>
    </RecoilRoot>
  );
};

export default AppInner;
