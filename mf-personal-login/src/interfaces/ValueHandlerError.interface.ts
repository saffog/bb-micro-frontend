type ValueErrorType = {
  errorMessage: string,
  pattern?: string,
}

export interface ValuesHandlerError {
  [key: string]: ValueErrorType;
}
