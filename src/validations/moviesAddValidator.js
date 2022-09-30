const {check} = require('express-validator');
module.exports = [
    check('title').notEmpty()
    .withMessage('El título es reuquerido')
    .isLength({min: 3})
    .withMessage('Debe contener 3 caracteres como mínimo'),
    check('rating').notEmpty()
    .withMessage('El título es reuquerido'),
    check('awards').notEmpty()
    .withMessage('El título es reuquerido'),
    check('release_date').notEmpty()
    .withMessage('El título es reuquerido'),
    check('length').notEmpty()
    .withMessage('El título es reuquerido'),
    check('genre_id').notEmpty()
    .withMessage('El título es reuquerido')
]