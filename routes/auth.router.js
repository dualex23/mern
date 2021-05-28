var express = require('express');
var router = express.Router();

// auth registration
router.get('/register', (req, res) => {
  try {

    const {email, password} = req.body

    // порверка с бд
    
  } catch (e) {
    res.status(400).json({massage: `Ooop, something goes wrong`})
  }

  res.send('register')
});

router.get('/login', (req, res) => {
  try {
    
  } catch (e) {
    res.status(400).json({massage: `Ooop, something goes wrong`})
  }

  res.send('login')
});

module.exports = router;