const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB Connection
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/puremarketing', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => console.log('MongoDB connected'))
  .catch((err) => console.error('MongoDB connection error:', err));

// Contact Schema
const contactSchema = new mongoose.Schema({
  name: { type: String, required: true },
  phone: { type: String, required: true },
  contactMethod: { type: String, default: 'whatsapp' },
  service: { type: String, required: true },
  details: { type: String },
  createdAt: { type: Date, default: Date.now },
});

const Contact = mongoose.model('Contact', contactSchema);

// POST /api/contact
app.post('/api/contact', async (req, res) => {
  try {
    const { name, phone, contactMethod, service, details } = req.body;
    const contact = new Contact({ name, phone, contactMethod, service, details });
    await contact.save();
    res.status(201).json({ success: true, message: 'Contact saved successfully' });
  } catch (error) {
    console.error('Error saving contact:', error);
    res.status(500).json({ success: false, message: 'Failed to save contact' });
  }
});

// GET /api/contacts (optional: to view submissions)
app.get('/api/contacts', async (req, res) => {
  try {
    const contacts = await Contact.find().sort({ createdAt: -1 });
    res.json({ success: true, data: contacts });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Failed to fetch contacts' });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
