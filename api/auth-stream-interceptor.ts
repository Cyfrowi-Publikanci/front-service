import * as grpcWeb from 'grpc-web';

import { AUTHENTICATION_ERROR } from '../redux/actions-types/auth';
import { store } from '../redux/store';
import { ErrorsCode } from './errors/errors';


export default class AuthStreamInterceptor<REQ, RESP> implements grpcWeb.StreamInterceptor<REQ, RESP> {
  intercept(
    request: grpcWeb.Request<REQ, RESP>,
    invoker: (request: grpcWeb.Request<REQ, RESP>) => grpcWeb.ClientReadableStream<RESP>,
  ): grpcWeb.ClientReadableStream<RESP> {
    const metadata = request.getMetadata();
    const token = store.getState().auth.authorization;

    metadata.authorization = `Bearer ${token}`;
    const response = invoker(request);
    response.on('error', error => {
      if (error.message === ErrorsCode.INVALID_AUTHORIZATION || error.code === ErrorsCode.PERMISSION_DENIED) {
        store.dispatch({ type: AUTHENTICATION_ERROR });
      }
    });
    return response;
  }
}
