import { LoginByEmailPayload, LoginByEmailResponse } from '../../../proto-generated/authentication_pb';

export const createLoginByEmailPayload  = (): LoginByEmailPayload => {
  const payload = new LoginByEmailPayload();
  payload.setEmail('a@a.com');
  payload.setPassword('123');
  return payload;
};

export const createLoginByEmailResponse = (): LoginByEmailResponse => {
  const response = new LoginByEmailResponse();
  response.setToken('123');
  return response;
};
