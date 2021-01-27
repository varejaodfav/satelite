/*
 * CLASSE DE ERRO GLOBAL
 *
 * Este arquivo define o modelo das mensagens de erro.
 *
 * Autor: Diego Varejão <varejaodfav@fab.mil.br>
 */
class GlobalException {
  public readonly type: string;

  public readonly code: string;

  public readonly status: number;

  public readonly title: string;

  public readonly detail: string;

  constructor(
    type: string,
    code: string,
    title: string,
    detail: string,
    status = 400,
  ) {
    this.status = status;
    this.type = type;
    this.code = code;
    this.title = title;
    this.detail = detail;
  }
}

export default GlobalException;
