import {HttpResponseInit} from 'msw';

export interface ErrorResponse {
  body?: string | null,
  init?: { state: number, statusText: string}

}