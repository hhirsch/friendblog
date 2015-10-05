// create an entries collection in the MongoDB db
Entries = new Meteor.Collection('entries');
var friendblog = new Friendblog();
Accounts.config({
    sendVerificationEmail: true
});

Meteor.startup(function () {
    // define some methods on the server
    return Meteor.methods({
        removeAllEntries: function () {
            return Entries.remove({});
        }
    });
});

Meteor.publish('userPresence', function() {
    var filter = {};

    return Presences.find(filter, { fields: { state: true, userId: true }});
});

