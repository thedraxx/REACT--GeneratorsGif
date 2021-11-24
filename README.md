This is a React Gif made in REACTJS!


    El repositorio consta de un script que scrapea la pagina web de la Municipalidad de Rosario, descarga los pdf que contienen los sueldos dentro de ella, verifica si los pdf contienen el año y la fecha que figuren en este archivo.
    En caso de que haya nuevos archivos un bot de telegram me envia un mensaje como el siguiente notificandome:

Demo
📂 Clonar Repositorio

git clone https://github.com/rodrigotesone1997/Scrapper_Sueldos_Municipales.git

🐍 Versión de Python

Python 3.8.8

👨‍💻 Instalación
🪟 Usuarios Windows:

Ademas de los requerimientos que estan aquí es posible que surga el siguiente error al momento de uso:

TesseractNotFound Error: tesseract is not installed or it's not in your path

En ese caso se recomienda seguir el siguiente video.
El paquete pdf2image necesita la descarga del ejecutable ubicado aquí. Para mas información al respecto mirar https://www.geeksforgeeks.org/convert-pdf-to-image-using-python/ .
🐧 Usuarios Linux:

Asi lo instale en Ubuntu 20.04 pero por lo que vi es similar en otras distros.
Se necesita instalar tesseract-ocr con el siguiente comando:

apt-get install tesseract-ocr

Luego instalar:

apt-get install tesseract-ocr-EN

EN debe ser reemplazado por el idioma para el que quieras utilizarlo.En este caso es español:

apt-get install tesseract-ocr-spa

Aunque yo recomiendo usar apt-get install tesseract-ocr-all asi podes usarlo sin restricciones.
Informacion sobre la instalacion aca y sobre la instalacion de español aca.
⚙️ Uso

    (Opcional) Crear un entorno virtual virtualenv y activarlo.
    Instalar las depedencias pip install -r requirements.txt
    Reemplazar la variable path_repositorio con el path del repositorio clonado.
    Revisar el código en caso de necesitar comentar algunas lineas (mas información comentada en el código)
    Por último, ejecutar app.py

🔮 Futuro del Proyecto

Proximamente publicare un repositorio que seria la "Fase 2" del proyecto donde se crearia una carpeta donde se limpiarian los datos en pdf a archivos .xlsx.
UPDATE: Estoy re-escribiendo el proyecto en un pipe-line con airflow.
✉️ Contacto

Cualquier sugerencia de arquitectura de código,pregunta o problema enviar mail a rodrigotesone97@outlook.com.ar
🤔 Autor

👤 Rodrigo Tesone

    Twitter: @rodrigotesone97
    Github: rodrigotesone1997
    LinkedIn: rodrigo-tesone

🤝 Contribuciones y Agradecimientos

Agradezco a Bautista por la motivación e ideas al proyecto , a Alejandro la revisión del código, a mi hermana pequeña por la selección de emojis 😉 y a la Municipalidad de Rosario por publicar tan pauperrimamente sus datos y obligarme a hacer esto.
📝 Licencia

Copyright © 2021 Rodrigo.
This project is MIT licensed.

This README was generated with ❤️ by readme-md-generator
