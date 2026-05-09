# desafio-login

## Orientações: Pré-requisitos:
Declare um vetor contendo informações sobre usuários de um site, contendo as propriedades: id, nome, email, senha e expirado (boleano, pode ser true ou false). Adicione ao menos um dos usuarios como expirado sendo true.

## Desafio:
Construa uma função de para realizar login. Quem usar a função deverá receber uma mensagem dizendo que o login foi realizado com sucesso caso exista um usuário com email e senha iguais aos informados. A função deve dizer que as credenciais expiraram caso expirado for true. A função também tem que dizer que as credenciais estão incorretas caso o email não exista ou a senha esteja incorreta para aquele email.

## Testes:
Escreva 4 testes: 1) Sucesso, 2) Credencial expirada, 3) Usuario não encontrado e 4) Senha incorreta para o usuário encontrado.

## Exemplo:
fazerLogin('email@existente.com', 'senhaCerta123'); -> 'Login realizado com sucesso'
fazerLogin('credencial@expirada.com', 'senhaCerta123'); -> Renove suas credenciais

## Instruções para rodar:
1. Clone o projeto para seu local
2. Abra o projeto na IDE
3. Estando na pasta do projeto, abra terminal e rode o comando "npm install"
4. Após init finalizar, para rodar os testes e gerar relatório mochawesome, rode o comando "npm run test"

## Estrutura do Projeto:
desafio-login/                                  --> projeto
│
├── mochawesome-report/                         --> diretório com relatório html gerado pelo mocha com os resultados dos testes
│
├── src/                                        --> diretório com código fonte
│   └── resources/                              --> diretório com arquivos de apoio; criei apenas para melhor organização
│       └── usuarios.js                         --> arquivo js com a lista de usuários; separei somente para organização
│   └── login.js                                --> arquivo com função desenvolvida exposta para uso e função interna auxiliar
│
├── test/                                       --> diretório com suites de testes
│   ├── login.test.js                           --> arquivo com suíte de testes da função de login
│
├── .gitignore                                  --> arquivo com diretórios que devem ser ignorados pelo git e não enviados/rastreados 
├── package-lock.json                           --> arquivo com versões das dependências instaladas/usadas no projeto 
├── package.json                                --> arquivo com dependências do projeto, scripts e metadados do projeto
├── README.md                                   --> arquivo de documentação do projeto
