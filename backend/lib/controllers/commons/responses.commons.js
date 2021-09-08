/**
 * Send 404 Not Found
 * @param {e.Response} res pipe to send response
 * @param {string?} msg custom message
 * @param  {any[]} rest any extra props to body response
 */
export const notFound = (res, msg, ...rest) => {
  res.status(404).json({
    message: msg || "oops! the resource was not found :'(",
    ...rest,
  });
};

/**
 * Send 200 Ok
 * @param {e.Response} res pipe to send response
 * @param {any} data
 */
export const ok = (res, data = {}) => {
  res.status(200).json({
    ...data,
  });
};

/**
 *
 * @param {e.Response} res
 * @param {string} msg
 * @param  {...any} rest
 */
export const badRequest = (res, msg, ...rest) => {
  res.status(400).json({
    message: msg,
    ...rest,
  });
};
