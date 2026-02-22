---
title: "Ejercicios Modelo Entidad-Relación-Extendido"
subtitle: "Práctica de diseño de bases de datos"
published: 2026-02-20
tags: ["Base de Datos", "Educación"]
categories: ["Educación"]
bannerImage: "/images/modelo-er-banner.jpg"
---

# Ejercicios de Modelo Entidad-Relación-Extendido

En esta sección comparto los ejercicios que desarrollé para practicar la construcción de modelos entidad-relación-Extendido utilizando **Lucidchart**.

---

## 📌 Ejercicio 1 — 

<div style="position: relative; width: 100%; max-width: 900px; margin: 20px auto; padding-bottom: 75%; height: 0;">
  <iframe 
    src="https://lucid.app/documents/embedded/f70a5673-02fa-4e69-b8e2-5104d0a2a0a6"
    frameborder="0"
    allowfullscreen
    style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;">
  </iframe>
</div>

---

## 📌 Ejercicio 2 — 

<div style="position: relative; width: 100%; max-width: 900px; margin: 20px auto; padding-bottom: 75%; height: 0;">
  <iframe 
    src="https://lucid.app/documents/embedded/0ebdc420-8af8-4811-887f-e7e0e4dbb968"
    frameborder="0"
    allowfullscreen
    style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;">
  </iframe>
</div>

---

## 📌 Ejercicio 3 — 

<div style="position: relative; width: 100%; max-width: 900px; margin: 20px auto; padding-bottom: 75%; height: 0;">
  <iframe 
    src="https://lucid.app/documents/embedded/11e247da-4cdb-49d3-98b5-45a0c9057d3e"
    frameborder="0"
    allowfullscreen
    style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;">
  </iframe>
</div>

---

## 📌 Ejercicio 4 — 

<div style="position: relative; width: 100%; max-width: 900px; margin: 20px auto; padding-bottom: 75%; height: 0;">
  <iframe 
    src="https://lucid.app/documents/embedded/ab3a66c9-6d9c-41db-b678-ce57de0c71eb"
    frameborder="0"
    allowfullscreen
    style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;">
  </iframe>
</div>

---

## 📌 Ejercicio 5 — 

<div style="position: relative; width: 100%; max-width: 900px; margin: 20px auto; padding-bottom: 75%; height: 0;">
  <iframe 
    src="https://lucid.app/documents/embedded/e5353d82-7098-41f6-8016-7e940d9df19a"
    frameborder="0"
    allowfullscreen
    style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;">
  </iframe>
</div>

---

## 📌 Ejercicio 6 — 

Un banco maneja varias sucursales, y cada una se identifica por la ciudad donde está ubicada (ciudad-sucursal). También tienen otros datos como su nombre (nombre-sucursal) y un campo que dice si está activa o no (activo).
El banco tiene clientes, y cada uno se identifica con un id-cliente único. De cada cliente se guarda su nombre y su dirección, que está dividida en calle (calle-cliente) y ciudad (ciudad-cliente). Un cliente puede pedir uno o varios préstamos al banco, y a esa relación se le llama "prestatario". Cada préstamo tiene un número de préstamo que lo identifica de forma única y un atributo de importe que dice cuánto vale ese préstamo. Además, cada préstamo está vinculado a una sucursal específica mediante la relación "préstamo-sucursal", que básicamente nos dice en qué sucursal fue dado ese préstamo. A cada préstamo se le pueden hacer varios pagos, y esos pagos se guardan en la entidad pago, que tiene como llave primaria el número-pago y también guarda la fecha en que se hizo el pago (fecha-pago) y cuánto se pagó (importe-pagado).

Por otro lado, los clientes también pueden tener cuentas bancarias. Esa relación se llama "impositor" e incluye un atributo llamado fecha-acceso que registra cuándo el cliente entró a su cuenta. La entidad cuenta se identifica con el número-cuenta y tiene el atributo saldo. Las cuentas se dividen en dos tipos que no se mezclan entre sí: cuenta-ahorro, que tiene el atributo tipo-interés, y cuenta-corriente, que tiene el atributo descubierto, el cual indica hasta cuánto se puede quedar en números rojos.

El banco también tiene empleados, identificados por un id-empleado. De cada empleado se guarda su nombre, teléfono, la fecha en que empezó a trabajar (fecha-comienzo) y su antigüedad, que es un atributo derivado porque se calcula a partir de esa fecha de inicio. Entre los mismos empleados existe una relación recursiva llamada "trabajo-para", donde se manejan los roles de jefe y trabajador, lo que sirve para representar cómo está organizada la jerarquía dentro del banco. Esta relación tiene un atributo llamado nombre-subordinado para saber el nombre del empleado que está por debajo. Finalmente, hay una relación llamada "banquero-consejero" entre empleados y clientes, que indica qué empleado le da asesoría a qué cliente, y tiene un atributo tipo que dice de qué tipo es esa asesoría.

---

## 📌 Ejercicio 7 — 

<div style="position: relative; width: 100%; max-width: 900px; margin: 20px auto; padding-bottom: 75%; height: 0;">
  <iframe 
    src="https://lucid.app/documents/embedded/9f99195f-eb53-482b-a335-5f5a9ef59fe1"
    frameborder="0"
    allowfullscreen
    style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;">
  </iframe>
</div>