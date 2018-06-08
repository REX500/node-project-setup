/**
400 Bad Request
The server cannot or will not process the request due to an apparent client error (e.g., malformed request syntax, too large size, invalid request message framing, or deceptive request routing)

401 Unauthorized (RFC 7235)
Similar to 403 Forbidden, but specifically for use when authentication is required and has failed or has not yet been provided.
Use when user is NOT authenticated.

402 Payment Required
Reserved for future use. The original intention was that this code might be used as part of some form of digital cash or micropayment scheme, but that has not happened, and this code is not usually used. Google Developers API uses this status if a particular developer has exceeded the daily limit on requests.

403 Forbidden
The request was valid, but the server is refusing action. The user might not have the necessary permissions for a resource.
Use when user is authenticated, but does not have the required role or priviledges.

404 Not Found
The requested resource could not be found but may be available in the future. Subsequent requests by the client are permissible.[35]

409 Conflict
Indicates that the request could not be processed because of conflict in the request, such as an edit conflict between multiple simultaneous updates.

422 Unprocessable Entity (WebDAV; RFC 4918)
The request was well-formed but was unable to be followed due to semantic errors
*/

/*
There is a lookup of common HTTP status codes and their friendly names in NodeJS. http.STATUS_CODES is the object of which I speak, where each key is a status code, and the matching value is the human readable description.
const http = require('http')
console.log(http.STATUS_CODES)
*/

class HttpError extends Error {
  constructor(name, message, status, body = null) {
    super(message);
    this.name = name;
    this.message = message;
    this.httpStatus = status;
    this.body = body; // If defined, this'll be the response body
  }
}

module.exports = HttpError;
