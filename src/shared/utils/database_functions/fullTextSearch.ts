import { getManager } from 'typeorm';

export default async function fullTextSearch(
  search_string: string,
): Promise<any> {
  const result = await getManager().query(
    "SELECT * FROM technical_intervention_requests WHERE full_text_search @@ plainto_tsquery('portuguese',$1)",
    [search_string],
  );

  return result;
}
