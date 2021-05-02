import * as jspb from 'google-protobuf'



export class EmptyPayload extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): EmptyPayload.AsObject;
  static toObject(includeInstance: boolean, msg: EmptyPayload): EmptyPayload.AsObject;
  static serializeBinaryToWriter(message: EmptyPayload, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): EmptyPayload;
  static deserializeBinaryFromReader(message: EmptyPayload, reader: jspb.BinaryReader): EmptyPayload;
}

export namespace EmptyPayload {
  export type AsObject = {
  }
}

export class GetAllPublicationsResponse extends jspb.Message {
  getPublication(): string;
  setPublication(value: string): GetAllPublicationsResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetAllPublicationsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetAllPublicationsResponse): GetAllPublicationsResponse.AsObject;
  static serializeBinaryToWriter(message: GetAllPublicationsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetAllPublicationsResponse;
  static deserializeBinaryFromReader(message: GetAllPublicationsResponse, reader: jspb.BinaryReader): GetAllPublicationsResponse;
}

export namespace GetAllPublicationsResponse {
  export type AsObject = {
    publication: string,
  }
}

