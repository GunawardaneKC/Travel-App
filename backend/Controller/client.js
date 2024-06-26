const client = require('../Models/client');

exports.getClients = async (req, res) => {
    try {
      const clients = await client.find();
      res.json(clients);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }


exports.createClient = async (req, res) => {
    const { img, messages, name } = req.body;
    const newClient = new client({ img, messages, name });
  
    try {
      await newClient.save();
      res.status(201).json(newClient);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  };


exports.deleteClient = async (req, res) => {
    try {
      await client.findByIdAndDelete(req.params.id);
      res.json({ message: 'Client deleted' });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }


exports.updateClient = async (req, res) => {
    const { img, messages, name } = req.body;
  
    try {
      await client.findByIdAndUpdate(req.params.id, { img, messages, name });
      res.json({ message: 'Client updated' });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }


exports.getSpecificClient = async (req, res) => {
    try {
      const client = await client.findById(req.params.id);
      if (!client) {
        return res.status(404).json({ message: 'Client not found' });
      }
      res.json(client);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }


