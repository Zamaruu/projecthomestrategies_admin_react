import { dividerClasses } from '@mui/material';
import React from 'react';
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import BasePageProvider from './context/basepage_context';
import AppFoundationPage from './core/foundation/foundation';
import BasePage from './core/foundation/foundation';
import DashboardPage from './pages/dashboard/dashboard_page';
import HouseholdsPage from './pages/household_page/household_page';
import UsersPage from './pages/users_page/users_page';

const NotFoundComponent = () => {
  return (
    <div>
      Not Found
    </div>
  );
}

const DashboardComponent = () => {
  return (
    <div>
      <DashboardPage></DashboardPage>
    </div>
  );
}

const UsersComponent = () => {
  return (
    <div>
      <UsersPage></UsersPage>
    </div>
  );
}

const HouseholdComponent = () => {
  return (
    <div>
      <HouseholdsPage></HouseholdsPage>
    </div>
  );
}

function App() {
  return (
    <div>
      <Router>
        <BasePageProvider>
          <AppFoundationPage>
              <Routes>
                <Route path="*" element={<NotFoundComponent/>} />
                <Route path="/" element={<DashboardComponent/>} />
                <Route path="users" element={<UsersComponent/>}>
                  {/* <Route index element={<PackageReceptionsComponent />} /> */}
                  {/* <Route path="list" element={<PackageReceptionsComponent/>} />
                  <Route path="new" element={<NewPackageComponent/>} />
                <Route path="*" element={<NotFound />} /> */}
                </Route>
                <Route path="households" element={<HouseholdComponent/>}>
                  {/* <Route path="list" element={<TicketList/>} />
                  <Route path="new" element={<NewTicketPage/>} />
                <Route path="mylist" element={<MyTicketPage/>} /> */}
                </Route>
              </Routes>
          </AppFoundationPage>
        </BasePageProvider>
      </Router>
    </div>
  );
}

export default App;
