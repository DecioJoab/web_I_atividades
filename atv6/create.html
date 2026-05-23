<?php
// Inclui o arquivo de conexão com o banco de dados
require_once 'db.php';

// Verifica se o formulário foi submetido através do método POST
if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    // Obtém os dados enviados pelo formulário
    $nome = $_POST['nome'];
    $matricula = $_POST['matricula'];
    $dataNascimento = $_POST['dataNascimento'];
    $email = $_POST['email'];
    
    // Prepara a instrução SQL para inserir um novo aluno no banco de dados
    $stmt = $pdo->prepare("INSERT INTO alunos (nome, matricula, data_nascimento, email) VALUES (?, ?, ?, ?)");
    
    // Executa a instrução SQL com os dados do formulário
    $stmt->execute([$nome, $matricula, $dataNascimento, $email]);
    
    // Redireciona para a página de listagem de alunos após a inserção
    header('Location: index-aluno.php');
}
?>

<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Adicionar Aluno</title>
    <link rel="stylesheet" href="../css/style.css">
</head>
<body>
    <header>
        <h1>Bem-vindo ao Sistema de Gerenciamento de Alunos</h1>
        <nav>
            <ul>
                <li><a href="create.php">Adicionar Aluno</a></li>
            </ul>
        </nav>
    </header>

    <main>
        <h2>Adicionar Aluno</h2>
        <!-- Formulário para adicionar um novo aluno -->
        <form method="POST">
            <label for="nome">Nome:</label>
            <!-- Campo para inserir o nome do aluno -->
            <input type="text" id="nome" name="nome" required>
            
            <label for="matricula">Matrícula:</label>
            <!-- Campo para inserir a matrícula do aluno -->
            <input type="text" id="matricula" name="matricula" required>
            
            <label for="dataNascimento">Data de Nascimento:</label>
            <!-- Campo para inserir a data de nascimento do aluno -->
            <input type="date" id="dataNascimento" name="dataNascimento" required>
            
            <label for="email">E-mail:</label>
            <!-- Campo para inserir o e-mail do aluno -->
            <input type="email" id="email" name="email" required>
            
            <!-- Botão para submeter o formulário -->
            <button type="submit">Adicionar</button>
        </form>
    </main>

    <footer>
        <p>&copy; 2024 - Sistema de Gerenciamento de Alunos</p>
    </footer>
</body>
</html>