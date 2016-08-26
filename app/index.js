// Angular & Router ES6 Imports
import angular from 'angular';
import angularUIRouter from 'angular-ui-router';
import accordion from 'angular-ui-bootstrap';
import appComponents from './components/components.js';
import appServices from './services/services.js';
import appConfiguration from './app.config';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import '../node_modules/toastr/build/toastr.min.css';

// Single Style Entry Point
import './index.scss';

if (ENVIRONMENT === 'test') {
  console.log('ENV:', ENVIRONMENT);
  require('angular-mocks/angular-mocks');
}

const app = angular.module('app', ['ui.router', accordion]);

// Components Entrypoint
appComponents(app);

// App Services Entrypoint
appServices(app);

// Router Configuration
// Components must be declared first since
// Routes reference controllers that will be bound to route templates.
// appConfiguration(app);
