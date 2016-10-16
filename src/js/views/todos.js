var TodoView = Backbone.View.extend({
    tagName: 'li',
    template: _.template( $('#item-template').html() ),

    // The TodoView listens for changes to its model, re-rendering.
    initialize: function() {
        this.listenTo(this.model, 'change', this.render);
    },

    events: {
        "change input[type='checkbox']": "toggleComplete"
    },

    render: function () {
        this.$el.html(this.template(this.model.toJSON()));
        this.label = this.$('label');
        this.markAsCompleted();
        return this;
    },

    toggleComplete: function () {
        this.model.toggle();
    },

    markAsCompleted: function () {
        if(this.model.attributes.completed){
            this.label.addClass('completedTodo');
        }
    }
});