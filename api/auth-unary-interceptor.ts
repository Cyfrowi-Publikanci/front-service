import * as grpcWeb from 'grpc-web';

import { AUTHENTICATION_ERROR } from '../redux/actions-types/auth';
import { store } from '../redux/store';
import { ErrorsCode } from './errors/errors';

function isGrpcError(object: unknown): object is grpcWeb.Error {
  if (typeof object !== 'object' || object === null) {
    return false;
  }
  return 'code' in object && 'message' in object;
}

export default class AuthUnaryInterceptor<REQ, RESP> implements grpcWeb.UnaryInterceptor<REQ, RESP> {
  async intercept(
    request: grpcWeb.Request<REQ, RESP>,
    invoker: (request: grpcWeb.Request<REQ, RESP>) => Promise<grpcWeb.UnaryResponse<REQ, RESP>>,
  ): Promise<grpcWeb.UnaryResponse<REQ, RESP>> {
    const metadata = request.getMetadata();
    const token = store.getState().auth.authorization;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    console.log('XD2')

    const { name } = request.getMethodDescriptor() as any;

    metadata.authorization = `Bearer ${token}`;
    try {
      const response = await invoker(request);
      return response;
    } catch (error: unknown) {
      if (isGrpcError(error) && error.code === ErrorsCode.PERMISSION_DENIED) {
        store.dispatch({ type: AUTHENTICATION_ERROR });
      }
      throw error;
    }
  }
}
