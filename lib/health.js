
/*!
 * Module dependencies.
 */

var Requestor = require('./requestor');

/**
 * Export `Health`.
 */

module.exports = Health;

/**
 * Health constructor.
 *
 * @param {Consul} consul
 * @constructor
 */

function Health (consul) {
  this.requestor = new Requestor('health', consul);
}

/**
 * Lists the nodes in a given service.
 *
 * @param {String} service
 * @param {Object} [opts]
 * @param {Function} done
 */
Health.prototype.service = function(service, opts, done) {
    if ('function' == typeof opts) done = opts, opts = null;

    this.requestor.get('service/' + service, opts, done);
};
