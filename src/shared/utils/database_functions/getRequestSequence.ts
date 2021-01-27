import { getManager } from 'typeorm';

export default async function getSequence(): Promise<any> { // eslint-disable-line
  // Retorna o próximo número da sequência e acrescenta os zeros à esquerda
  const [sequence] = await getManager().query(
    `SELECT to_char(nextval('request_sequence_number'), 'FM0000')`,
  );

  const date = new Date().toISOString().split('T')[0].split('-').join('');

  return `${date}-${sequence.to_char}`;
}
