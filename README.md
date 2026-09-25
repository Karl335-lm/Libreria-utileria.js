📚 Utilería JS

Utilería JS es una librería de JavaScript creada para facilitar el desarrollo de formularios web mediante funciones reutilizables de validación y apoyo.

💡 ¿Qué problema resuelve?

Al crear formularios HTML es común escribir repetidamente código para validar correos electrónicos, contraseñas, campos y calcular datos como la edad.

Esta librería permite reunir estas funciones en un solo archivo para poder reutilizarlas fácilmente en diferentes páginas web, evitando repetir código y haciendo que el desarrollo sea más sencillo y organizado.

🚀 Instalación

Para utilizar la librería, primero se debe agregar el archivo utileria.js dentro del proyecto.

Después, se incluye mediante la etiqueta <script> en el documento HTML:

<script src="js/utilleria.js"></script>

Una vez agregada la librería, sus funciones pueden utilizarse desde el código JavaScript de la página.

📁 Ejemplo de estructura
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
🛠️ Uso de la librería

La librería puede utilizarse directamente desde archivos HTML y JavaScript.

📧 Validación de correo electrónico

La función validarCorreo() permite comprobar si un correo electrónico tiene un formato válido.

Ejemplo:
<script src="js/utileria.js"></script>

<script>
    const correo = "usuario@gmail.com";

    if (validarCorreo(correo)) {
        console.log("Correo válido");
    } else {
        console.log("Correo inválido");
    }
</script>
Resultado esperado:
Correo válido
🔐 Validación de contraseña

Capturas 
Login: 
<img width="432" height="416" alt="image" src="https://github.com/user-attachments/assets/be6e6413-c160-4a9c-a4de-2b306bb5ed67" />
Registro:
<img width="425" height="427" alt="image" src="https://github.com/user-attachments/assets/4287e480-e477-480e-9b07-a03efcd75a11" />
Validaciones: En caso de llenar algun campo requerido
<img width="386" height="424" alt="image" src="https://github.com/user-attachments/assets/982ed01e-3d38-4891-a49b-b9d856857710" />
Modal:
<img width="292" height="248" alt="image" src="https://github.com/user-attachments/assets/9192baf9-75d9-48b5-9f1f-3eb9a7747972" />
inicio de sesion con datos:
<img width="408" height="364" alt="image" src="https://github.com/user-attachments/assets/85567713-4460-4dbf-9f46-6d2c153b88f3" />

