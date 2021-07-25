# cpf-ts
==========
Biblioteca minimalista para validação numérica de CPF em TypeScript.

[![npm version](https://badge.fury.io/js/%40allmeida%2Fcpf-ts.svg)](https://badge.fury.io/js/%40allmeida%2Fcpf-ts)



## Install

```
npm install -s @allmeida/cpf-ts
```


## Usage

```Typescript
import { check } from "@allmeida/cpf-ts";

const result:boolean = check("123.456.789-10");
```


## API

### check(value: string | number): boolean
Verifica se um número de cpf é válido. Aceita `string` com ou sem formatação e `number`.


```Typescript
check("123.456.789-10"); // string com formatação
check("12345678910"); // string sem formatação
check(12345678910); // number
```
