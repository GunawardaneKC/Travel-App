const Controller = require('../Controller/Desti');

const express = require('express');

const router = express.Router();

router.get('/', Controller.getDesti);
router.post('/', Controller.createDesti);
router.patch('/:id', Controller.updateDesti);
router.delete('/:id', Controller.deleteDesti);

module.exports = router;