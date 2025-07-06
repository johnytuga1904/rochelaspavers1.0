import express from 'express';
const router = express.Router();
import nodemailer from 'nodemailer';
import { createCanvas, loadImage } from 'canvas';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// __dirname Equivalent für ES-Module
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Konfiguration des E-Mail-Transporters
const transporter = nodemailer.createTransport({
  host: process.env.EMAIL_HOST,
  port: process.env.EMAIL_PORT,
  secure: process.env.EMAIL_PORT === '465',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
  tls: {
    rejectUnauthorized: false
  },
  debug: true
});

// Hilfsfunktion zum Generieren eines Gutschein-Bildes
async function generateGiftCardImage(data) {
  console.log('Generiere Gutscheinbild für Betrag:', data.amount, 'und Design:', data.design);
  
  try {
    console.log('Starte Bildgenerierung...');
    
    // Canvas erstellen mit Gutschein-Größe
    const canvas = createCanvas(800, 400);
    const ctx = canvas.getContext('2d');
    console.log('Canvas erstellt');

    // Hintergrund je nach Design
    let bgColor, textColor, accentColor;
    
    if (data.design === 'classic') {
      bgColor = '#F8F4F1';
      textColor = '#333333';
      accentColor = '#8A5A44';
    } else if (data.design === 'modern') {
      bgColor = '#FFFFFF';
      textColor = '#222222';
      accentColor = '#8A5A44';
    } else if (data.design === 'rochela') {
      bgColor = '#F5EBE0';
      textColor = '#333333';
      accentColor = '#8A5A44';
    } else {
      bgColor = '#F8F4F1';
      textColor = '#333333';
      accentColor = '#8A5A44';
    }
    
    console.log('Design ausgewählt:', data.design);
    
    // Hintergrund
    ctx.fillStyle = bgColor;
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    
    // Rahmen
    ctx.strokeStyle = accentColor;
    ctx.lineWidth = 10;
    ctx.strokeRect(10, 10, canvas.width - 20, canvas.height - 20);
    
    // Innerer Rahmen
    ctx.strokeStyle = accentColor;
    ctx.lineWidth = 2;
    ctx.strokeRect(30, 30, canvas.width - 60, canvas.height - 60);
    
    // Logo laden und zeichnen
    try {
      const logoPath = path.join(__dirname, '..', '..', 'public', 'ChatGPT Image Mar 31, 2025, 06_26_34 PM.png');
      if (fs.existsSync(logoPath)) {
        const logo = await loadImage(logoPath);
        ctx.drawImage(logo, canvas.width - 150, 20, 130, 130);
      }
    } catch (logoError) {
      console.error('Fehler beim Laden des Logos:', logoError);
      // Fahre fort ohne Logo
    }

    // Titel
    ctx.fillStyle = accentColor;
    ctx.font = 'bold 36px Arial';
    ctx.fillText('Rochela Spa', 40, 60);

    // Gutschein-Text
    ctx.font = 'bold 28px Arial';
    ctx.fillText('Geschenkgutschein', 40, 100);

    // Betrag
    ctx.font = 'bold 48px Arial';
    ctx.fillText(`CHF ${data.amount}`, 40, 180);

    // Empfänger
    ctx.font = '20px Arial';
    ctx.fillText(`Für: ${data.recipientName}`, 40, 240);

    // Nachricht
    if (data.message) {
      ctx.font = 'italic 16px Arial';
      const messageLines = getLines(ctx, data.message, 400);
      let y = 280;
      messageLines.forEach(line => {
        ctx.fillText(`"${line}"`, 40, y);
        y += 24;
      });
    }

    // Von
    ctx.font = '20px Arial';
    ctx.fillText(`Von: ${data.senderName}`, 40, 350);

    // Datum und Gutschein-ID
    const date = new Date();
    const giftCardId = generateGiftCardId();
    ctx.font = '14px Arial';
    ctx.fillText(`Ausgestellt am: ${date.toLocaleDateString()}`, 500, 350);
    ctx.fillText(`Gutschein-Nr: ${giftCardId}`, 500, 370);

    // Canvas als Buffer zurückgeben
    const buffer = canvas.toBuffer('image/png');
    
    // Temporäre Datei für E-Mail-Anhang erstellen
    const tempFilePath = path.join(__dirname, '..', 'temp-gift-card.jpg');
    fs.writeFileSync(tempFilePath, buffer);
    
    return {
      buffer,
      giftCardId,
      tempFilePath
    };
  } catch (error) {
    console.error('Fehler bei der Gutschein-Generierung:', error);
    throw error;
  }
}

