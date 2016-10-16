/**
 * Created by Andrea on 12/10/2016.
 */
var Workspace = Backbone.Router.extend({
    routes: {
        '*filter': 'setFilter'
    },

    setFilter: function( param ) {
        // Set the current filter to be used
        // Trigger a collection filter event, causing hiding/unhiding of Todo view items
        Todos.trigger('filter', param);
    }
});

TodoRouter = new Workspace();
Backbone.history.start();