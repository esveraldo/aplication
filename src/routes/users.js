module.exports = () => {

    const findAll =  (req, res, next) => {
        const users = [{
            name: 'John Doe',
            email: 'john@john.com',
        }];
        res.status(200).json(users);
    };
    
    const create = (req, res, next) => {
        res.status(201).json(req.body);
    };

    return { findAll, create };
}