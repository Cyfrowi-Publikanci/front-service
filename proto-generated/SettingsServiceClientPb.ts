/**
 * @fileoverview gRPC-Web generated client stub for settings
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck


import * as grpcWeb from 'grpc-web';

import * as settings_pb from './settings_pb';


export class SettingsServiceClient {
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

  methodInfoloadProfile = new grpcWeb.AbstractClientBase.MethodInfo(
    settings_pb.LoadProfileResponse,
    (request: settings_pb.LoadProfilePayload) => {
      return request.serializeBinary();
    },
    settings_pb.LoadProfileResponse.deserializeBinary
  );

  loadProfile(
    request: settings_pb.LoadProfilePayload,
    metadata: grpcWeb.Metadata | null): Promise<settings_pb.LoadProfileResponse>;

  loadProfile(
    request: settings_pb.LoadProfilePayload,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: settings_pb.LoadProfileResponse) => void): grpcWeb.ClientReadableStream<settings_pb.LoadProfileResponse>;

  loadProfile(
    request: settings_pb.LoadProfilePayload,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: settings_pb.LoadProfileResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/settings.SettingsService/loadProfile',
        request,
        metadata || {},
        this.methodInfoloadProfile,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/settings.SettingsService/loadProfile',
    request,
    metadata || {},
    this.methodInfoloadProfile);
  }

  methodInfochangeProfile = new grpcWeb.AbstractClientBase.MethodInfo(
    settings_pb.ChangeProfileResponse,
    (request: settings_pb.ChangeProfilePayload) => {
      return request.serializeBinary();
    },
    settings_pb.ChangeProfileResponse.deserializeBinary
  );

  changeProfile(
    request: settings_pb.ChangeProfilePayload,
    metadata: grpcWeb.Metadata | null): Promise<settings_pb.ChangeProfileResponse>;

  changeProfile(
    request: settings_pb.ChangeProfilePayload,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: settings_pb.ChangeProfileResponse) => void): grpcWeb.ClientReadableStream<settings_pb.ChangeProfileResponse>;

  changeProfile(
    request: settings_pb.ChangeProfilePayload,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: settings_pb.ChangeProfileResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/settings.SettingsService/changeProfile',
        request,
        metadata || {},
        this.methodInfochangeProfile,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/settings.SettingsService/changeProfile',
    request,
    metadata || {},
    this.methodInfochangeProfile);
  }

}

