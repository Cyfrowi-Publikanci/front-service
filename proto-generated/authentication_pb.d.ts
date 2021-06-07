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

export class LoginByEmailPayload extends jspb.Message {
  getEmail(): string;
  setEmail(value: string): LoginByEmailPayload;

  getPassword(): string;
  setPassword(value: string): LoginByEmailPayload;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): LoginByEmailPayload.AsObject;
  static toObject(includeInstance: boolean, msg: LoginByEmailPayload): LoginByEmailPayload.AsObject;
  static serializeBinaryToWriter(message: LoginByEmailPayload, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): LoginByEmailPayload;
  static deserializeBinaryFromReader(message: LoginByEmailPayload, reader: jspb.BinaryReader): LoginByEmailPayload;
}

export namespace LoginByEmailPayload {
  export type AsObject = {
    email: string,
    password: string,
  }
}

export class LoginByEmailResponse extends jspb.Message {
  getToken(): string;
  setToken(value: string): LoginByEmailResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): LoginByEmailResponse.AsObject;
  static toObject(includeInstance: boolean, msg: LoginByEmailResponse): LoginByEmailResponse.AsObject;
  static serializeBinaryToWriter(message: LoginByEmailResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): LoginByEmailResponse;
  static deserializeBinaryFromReader(message: LoginByEmailResponse, reader: jspb.BinaryReader): LoginByEmailResponse;
}

export namespace LoginByEmailResponse {
  export type AsObject = {
    token: string,
  }
}

export class RegisterByEmailPayload extends jspb.Message {
  getEmail(): string;
  setEmail(value: string): RegisterByEmailPayload;

  getPassword(): string;
  setPassword(value: string): RegisterByEmailPayload;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RegisterByEmailPayload.AsObject;
  static toObject(includeInstance: boolean, msg: RegisterByEmailPayload): RegisterByEmailPayload.AsObject;
  static serializeBinaryToWriter(message: RegisterByEmailPayload, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RegisterByEmailPayload;
  static deserializeBinaryFromReader(message: RegisterByEmailPayload, reader: jspb.BinaryReader): RegisterByEmailPayload;
}

export namespace RegisterByEmailPayload {
  export type AsObject = {
    email: string,
    password: string,
  }
}

export class RegisterByEmailResponse extends jspb.Message {
  getStatus(): string;
  setStatus(value: string): RegisterByEmailResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RegisterByEmailResponse.AsObject;
  static toObject(includeInstance: boolean, msg: RegisterByEmailResponse): RegisterByEmailResponse.AsObject;
  static serializeBinaryToWriter(message: RegisterByEmailResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RegisterByEmailResponse;
  static deserializeBinaryFromReader(message: RegisterByEmailResponse, reader: jspb.BinaryReader): RegisterByEmailResponse;
}

export namespace RegisterByEmailResponse {
  export type AsObject = {
    status: string,
  }
}

export class EditPasswordResponse extends jspb.Message {
  getEmail(): string;
  setEmail(value: string): EditPasswordResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): EditPasswordResponse.AsObject;
  static toObject(includeInstance: boolean, msg: EditPasswordResponse): EditPasswordResponse.AsObject;
  static serializeBinaryToWriter(message: EditPasswordResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): EditPasswordResponse;
  static deserializeBinaryFromReader(message: EditPasswordResponse, reader: jspb.BinaryReader): EditPasswordResponse;
}

export namespace EditPasswordResponse {
  export type AsObject = {
    email: string,
  }
}

export class EditPasswordPayload extends jspb.Message {
  getEmail(): string;
  setEmail(value: string): EditPasswordPayload;

  getPassword(): string;
  setPassword(value: string): EditPasswordPayload;

  getPasswordconfirm(): string;
  setPasswordconfirm(value: string): EditPasswordPayload;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): EditPasswordPayload.AsObject;
  static toObject(includeInstance: boolean, msg: EditPasswordPayload): EditPasswordPayload.AsObject;
  static serializeBinaryToWriter(message: EditPasswordPayload, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): EditPasswordPayload;
  static deserializeBinaryFromReader(message: EditPasswordPayload, reader: jspb.BinaryReader): EditPasswordPayload;
}

export namespace EditPasswordPayload {
  export type AsObject = {
    email: string,
    password: string,
    passwordconfirm: string,
  }
}

