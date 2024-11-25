const User = require('../models/User');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken'); // Pentru generarea de token-uri
// Funcția de creare cont
const createUser = async (req, res) => {
  try {
    const { name, username, email, password } = req.body;

    // Verifică dacă email-ul sau username-ul există deja
    const existingUser = await User.findOne({ $or: [{ email }, { username }] });
    if (existingUser) {
      return res.status(400).json({ message: 'Email sau username deja utilizat!' });
    }

    // Criptarea parolei
    const hashedPassword = await bcrypt.hash(password, 10);

    // Crearea utilizatorului
    const newUser = new User({ name, username, email, password: hashedPassword });
    await newUser.save();

    res.status(201).json({ message: 'Cont creat cu succes!' });
  } catch (error) {
    res.status(500).json({ message: 'Eroare la crearea contului', error });
  }
};

module.exports = { createUser };

// Funcția de autentificare
const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Verificăm dacă utilizatorul există
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).json({ message: 'Utilizatorul nu există!' });
    }

    // Comparăm parola introdusă cu parola criptată
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(401).json({ message: 'Parolă incorectă!' });
    }

    // Generăm un token JWT
    const token = jwt.sign(
      { id: user._id, email: user.email },
      process.env.JWT_SECRET,
      { expiresIn: '1h' } // Token-ul expiră după 1 oră
    );

    res.status(200).json({
      message: 'Autentificare reușită!',
      token, // Trimitem token-ul către client
    });
  } catch (error) {
    res.status(500).json({ message: 'Eroare la autentificare', error });
  }
};

module.exports = { createUser, loginUser };
