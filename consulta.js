// controllers/consultaController.js
const db = require('../config/database');

// Listar todas as consultas trazendo os nomes de médicos e pacientes (JOIN)
exports.listar = async (req, res) => {
    const query = `
        SELECT c.data_hora, c.observacoes, m.nome as medico, p.nome as paciente, c.id_medico, c.id_paciente
        FROM consultas c
        JOIN medicos m ON c.id_medico = m.id
        JOIN pacientes p ON c.id_paciente = p.id
        ORDER BY c.data_hora DESC
    `;
    const consultas = await db.query(query);
    const medicos = await db.query('SELECT * FROM medicos');
    const pacientes = await db.query('SELECT * FROM pacientes');
    
    res.render('consultas', { consultas: consultas.rows, medicos: medicos.rows, pacientes: pacientes.rows });
};

// Salvar nova consulta
exports.salvar = async (req, res) => {
    const { id_medico, id_paciente, data_hora, observacoes } = req.body;
    await db.query(
        'INSERT INTO consultas (id_medico, id_paciente, data_hora, observacoes) VALUES ($1, $2, $3, $4)',
        [id_medico, id_paciente, data_hora, observacoes]
    );
    res.redirect('/consultas');
};

// Deletar consulta (Usa a chave composta no WHERE)
exports.deletar = async (req, res) => {
    const { id_medico, id_paciente, data_hora } = req.query;
    await db.query(
        'DELETE FROM consultas WHERE id_medico = $1 AND id_paciente = $2 AND data_hora = $3',
        [id_medico, id_paciente, data_hora]
    );
    res.redirect('/consultas');
};
