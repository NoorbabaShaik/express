'use strict';

const express = require('express');
const app = express();

app.get('/', function(req, res) {
  res.send('Hello World');
});

/* istanbul ignore next */
if (!module.parent) {
  app.listen(8080, () => {
    console.log('Express started on port 8080');
  });
}
