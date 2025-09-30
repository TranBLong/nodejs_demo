const {writeFile}=require('fs');
const http=require('http');
const os=require('os');
const Logger=require('./logger');
const logger=new Logger();

const hostname='127.0.0.1';
const port=3000;
