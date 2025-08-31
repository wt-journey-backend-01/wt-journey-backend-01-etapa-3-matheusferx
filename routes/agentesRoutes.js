const express = require('express');
const router = express.Router();
const agentesController = require('../controllers/agentesController');

router.get('/agentes', agentesController.index);
router.get('/agentes/:id', agentesController.show);
router.post('/agentes', agentesController.create);
router.put('/agentes/:id', agentesController.update);
router.patch('/agentes/:id', agentesController.partialUpdate);
router.delete('/agentes/:id', agentesController.remove);

// Bonus endpoint
router.get('/agentes/:id/casos', agentesController.getCasosByAgente);

module.exports = router;