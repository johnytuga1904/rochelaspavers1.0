import express from 'express';
import cors from 'cors';
import nodemailer from 'nodemailer';
import dotenv from 'dotenv';

// Lade Umgebungsvariablen aus .env
dotenv.config();

const app = express();
const port = process.env.PORT || 3001;

// Middleware
app.use(cors({
  origin: process.env.CLIENT_URL || 'http://localhost:5174',
  credentials: true
}));
app.use(express.json());

// E-Mail-Transporter konfigurieren
const transporter = nodemailer.createTransport({
  host: process.env.EMAIL_HOST,
  port: process.env.EMAIL_PORT,
  secure: process.env.EMAIL_PORT === '465', // true für Port 465, false für andere Ports
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

// Import routes
import giftCardRoutes from './routes/giftCardRoutes.js';

// Routes
app.use('/api/gift-cards', giftCardRoutes);

// Test-Route
app.get('/', (req, res) => {
  res.send('Rochela Spa E-Mail-Server läuft!');
});

// Kontaktformular-Route
app.post('/api/contact', async (req, res) => {
  const { name, email, phone, subject, message } = req.body;
  
  if (!name || !email || !subject || !message) {
    return res.status(400).json({ success: false, message: 'Bitte füllen Sie alle Pflichtfelder aus.' });
  }
  
  try {
    // E-Mail-Optionen
    const mailOptions = {
      from: `"Rochela Spa Kontaktformular" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_USER, // E-Mail wird an die gleiche Adresse gesendet
      replyTo: email,
      subject: `Neue Kontaktanfrage: ${subject}`,
      html: `
        <h2>Neue Kontaktanfrage von der Rochela Spa Website</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>E-Mail:</strong> ${email}</p>
        <p><strong>Telefon:</strong> ${phone || 'Nicht angegeben'}</p>
        <p><strong>Betreff:</strong> ${subject}</p>
        <p><strong>Nachricht:</strong></p>
        <p>${message.replace(/\n/g, '<br>')}</p>
      `
    };
    
    // E-Mail senden
    await transporter.sendMail(mailOptions);
    
    // Bestätigungs-E-Mail an den Absender
    const confirmationMailOptions = {
      from: `"Rochela Spa" <${process.env.EMAIL_USER}>`,
      to: email,
      subject: 'Vielen Dank für Ihre Anfrage',
      html: `
        <h2>Vielen Dank für Ihre Anfrage bei Rochela Spa!</h2>
        <p>Liebe(r) ${name},</p>
        <p>wir haben Ihre Nachricht erhalten und werden uns so schnell wie möglich bei Ihnen melden.</p>
        <p>Ihre Anfrage:</p>
        <p><strong>Betreff:</strong> ${subject}</p>
        <p><strong>Nachricht:</strong></p>
        <p>${message.replace(/\n/g, '<br>')}</p>
        <p>Mit freundlichen Grüßen,<br>Ihr Rochela Spa Team</p>
      `
    };
    
    await transporter.sendMail(confirmationMailOptions);
    
    res.status(200).json({ success: true, message: 'Ihre Nachricht wurde erfolgreich gesendet!' });
  } catch (error) {
    console.error('Fehler beim Senden der E-Mail:', error);
    res.status(500).json({ success: false, message: 'Es ist ein Fehler aufgetreten. Bitte versuchen Sie es später erneut.' });
  }
});

// Server starten
app.listen(port, () => {
  console.log(`Server läuft auf Port ${port}`);
});
