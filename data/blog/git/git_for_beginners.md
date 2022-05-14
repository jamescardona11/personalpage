---
title: Git para principiantes.
date: 2022-5-13
tags: ['git', 'github', 'basic']
draft: true
summary: Las extensiones son una gran forma de realizar el trabajo más fácil y rápido. Pueden ser el complemento ideal para tener ayudas visuales o reducir el proceso de desarrollo.
---

# GIT

La idea principal es aprender de git más allá de lo que sé ahora.

### Content

- Basic
-

### ¿Qué es Git?

Es un control de versiones, pero en palabras simples es la forma de mantener un historial de todo el código que hemos desarrollado en nuestra app.
En palabras mías: Git nos va a ayudar que el historial sea una "versión" sobre otra "versión", algo como.
v0 => código inicial
v1 => código con el feature #1
v2 => código con el feature #2

```mermaid
flowchart LR

A((v0)) --> B((v1))
B --> C((v2))

```

Mantenemos el historial y adicional podemos crear estrategias más óptimas para trabajo en equipo, resolución de problemas y algunas cosas más.
Realmente cada versión (v0, v1, v2) de mí ejemplo anterior sé conoce como commits.

Entonces para que nos es útil GIT, imagínate en la v2 de tu código cometiste un error, ¿cómo haces para devolverte si no usarás Git?
Soluciones obsoletas:

- Guardar un zip con cada versión nueva.
- Acordarte de como era la versión anterior al error.
- Iniciar de nuevo.

Hagamos esto más complejo, ¿qué tal si trabajarás con 10 personas en el mismo proyecto?

- ¿Qué pasa si dos personas modifican un mismo archivo?
- ¿Qué pasa si el error lo introdujo otra persona, cómo devolver el código anterior si no tienes un historial de versiones?

Para resolver todas estás preguntas y más sé creó Git.

### ¿Cómo funciona?

Esto es una explicación muy básica.
Todas las personas involucradas en un proyecto con git actualizan el código en un servidor central y luego de que sé sube el código, cada persona en el equipo sincroniza sus cambios para poder tener la misma "versión" todos.

### Usos de GIT

- Historial del código
- Almacenar código
- Trabajo en equipo
- Controlar con más eficiencia donde sé introducen errores

### Vamos a iniciar con cosas básicas

