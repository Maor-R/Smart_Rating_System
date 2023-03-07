import { createContext, useContext, useReducer } from 'react';

import alertReducer from './alertReducer';
import { ALERT_ACTIONS } from '../actions';
import { DEFAULT_TIME_ALERT, MS_1000 } from '../../constants';
const AlertContext = createContext();

const AlertProvider = ({ children }) => {
  const initialState = null;

  const [state, dispatch] = useReducer(alertReducer, initialState);

  const setAlert = (message, type, sec = DEFAULT_TIME_ALERT) => {
    dispatch({
      type: ALERT_ACTIONS.SET_ALERT,
      payload: { message, type },
    });

    setTimeout(() => {
      dispatch({ type: ALERT_ACTIONS.REMOVE_ALERT });
    }, sec * MS_1000);
  };

  return (
    <AlertContext.Provider
      value={{
        alert: state,
        setAlert
      }}
    >
      {children}
    </AlertContext.Provider>
  );
};

export const useAlertGlobalContext = () => {
  return useContext(AlertContext);
};

export { AlertProvider };