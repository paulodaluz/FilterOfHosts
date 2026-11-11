# Filter of Hosts

Scripts de linha de comando para reunir candidatos a endereços IPv4 de vários arquivos de hosts ou exportações de favoritos. O processamento é local e grava listas de texto na pasta de execução.

[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=black)](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript)
[![License MIT](https://img.shields.io/badge/License-MIT-blue)](LICENSE)

## 📋 Table of contents

- [✨ Features](#features)
- [🧪 Technologies](#technologies)
- [🛠️ Environment setup](#environment-setup)
- [🚀 Getting started](#getting-started)
- [🗂️ Project structure](#project-structure)
- [✅ Testing and quality](#testing-and-quality)
- [🔎 Troubleshooting](#troubleshooting)
- [🤝 Contributing](#contributing)
- [📜 License](#license)

<a id="features"></a>

## ✨ Features

- Ler arquivos imediatamente dentro de `filesOfHosts/` ou `filesOfFavorites/`.
- Extrair candidatos a IPv4 por tratamento de strings e expressões regulares.
- Evitar parte das repetições por busca de substring na lista acumulada.
- Gravar `allIpsFromHostFiles.txt` ou `allIpsFromFavorites.txt`.

Os scripts não são validadores completos de IPv4, não trabalham com IPv6 e não resolvem nomes DNS. A remoção de duplicados por substring pode descartar um endereço contido em outro.

<a id="technologies"></a>

## 🧪 Technologies

| Tecnologia | Versão declarada | Finalidade |
| --- | --- | --- |
| [Node.js](https://nodejs.org/) | Não fixada; 14.21.3 validada | Execução e módulos `fs`/`path` |
| [glob-all](https://www.npmjs.com/package/glob-all) | `3.2.1` | Seleção dos arquivos de entrada |

<a id="environment-setup"></a>

## 🛠️ Environment setup

Requer Git, Node.js e npm. O projeto não fixa Node.js em `engines`, `.nvmrc` ou `.node-version`. **Node.js 14.21.3 com npm 6.14.18** foi escolhido para a reprodução da pilha histórica; não é uma versão declarada pelo repositório nem uma atualização de dependências.

```bash
nvm install 14.21.3
nvm use 14.21.3
git clone https://github.com/paulodaluz/FilterOfHosts.git
cd FilterOfHosts
npm install
```

Não há lockfile versionado: use `npm install`, não `npm ci`. Este guia adota npm, disponível com o Node.js, sem prometer uma resolução de dependências idêntica entre instalações. Não há Husky, hooks versionados ou script `prepare` para ativar.

Crie somente as pastas necessárias, na raiz do clone:

```bash
mkdir -p filesOfHosts filesOfFavorites
```

Coloque cópias dos arquivos de entrada nelas. Os scripts usam `process.cwd()`; execute os comandos da raiz do projeto. Não há variáveis de ambiente, serviços externos, portas ou banco de dados. As pastas de entrada e saídas estão no `.gitignore`.

<a id="getting-started"></a>

## 🚀 Getting started

Para arquivos de hosts:

```bash
node extractFromHosts.js
```

Para exportações de favoritos:

```bash
node extractFromFavorites.js
```

Confira as saídas `allIpsFromHostFiles.txt` e `allIpsFromFavorites.txt`. Cada execução **sobrescreve** o arquivo de saída correspondente, sem alterar os arquivos de entrada. Pastas vazias ou ausentes produzem saída vazia.

Para hosts, o parser parte do trecho antes do primeiro espaço e remove caracteres que não são números ou pontos. Para favoritos, o formato da URL influencia o resultado: o parser remove a porta ou usa a barra após o endereço como limite. Revise a lista antes de utilizá-la.

Validação realizada com Node.js 14.21.3/npm 6.14.18: instalação concluída e ambos os scripts executados com saída zero. Como não há arquivos de entrada versionados, as saídas verificadas ficaram vazias. A sintaxe dos dois scripts passou; a extração sobre dados reais permanece sem validação. `npm test` falhou por ausência de `index.js`, conforme descrito abaixo.

<a id="project-structure"></a>

## 🗂️ Project structure

| Caminho | Responsabilidade |
| --- | --- |
| `extractFromHosts.js` | Extração de arquivos de hosts |
| `extractFromFavorites.js` | Extração de favoritos exportados |
| `filesOfHosts/`, `filesOfFavorites/` | Entradas locais, criadas pelo usuário |
| `allIpsFromHostFiles.txt`, `allIpsFromFavorites.txt` | Resultados gerados |
| `package.json` | Dependência e script legado de teste |

<a id="testing-and-quality"></a>

## ✅ Testing and quality

Não há build, lint ou suíte de testes automatizada. O script `npm test` chama `node index.js`, mas **`index.js` não existe**. Portanto, ele não valida os extratores. Verifique a sintaxe e execute o script aplicável:

```bash
node --check extractFromHosts.js
node --check extractFromFavorites.js
```

Confira as saídas manualmente com dados de teste antes de processar arquivos de uso real.

<a id="troubleshooting"></a>

## 🔎 Troubleshooting

| Situação | O que conferir |
| --- | --- |
| `Cannot find module 'glob-all'` | Execute `npm install` na raiz. |
| Saída vazia | Confira o diretório atual, as pastas de entrada e os formatos aceitos pelo parser. |
| Endereço incompleto ou ausente | A extração usa cortes de strings e deduplicação por substring; exige revisão manual. |
| `npm test` falha | O manifesto aponta para `index.js`, inexistente. A correção desse script fica pendente. |

A captura de editor fica pendente por indisponibilidade do VS Code e impossibilidade de confirmar o tema atual do proprietário.

<a id="contributing"></a>

## 🤝 Contributing

Crie uma branch a partir de `main`, mantenha as instruções compatíveis com os arquivos do projeto e descreva a alteração em um pull request. Execute as verificações aplicáveis descritas acima; registre limitações de serviços externos e ambiente. Não inclua credenciais, dados pessoais, `node_modules` ou arquivos gerados na entrega.

<a id="license"></a>

## 📜 License

Este projeto está sob a licença **MIT**. Consulte [LICENSE](LICENSE); o aviso de autoria existente foi preservado.

---

<p align="center">Made with 💜 by <a href="https://github.com/paulodaluz">Paulo da Luz</a></p>
