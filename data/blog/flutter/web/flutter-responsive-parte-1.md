---
title: Flutter responsive - Parte 1
date: 2022-6-24
tags: ['flutter', 'flutter-web']
draft: false
summary: Hacer aplicaciones en flutter web es muy fácil con todo lo que aprendemos desarrollando una aplicación un móvil, una de las cosas que no es una preocupación es el responsive .
---

# Flutter responsive - Parte #1
<p><a href="/uri" title="title">link</a></p>
Hacer aplicaciones en es un tarea sencilla y generalmente orientada a dispositivos móviles pero que pasa cuando la aplicación se extiende a tablets o web, generalmente el responsive es obligatorio hoy en día y en las aplicaciones móviles solo que en casos muy puntuales debemos hacer cambios para que se adapte nuestra UI pero en general no es una preocupación.

¿Qué pasa con las aplicaciones que requieren esto? ¿Flutter me ayuda a solucionar el problema fácil?
La verdad no es algo muy complejo, existen muchas librerías que nos ayudan a solucionar este problema, vamos a entender la base de estas librerías y que puedas entender que hacen estás para adaptar nuestra pantalla de forma responsive.

<p align="center" width="100%">
  <img src="/static/images/flutter-web/responsive_example.gif" width="450" />
</p>


### Estrategia para hacer una app responsive

Esta se base en tener puntos de control, voy a listar algunas ideas para estos puntos de control: 

1) El tamaño de la pantalla cambia, estos puntos nos darán una alerta depara adaptar al UI a una tamaño de pantalla diferente.
2) La orientación cambia, usaremos algo para que nos dé una alerta de cuando debemos adaptar a una orientación diferente.
3) Puntos de control condicionales, son puntos de control específicos de condiciones, ejemplo si el dispositivo es web o mobile, mostrar o ocultar un widget dependiendo de una condición.

### ¿Qué tiene flutter para esto?

Lo que más me gusta de flutter es que ya tiene muchas cosas listas, vamos a listar que vamos a usar. Luego los usaremos para desarrollar una app.

- LayoutBuilder **(Este es el más importante)
- OrientationBuilder
- Visibility
- MediaQuery

Otros:
- FittedBox
- AspectRatio
- FractionallySizedBox
- ConstrainedBox
- Expanded y Flexible

Puedes encontrar algunos ejemplos y otros widgets al final en las referencias.

#### 1. MediaQuery
Puedes usar MediaQuery para obtener el tamaño de la pantalla, el padding y muchas otras cosas.
Es un widget muy importante para manejar algunas medidas en porcentajes de pantalla.

```dart:MediaQuery
Size mSize = MediaQuery.of(context).size;
EdgeInsets mPadding = MediaQuery.of(context).padding;
Orientation mOrientation = MediaQuery.of(context).orientation;
```


#### 2. Visibility

Muy útil para hacer condiciones que oculte/muestre widgets.

```dart:Visibility
Visibility(
  visible: condition,
  replacement: widgetIfConditionIsFalse,
  child: widgetIfConditionIsTrie,
)
```

#### 3. OrientationBuilder

Con esto podemos hacer un re-build reaccionando a la "orientación" de un widget. Quiere esto decir si el tamaño de un widget corresponde es su AspectRation más a un widget _landscape_ o _portrait_.

** Importa esta orientación es diferente a la del MediaQuery
El orientation del MediaQuery hace referencia a la orientación del dispositivo.

```dart:OrientationBuilder
OrientationBuilder(
  builder: (context, orientation) => Center(
    child: Text('[OrientationBuilder]:\n$orientation'),
  ),
),
```

```dart
// Ejemplo tomado de codemagic, referencia al final
class HomePage extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    Orientation deviceOrientation = MediaQuery.of(context).orientation;

    return Scaffold(
      body: Column(
        children: [
          Expanded(
            flex: 2,
            child: Container(
              color: Colors.amber,
              child: OrientationBuilder(
                builder: (context, orientation) => Center(
                  child: Text(
                    'View 1\n\n' +
                        '[MediaQuery orientation]:\n$deviceOrientation\n\n' +
                        '[OrientationBuilder]:\n$orientation',
                    style: TextStyle(color: Colors.white, fontSize: 18),
                  ),
                ),
              ),
            ),
          ),
          Expanded(
            flex: 3,
            child: OrientationBuilder(
              builder: (context, orientation) => Container(
                color: Colors.white,
                child: Center(
                  child: Text(
                    'View 2\n\n' +
                        '[MediaQuery orientation]:\n$deviceOrientation\n\n' +
                        '[OrientationBuilder]:\n$orientation',
                    style: TextStyle(color: Colors.amber, fontSize: 18),
                  ),
                ),
              ),
            ),
          ),
        ],
      ),
    );
  }
}
```

<p align="center" width="100%">
  <img src="/static/images/flutter-web/orientation.png" width="250" />
</p>

#### 4. LayoutBuilder

En mi opinión es la herramienta más útil después de MediaQuery para poder hacer muchas cosas de la orientación, por medio de este podemos calcular el maxWidth y el maxHeight de un widget específico.

** Importa esta tamaño es diferente a la del MediaQuery.

```dart:LayoutBuilder
LayoutBuilder(
  builder: (context, constraints) => Container(
    color: Colors.orange,
    child: Center(
      child: Text(
        '[LayoutBuilder]:\n
        ${constraints.maxWidth}x${constraints.maxHeight}',
      ),
    ),
  ),
)
```

Si eres nuevo y aun no conoces bien el funcionamiento de **Row**, **Column**, **Flexible**, **Expanded**, te dejo acá unas referencias para complementar:

- [Column vs Row][columnvsrow] 
- [Expanded vs Flexible][expandedvsflexible]
- [AspectRatio][aspectratio]


### Empecemos a crear nuestra app

Los ejemplos anteriores son algo básicos, pero útiles para poder empezar a construir nuestros Widgets, a medida que construyamos la aplicación de práctica usaremos otros widgets muy útiles.

Voy a usar una referencia este recurso de [Figma Community][figma-ref].
Este post trata de responsive así que no me voy a detener mucho en como desarrollar cada pieza de esta UI, te voy a dejar una referencia a Github donde puede descargarla.

1. Puedes intentar construir el diseño de Figma por tu cuenta. (Sin responsive)
2. Puedes usar este [repositorio][] en la rama (**base-web-responsive**), con los widgets para construir paso a paso el panel.
3. Puedes usar este [repositorio][] la rama (**dashboard-web-responsive**), con el panel listo en web y saltar hasta la sección, **Empecemos el responsive**.


<p align="center" width="100%">
  <img src="/static/images/flutter-web/ui_dashboard.png" width="450" />
</p>



### Empecemos el responsive


### Referencias

- Flutter: https://docs.flutter.dev/development/ui/layout/adaptive-responsive
- CodeMagic: https://blog.codemagic.io/building-responsive-applications-with-flutter/


[//]: #Ref
[figma-ref]: <https://www.figma.com/community/file/1120470173523939363>
[github]: </static/images/flutter-web/ui_dashboard.png>
[columnvsrow]: <https://medium.com/jlouage/flutter-row-column-cheat-sheet-78c38d242041>
[expandedvsflexible]: <https://itnext.io/flutter-responsive-apps-flexible-vs-expanded-ff8cc92b468f>
[aspectratio]: <https://api.flutter.dev/flutter/widgets/AspectRatio-class.html>