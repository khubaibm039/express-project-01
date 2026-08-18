const contactObj = require("./contact.json");

exports.getAllContact = (req, res) => {
    res.send(contactObj);
};
exports.getSingleContact = (req, res) => {
    const contactId = parseInt(req.params.id);
    const result = contactObj.find((contact) => contact.id === contactId);
    res.send(result);
};
exports.createContact = (req, res) => {
    const {name, phone, email } = req.body; 
    const addContact = {
        id: contactObj.length ? contactObj[contactObj.length - 1].id + 1 : 1,
        name,
        phone,
        email,
    };
    contactObj.push(addContact);
    res.send(addContact);
};
exports.updateContact = (req, res) =>{
    const id =parseInt(req.params.id)
    const {name, phone, email} = req.body;
    const findOne = contactObj.find((contact)=>contact.id === id)

    findOne.name = name;
    findOne.phone = phone;
    findOne.email = email

    res.send(findOne)
}

exports.deleteContact = (req, res)=>{
    const id = parseInt(req.params.id)
    const findOne = contactObj.find(contact => contact.id === id)
    const deletedContact = contactObj.splice(findOne, 1)
    res.send(deletedContact)
}