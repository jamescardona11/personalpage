---
title: Git para todos. Parte 4 - Deshacer errores
date: 2022-5-25
tags: ['git', 'git-serie', 'basic']
draft: false
summary: Git tiene muchas combinaciones para deshacer los errores y evitar dolores de cabeza.
---

# Deshacer errores

Los errores pueden pasar, el desarrollo de software es un proceso creativo y que involucra personas, las personas cometemos errores.
Para eso es git, es nuestro helper, nuestra muralla para combatir errores.

<TOCInline toc={props.toc} exclude="Contenido|GIT" fromHeading={3} toHeading={4} asDisclosure />

La recomendación para sacar el máximo provecho a esté tutorial es preparar un ambiente para ver en acción como operan las diferentes condiciones.
Con todo lo que has aprendido hasta acá va ser muy fácil para ti preparar ese ambiente de trabajo.

### 1 Descartar todos los cambios en un archivo (uncommitted)

-> `git restore <file-name>` o
-> `git checkout <filename>`

### 2 Restaurar un archivo eliminado (uncommitted)

-> `git restore <file-name>`

### 3 Descartar algunas líneas de un archivo (uncommitted)

-> `git restore -p <file-name>`

### 4 Descartar todos los cambios en local (uncommitted)

-> `git restore .`

### 5 Arreglar el último commit

-> `git commit --amend -m <new-message>`

Si quieres agregar algo que olvidaste
-> `git add .`
-> `git commit --amend -m <new-message>` o `git commit --amend --no-edit`

**amend** es un comando que reescribe el historial y si lo reescribimos debemos tener cuidado con los cambios en remoto

### 6 Revertir un commit en la mitad del proceso

-> `git revert <hash>`
Cuando se hace esto git va a crear un nuevo commit con el estado del revert

### 7 Resetear a una versión anterior

-> `git reset --hard <#hash>`
Cuidado que el --hard va a eliminar los commits después del hash destino

-> `git reset --mixed <#hash>`
Mantienen los cambios descartados como cambios locales, para que puedas trabajar con ellos, modificarlos, etc.

### 8 Resetear un archivo a versión anterior

-> `git restore --source <#hash> <file-name>`

### 9 Recuperar commits borrados

-> `git reflog` search the hash o HEAD# antes del reset
-> `git branch <branch-name> <#hash>`

### 10 Recuperar una rama borrada

-> `git reflog` search the hash o HEAD# de la rama
-> `git branch <branch-name> <#hash>`

### 11 Mover un commit a una nueva rama

-> `git branch <branch-name>`
-> `git reset HEAD~1 --hard`

### 12 Mover un commit a una rama diferente

-> movernos a la rama destino `switch` o `checkout`
-> `git cherry-pick <hash>`
-> movernos a la rama origen de donde movimos el commit
-> `git reset HEAD~1 --hard`

### Conclusiones

### Referencias

[Git-Oficial](https://git-scm.com/)
[Github](https://lab.github.com/)
[Git book](https://git-scm.com/book/es/v2).
[Version control Git - Book](https://books.google.com.co/books/about/Version_Control_with_Git.html?id=qIucp61eqAwC&redir_esc=y)
[Video](https://www.youtube.com/watch?v=lX9hsdsAeTk)

&nbsp;
&nbsp;
&nbsp;
