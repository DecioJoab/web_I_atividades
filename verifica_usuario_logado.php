<?php
session_start();
if (isset($_SESSION['id_usuario_logado'])) {
    echo "Usuário está logado!<br>";

    echo $_SESSION['id_usuario_logado']."<br>";
    echo $_SESSION['nome_usuario_logado']."<br>";
    echo $_SESSION['email_usuario_logado']."<br>";
    

}else{
    echo "Não há usuário logado!";
}