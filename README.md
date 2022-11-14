<h1 align="center">
  Verzel-challenge
</h1>
<h3 align="center">Projeto de RESTFUL API criado para realização de teste técnico da empresa Verzel.</h3>
<br/>
<p>
O objetivo da versão Frontend mobile é criar um material visual para o CRUD realizado no backend.
</p> 

<br/>

## **Tecnologias, frameworks e bibliotecas utilizadas na versão Frontend mobile:**
- React Native
- React
- Expo
- React Hook Form
- yup
- Native Base
- React Navigation
- Axios
- Intl
- Phosphor React Native
- Typescript
  
  <br/>
## **Tecnologias, frameworks e bibliotecas utilizadas no Backend:**
- NodeJS
- Express.js
- Prisma
- Typescript
- Bcryptjs
- Cors
- JsonWebToken
- UUID
- Dotenv
- Express-async-errors
- Yup

## **O que irá encontrar na aplicação Frontend mobile:**

Há um total de 5 screens: cadastro e login de usuário, vitrine, cadastro de veículo e detalhamento individual de cada um cadastrado, onde é possível editar e deletar.

Ao carregar o projeto pela primeira vez, o usuário será redirecionado para a vitrine, onde encontrará uma mensagem avisando que não há produtos cadastrados, caso seja a primeira vez que esteja adentrando a aplicação.

Ao clicar no ícone de usuário, será redirecionado para a tela de cadastro. Nela, também haverá um botão de redirecionamento para login, caso o usuário já tenha se cadastrado anteriormente.

Após iniciar sua sessão, voltará para a vitrine, porém com novas opções de uso, visto já estar autenticado. Desse ponto em diante, poderá cadastrar um novo veículo. E, caso haja veículos cadastrados, poderá clicar no card e será levado a página de edição e deleção. Nela também, poderá fazer logout.


<br/>

O url base da API é baseada no IP address do android conectado. Tanto se usar um emulador de celular ou um físico, o número aparecerá no console. No final do mesmo, adicionará ":3333".

<br/>
<hr/>

Para rodar a aplicação, é necessário:
- yarn add (para baixar as estruturas necessárias da aplicação, contida no package.json)
- expo start (para rodar a aplicação)
  
## **O que irá encontrar na aplicação Backend:**


A API tem, em seu total, 7 endpoints, permeando entre criação e login de usuários. Bem como, criação, listagem de todos os veículos e por id, atualização e deleção de veículos também por id. <br/>

O url base da API é https://localhost: + o número da PORT declarada no env. Caso seja deixada por default, será 3333.

<br/>
<hr/>

Para rodar a aplicação, é necessário:
- yarn add (para baixar as estruturas necessárias da aplicação, contida no package.json)
-yarn dev (para rodar a aplicação)
