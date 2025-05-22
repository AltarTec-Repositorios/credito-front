# **Consulta Crédito App - Front-End**

Este repositório contém a parte front-end da aplicação **Consulta Crédito App**, construída com **Angular 19** e **Bootstrap**. A aplicação se conecta a uma API para realizar consultas de créditos baseadas em números de **NFS-e**.

## **Descrição do Projeto**

A aplicação permite que o usuário pesquise créditos com base no número da **NFS-e** (Nota Fiscal de Serviço Eletrônica). Existem **dois botões** na interface que acionam **dois endpoints diferentes** da API para consultar os dados relacionados aos créditos.

* **Botão Buscar por NFSE**: Realiza a consulta de crédito usando o número da NFSE.
* **Botão Buscar por Crédito**: Realiza a consulta de crédito usando o número do crédito.

### **Recursos**

* Interface de usuário simples e responsiva.
* Realiza a pesquisa por **NFSE**.
* Realiza a pesquisa por **Crédito**.
* Exibe os resultados da consulta na tela.
* **Responsividade** com **Bootstrap**, adaptando-se tanto para **desktop** quanto para **mobile**.

---

## **Tecnologias Utilizadas**

* **Angular 19**: Framework JavaScript para a criação de interfaces de usuário dinâmicas e reativas.
* **Bootstrap 5**: Framework CSS para design responsivo e moderno.
* **RxJS**: Biblioteca para programação reativa, utilizada no gerenciamento das requisições HTTP.
* **TypeScript**: Superset do JavaScript que traz tipagem estática e outros recursos avançados.
* **Node.js**: Ambiente de execução JavaScript necessário para rodar o Angular CLI.

---

## **Instalação e Execução**

Para rodar a aplicação localmente, siga os passos abaixo:

### 1. **Clonar o repositório**

Clone este repositório para a sua máquina local:

```bash
git clone <URL_DO_REPOSITORIO>
cd credito-app
```

### 2. **Instalar as dependências**

Com o projeto clonado, instale as dependências necessárias com o **npm**:

```bash
npm install
```

### 3. **Iniciar o servidor de desenvolvimento**

Depois de instalar as dependências, execute o comando abaixo para iniciar o servidor de desenvolvimento:

```bash
ng serve
```

Por padrão, a aplicação estará disponível em **`http://localhost:4200`**.

### 4. **Acessando o Projeto no Navegador**

Abra seu navegador e vá para:

```
http://localhost:4200
```

A interface será carregada com os dois botões para pesquisa de créditos.

---

## **Estrutura do Projeto**

O projeto está organizado da seguinte forma:

```
consulta-credito-app/
├── src/
│   ├── app/
│   │   ├── pages/
│   │   │   ├── consulta-nfse
│   │   │   │   ├── consulta-nfse.component.css
│   │   │   │   ├── consulta-nfse.component.html
│   │   │   │   ├── consulta-nfse.component.ts
│   │   │   │   └── consulta-nfse.component.spec.ts
│   │   │   └──  principal
│   │   │        ├── principal.component.css
│   │   │        ├── principal.component.html
│   │   │        ├── principal.component.ts
│   │   │        └── principal.component.spec.ts
│   │   ├── services 
│   │   │   ├── credito.service.spec.ts
│   │   │   └── credito.service.ts
│   │   ├── app-routing.module.ts
│   │   ├── app.component.css
│   │   ├── app.component.html
│   │   ├── app.component.ts
│   │   └── app.module.ts
│   ├── index.html
│   ├── main.ts
│   └── style.css
├── angular.json
├── package.json
├── tsconfig.json
└── README.md
```

### **Descrição dos principais arquivos:**

* **`app-routes.ts`**: Contém a configuração de rotas da aplicação.
* **`principal.component.ts`**: Componente responsável por exibir os dois botões de pesquisa dos dados retornados das APIs.
* **`principal.component.html`**: Template HTML do componente de pesquisa, que contém os botões.
* **`consulta.service.ts`**: Serviço responsável por fazer as requisições HTTP para os endpoints da API.

---

## **Funcionalidades da Aplicação**

### **1. Pesquisa de Crédito pelo número da NFSE**

* O primeiro botão realiza uma pesquisa no ** endpoint da API**, enviando o número da **NFS-e** inserido pelo usuário.
* Os dados retornados são exibidos na tela em formato JSON.

### **2. Pesquisa de Crédito (Botão 2)**

* O segundo botão realiza uma pesquisa no **endpoint da API**, com o número do **Crédito**.
* Os dados retornados são exibidos na tela em formato JSON.

---

## **Responsividade**

A aplicação foi construída com **Bootstrap 5** para garantir que a interface seja responsiva, ou seja, adaptável para diferentes tamanhos de tela (desktop, tablet, mobile). O layout será ajustado automaticamente conforme a resolução do dispositivo.

* **Desktop**: Exibição de dois botões de pesquisa lado a lado.
* **Mobile**: Botões e resultados são ajustados para se alinhar corretamente e facilitar a navegação em telas menores.

---

## **Desenvolvimento e Testes**

### 1. **Testes Unitários**

A aplicação inclui testes unitários para garantir a integridade do código. Para executar os testes, use o comando:

```bash
ng test
```

### 2. **Testes de Endpoints da API**

Os testes também podem ser feitos para garantir que o **serviço de consulta** funcione corretamente ao chamar os endpoints da API. Cada botão realiza uma requisição para a API e espera um formato de resposta adequado.

---

## **Problemas Conhecidos e Limitações**

* **Dependências de API**: Este front-end depende de uma API que deve estar configurada corretamente para responder às requisições feitas pelos dois botões. Certifique-se de que os endpoints da API estão funcionando como esperado.
* **Erro 404 ou 500**: Caso a API não esteja funcionando corretamente, a aplicação pode mostrar erros no console ou falhas ao buscar os dados.

---

## **Como executar através do docker**
* **Docker**: Para rodar a aplicação em um container Docker, você pode usar o seguinte comando:

docker build -t credito-app-docker .

* **Docker Run**: Após a construção da imagem, execute o seguinte comando para iniciar o container:

docker run -p 4200:80 credito-app-docker  

* **Acessar a aplicação**: 
* Acesse a aplicação no navegador em `http://localhost:4200/index.html`
 



## **Futuras Melhorias**

* **Autenticação e Autorização**: A aplicação pode ser expandida para incluir **autenticação** de usuários e **controle de acesso** para as funcionalidades de consulta.
* **Melhorias na Interface**: Melhorar a interface de usuário, incluindo tabelas e gráficos para exibir os dados de forma mais interativa.
* **Validação de Formulário**: Implementar validação para o campo de **NFS-e** para garantir que o número inserido seja válido.

---

## **Licença**

Este projeto está licenciado sob a **MIT License** - veja o arquivo [LICENSE](LICENSE) para mais detalhes.

---
