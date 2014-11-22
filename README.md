# generator-buildapp
Este es un generador que estamos armando en Buildapp para agilizar nuestro proceso de trabajo. En este caso es un generador que facilita la creación de aplicaciones en node-webkit.

# Cosas para recordar
Este generador, como la mayoría de los generadores de Yeoman utiliza el modulo yeoman-generator, por lo tanto necesitamos tenerlo guardado en nuestro entorno:

```
npm install --save yeoman-generator
```

# Linkear el generador en local
Como este generador no esta en npm, para poder tenerlo en los generadores de yeoman hay que correr lo siguiente en el directorio raiz:

```
npm link
```
Y listo! Ya podemos correr:

```
yo buildapp
```