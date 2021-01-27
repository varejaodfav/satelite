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
  /*
   * Se o erro é conhecido pelo servidor: Exiba as informações recebidas pela
   * rota que o disparou.
   * */
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

  /*
   * Se o erro não é conhecido pelo servidor: Mostre o erro no console da
   * aplicação para propósitos de depuração e retorne uma mensagem de erro
   * padrão.
   */
  console.error(error);

  return response.status(500).json({
    error: {
      type: 'UnknownError',
      title: 'Erro interno do servidor',
      detail:
        'Um erro inesperado aconteceu! Por favor, contate o administrador do sistema.',
    },
    code: 500,
  });
}

export default globalErrorHandling;
