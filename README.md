# 📚 Utilería JS

**Utilería JS** es una librería de JavaScript creada para facilitar el desarrollo de formularios web mediante funciones reutilizables de validación y apoyo.

## 💡 ¿Qué problema resuelve?

Al crear formularios HTML es común escribir repetidamente código para validar correos electrónicos, contraseñas y campos, así como calcular datos como la edad.

Esta librería permite reunir estas funciones en un solo archivo para poder reutilizarlas fácilmente en diferentes páginas web, evitando repetir código y haciendo que el desarrollo sea más sencillo y organizado.

---

# 🚀 Instalación

Para utilizar la librería, primero se debe agregar el archivo `utilleria.js` dentro del proyecto.

Después, se incluye mediante la etiqueta `<script>` en el documento HTML:

```html
<script src="js/utilleria.js"></script>
```

Una vez agregada la librería, sus funciones pueden utilizarse desde el código JavaScript de la página.

## 📁 Estructura del proyecto

```text
Actividad2/
│
├── css/
│   └── style.css
│
├── img/
│   └── ...
│
├── js/
│   └── utilleria.js
│
├── formulario.html
├── login.html
└── README.md
```

---

# 🛠️ Uso de la librería

La librería puede utilizarse directamente desde archivos HTML y JavaScript.

## 📧 Validación de correo electrónico

La función `validarCorreo()` permite comprobar si un correo electrónico tiene un formato válido.

### Ejemplo

```html
<script src="js/utilleria.js"></script>

<script>
    const correo = "usuario@gmail.com";

    if (validarCorreo(correo)) {
        console.log("Correo válido");
    } else {
        console.log("Correo inválido");
    }
</script>
```

### Resultado esperado

```text
Correo válido
```

---

## 🔐 Validación de contraseña

La función `validarPassword()` permite comprobar si una contraseña cumple con las condiciones establecidas en la librería.

### Ejemplo

```html
<script src="js/utilleria.js"></script>

<script>
    const password = "Hola1234";

    if (validarPassword(password)) {
        console.log("Contraseña válida");
    } else {
        console.log("Contraseña inválida");
    }
</script>
```

### Resultado esperado

```text
Contraseña válida
```

---

# 📸 Capturas de pantalla

A continuación se muestran algunas capturas del funcionamiento de la librería **Utilería JS**.

## 🔐 Login

Pantalla de inicio de sesión utilizando las funciones de validación de la librería.

<p align="center">
  <img src="https://github.com/user-attachments/assets/be6e6413-c160-4a9c-a4de-2b306bb5ed67" width="432">
</p>

---

## 📝 Registro

Formulario de registro desarrollado para utilizar las funciones de la librería.

<p align="center">
  <img src="https://github.com/user-attachments/assets/4287e480-e477-480e-9b07-a03efcd75a11" width="425">
</p>

---

## ⚠️ Validaciones

Cuando el usuario intenta enviar el formulario sin completar algún campo requerido, se muestran los mensajes correspondientes de validación.

<p align="center">
  <img src="https://github.com/user-attachments/assets/982ed01e-3d38-4891-a49b-b9d856857710" width="386">
</p>

---

## 🪟 Modal

La librería también permite mostrar información al usuario mediante una ventana modal.

<p align="center">
  <img src="https://github.com/user-attachments/assets/9192baf9-75d9-48b5-9f1f-3eb9a7747972" width="292">
</p>

---

## ✅ Inicio de sesión con datos

Ejemplo del resultado obtenido al iniciar sesión utilizando datos válidos.

<p align="center">
  <img src="https://github.com/user-attachments/assets/85567713-4460-4dbf-9f46-6d2c153b88f3" width="408">
</p>

---

# 🎥 Video demostrativo

En el video se muestra el funcionamiento de **Utilería JS**, explicando brevemente el problema que resuelve, cómo se integra en una página HTML y cómo se utilizan sus funciones.

### 📌 El video muestra:

* El problema que resuelve la librería.
* La instalación de `utilleria.js`.
* La validación de un correo.
* La validación de una contraseña.
* La validación de campos.
* El funcionamiento del modal.
* El resultado de las funciones en la página.

**Duración máxima:** 1 minuto.

### 🎬 Video

[▶️ Ver demostración de Utilería JS](AQUI_PON_EL_ENLACE_DE_TU_VIDEO)

---

# 💻 Tecnologías utilizadas

* HTML5
* CSS3
* JavaScript
* Git
* GitHub

---

# 👩‍💻 Autora

**Karla**

Proyecto académico de Desarrollo Web.

---

# 📚 Propósito académico

Este proyecto fue desarrollado con fines académicos para practicar la creación de una librería JavaScript reutilizable y su integración con formularios HTML.

---

## 📄 Licencia

Proyecto desarrollado con fines académicos.
