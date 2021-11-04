# Filtro de Hosts
Script to search hosts and filter on multiple hosts/exported favorites files.

## 🚧 Objetivo do Projeto
Esse projeto foi desenvolvido com o objetivo de mesclar vários arquivos de hosts e/ou favoritos exportados de pessoas diferentes, filtrando os repetidos e strings que não são hosts, deixando apenas os IPs.

## 🛠️ Configurando o ambiente
 - Clone o repositório.
 - Instale as dependências com `npm install` ou `yarn install` na pasta raiz do projeto.
 - Crie uma pasta chamada `filesOfHosts` e bote todos os arquivos de hosts que deseja filtrar.
 - Crie uma pasta chamada `filesOfFavorites` e bote todas as exportações de favoritos que deseja filtrar.

## 🚀 Getting started
No projeto existem dois arquivos para cada operação.
Para extrair os Ips de arquivos de Hosts você pode digitar o comando `node extractFromHosts.js` no diretório do projeto.
Para extrair os Ips de arquivos de exportação de favoritos você pode digitar o comando `node extractFromFavorites.js` no diretório do projeto.

Após isso, a depender de qual script foi executado ele irá criar um txt chamado `allIpsFromHostFiles` ou `allIpsFromFavorites` na raiz do projeto, eles irão conter a mescla de todos os hosts da extração escolhida.

## 📜 Licença
Esse projeto está sob a licença MIT. Veja o arquivo [LICENSE](https://github.com/paulodaluz/filterOfHosts/blob/main/LICENSE) para mais detalhes.

---

<p align="center">Made with 💜 by Paulo da Luz</p>
