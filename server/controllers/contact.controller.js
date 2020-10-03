const Contact = require ('../models/contact'); 
const contactCtrl = {};

contactCtrl.getContacts= async (req,res) =>{
    const contact = await Contact.find();
    res.json(contact);     
};

contactCtrl.createContact= async (req,res) =>{
    const contact = new Contact(req.body);
    await contact.save();
    console.log(contact); 
    res.json({
        'status': 'Data Saved!!'
    });
};

contactCtrl.getContact= async (req,res) =>{
    const contact = await Contact.findById(req.params.id);
    res.json(contact);
};

contactCtrl.editContact= async(req,res) =>{
    const { id } = req.params;
    const contact = {
        firstname : req.body.firstname,
        lastname  : req.body.lastname,
        celular   : req.body.celular,
        email     : req.body.email
    };
    await Contact.findByIdAndUpdate(id, {$set: contact}, {new : true});
    res.json({status:'Data Updated!!'})
};

contactCtrl.deleteContact=async(req,res) =>{
    await Contact.findByIdAndRemove(req.params.id);
    res.json({status:'Data deleted!!'});
};

module.exports = contactCtrl;