import { AlertType } from '../components/common/alerts/types';

export interface AuthState {
  authorization: string;
  authenticateError: boolean;
}

export interface ComponentsState {
  loader: boolean;
  showAlert: boolean;
  alert: {
    message: string;
    type?: AlertType;
  };
}