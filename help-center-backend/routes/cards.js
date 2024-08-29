const express = require('express');
const router = express.Router();
const Card = require('../models/Card');

// Create a new card
router.post('/', async (req, res) => {
    const { title, description } = req.body;
    try {
        // validation
        if (!title || !description) {
            return res.status(400).json({ msg: 'Title and Description are required' });
        }

        // for duplicate title
        let existingCard = await Card.findOne({ title });
        if (existingCard) {
            return res.status(400).json({ msg: 'Card with this title already exists' });
        }

        let card = new Card({
            title,
            description
        });
        card = await card.save();
        res.status(201).json(card);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
});

// all cards
router.get('/', async (req, res) => {
    try {
        const cards = await Card.find();
        res.json(cards);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
});

// specific card by title
router.get('/:title', async (req, res) => {
    try {
        const card = await Card.findOne({ title: req.params.title });
        if (!card) {
            return res.status(404).json({ msg: 'Card not found' });
        }
        res.json(card);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
});

module.exports = router;
