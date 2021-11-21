import { AlertType } from '../components/common/alerts/types';

export interface AuthState {
  authorization: string;
  authenticateError: boolean;
  state: string,
}

export interface ComponentsState {
  loader: boolean;
  showAlert: boolean;
  alert: {
    message: string;
    type?: AlertType;
  };
}

export interface ProfileState {
  bgColor: string;
  fontSize: string,
}
