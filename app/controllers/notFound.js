/** route path invalide */
module.exports = (req, res, next)=>{
    return res.status(404).json({
        message: 'path invalide'
    });
};
