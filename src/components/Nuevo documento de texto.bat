@echo off
REM ==========================================
REM Crear componentes React en la ruta indicada
REM ==========================================

set "folder=C:\Users\fabia\Documents\Proyectos\Mi-Portafolio\src\components\src"

REM Crear la carpeta si no existe
if not exist "%folder%" (
    mkdir "%folder%"
    echo Carpeta creada: %folder%
)

REM Lista de archivos a crear
(
echo TypewriterText.jsx
echo AnimatedName.jsx
echo ProfileImage.jsx
echo ProjectButton.jsx
echo TechBadges.jsx
echo AvailabilityBadge.jsx
) > temp.txt

REM Crear cada archivo con estructura base de componente React
for /f "tokens=*" %%A in (temp.txt) do (
    if not exist "%folder%\%%A" (
        (
            echo // Componente %%~nA
            echo import React from "react";
            echo.
            echo const %%~nA = () => {
            echo     return (^<div className="text-white"^>%%~nA componente base^</div^>);
            echo };
            echo.
            echo export default %%~nA;
        ) > "%folder%\%%A"
        echo ✅ Archivo creado: %%A
    ) else (
        echo ⚠️ El archivo %%A ya existe, se omite.
    )
)

del temp.txt
echo.
echo 🚀 ¡Todos los componentes fueron creados en %folder%!
pause
