var Todo = Backbone.Model.extend({
    defaults: {
        title: '',
        completed: false
    },

    initialize: function () {
        console.log('New Todo created!');
    },

    // Toggle the `completed` state of this todo item.
    toggle: function() {
        this.save({
            completed: !this.get('completed')
        });
    }
});