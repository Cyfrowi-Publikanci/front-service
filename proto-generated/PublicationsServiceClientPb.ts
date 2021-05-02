/**
 * @fileoverview gRPC-Web generated client stub for publications
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck


import * as grpcWeb from 'grpc-web';

import * as publications_pb from './publications_pb';


export class PublicationsServiceClient {
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

  methodInfogetAllPublications = new grpcWeb.AbstractClientBase.MethodInfo(
    publications_pb.GetAllPublicationsResponse,
    (request: publications_pb.EmptyPayload) => {
      return request.serializeBinary();
    },
    publications_pb.GetAllPublicationsResponse.deserializeBinary
  );

  getAllPublications(
    request: publications_pb.EmptyPayload,
    metadata: grpcWeb.Metadata | null): Promise<publications_pb.GetAllPublicationsResponse>;

  getAllPublications(
    request: publications_pb.EmptyPayload,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: publications_pb.GetAllPublicationsResponse) => void): grpcWeb.ClientReadableStream<publications_pb.GetAllPublicationsResponse>;

  getAllPublications(
    request: publications_pb.EmptyPayload,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: publications_pb.GetAllPublicationsResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/publications.PublicationsService/getAllPublications',
        request,
        metadata || {},
        this.methodInfogetAllPublications,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/publications.PublicationsService/getAllPublications',
    request,
    metadata || {},
    this.methodInfogetAllPublications);
  }

}

