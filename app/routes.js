//
// For guidance on how to create routes see:
// https://prototype-kit.service.gov.uk/docs/create-routes


const govukPrototypeKit = require('govuk-prototype-kit')
const router = govukPrototypeKit.requests.setupRouter()


// Add your routes here
router.post('/civil-servant-answer', function (req, res) {

  // Make a variable and give it the value from 'civil-servant'
  var areYouACivilServant = req.session.data['civil-servant']

    // Check whether the variable matches a condition
    if (areYouACivilServant == "yes") {
      // Send user to next page
      res.redirect('/grade')
    }
    else if (areYouACivilServant == "no") {
      // Send user to ineligible page
      res.redirect('/ineligible-new-starter')
    } else {
      //error
      res.redirect('/civil-servant-error')
    }
})

// Run this code when a form is submitted to 'employee-grade-answer'
router.post('/employee-grade-answer', function (req, res) {

  // Make a variable and give it the value from 'employee-grade'
  var employeegrade = req.session.data['employee-grade']

  // Check whether the variable matches a condition
  if (employeegrade == "yes"){
    // Send user to next page
    res.redirect('/fast-stream')
  } 
  else if (employeegrade == "no") {
    // Send user to ineligible page
    res.redirect('/ineligible-scs')
  } else {
    // error
    res.redirect('/grade-error')
  }
})

// Run this code when a form is submitted to 'fast-stream-answer'
router.post('/fast-stream-answer', function (req, res) {

  // Make a variable and give it the value from 'fast-stream'
  var fastStream = req.session.data['fast-stream']

  // Check whether the variable matches a condition
  if (fastStream == "yes"){
    // Send user to next page
    res.redirect('/ineligible-fast-streamer')
  } 
  else if (fastStream == "no") {
    // Send user to ineligible page
    res.redirect('/transfer-permanent')
  } else {
    // Send user to ineligible page
    res.redirect('/fast-stream-error')
  }
})


// Run this code when a form is submitted to 'transfer-permanent-answer'
router.post('/transfer-permanent-answer', function (req, res) {

    // Make a variable and give it the value from 'transfer-permanent'
    var isYourTransferPermanent = req.session.data['transfer-permanent']
  
    // Check whether the variable matches a condition
    if (isYourTransferPermanent == "yes"){
      // Send user to next page
      res.redirect('/departments-phase1')
    } 
    else if (isYourTransferPermanent == "no") {
      // Send user to ineligible page
      res.redirect('/ineligible-loan')
    } else {
      // Send user to ineligible page
      res.redirect('/transfer-permanent-error')
    }
  
  })

  // Run this code when a form is submitted to 'departments-answer'
router.post('/departments-answer', function (req, res) {

    // Make a variable and give it the value from 'departments'
    var toandfromDepartments = req.session.data['departments']
  
    // Check whether the variable matches a condition
    if (toandfromDepartments == "yes"){
      // Send user to next page
      res.redirect('/eligible-staff-transfers-service')
    }
    else if (toandfromDepartments == "no") {
      // Send user to ineligible page
      res.redirect('/eligible-staff-transfers-form')
    } else {
      // Send user to ineligible page
      res.redirect('/departments-error')
    }
  
  })


  // Run this code when a form is submitted to 'departments-answer'
  router.post('/phase1-answer', function (req, res) {

    // Make a variable and give it the value from 'departments'
    var phase1 = req.session.data['phase-1']
  
    // Check whether the variable matches a condition
    if (phase1 == "yes"){
      // Send user to next page
      res.redirect('/eligible-staff-transfers-service')
    }
    else if (phase1 == "no") {
      // Send user to ineligible page
      res.redirect('/eligible-staff-transfers-form')
    } else {
      // Send user to ineligible page
      res.redirect('/departments-phase1-error')
    }
  
  })

