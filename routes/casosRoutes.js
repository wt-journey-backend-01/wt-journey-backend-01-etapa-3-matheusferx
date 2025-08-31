const express = require('express');
const router = express.Router();
const casosController = require('../controllers/casosController');

router.get('/casos', casosController.index);
router.get('/casos/:id', casosController.show);
router.post('/casos', casosController.create);
router.put('/casos/:id', casosController.update);
router.patch('/casos/:id', casosController.partialUpdate);
router.delete('/casos/:id', casosController.remove);

// Bonus endpoint
router.get('/casos/:caso_id/agente', casosController.getAgenteByCaso);

module.exports = router;
