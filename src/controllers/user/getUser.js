import createHttpError from "http-errors";

export async function getUser(req, res, next) {
  try {
    if (!req.user) {
      throw createHttpError(401, "Not authorized");
    }

    res.json(req.user);
  } catch (error) {
    next(error);
  }
}
