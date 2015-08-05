var BookFormView = Backbone.View.extend({
    template: _.template($("#book-form-template").html()),

    events: {
        "click .saveBook": "saveBook"
    },

    initialize: function() {
        if(this.model.isNew()) {
            this.render();
        } else {
            this.model.fetch().done(_.bind(this.render, this));
        }
    },

    saveBook: function() {
        this.model.save({
            author: this.$("[name=author]").val(),
            title: this.$("[name=title]").val()
        }, { wait: true }).done(function() {
            window.app.navigate("books/", { trigger: true });
        });


    },

    render: function() {
        this.$el.html(this.template(this.model.toJSON()));

        return this;
    }
});