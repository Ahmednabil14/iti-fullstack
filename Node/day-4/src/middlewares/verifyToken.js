import jwt from 'jsonwebtoken'

export const verifyToken = (req, res, next) => {
    const {token} = req.headers
    const authontcated = jwt.verify(token, 'i am token', (err, decoded) => {
        if (err) {
            return res.status(401).json({message: 'Invalid token'})
        }
        req.user = decoded.user
        next()
    })
}