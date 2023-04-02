var passwordValidator = require('password-validator');

exports.createPostValidator = (req, res, next) => {

    req.check("email", "Email Id  required").notEmpty();
    req.check("email", "Email Id Length").isLength({
        min: 4,
        max: 150
    });
    req.check("email", "Not Valid Email").isEmail();

    req.check("password", "Password required").notEmpty();
    req.check('password').trim().notEmpty().withMessage('Password required')
        .isLength({ min: 5, max:20 }).withMessage('Password length')
        .matches(/(?=.*?[A-Z])/).withMessage('Password should have  Uppercase character')
        .matches(/(?=.*?[a-z])/).withMessage('Password should have  Lowercase character')
        .matches(/(?=.*?[0-9])/).withMessage('Password should have  Number')
        .matches(/(?=.*?[#?!@$%^&*-])/).withMessage('Password must have special character')
        .not().matches(/^$|\s+/).withMessage('White spaces arent allowed');

    const errors = req.validationErrors();

    if (errors) {
        const firstError = errors.map(error => error.msg);
        return res.status(400).json({ error: firstError });
    }

    next();
};