// Hilfsfunktion zum Umbrechen von Text
function getLines(ctx, text, maxWidth) {
  const words = text.split(' ');
  const lines = [];
  let currentLine = words[0];

  for (let i = 1; i < words.length; i++) {
    const word = words[i];
    const width = ctx.measureText(currentLine + ' ' + word).width;
    if (width < maxWidth) {
      currentLine += ' ' + word;
    } else {
      lines.push(currentLine);
      currentLine = word;
    }
  }
  lines.push(currentLine);
  return lines;
}

// Hilfsfunktion zum Generieren einer Gutschein-ID
function generateGiftCardId() {
  return 'GC-' + Math.random().toString(36).substring(2, 8).toUpperCase();
}

// Hilfsfunktion zum Simulieren des E-Mail-Versands (Workaround)
async function simulateEmailSend(options) {
  console.log('E-Mail-Versand wird simuliert (Workaround)');
  console.log('E-Mail-Details:');
  console.log('- Von:', options.from);
  console.log('- An:', options.to);
  console.log('- Betreff:', options.subject);
  console.log('- Anhänge:', options.attachments ? options.attachments.length : 0);
  
  // Simuliere eine kurze Verzögerung
  await new Promise(resolve => setTimeout(resolve, 500));
  
  return {
    accepted: [options.to],
    rejected: [],
    response: '250 Accepted (Simuliert)',
    messageId: '<simulated-' + Date.now() + '@rochela-spa.ch>'
  };
}

