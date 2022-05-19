---
title: Git para todos. Parte 3 - Uso avanzado
date: 2022-5-21
tags: ['git', 'git-serie', 'basic']
draft: false
summary: Vamos a ver algunas situaciones particulares y como las podemos gestionar con git
---

# GIT Avanzado

Si llegaste hasta acá, estoy seguro que ya tienes dominado gran parte de lo que se requiere para ser un pro en git.
En este tutorial y el próximo vamos a ver algunas situaciones particulares y como las podemos gestionar con git.
Ese es el objetivo poder entrar a entender y resolver situaciones difíciles.

`{/* <TOCInline toc={props.toc} exclude="Contenido|GIT" fromHeading={3} toHeading={4} asDisclosure /> */}`)

### Volvamos a lo básico - Un buen commit

¿Cómo definimos un buen commit? ¿Por qué me debo preocupar por esto ?
La verdad la razón base por volver a tratar este tema acá es que cuando estoy desarrollando debo pensar como solucionar problemas que pueda tener el "yo futuro"

Una de la forma de hacerlo es creando commits adecuados que me permitan solucionar problemas futuros.

- **Compacto:** Los cambios deben ser específicos o relacionados.
- **Descriptivo:** Debe ser legible la solución, los pendientes y que hiciste
- **Pensar en el futuro:** Un buen commit va a ayudar hacer un tracking de posibles errores en el futuro

**Propuesta para los commits:**

```
<type>: <description>
[optional body]

[] List of changes

[optional scope]
```

**Ejemplo:**

```
fix: fix the animation for drawer

[X] Add new flag to control the state when is open
[X] Test on android and iOS
[ ] is pending interact with ....

TOK-1766 Jira

```

Esto fue tomado de acá: https://udacity.github.io/git-styleguide/

### Stash

¿Qué pasa si tengo trabajo iniciado y debía hacer algo antes de iniciar?
Tengo que ayudar a alguien y necesito "descartar" mi trabajo temporal. En cualquier caso similar no quiero perder mi avance y tampoco quiero hacer un commit.

Git nos da la posibilidad de usar un "sub-espacio" temporal, esto es lo que se conoce como **stash**, esté espacio temporal nos permite guardar cambios sin llevarlos al historial de commits.

#### Comandos básicos

- `git stash`: Para guardar cambios sin commit
- `git stash list`: Para listar los que tenemos en el stash
- `git stash show`: Muestra el último stash
- `git stash show stash@{1}`: Muestra un stash especifico
- `git stash pop`: Aplica los cambios a nuestro workspace
- `git stash drop`: Descarta los cambios
- `git stash clear`: Descarta todos los cambios
- `git stash branch <branch-name>`: Crear una rama nueva desde el último stash
- `git stash branch <branch_name> stash@{#}`: Crear una rama nueva desde un stash especifico

Cuando usamos el comando `git stash list` sale algo parecido a esto:

![stash-list](/static/images/git/git-advance/stash-list.png)

Entendamos está información:

- Stash@{0}– esto es solo una referencia oculta. Se refiere al stash particular. De forma predeterminada, Stash@{0}siempre es el último stash.
- WIP On rama– rama es solo un nombre de branch como cualquier otra branch y WIP significa _Work In Progress_.
- 8177255 <....> es el hash de confirmación y un breve encabezado

### Reset

### Cherry pick

### Uso del reflog

### Conclusiones

### Referencias

[Git-Oficial](https://git-scm.com/)
[Github](https://lab.github.com/)
[Git book](https://git-scm.com/book/es/v2).
[Version control Git - Book](https://books.google.com.co/books/about/Version_Control_with_Git.html?id=qIucp61eqAwC&redir_esc=y)

&nbsp;
&nbsp;
&nbsp;

```

```
