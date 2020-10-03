const express =  require('express');
const router = express.Router();

const contactCtr =require('../controllers/contact.controller');

router.get('/', contactCtr.getContacts);
router.post('/', contactCtr.createContact);
router.get('/:id', contactCtr.getContact);
router.put('/:id', contactCtr.editContact);
router.delete('/:id', contactCtr.deleteContact);

module.exports = router;