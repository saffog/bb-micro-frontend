# Building Block Code for micro frontend

The purpose of this project is to show an example of a micro front end implementation through a hypothetical web application of a financial service company. 

For further details please look into the [wiki](https://github.com/saffog/bb-micro-frontend/wiki#micro-frontend-building-code-block) of the project.

## Project Micro Frontend Structure

The project includes the required micro frontends to run the web application

```
\
    HostApp
    mf-personal-login
    login-company
    dashboard-personal
    dashboard-company
```  

In the micro frontends approach, one of the services acts like a host meanwhile the others work as clients. In the case of the project:

- Host
  - HostApp

- Client
  - mf-personal-login
  - login-company
  - dashboard-personal
  - dashboard-company

For further details about the structure inside each micro frontend component, review the [wiki](https://github.com/saffog/bb-micro-frontend/wiki/MF-Structure) section.

### To run this project locally

1. For each MF (Host & Clients) perform `npm install`.
2. For each MF perform `npm start`, notice the last to execute this command should be HostApp.

## Known issues

### TODO: Add problem with tailwind and CSS modules

## References
  - https://github.com/nebarf/module-federation-react-router-dom
  - https://stackoverflow.com/questions/70639472/webpack-module-federation-and-react-router-dom
  - https://stackoverflow.com/questions/75307921/webpack-module-federation-with-react-router-getting-query-params-from-microfro

```
```

To create a new project it arised the compatibility issue.

