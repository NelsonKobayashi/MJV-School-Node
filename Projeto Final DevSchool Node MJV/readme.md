<p align="center">
<img src="https://share.multcloud.link/share/2406f1bf-a05e-450f-bd71-58c88a8562f0"/>
</p> 

<h1 align="center"> Projeto Final DevSchool Node MJV</h1>

<p align="center">
<img  src="https://img.shields.io/static/v1?label=School Node MJV&message=Nelson Kobayashi&color=7159c1&style=for-the-badge&logo=ghost"/>
</p>
  

<h2>Overview</h2>
<h4> Projeto de finalização do curso de Node da instituição DevSchool MJV.</h4>
<p>API de Criação e manipulação de usuário e Tarefas.</p>
<p>Para testar a aplicação localmente, basta baixar o repositório e dar npm install, assim o npm utilizará as dependências corretas para o projeto.</p>

<h4> Tecnologias Envolvidas </h4>

<ul>	
	<li>[Nodejs] https://nodejs.org/en </li>
	<li>[Typescript] https://www.typescriptlang.org/</li>
	<li>[MongoDB] https://www.mongodb.com/try/download/community </li>
</ul>

<h4> Funcionalidades </h4>
<p>CRUD completo (create, read, update e delete) tanto para usuário, quanto para tarefas.</p> 
<p>Adicionado também validação de usuário para acesso às rotas através de Token gerado ao logar-se, prazo de inspiração de 1 hora.</p>

<h3>Formato das requisições para edição do Postman ou Insominia.</h3>
<p><h3>User:</h3></p>
<b>Create User</b>: 
http://localhost:3000/user
<br>
{ "name": "Admin",	"email": "email@email.com", "password": "123456", "phone": "(11) 12345-6789" }
<br><br>
<b>Get All Users</b>: 
http://localhost:3000/user
<br>Body empty (sem conteúdo no corpo da requisição)
<br><br>
<b>Get User by ID</b>: 
http://localhost:3000/user/email@email.com
<br>Body empty (sem conteúdo no corpo da requisição)
<br><br>
<b>Update User</b>: 
http://localhost:3000/user/email@email.com
<br>
{
	"phone" : "(11) 98987-5436"  (podendo ser qualquer informação adicionada anteriormente.)
}
<br><br>
<b>Delete User:</b>
http://localhost:3000/user/email@email.com
<br>Body empty (sem conteúdo no corpo da requisição)
<br><br>
<br>
<p><h3>Chores:</h3></p>
<b>Create Chores</b>: 
http://localhost:3000/chores
<br>
{	"id": "EF-01", 	"name": "Exercício em Casa", 	"description": "Realizar alongamento todos os dias após acordar", 	"deadline": "morte", 	"teacher": "Nathan"
}
<br><br>
<b>Get All Chores</b>: 
http://localhost:3000/chores
<br>Body empty (sem conteúdo no corpo da requisição)
<br><br>
<b>Get User by ID</b>: 
http://localhost:3000/chores/id (exemplo de id: EF-01)
<br>Body empty (sem conteúdo no corpo da requisição)
<br><br>
<b>Update Chores</b>: 
http://localhost:3000/chores/id (exemplo de id: EF-01)
<br>
{
	"name": "Alongamento",
	"description": "Realizar todos os dias ao acordar.",
	"deadline": "22/04/2023",
	"teacher": "Ieda"
}
<br><br>
<b>Delete Chores:</b>
http://localhost:3000/chores/id (exemplo de id: EF-01)
<br>Body empty (sem conteúdo no corpo da requisição)
<br><br>

