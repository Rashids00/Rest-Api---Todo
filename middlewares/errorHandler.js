const serverError = (err, req, res, next) => {
    console.error(err.stack);
    return res.status(500).json({error: "server error"});
};

module.exports = {
    serverError
};