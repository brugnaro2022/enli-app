import { combineReducers } from "redux";

import AuthReducer from "../auth/authReducer";
import DashboardReducer from "../dashboard/dashboardReducer";

const rootReducer = combineReducers({
  dashboard: DashboardReducer,
  auth: AuthReducer
});

export default rootReducer;
