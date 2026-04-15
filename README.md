# BasketApp — React Native

Aplicación móvil de repositorio de jugadores de baloncesto desarrollada con React Native y Firebase Cloud Firestore.

## Tecnologías

- React Native 0.85
- React Navigation (Stack Navigator)
- Firebase Cloud Firestore (`@react-native-firebase/firestore`)
- React Native Video (`react-native-video`)

---

## Requisitos previos

Antes de arrancar el proyecto es necesario tener instalado:

- [Node.js](https://nodejs.org/) v18 o superior
- [Android Studio](https://developer.android.com/studio) con un AVD (emulador) configurado
- Android SDK API 34 o superior
- JDK 17

---

## Configuración del entorno (Windows)

### 1. Variables de entorno

Abre PowerShell y ejecuta para añadir el PATH del Android SDK a la sesión actual:

```powershell
$env:Path += ";$env:LOCALAPPDATA\Android\Sdk\platform-tools;$env:LOCALAPPDATA\Android\Sdk\emulator"
$env:ANDROID_HOME = "$env:LOCALAPPDATA\Android\Sdk"
```

### 2. Fichero `local.properties`

Comprueba que el fichero `android/local.properties` existe y contiene:

```
sdk.dir=C:\\Users\\<TU_USUARIO>\\AppData\\Local\\Android\\Sdk
```

---

## Instalación

### 1. Clona el repositorio

```bash
git clone <URL_DEL_REPOSITORIO>
cd equipoBasket
```

### 2. Instala las dependencias

```bash
npm install
```

### 3. Configura Firebase

Coloca el fichero `google-services.json` de tu proyecto Firebase en:

```
android/app/google-services.json
```

Lo puedes descargar desde [Firebase Console](https://console.firebase.google.com) → tu proyecto → ⚙️ Configuración → Tus aplicaciones → Android.

---

## Cómo arrancar la aplicación

### Paso 1 — Arranca el emulador

Abre Android Studio → `Virtual Device Manager` → pulsa ▶ para arrancar el **Pixel 7**.

Espera a que el móvil virtual esté completamente encendido antes de continuar.

> **¿Por qué Pixel 7 con API 34?**
>
> El **Pixel 7** es el dispositivo de referencia de Google para el desarrollo Android moderno. Representa una resolución y densidad de pantalla (1080x2400, 416 dpi) muy extendida entre los usuarios reales, por lo que el diseño de la app se verá representado de forma fiel en la mayoría de dispositivos del mercado.
>
> La **API 34 (Android 14)** es la versión estable más reciente con soporte activo de Google en el momento del desarrollo. Esto garantiza compatibilidad con todas las librerías utilizadas en el proyecto (`@react-native-firebase`, `react-native-video`, etc.) y acceso a las últimas APIs de seguridad y rendimiento. Usar una API inferior podría provocar incompatibilidades con las versiones mínimas requeridas por estas librerías.

### Paso 2 — Conecta el emulador al servidor Metro

```powershell
adb reverse tcp:8081 tcp:8081
```

### Paso 3 — Arranca el servidor Metro (Terminal 1)

```powershell
npx react-native start
```

Espera hasta que aparezca:

```
INFO  Dev server ready.
```

### Paso 4 — Compila e instala la app (Terminal 2)

```powershell
npx react-native run-android
```

Cuando veas la pantalla de la app en el móvil virtual, la aplicación está funcionando correctamente.

---

## Estructura del proyecto

```
equipoBasket/
├── android/                    # Configuración nativa Android
│   └── app/
│       └── google-services.json
├── src/
│   ├── screens/
│   │   ├── HomeScreen.js       # Pantalla de presentación (Landing)
│   │   ├── PlayersScreen.js    # Listado de jugadores con filtros
│   │   └── DetailScreen.js     # Detalle del jugador + reproductor de vídeo
│   ├── components/
│   │   └── PlayerCard.js       # Componente de tarjeta de jugador
│   └── firebase/
│       └── firebaseConfig.js   # Configuración y conexión Firebase
├── App.tsx                     # Punto de entrada + navegación Stack
└── package.json
```

---

## Pantallas

### Landing (HomeScreen)
Pantalla de presentación de la aplicación con las funcionalidades principales y un botón para acceder al listado de jugadores.

### Jugadores (PlayersScreen)
Listado infinito de jugadores cargados desde Firebase Cloud Firestore mediante un `FlatList`. Incluye filtros por:
- Nombre y apellidos
- Posición (Base, Escolta, Alero, Ala-pívot, Pívot)
- Edad máxima

### Detalle (DetailScreen)
Información completa del jugador seleccionado:
- Foto, nombre, posición y número de dorsal
- Estadísticas (PPP, APP, RPP, tiros de campo)
- Datos personales (país, edad, altura, peso)
- Reproductor de vídeo con las mejores jugadas
- Biografía

---

## Navegación

La aplicación utiliza **React Navigation Stack** con tres pantallas:

```
Home → Players → Detail
```

El menú superior incluye un botón para volver a la pantalla inicial desde cualquier punto.

---

## Firebase

La base de datos es **Cloud Firestore** con la colección `players`. Cada documento contiene:

| Campo | Tipo | Descripción |
|-------|------|-------------|
| `nombre` | String | Nombre del jugador |
| `apellidos` | String | Apellidos |
| `posicion` | String | Posición en el campo |
| `edad` | Number | Edad |
| `altura` | Number | Altura en cm |
| `peso` | Number | Peso en kg |
| `numejersey` | Number | Número de dorsal |
| `pais` | String | País de origen |
| `PPP` | Number | Puntos por partido |
| `APP` | Number | Asistencias por partido |
| `RPP` | Number | Rebotes por partido |
| `TirosCampo` | Number | % de tiros de campo |
| `imagen` | String | URL de la imagen |
| `videoURL` | String | URL del vídeo de mejores jugadas |
| `biografia` | String | Biografía del jugador |

---

## Solución de problemas habituales

**`adb` no reconocido:**
```powershell
$env:Path += ";$env:LOCALAPPDATA\Android\Sdk\platform-tools"
```

**El emulador aparece como OFFLINE:**
Cierra y vuelve a arrancar el emulador desde Android Studio, espera a que esté completamente encendido y vuelve a ejecutar `npx react-native run-android`.

**Error "Unable to load script":**
```powershell
adb reverse tcp:8081 tcp:8081
```
Y pulsa `r` en el terminal de Metro para recargar.

**Error de caché de Metro:**
```powershell
npx react-native start --reset-cache
```