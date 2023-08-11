<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">

  <link rel="stylesheet" href="style.css">
  <link rel="stylesheet" href="pagina1.html">

  <title>Quiz</title>
</head>
<body>
   
    <div class="container">
        <div class="questions-container hide">
        
          <span class="question">Pergunta aqui?</span>
          <div class="answers-container">
            <button class="answer button">Resposta 1</button>
            <button class="answer button">Resposta 2</button>
            <button class="answer button">Resposta 3</button>
            <button class="answer button">Resposta 4</button>
          </div>
        </div>
      <div class="titulo">
        <h1>
            Quiz Treinamento
        </h1>
        <br>
        <br>
    </div>
    <div class="text">
        <form method="post" action="/receber_dados.php">
            <p>Informe seu nome: </p>
            <input type ='text' name="Nome" > 
            <br> 
            <br>
            <p>Informe seu e-mail: </p>
            <input type ='text' name="E-mail">
            <br> 
            <br>
            <p>Informe seu SAP: </p>
            <input type ='text' name="SAP">
            <br> 
            <br>
            <br> 
            <br>
        </form>
    </div>
    <div class="controls-container">
            <br> 
            <br>
            <a href="pagina1.html"> <button class="start-quiz button">Iniciar Quiz!</button>

      
    </div>
  </div>
</body>
</html>
