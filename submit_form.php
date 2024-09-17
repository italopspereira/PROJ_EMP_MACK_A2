<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Receber os dados do formulário
    $nome = htmlspecialchars($_POST['nome']);
    $email = htmlspecialchars($_POST['email']);
    $interesse = htmlspecialchars($_POST['interesse']);

    // Armazenar os dados no arquivo leads.txt
    $arquivo = fopen("leads.txt", "a");
    $dados = "Nome: $nome | E-mail: $email | Interesse: $interesse\n";
    fwrite($arquivo, $dados);
    fclose($arquivo);

    // Exibir mensagem de sucesso
    echo "<script>alert('Obrigado por se cadastrar!'); window.location.href='index.html';</script>";
} else {
    echo "Método não permitido!";
}
?>
