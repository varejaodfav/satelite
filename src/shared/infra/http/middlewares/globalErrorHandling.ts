import { NextFunction, Request, Response } from 'express';

import GlobalException from '@shared/errors/GlobalException';

interface IErrorDTO {
  error: {
    type: string;
    title: string;
    detail: string;
  };
  code: number;
}

function globalErrorHandling(
  error: Error,
  _request: Request,
  response: Response,
  _next: NextFunction,
): Response<IErrorDTO> {
  if (error instanceof GlobalException) {
    return response.status(error.status).json({
      error: {
        type: error.type,
        title: error.title,
        detail: error.detail,
      },
      code: error.code,
    });
  }

  console.error(error);

  return response.status(500).json({
    error: {
      type: 'UnknownError',
      title: 'Internal server error',
      detail: 'An unexpected error has occurred',
    },
    code: 500,
  });
}

export default globalErrorHandling;
