# Game Zone

## Descripción general del proyecto

El proyecto es una "single page application" de tipo "mobile only" en la que los usuarios podrán comprar video-juegos.

## Endpoints.

Endopoint: /games, incluye:
[get]/ [get]/:id [get]/query/:key/:value [post]/ [patch]/:id [delete]/:id

Endopoint: /users, incluye:
[post]/register [post]/login [patch]/addToCart/:id [patch]/deleteFromCart/:id

## Modelo de datos

User:
name: string,
email: string,
password: string,
role: string,
carts: Array de Ids,
id: string,

Games:
title: string,
description: string,
price: number,
format: string,
owner: Id,
id: string,

## Instalación de dependencias

Ejecuta npm install en la terminal
