@echo off
REM Mo ung dung so do bo may hanh chinh (can Python)
cd /d "%~dp0"
start "" http://localhost:8080/index.html
python -m http.server 8080
