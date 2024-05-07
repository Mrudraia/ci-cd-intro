const express = require('express')
const router = express.Router()

/* GET users listing. */
router.get('/users', function (req, res, next) {
  res.send('respond with a resource')
})

router.get('/myusers', function (req, res, next) {
  res.send('respond with a myusers resource')
})

module.exports = router
