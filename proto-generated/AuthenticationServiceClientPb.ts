/**
 * @fileoverview gRPC-Web generated client stub for authentication
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck


import * as grpcWeb from 'grpc-web';

import * as authentication_pb from './authentication_pb';


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
    authentication_pb.GetAllUsersResponse,
    (request: authentication_pb.EmptyPayload) => {
      return request.serializeBinary();
    },
    authentication_pb.GetAllUsersResponse.deserializeBinary
  );

  getAllUsers(
    request: authentication_pb.EmptyPayload,
    metadata: grpcWeb.Metadata | null): Promise<authentication_pb.GetAllUsersResponse>;

  getAllUsers(
    request: authentication_pb.EmptyPayload,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: authentication_pb.GetAllUsersResponse) => void): grpcWeb.ClientReadableStream<authentication_pb.GetAllUsersResponse>;

  getAllUsers(
    request: authentication_pb.EmptyPayload,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: authentication_pb.GetAllUsersResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/authentication.UsersService/getAllUsers',
        request,
        metadata || {},
        this.methodInfogetAllUsers,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/authentication.UsersService/getAllUsers',
    request,
    metadata || {},
    this.methodInfogetAllUsers);
  }

}

export class AuthServiceClient {
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

  methodInfologinByEmail = new grpcWeb.AbstractClientBase.MethodInfo(
    authentication_pb.LoginByEmailResponse,
    (request: authentication_pb.LoginByEmailPayload) => {
      return request.serializeBinary();
    },
    authentication_pb.LoginByEmailResponse.deserializeBinary
  );

  loginByEmail(
    request: authentication_pb.LoginByEmailPayload,
    metadata: grpcWeb.Metadata | null): Promise<authentication_pb.LoginByEmailResponse>;

  loginByEmail(
    request: authentication_pb.LoginByEmailPayload,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: authentication_pb.LoginByEmailResponse) => void): grpcWeb.ClientReadableStream<authentication_pb.LoginByEmailResponse>;

  loginByEmail(
    request: authentication_pb.LoginByEmailPayload,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: authentication_pb.LoginByEmailResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/authentication.AuthService/loginByEmail',
        request,
        metadata || {},
        this.methodInfologinByEmail,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/authentication.AuthService/loginByEmail',
    request,
    metadata || {},
    this.methodInfologinByEmail);
  }

  methodInforegisterByEmail = new grpcWeb.AbstractClientBase.MethodInfo(
    authentication_pb.RegisterByEmailResponse,
    (request: authentication_pb.RegisterByEmailPayload) => {
      return request.serializeBinary();
    },
    authentication_pb.RegisterByEmailResponse.deserializeBinary
  );

  registerByEmail(
    request: authentication_pb.RegisterByEmailPayload,
    metadata: grpcWeb.Metadata | null): Promise<authentication_pb.RegisterByEmailResponse>;

  registerByEmail(
    request: authentication_pb.RegisterByEmailPayload,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: authentication_pb.RegisterByEmailResponse) => void): grpcWeb.ClientReadableStream<authentication_pb.RegisterByEmailResponse>;

  registerByEmail(
    request: authentication_pb.RegisterByEmailPayload,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: authentication_pb.RegisterByEmailResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/authentication.AuthService/registerByEmail',
        request,
        metadata || {},
        this.methodInforegisterByEmail,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/authentication.AuthService/registerByEmail',
    request,
    metadata || {},
    this.methodInforegisterByEmail);
  }

  methodInfoeditPassword = new grpcWeb.AbstractClientBase.MethodInfo(
    authentication_pb.EditPasswordResponse,
    (request: authentication_pb.EditPasswordPayload) => {
      return request.serializeBinary();
    },
    authentication_pb.EditPasswordResponse.deserializeBinary
  );

  editPassword(
    request: authentication_pb.EditPasswordPayload,
    metadata: grpcWeb.Metadata | null): Promise<authentication_pb.EditPasswordResponse>;

  editPassword(
    request: authentication_pb.EditPasswordPayload,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: authentication_pb.EditPasswordResponse) => void): grpcWeb.ClientReadableStream<authentication_pb.EditPasswordResponse>;

  editPassword(
    request: authentication_pb.EditPasswordPayload,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: authentication_pb.EditPasswordResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/authentication.AuthService/editPassword',
        request,
        metadata || {},
        this.methodInfoeditPassword,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/authentication.AuthService/editPassword',
    request,
    metadata || {},
    this.methodInfoeditPassword);
  }

  methodInfologinByGoogle = new grpcWeb.AbstractClientBase.MethodInfo(
    authentication_pb.LoginByGoogleResponse,
    (request: authentication_pb.LoginByGooglePayload) => {
      return request.serializeBinary();
    },
    authentication_pb.LoginByGoogleResponse.deserializeBinary
  );

  loginByGoogle(
    request: authentication_pb.LoginByGooglePayload,
    metadata: grpcWeb.Metadata | null): Promise<authentication_pb.LoginByGoogleResponse>;

  loginByGoogle(
    request: authentication_pb.LoginByGooglePayload,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: authentication_pb.LoginByGoogleResponse) => void): grpcWeb.ClientReadableStream<authentication_pb.LoginByGoogleResponse>;

  loginByGoogle(
    request: authentication_pb.LoginByGooglePayload,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: authentication_pb.LoginByGoogleResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/authentication.AuthService/loginByGoogle',
        request,
        metadata || {},
        this.methodInfologinByGoogle,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/authentication.AuthService/loginByGoogle',
    request,
    metadata || {},
    this.methodInfologinByGoogle);
  }

  methodInfogetAllNotifications = new grpcWeb.AbstractClientBase.MethodInfo(
    authentication_pb.GetAllNotyficationsResponse,
    (request: authentication_pb.EmptyPayload) => {
      return request.serializeBinary();
    },
    authentication_pb.GetAllNotyficationsResponse.deserializeBinary
  );

  getAllNotifications(
    request: authentication_pb.EmptyPayload,
    metadata: grpcWeb.Metadata | null): Promise<authentication_pb.GetAllNotyficationsResponse>;

  getAllNotifications(
    request: authentication_pb.EmptyPayload,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: authentication_pb.GetAllNotyficationsResponse) => void): grpcWeb.ClientReadableStream<authentication_pb.GetAllNotyficationsResponse>;

  getAllNotifications(
    request: authentication_pb.EmptyPayload,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: authentication_pb.GetAllNotyficationsResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/authentication.AuthService/getAllNotifications',
        request,
        metadata || {},
        this.methodInfogetAllNotifications,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/authentication.AuthService/getAllNotifications',
    request,
    metadata || {},
    this.methodInfogetAllNotifications);
  }

}

