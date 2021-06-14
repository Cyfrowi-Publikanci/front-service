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

export class LoadProfileResponse extends jspb.Message {
  getPreferences(): string;
  setPreferences(value: string): LoadProfileResponse;

  getUserid(): string;
  setUserid(value: string): LoadProfileResponse;

  getWaschanged(): boolean;
  setWaschanged(value: boolean): LoadProfileResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): LoadProfileResponse.AsObject;
  static toObject(includeInstance: boolean, msg: LoadProfileResponse): LoadProfileResponse.AsObject;
  static serializeBinaryToWriter(message: LoadProfileResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): LoadProfileResponse;
  static deserializeBinaryFromReader(message: LoadProfileResponse, reader: jspb.BinaryReader): LoadProfileResponse;
}

export namespace LoadProfileResponse {
  export type AsObject = {
    preferences: string,
    userid: string,
    waschanged: boolean,
  }
}

export class LoadProfilePayload extends jspb.Message {
  getUserid(): string;
  setUserid(value: string): LoadProfilePayload;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): LoadProfilePayload.AsObject;
  static toObject(includeInstance: boolean, msg: LoadProfilePayload): LoadProfilePayload.AsObject;
  static serializeBinaryToWriter(message: LoadProfilePayload, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): LoadProfilePayload;
  static deserializeBinaryFromReader(message: LoadProfilePayload, reader: jspb.BinaryReader): LoadProfilePayload;
}

export namespace LoadProfilePayload {
  export type AsObject = {
    userid: string,
  }
}

export class ChangeProfileResponse extends jspb.Message {
  getUserid(): string;
  setUserid(value: string): ChangeProfileResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ChangeProfileResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ChangeProfileResponse): ChangeProfileResponse.AsObject;
  static serializeBinaryToWriter(message: ChangeProfileResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ChangeProfileResponse;
  static deserializeBinaryFromReader(message: ChangeProfileResponse, reader: jspb.BinaryReader): ChangeProfileResponse;
}

export namespace ChangeProfileResponse {
  export type AsObject = {
    userid: string,
  }
}

export class ChangeProfilePayload extends jspb.Message {
  getUserid(): string;
  setUserid(value: string): ChangeProfilePayload;

  getPreferences(): string;
  setPreferences(value: string): ChangeProfilePayload;

  getWaschanged(): boolean;
  setWaschanged(value: boolean): ChangeProfilePayload;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ChangeProfilePayload.AsObject;
  static toObject(includeInstance: boolean, msg: ChangeProfilePayload): ChangeProfilePayload.AsObject;
  static serializeBinaryToWriter(message: ChangeProfilePayload, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ChangeProfilePayload;
  static deserializeBinaryFromReader(message: ChangeProfilePayload, reader: jspb.BinaryReader): ChangeProfilePayload;
}

export namespace ChangeProfilePayload {
  export type AsObject = {
    userid: string,
    preferences: string,
    waschanged: boolean,
  }
}

