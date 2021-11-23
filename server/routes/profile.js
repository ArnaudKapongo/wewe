const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const { check, validationResult } = require('express-validator');

//const Profile = require('../model/User/Profile');
const User = require('../model/User/User');
const Post = require('../model/Post/Post');
const Consultant = require('../model/User/Consultant');


// @route  GET api/profile/me
// @desc   Get current users profile
// @access Private

/*
router.get('/me', auth, async (req, res) => {

    try {
        const profile = await Profile.findOne({ user: req.user.id }).populate('user', ['name', 'avatar']);

        if (!profile) {
            return res.status(400).json({ msg: 'There is no profile for this user' });
        }

        res.json(profile);

    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
}); */

// @route  POST api/profile
// @desc   Create or update user profile
// @access Private

/*
router.post('/', auth
, async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    const {
        name,
        website,
        address,
        digit,
        generalSkills,
        description
    } = req.body;

    // build profile object
    const profileFields = {};
    profileFields.user = req.user.id;
    if (name) profileFields.name = name;
    if (website) profileFields.website = website;
    if (address) profileFields.address = address;
    if (digit) profileFields.digit = digit;
    if (description) profileFields.description = description;
    if (generalSkills) {
        profileFields.generalSkills = generalSkills.split(',').map(generalSkills => generalSkills.trim());
    }

    try {
        let profile = Profile.findOne({ user: req.user.id });

        if (profile) {
            // Update 
            profile = await Profile.findOneAndUpdate(
                { user: req.user.id },
                { $set: profileFields },
                { new: true, upsert: true, setDefaultsOnInsert: true });

            return res.json(profile);

        }

        // Create
        profile = new Profile(profileFields);

        await profile.save();
        res.json(profile);

    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }


});


*/

/*
// @route  GET api/profile
// @desc   Get all profiles
// @access Public

router.get('/', async (req, res) => {

    try {
        const profiles = await Profile.find().populate('user', ['name', 'avatar']);
        res.json(profiles);
    } catch (err) {
        console.error(err);
        res.status(500).send('Server Error');
    }
});

*/

// @route  GET api/profile/user/:user_id
// @desc   Get profile by user ID
// @access Public


/*
router.get('/user/:user_id', async (req, res) => {

    try {
        const profile = await Profile.findOne({ user: req.params.user_id }).populate('user', ['name', 'avatar']);

        if (!profile) return res.status(400).json({ msg: 'Profile not found' });

        res.json(profile);

    } catch (err) {
        console.error(err.message);
        if (err.kind == 'ObjectId') {
            return res.status(400).json({ msg: 'Profile not found' });
        }
        res.status(500).send('Server Error');
    }
});

*/

// @route  DELETE api/profile
// @desc   Delete profile user & posts
// @access Private

/*
router.delete('/', auth, async (req, res) => {

    try {
        await  Post.deleteMany({ user: req.user.id });

        await Profile.findOneAndRemove({ user: req.user.id });
        
        await User.findOneAndRemove({ _id: req.user.id });

        res.json({ msg: 'User deleted '});

    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
});
*/

// @route  PUT api/profile/consultant
// @desc   Add profile consultant
// @access Private


router.put('/consultant', [auth, [

    check('name', 'Name is required')
    .not()
    .isEmpty(),
    check('surname', 'Surname is required')
    .not()
    .isEmpty()

] ],  async (req, res) => {
    const errors = validationResult(req);

    if(!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    /*const { 
        name,
        surname
    } = req.body; */



    try {

        const user = await User.findById(req.user.id).select('-password');

        const newConsultant = new Consultant({
          surname: req.body.name,
          name: user.name,
          avatar: user.avatar,
          user: req.user.id
        });
  
        const post = await newConsultant.save();
      

      return res.json(post);
        
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server Error');  
    } 

    /*try {
        let profile = Consultant.findOne({ user: req.user.id });

        if (profile) {
            // Update 
            profile = await Consultant.findOneAndUpdate(
                { user: req.user.id },
                { $set: profileFields },
                { new: true, upsert: true, setDefaultsOnInsert: true });

            return res.json(profile);

        }

        // Create
        profile.consultant.unshift(profileFields);

        await profile.save();
        res.json(profile);

    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    } */

});


/*

// @route  PUT api/profile/consultant/:consultant_id
// @desc   Delete consultant from profile
// @access Private

router.delete('/consultant/:consultant_id', auth, async (req, res) => {
   
   try {
    const profile = await Profile.findOne({ user: req.user.id });

    const removeIndex = profile.consultant.map(item => item.id).indexOf(req.params.consultant_id);

    profile.consultant.splice(removeIndex, 1);
    
    await profile.save();

    res.json(profile);

   } catch (err) {
     console.error(err.message);
     res.status(500).send('Server Error');
   }
});
*/

module.exports = router;