exports.seed = async function (knex) {
  // Obtem IDs atuais dos agentes
  const agentes = await knex('agentes').select('id');
  const id1 = agentes[0].id;
  const id2 = agentes[1].id;

  await knex('casos').del();
  await knex('casos').insert([
    {
      titulo: 'Homicídio no bairro União',
      descricao: 'Disparos foram reportados às 22:33 resultando em morte.',
      status: 'aberto',
      agente_id: id1
    },
    {
      titulo: 'Furto em estabelecimento comercial',
      descricao: 'Relatos de arrombamento durante a madrugada.',
      status: 'solucionado',
      agente_id: id2
    }
  ]);
};
