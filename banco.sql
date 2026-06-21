-- Criar tabela de Médicos
CREATE TABLE medicos (
    id SERIAL PRIMARY KEY,
    nome VARCHAR(100) NOT NULL,
    especialidade VARCHAR(100) NOT NULL
);

-- Criar tabela de Pacientes
CREATE TABLE pacientes (
    id SERIAL PRIMARY KEY,
    nome VARCHAR(100) NOT NULL,
    data_nascimento DATE NOT NULL,
    tipo_sanguineo VARCHAR(3) NOT NULL
);

-- Criar tabela intermediária Consulta (Relacionamento N-N)
CREATE TABLE consultas (
    id_medico INT REFERENCES medicos(id) ON DELETE CASCADE,
    id_paciente INT REFERENCES pacientes(id) ON DELETE CASCADE,
    data_hora TIMESTAMP NOT NULL,
    observacoes TEXT,
    PRIMARY KEY (id_medico, id_paciente, data_hora)
);
