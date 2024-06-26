const Controller = require('../Controller/accom');

const router = require('express').Router();

router.post('/insertAccom', Controller.insertAccom);
router.get('/getAccom', Controller.getAccom);
router.get('/getAccomById/:accomId', Controller.getAccomById);
router.delete('/deleteAccom/:accomId', Controller.deleteAccom);
router.put('/updateAccom/:accomId', Controller.updateAccom);

module.exports = router;