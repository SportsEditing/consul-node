
var Consul = require('..');
var should = require('should');

describe('consul.catalog', function () {
    var consul;

    beforeEach(function () {
        consul = new Consul();
    });

    // TODO: Extend these tests
    describe('#service', function () {
        it('lists the nodes in a given service', function (done) {
            consul.catalog.service('testservice', function (err, nodes) {
                if (err) return done(err);
                nodes.should.be.instanceof(Array);
                nodes.length.should.equal(1);
                nodes[0].should.eql({ node: 'api-node1',
                    address: '127.0.0.1',
                    serviceId: 'testservice',
                    serviceName: 'testservice',
                    serviceTags: [ 'node' ],
                    servicePort: 80 });
                done();
            });
        });
    });

//    describe('#peers', function () {
//        it('gets all the peer hosts', function (done) {
//            consul.status.peers(function (err, hosts) {
//                if (err) return done(err);
//                hosts.should.be.instanceof(Array);
//                hosts.should.include('127.0.0.1:8300');
//                done();
//            });
//        });
//    });
});
