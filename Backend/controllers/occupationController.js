//@desc Get all occupations
//@route GET /api/occupations
//@access Public
const getOccupations = (req, res) => {
    res.status(200).json({ message: 'Get all occupations' });
};

//@decs Create a occupation
//@route POST /api/occupations
//@access Public
const createOccupation = (req, res) => {
    console.log(req.body);
    const { occupation_title, occupation_code } = req.body;
    if (!occupation_title || !occupation_code) {
        res.status(400);
        throw new Error('Please fill all fields');
    }
    res.status(200).json({ message: 'Create a occupation' });
};

//@desc Get a occupation
//@route GET /api/occupations/:id
//@access Public
const getOccupation = (req, res) => {
    res.status(200).json({ message: `Get a occupation ${req.params.id}` });
};

//@desc Update a occupation
//@route PUT /api/occupations/:id
//@access Public
const updateOccupation = (req, res) => {
    res.status(200).json({ message: `Update a occupation for ${req.params.id}` });
};

//@desc Delete a occupation
//@route DELETE /api/occupations/:id
//@access Public
const deleteOccupation = (req, res) => {
    res.status(200).json({ message: `Delete occupation for ${req.params.id}` });
};

module.exports = {
    getOccupations,
    getOccupation,
    createOccupation,
    updateOccupation,
    deleteOccupation
};