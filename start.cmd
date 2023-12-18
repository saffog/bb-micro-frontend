@echo off
echo.
echo Restoring npm packages in bb-micro-frontend
echo.
call npm install
if "%errorlevel%" neq "0" (
    echo Failed to restore npm packages
    exit /B %errorlevel%
)

echo.
echo Restoring npm packages for all Microfrontends
echo.
call npm run install:all
if "%errorlevel%" neq "0" (
    echo Failed to restore npm packages for all Microfrontends
    exit /B %errorlevel%
)

echo.
echo Starting Microfrontends 
echo.
call npm run start:all
if "%errorlevel%" neq "0" (
    echo Failed to start Microfrontends
    exit /B %errorlevel%
)
