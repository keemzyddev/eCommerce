import jwt from "jsonwebtoken";

export const auth = (req, res, next) => {
	const authHeader = req.headers.token;

	if (authHeader) {
		const token = authHeader.split(" ")[1];
		jwt.verify(token, process.env.JWT_KEY, (err, user) => {
			if (err) return res.status(401).json("Token is not valid!");
			req.user = user;
			next();
		});
	} else {
		return res.status(409).json("You are not authenticated!");
	}
};

export const verifyTokenAndAuth = (req, res, next) => {
	auth(req, res, () => {
		if (req.user.id === req.params.id || req.user.isAdmin) {
			next();
		} else {
			res.status(403).json("You are not authorized");
		}
	});
};
export const verifyTokenAndAdmin = (req, res, next) => {
	auth(req, res, () => {
		if (req.user.isAdmin) {
			next();
		} else {
			res.status(403).json("You are not authorized");
		}
	});
};
