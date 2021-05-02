/**
 * @fileoverview gRPC-Web generated client stub for admin
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck


import * as grpcWeb from 'grpc-web';

import * as admin_pb from './admin_pb';


export class UsersServiceClient {
  client_: grpcWeb.AbstractClientBase;
  hostname_: string;
  credentials_: null | { [index: string]: string; };
  options_: null | { [index: string]: any; };

  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; }) {
    if (!options) options = {};
    if (!credentials) credentials = {};
    options['format'] = 'text';

    this.client_ = new grpcWeb.GrpcWebClientBase(options);
    this.hostname_ = hostname;
    this.credentials_ = credentials;
    this.options_ = options;
  }

  methodInfogetAllUsers = new grpcWeb.AbstractClientBase.MethodInfo(
    admin_pb.GetAllUsersResponse,
    (request: admin_pb.EmptyPayload) => {
      return request.serializeBinary();
    },
    admin_pb.GetAllUsersResponse.deserializeBinary
  );

  getAllUsers(
    request: admin_pb.EmptyPayload,
    metadata: grpcWeb.Metadata | null): Promise<admin_pb.GetAllUsersResponse>;

  getAllUsers(
    request: admin_pb.EmptyPayload,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: admin_pb.GetAllUsersResponse) => void): grpcWeb.ClientReadableStream<admin_pb.GetAllUsersResponse>;

  getAllUsers(
    request: admin_pb.EmptyPayload,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: admin_pb.GetAllUsersResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/admin.UsersService/getAllUsers',
        request,
        metadata || {},
        this.methodInfogetAllUsers,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/admin.UsersService/getAllUsers',
    request,
    metadata || {},
    this.methodInfogetAllUsers);
  }

}

