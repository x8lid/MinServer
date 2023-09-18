const { Router } = require('express');
const { brandsController } = require('../controllers/brands.controllers');
const router = Router();


router.get('/brands', brandsController.getBrands);

router.post('/brands', brandsController.postBrands);

router.delete('/brands', brandsController.postDelete);

module.exports = router;