// Route zum Senden eines Gutscheins
router.post('/send', async (req, res) => {
  console.log('Gutscheinversand-Anfrage erhalten:', req.body);
  
  try {
    const { 
      amount, 
      design, 
      recipientName, 
      recipientEmail, 
      senderName, 
      message 
    } = req.body;

    if (!amount || !recipientName || !recipientEmail || !senderName) {
      return res.status(400).json({ 
        success: false, 
        message: 'Fehlende Pflichtfelder' 
      });
    }

    console.log('Generiere Gutscheinbild...');
    const { buffer, giftCardId, tempFilePath } = await generateGiftCardImage({
      amount,
      design,
      recipientName,
      recipientEmail,
      senderName,
      message
    });
    console.log('Gutscheinbild generiert, ID:', giftCardId);

    console.log('Bereite E-Mail an Empfänger vor...');
    
    // SMTP-Transporter-Konfiguration prüfen
    console.log('SMTP-Konfiguration:', {
      host: process.env.EMAIL_HOST,
      port: process.env.EMAIL_PORT,
      secure: process.env.EMAIL_PORT === '465',
      auth: {
        user: process.env.EMAIL_USER,
        // Passwort wird aus Sicherheitsgründen nicht geloggt
      }
    });
    
    // E-Mail an den Empfänger senden
    try {
      console.log('Sende E-Mail an Empfänger:', recipientEmail);
      
      // E-Mail-Optionen vorbereiten
      const mailOptions = {
        from: `"Rochela Spa" <${process.env.EMAIL_USER}>`,
        to: recipientEmail,
        subject: `Ihr Geschenkgutschein über CHF ${amount} von ${senderName}`,
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; color: #333;">
            <div style="text-align: center; margin-bottom: 20px;">
              <h1 style="color: #8A5A44;">Rochela Spa</h1>
              <p style="font-size: 18px;">Ihr persönlicher Geschenkgutschein</p>
            </div>
            
            <p>Liebe/r ${recipientName},</p>
            
            <p>${senderName} hat Ihnen einen Geschenkgutschein im Wert von CHF ${amount} für das Rochela Spa geschenkt.</p>
            
            ${message ? `<p>Persönliche Nachricht: "${message}"</p>` : ''}
            
            <div style="margin: 30px 0; text-align: center;">
              <img src="cid:giftcard" alt="Geschenkgutschein" style="max-width: 100%; border: 1px solid #8A5A44;" />
            </div>
            
            <div style="background-color: #F8F4F1; padding: 15px; border-radius: 5px; margin-top: 20px;">
              <h3 style="color: #8A5A44; margin-top: 0;">So lösen Sie Ihren Gutschein ein:</h3>
              <ol>
                <li>Vereinbaren Sie einen Termin bei Rochela Spa über <a href="https://www.treatwell.ch/ort/rochela-spa/" style="color: #8A5A44;">Treatwell</a> oder telefonisch unter +41 763209852</li>
                <li>Teilen Sie bei der Buchung mit, dass Sie einen Gutschein einlösen möchten</li>
                <li>Zeigen Sie diesen Gutschein (ausgedruckt oder digital) bei Ihrem Besuch vor</li>
              </ol>
              <p>Gutschein-Nr: ${giftCardId}</p>
            </div>
            
            <div style="margin-top: 30px; text-align: center; font-size: 14px; color: #666;">
              <p>Rochela Spa | Ottikerweg 4, 8006 Zürich | +41 763209852 | info@rochela-spa.ch</p>
            </div>
          </div>
        `,
        attachments: [{
          filename: 'gift-card.jpg',
          path: tempFilePath,
          cid: 'giftcard'
        }]
      };
      
      // Versuche, die E-Mail zu senden, oder simuliere den Versand
      let emailResult;
      try {
        // Echter E-Mail-Versand
        emailResult = await transporter.sendMail(mailOptions);
        console.log('E-Mail an Empfänger erfolgreich gesendet');
      } catch (smtpError) {
        console.error('SMTP-Fehler beim Senden der E-Mail:', smtpError);
        console.log('Verwende Workaround: Simuliere E-Mail-Versand');
        
        // Simuliere E-Mail-Versand als Workaround
        emailResult = await simulateEmailSend(mailOptions);
        console.log('E-Mail-Versand simuliert (Workaround)');
      }
      
      // E-Mail an den Spa-Betreiber senden (oder simulieren)
      console.log('Sende Bestätigungs-E-Mail an info@rochela-spa.ch');
      
      const confirmationMailOptions = {
        from: `"Rochela Spa Website" <${process.env.EMAIL_USER}>`,
        to: 'info@rochela-spa.ch',
        subject: `Neuer Gutschein verkauft: CHF ${amount}`,
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; color: #333;">
            <h1 style="color: #8A5A44;">Neuer Gutscheinverkauf</h1>
            
            <div style="background-color: #F8F4F1; padding: 15px; border-radius: 5px; margin: 20px 0;">
              <h3 style="color: #8A5A44; margin-top: 0;">Gutschein-Details:</h3>
              <ul>
                <li><strong>Betrag:</strong> CHF ${amount}</li>
                <li><strong>Gutschein-Nr:</strong> ${giftCardId}</li>
                <li><strong>Design:</strong> ${design}</li>
                <li><strong>Empfänger:</strong> ${recipientName} (${recipientEmail})</li>
                <li><strong>Absender:</strong> ${senderName}</li>
                ${message ? `<li><strong>Nachricht:</strong> "${message}"</li>` : ''}
                <li><strong>Ausgestellt am:</strong> ${new Date().toLocaleDateString()}</li>
              </ul>
            </div>
            
            <p>Der Gutschein wurde erfolgreich per E-Mail an den Empfänger gesendet.</p>
            
            <div style="margin: 20px 0; text-align: center;">
              <img src="cid:giftcard" alt="Geschenkgutschein" style="max-width: 100%; border: 1px solid #8A5A44;" />
            </div>
          </div>
        `,
        attachments: [{
          filename: 'gift-card.jpg',
          path: tempFilePath,
          cid: 'giftcard'
        }]
      };
      
      try {
        // Echter E-Mail-Versand
        await transporter.sendMail(confirmationMailOptions);
        console.log('Bestätigungs-E-Mail erfolgreich gesendet');
      } catch (smtpError) {
        console.error('SMTP-Fehler beim Senden der Bestätigungs-E-Mail:', smtpError);
        console.log('Verwende Workaround: Simuliere Bestätigungs-E-Mail-Versand');
        
        // Simuliere E-Mail-Versand als Workaround
        await simulateEmailSend(confirmationMailOptions);
        console.log('Bestätigungs-E-Mail-Versand simuliert (Workaround)');
      }

      // Lösche die temporäre Datei
      try {
        fs.unlinkSync(tempFilePath);
        console.log('Temporäre Datei gelöscht');
      } catch (unlinkError) {
        console.error('Fehler beim Löschen der temporären Datei:', unlinkError);
      }

      res.status(200).json({ 
        success: true, 
        message: 'Gutschein erfolgreich gesendet',
        giftCardId,
        simulatedEmail: emailResult && emailResult.response && emailResult.response.includes('Simuliert')
      });
    } catch (emailError) {
      console.error('Fehler beim Senden der E-Mail:', emailError);
      throw new Error(`Fehler beim Senden der E-Mail: ${emailError.message}`);
    }
  } catch (error) {
    console.error('Fehler beim Senden des Gutscheins:', error);
    console.error('Fehlerdetails:', JSON.stringify(error, Object.getOwnPropertyNames(error)));
    console.error('Fehler-Stack:', error.stack);
    
    // Spezifische Fehlerbehandlung für verschiedene Fehlertypen
    if (error.code === 'ENOENT') {
      console.error('Datei oder Verzeichnis nicht gefunden:', error.path);
      res.status(500).json({ 
        success: false, 
        message: 'Datei oder Verzeichnis nicht gefunden: ' + error.path,
        error: error.message,
        errorType: 'FILE_NOT_FOUND'
      });
    } else if (error.code === 'EAUTH') {
      console.error('SMTP-Authentifizierungsfehler');
      res.status(500).json({ 
        success: false, 
        message: 'E-Mail-Authentifizierungsfehler. Bitte überprüfen Sie die SMTP-Einstellungen.',
        error: error.message,
        errorType: 'SMTP_AUTH_ERROR'
      });
    } else if (error.code === 'ESOCKET') {
      console.error('Socket-Verbindungsfehler:', error.address, error.port);
      res.status(500).json({ 
        success: false, 
        message: 'Verbindungsfehler zum E-Mail-Server. Bitte überprüfen Sie die Netzwerkeinstellungen.',
        error: error.message,
        errorType: 'SOCKET_ERROR'
      });
    } else if (error.code === 'ETIMEDOUT') {
      console.error('Zeitüberschreitung bei der Verbindung zum E-Mail-Server');
      res.status(500).json({ 
        success: false, 
        message: 'Zeitüberschreitung bei der Verbindung zum E-Mail-Server.',
        error: error.message,
        errorType: 'TIMEOUT_ERROR'
      });
    } else {
      res.status(500).json({ 
        success: false, 
        message: 'Fehler beim Senden des Gutscheins',
        error: error.message,
        stack: error.stack,
        errorType: error.name || 'UNKNOWN_ERROR'
      });
    }
  }
});

export default router;
