var BookListItmeView = Backbone.View.extend({
    tagName: "tr",

    template: _.template($("#book-list-item-template").html()),

    events: {
        "click .editBook": "editBook",
        "click .removeBook": "removeBook"
    },

    initialize: function() {
        this.listenTo(this.model, "change", this.render)
    },

    editBook: function() {
        window.app.navigate("/books/" + this.model.get("id") +"/edit", { trigger: true });
    },

    removeBook: function() {
        this.model.destroy({ wait: true });
    },

    render: function() {
        this.$el.html(this.template({
            author: this.model.get("author"),
            title: this.model.get("title")
        }));

        return this;
    }
});
