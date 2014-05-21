
/*!
 * Module dependencies.
 */

var Requestor = require('./requestor');

/**
 * Export `Catalog`.
 */

module.exports = Catalog;

/**
 * Catalog constructor.
 *
 * @param {Consul} consol
 * @constructor
 */

function Catalog (consul) {
  this.requestor = new Requestor('catalog', consul);
}

/**
 * Lists the nodes in a given service.
 *
 * @param {String} service
 * @param {Object} [opts]
 * @param {Function} done
 */
Catalog.prototype.service = function(service, opts, done) {
    if ('function' == typeof opts) done = opts, opts = null;

    this.requestor.get('service/' + service, opts, function (err, nodes) {
        if (err) return done(err);
        var mapped = [];

        nodes.forEach(function (node) {
            mapped.push({
                node: node['Node'],
                address: node['Address'],
                serviceId: node['ServiceID'],
                serviceName: node['ServiceName'],
                serviceTags: node['ServiceTags'],
                servicePort: node['ServicePort']
            });
        });

        done(null, mapped);
    });
};
