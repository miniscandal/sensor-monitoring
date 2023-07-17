# Sensor Monitoting

Aplicación web para monitorear y controlar sensores de temperatura en tiempo real.  
Los sensores son emulados por un programa desarrollado en python.

## Prerrequisitos

≧◠‿◠≦

1. Instala Eclipse Mosquitto.
2. Crea un archivo mosquitto.conf en la ruta C:\ con la siguiente configuración.
   ```
   listener 1883
   protocol  mqtt

   listener 8080
   protocol websockets

   allow_anonymous true
   ```
3. Abre una terminal en la carpeta de istalación.
4. Ejecuta el comando `./mosquitto.exe -c C:\mosquitto.conf -v` para  
   iniciar el broker.
5. Requieres del siguiente repositorio
   [sensor-emulator](https://github.com/miniscandal/temperature-sensor-emulator)
   que sirve como un emulador  
   sensor de temperatura.

## Instalación

≧◠‿◠≦

1. Clona el repositorio `git clone https://github.com/miniscandal/sensor-monitoring` en tu computadora.
2. Abre una terminal en la carpeta del proyecto.
3. Ejecuta el comando `npm install` para instalar las dependencias del proyecto.
4. Ejecuta el comando `npm run dev` para iniciar la aplicación.

## Uso

≧◠‿◠≦

<img src="./docs/picture/web-capture-01.jpeg" width="540">

## Tecnologías
![JavaScript](https://img.shields.io/badge/JavaScript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)
![CSS3](https://img.shields.io/badge/CSS3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white)
![HTML5](https://img.shields.io/badge/HTML5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white)
![React](https://img.shields.io/badge/React-%2361DAFB.svg?style=for-the-badge&logo=react&logoColor=black)
![Terminal](https://img.shields.io/badge/Terminal-%23000000.svg?style=for-the-badge)  
![Python](https://img.shields.io/badge/Python-%233776AB.svg?style=for-the-badge&logo=python&logoColor=white)
![Mosquitto](https://img.shields.io/badge/Mosquitto-%233C5280.svg?style=for-the-badge)
![MQTT](https://img.shields.io/badge/MQTT-%23007ACC.svg?style=for-the-badge&logo=MQTT&logoColor=white)
* Atomic Desing
* Vite

## Aprendizajes

≧◠‿◠≦

Mientras trabajaba en esta aplicación web, tuve la oportunidad de perfeccionar  
mis habilidades para crear una aplicación más eficiente y fácil de mantener.

La implementación de la metodología de diseño atómico y la componentización  
mejoro la estructura y organización de mi código.

Utilizar tecnologías para el Internet de las cosas me permitió tener una  
comunicación en tiempo real e interactiva.

El uso de patrones de diseño y atributos de datos personalizados en elementos  
mejoro la funcionalidad y flexibilidad de la aplicación.

## Documentación

≧◠‿◠≦

* [React](https://react.dev/)
* [MQTT.js](https://github.com/mqttjs/MQTT.js/)
* [Mosquitto](https://mosquitto.org/)
* [Vite](https://vitejs.dev/)

## Licencia

≧◠‿◠≦

Este proyecto está bajo la Licencia MIT - mira el archivo LICENSE para detalles.