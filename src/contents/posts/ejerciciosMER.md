---
title: "Ejercicios Modelo Entidad-Relación"
subtitle: "Práctica de diseño de bases de datos"
published: 2026-02-19
tags: ["Base de Datos", "Educación"]
categories: ["Educación"]
bannerImage: "/images/modelo-er-banner.jpg"
---

# Ejercicios de Modelo Entidad-Relación

En esta sección comparto los ejercicios que desarrollé para practicar la construcción de modelos entidad-relación utilizando **Lucidchart**.

El objetivo fue fortalecer mi capacidad para:

- Analizar requerimientos
- Identificar entidades y atributos
- Definir relaciones y cardinalidades
- Pensar estructuralmente antes de implementar una base de datos

Estos ejercicios forman parte de mi preparación en **Bases de Datos I** y representan mi enfoque práctico hacia el diseño de sistemas bien estructurados.

---

## 📌 Ejercicio 1 — Sistema de Biblioteca

En este modelo entidad–relación trabajé con las siguientes estructuras:

### 📘 Entidades principales
- Socio
- Libro

### 🔗 Relación
- **Prestar** (cardinalidad M:N)

### 🧩 Atributos destacados

**Socio**
- Código de socio (clave primaria)
- Teléfono
- Dirección
- Nombre (compuesto: primerNombre, segundoNombre)
- Apellido (compuesto: primerApellido, segundoApellido)

**Libro**
- ISBN (clave primaria)
- Título
- Editorial
- Estado
- Año de edición
- Año de escritura
- Autor (atributo multivaluado)

Este ejercicio me permitió practicar:
- Identificación de claves primarias
- Uso de atributos compuestos
- Uso de atributos multivaluados
- Relaciones muchos a muchos (M:N)


<div style="position: relative; width: 100%; padding-bottom: 75%; height: 0; margin: 30px 0;">
  <iframe
    src="https://lucid.app/documents/embedded/f8ebfb94-34a7-4536-985b-359c7418597c"
    frameborder="0"
    allowfullscreen
    loading="lazy"
    style="
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      border-radius: 16px;
      box-shadow: 0 10px 25px rgba(0,0,0,0.2);
    ">
  </iframe>
</div>


---

## 📌 Ejercicio 2 — Sistema de Gestión Aérea

En este modelo entidad–relación trabajé con la gestión de personal y aeronaves.

### ✈️ Entidades principales
- Piloto
- Avión
- Tripulante

### 🔗 Relaciones
- **Operar** (M:N) entre Piloto y Avión
- **Pertenecer** (M:N) entre Avión y Tripulante

### 🧩 Atributos destacados

**Piloto**
- Código de piloto (clave primaria)
- Horas de vuelo (atributo derivado)
- Nombre (compuesto: primerNombre, segundoNombre, primerApellido, segundoApellido)

**Avión**
- Código de avión (clave primaria)
- Tipo de avión
- Base
- Horas máximas para regreso a base

**Tripulante**
- Código de tripulante (clave primaria)
- Teléfono (atributo multivaluado)
- Nombre (compuesto)

Este ejercicio me permitió practicar:
- Relaciones muchos a muchos (M:N)
- Uso de atributos derivados
- Uso de atributos multivaluados
- Atributos compuestos

<div style="position: relative; width: 100%; padding-bottom: 75%; height: 0; margin: 30px 0;">
  <iframe
    src="https://lucid.app/documents/embedded/ee45c7ed-7ee4-4cff-bee0-a7f16e686995"
    frameborder="0"
    allowfullscreen
    loading="lazy"
    style="
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      border-radius: 16px;
      box-shadow: 0 10px 25px rgba(0,0,0,0.2);
    ">
  </iframe>
</div>

---

## 📌 Ejercicio 3 — Sistema Deportivo Universitario

En este modelo entidad–relación diseñé la estructura de un sistema deportivo universitario que gestiona programas académicos, equipos y competencias.

### 🏫 Entidades principales
- Programa Académico
- Equipo
- Jugador
- Semestre
- Juego

### 🔗 Relaciones

- **Pertenecer** (1:N) entre Programa Académico y Equipo  
- **Pertenecer** (1:N) entre Equipo y Jugador  
- **Cursar** (1:N) entre Semestre y Equipo  
- **Jugar** (M:N) entre Equipo y Juego  

### 🧩 Atributos destacados

**Programa Académico**
- Código del programa (clave primaria)
- Nombre del programa

**Equipo**
- Código del equipo (clave primaria)
- Nombre
- Posición en la tabla
- Puntos acumulados

**Jugador**
- Código del jugador (clave primaria)
- Nombre
- Apellido
- Estado
- Tarjetas amarillas
- Tarjetas rojas

**Semestre**
- Código del semestre (clave primaria)
- Número de semestre

**Juego**
- Código del juego (clave primaria)
- Fecha
- Puntos equipo local
- Puntos equipo visitante

Este ejercicio me permitió practicar:
- Relaciones 1:N
- Relaciones M:N
- Jerarquización académica
- Modelado de eventos (juegos)
- Diseño estructurado de sistemas deportivos


<div style="position: relative; width: 100%; padding-bottom: 75%; height: 0; margin: 30px 0;">
  <iframe
    src="https://lucid.app/documents/embedded/dd3fed7c-6ae6-4c9c-adea-9a05470e4003"
    frameborder="0"
    allowfullscreen
    loading="lazy"
    style="
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      border-radius: 16px;
      box-shadow: 0 10px 25px rgba(0,0,0,0.2);
    ">
  </iframe>
</div>

---

## 📌 Reflexión Final

Diseñar modelos entidad-relación me ha ayudado a entender que una buena base de datos no empieza con código, sino con claridad conceptual.

Antes de programar, primero se piensa.
