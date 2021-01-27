import { getManager } from 'typeorm';

export default async function updateFullTextSearch(): Promise<void> {
  await getManager().query(
    `UPDATE technical_intervention_requests
      SET full_text_search = to_tsvector('portuguese',
        coalesce(number, '') || ' ' ||
        coalesce(title, '') || ' ' ||
        coalesce(description, '') || ' ' ||
        coalesce(status, '') || ' ' ||
        coalesce((SELECT to_tsvector(name) AS department
                  FROM departments
                  WHERE id = technical_intervention_requests.department_id),'') || ' ' ||
        coalesce((SELECT to_tsvector(abbreviation) AS department
                  FROM departments
                  WHERE id = technical_intervention_requests.department_id),'')
      );`,
  );
}
