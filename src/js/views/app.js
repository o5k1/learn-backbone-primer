var AppView = Backbone.View.extend({
    el: '#main',

    initialize: function() {
        this.input = this.$('#new-todo-input');

        this.listenTo(Todos, 'add', this.addOne);
        this.listenTo(Todos, 'filter', this.filterAll);

        Todos.fetch();
    },

    events: {
        'keypress #new-todo-input': 'createOne',
    },

    // Add a single todo item to the list by creating a view for it, and appending its element to the `<ul>`.
    addOne: function( todo ) {
        var view = new TodoView({ model: todo });
        $('#todo-list').append( view.render().el );
    },

    // Create a new Todo and add it to the collection
    createOne: function (event) {
        if (event.keyCode === ENTER_KEY){
            var content = this.input.val();
            var todo = new Todo({title: content});
            Todos.create(todo);
            // Cleans the input field
            this.input.val('');
        }
    },

    filterAll: function (param) {
        console.log(param);

    }

});