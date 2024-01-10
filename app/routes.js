//
// For guidance on how to create routes see:
// https://prototype-kit.service.gov.uk/docs/create-routes
//

const govukPrototypeKit = require('govuk-prototype-kit')
const router = govukPrototypeKit.requests.setupRouter()

// Add your routes here

// Run this code when a form is submitted to 'civil-servant-answer'
router.post('/civil-servant-answer', function (req, res) {

    // Make a variable and give it the value from 'isYourTransferPermananent'
    var isYourTransferPermananent = req.session.data['civil-servant']
  
    // Check whether the variable matches a condition
    if (isYourTransferPermananent == "yes"){
      // Send user to next page
      res.redirect('/transfer-permanent')
    } else {
      // Send user to ineligible page
      res.redirect('/ineligible')
    }
})

// Run this code when a form is submitted to 'transfer-permanent-answer'
router.post('/transfer-permanent-answer', function (req, res) {

    // Make a variable and give it the value from 'isYourTransferPermananent'
    var isYourTransferPermananent = req.session.data['transfer-permanent']
  
    // Check whether the variable matches a condition
    if (isYourTransferPermananent == "yes"){
      // Send user to next page
      res.redirect('/departments')
    } else {
      // Send user to ineligible page
      res.redirect('/ineligible')
    }
  
  })

  // Run this code when a form is submitted to 'departments-answer'
router.post('/departments-answer', function (req, res) {

    // Make a variable and give it the value from 'isYourTransferPermananent'
    var toandfromDepartments = req.session.data['departments']
  
    // Check whether the variable matches a condition
    if (toandfromDepartments == "yes"){
      // Send user to next page
      res.redirect('/eligible')
    } else {
      // Send user to ineligible page
      res.redirect('/ineligible')
    }
  
  })