'' Si nunca lo has instalado, sigue los pasos del siguiente [link](https://git-scm.com/downloads)

Pasos para iniciar con GIT, primero vamos a hacer una configuración global usando

```git
git config --global user.name "name"
git config --global user.email email

# el siguiente paso es opcional, es para indicarle a Git que mí editor por defecto es vscode
git config --global core.editor "code --wait"

#si quieres ver tu configuración puedes darle el siguiente comando
git config --global -e
```

'' Algo que recomiendo mucho es generar alias para no tener que copiar tanto en consola, dejo el [link](https://git-scm.com/book/en/v2/Git-Basics-Git-Aliases) para aprender más sobre ellos.

### Comandos básicos

- `git init`: Iniciar un nuevo historial de tracking (Solo sé debe hacer una vez)
- `git status`: Nos dice en todo momento como esta el estado actual de nuestro workspace
- `git add`: Agregar un nuevo estado (agregar/eliminar/modificar) nuestra etapa de stage (Es como el paso previo antes de llevar algo al historial)
- `git commit -m`: Agregar nuevos/modificados al historial de git

Situaciones:

1. ¿Cómo descartar los cambios de un archivo y volver a su 'versión' anterior ?
   `git checkout <filename>`

2. ¿Cómo descartar **todos** los cambios ?
   `git checkout .`

3. ¿Cómo agregar **todos** los nuevos estados a la etapa de stage ?
   `git add .`

4. ¿Cómo "remover" un archivo de la etapa de stage?
   `git restore --stage <filename>`

5. ¿Cuáles son los pasos para eliminar un archivo y actualizar el estado de la etapa de stage?

   - Eliminar el archivo
   - `git add <filename>`

   También puedes usar

   - `git rm <filename>`

6. ¿Cuál es el comando para recuperar un archivo que he eliminado ?
   `git restore <filename>`

7. ¿Cómo saber las diferencias desde la última versión de un archivo ?
   `git diff <filename>`

8. ¿Cómo ver el historial de mis commits ?
   `git log --oneline`

9. ¿Cómo ver los cambios que sé hicieron en un commit ?
   `git show <hash>`

### Git branches

Las ramas o braches, es la funcionalidad más potente de Git para poder trabajar en equipo.
Cuando hacemos cambios el historial sé va a ver de forma lineal, las ramas son bifurcaciones en algún punto del historial, para que otras personas pueda hacer cambios sin depender de mí.

El siguiente gráfico tiene la rama principal que es la secuencia de commits v1,v2 y de ahí sé bifurca en una nueva branch y la rama principal sigue en v3 y v4.

```mermaid
flowchart LR

A((c1)) --> B((c2))
B --> C((c3))
C --> D((c4))
B --> E((new branch))
E --> F((Cx))

```

El objetivo de esto es poder luego "mezclar" las dos ramas para seguir en una sola y repetir el proceso de sacar nuevas ramas cuando requiera crear una nueva funcionalidad, dividir el trabajo, hacer una prueba de concepto sobre mí proyecto, etc.

```mermaid
flowchart LR

A((c1)) --> B((c2))
B --> C((c3))
C --> D((c4))
B --> E((new branch))
E --> F((Cx))
D --> G((merge))
F --> G((merge))
G --> H((Cn))

```

### Git branches - Comandos básicos

1. ¿Cómo crear una rama?
   `git branch <branch-name>`

2. ¿Cómo cambiarme de una rama a otra?
   `git checkout <branch-name>`

3. ¿Cómo mezclar dos ramas?
   `git merge <branch-name>`
   ''La recomendación es hacer un _checkout_ a la rama destino y usar el comando anterior

4. ¿Cómo cambiar el nombre de una rama?
   `git branch -m <new-branch-name>`

5. ¿Cómo borrar una rama?
   `git branch -d <new-branch-name>`

Hay muchas más cosas que vamos a hacer con ramas, por ejemplo estrategias de merge, rebase, entre otras cosas.

### Git trabajo remoto

Hablamos que vamos a usar un servidor central para almacenar nuestro código y el historial, opciones hay muchas, las más conocidas son github, gitlab o bitbucket. Todas funcionan de la misma forma.

Para concluir este tutorial vamos a usar [github](https://github.com/)
Después de registrarte puedes crear un repositorio y luego podemos enlazar nuestro código local con el servidor. (mejor llamado **repositorio**)

1. ¿Cómo enlazar ambos repositorios?
   `git remote add <ref-name> <url-del-repositorio>`
   ''_ref-name_: generalmente sé usa **origin**

2. ¿Cómo subir mis cambios al repositorio?
   `git push origin <branch-name>`
   '' si es la primera vez que la vas a crear sé recomienda agregar _-u_ después del _push_

3. ¿Cómo descargar cambios desde el repositorio?
   `git pull origin <branch-name>`

4. ¿Cómo descargar una rama desde el repositorio, que no tengo mí workspace local?
   `git fetch origin <branch-name>:<branch-name>`

5. ¿Una forma mejor de descargar y hacer el tracking de local vs remote?
   `git checkout --track origin/<remote-name>`

#### MISC

¿Cómo ignorar archivos para que nunca sean incluidos en los repositorios de Git?
Usa el [.gitignore](https://git-scm.com/docs/gitignore), básicamente es un archivo para poner extensiones, archivos o carpetas que quieres que sean ignorados.
**Útil para:** Credenciales, archivos del editor o datos sensibles.

### Conclusión

Con esto sabes lo básico y un poco más sobre Git, ahora a practicar para seguir aprendiendo.
Git es la herramienta indispensable para nuestro trabajo como desarrollado y es importante que domines más conceptos que vamos a ir viendo en los siguientes posts.
Después de utilizar comandos por consola sabes bien que hace nuestra GUI de git.

#### REF

&nbsp;
&nbsp;
&nbsp;

Gracias por llegar hasta acá Considera dar un like, compartir y nos vemos en un próximo artículo.

<p align="center" width="100%">
  <img src="https://i.imgur.com/q7fqQHS.gif" width="200" />
</p>
