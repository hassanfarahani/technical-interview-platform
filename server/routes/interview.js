let express = require('express');
let router = express.Router();

let auth = require('../middleware/authenticateJWT');

// Connect to Interview controller
let interviewController = require('../controllers/interview');

/* POST Route to perform Creation - CREATE INTERVIEW operation. */
router.post('/', auth, interviewController.createInterview);

/* GET Route to fetch the list of interviews - GET LIST operation. */
router.get('/', auth, interviewController.getInterviewList);

/* GET Route to fetch a single interview - GET INTERVIEW operation. */
router.get('/:id', auth, interviewController.getSingleInterview);

/* PUT Route to edit interviews - EDIT INTERVIEW operation. */
router.put('/:id', auth, interviewController.updateInterview);

/* PUT Route to add guest to interview - EDIT INTERVIEW operation. */
router.put('/guest/:id', auth, interviewController.addInterviewGuest);

/* DELETE Route to delete a interviews - DELETE INTERVIEW operation. */
router.delete('/:id', auth, interviewController.deleteInterview);

module.exports = router;
