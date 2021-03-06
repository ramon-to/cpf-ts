# cpf-ts
Biblioteca minimalista para validação de CPF em TypeScript.

[![npm version](https://badge.fury.io/js/%40allmeida%2Fcpf-ts.svg)](https://badge.fury.io/js/%40allmeida%2Fcpf-ts)
[![Build Status](https://travis-ci.com/ramon-to/cpf-ts.svg?token=tpKUBEYx9qyuz1M3Aqxs&branch=master)](https://travis-ci.com/ramon-to/cpf-ts)
[![Maintainability](https://api.codeclimate.com/v1/badges/2e03ab1884c02146efa3/maintainability)](https://codeclimate.com/github/ramon-to/cpf-ts/maintainability)
[![Test Coverage](https://api.codeclimate.com/v1/badges/2e03ab1884c02146efa3/test_coverage)](https://codeclimate.com/github/ramon-to/cpf-ts/test_coverage)

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
