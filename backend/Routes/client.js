const Controller = require('../Controller/client');

const express = require('express');

const router = express.Router();

router.get('/', Controller.getClients);
router.post('/', Controller.createClient);
router.put('/:id', Controller.updateClient);
router.delete('/:id', Controller.deleteClient);
router.get('/:id', Controller.getSpecificClient);

module.exports = router;