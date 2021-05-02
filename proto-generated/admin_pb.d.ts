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

export class GetAllUsersResponse extends jspb.Message {
  getEmail(): string;
  setEmail(value: string): GetAllUsersResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetAllUsersResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetAllUsersResponse): GetAllUsersResponse.AsObject;
  static serializeBinaryToWriter(message: GetAllUsersResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetAllUsersResponse;
  static deserializeBinaryFromReader(message: GetAllUsersResponse, reader: jspb.BinaryReader): GetAllUsersResponse;
}

export namespace GetAllUsersResponse {
  export type AsObject = {
    email: string,
  }
}

