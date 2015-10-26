import chai from 'chai';
global.expect = chai.expect;

import chaiAsPromised from 'chai-as-promised';
chai.use(chaiAsPromised);

import 'babel/polyfill';

import { jsdom as _jsdom } from 'jsdom';

global.document = _jsdom('<!doctype html><html><body></body></html>');
global.window = document.defaultView;
global.navigator = window.navigator;
