import e from "express";
/**
 *
 * @param {e.Request} req
 * @param {e.Response} res
 * @param {*} next
 */
export const authorMiddleware = (req, res, next) => {
  let send = res.send;
  res.send = function (body) {
    body = JSON.stringify({
      author: {
        name: process.env.AUTHOR_NAME,
        lastname: process.env.AUTHOR_LASTNAME,
      },
      ...JSON.parse(body),
    });
    send.call(this, body);
  };
  next();
};
