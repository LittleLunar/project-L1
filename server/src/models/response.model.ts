import httpStatusCode from "../enums/httpStatusCode"

interface IResponse<T> {
  code: number
  message: string
  data?: [T]
}

interface IErrorMessage extends IResponse<null> {}
interface ISuccessMessage extends IResponse<null> {}

function BadRequestResponse(message: string): IErrorMessage {
  return {
    code: httpStatusCode.BadRequest,
    message: message
  }
}

function UnAuthorizedResponse(message: string): IErrorMessage {
  return {
    code: httpStatusCode.UnAuthorized,
    message: message
  }
}

function NoContentResponse(message: string): ISuccessMessage {
  return {
    code: httpStatusCode.NoContent,
    message: message
  }
}

function CreatedResponse(message: string): ISuccessMessage {
  return {
    code: httpStatusCode.Created,
    message: message
  }
}

function OkResponse(message: string): ISuccessMessage {
  return {
    code: httpStatusCode.Ok,
    message: message,
  }
}

function DataResponse<T>(message: string, data: [T]): IResponse<T> {
  return {
    code: httpStatusCode.Ok,
    message: message,
    data: data
  }
}

export { 
  BadRequestResponse,
  UnAuthorizedResponse,
  NoContentResponse,
  CreatedResponse,
  OkResponse,
  DataResponse
}