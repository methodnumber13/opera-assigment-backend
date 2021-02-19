
module.exports = (
    error,
    request,
    response,
    next
) => {
    const status = error.statusCode || 500;
    const message = error.message || "It's not you. It's us. We are having some problems.";

    response.status(status).send(message);
};
