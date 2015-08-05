var BookListView = Backbone.View.extend({
    template: _.template($("#book-list-template").html()),

    events: {
        "click .addBook": "addBook"
    },

    addBook: function() {
        window.app.navigate("/books/new", { trigger: true });
    },

    initialize: function() {
        this.collection = new BookColection();
        this._subview = [];

        this.listenTo(this.collection, "add", this.addItmeView);
        this.listenTo(this.collection, "remove", this.removeItmeView);

        this.collection.fetch();
    },

    removeItmeView: function(book) {
        var view = _.findWhere(this._subview, { model: book });

        if(view) {
            this._subview.splice(_.indexOf(this._subview, view), 1);
            view.remove();
        }
    },

    addItmeView: function(book) {
        var self = this;
        var view = new BookListItmeView({ model: book });

        this.listenTo(view, "editBook", function() {
            this.trigger("editBook", view);
        });
        self._subview.push(view);
        self.$("tbody").append(view.render().$el);
    },

    render: function() {
        this.$el.html(this.template());

        this.collection.forEach(_.bind(this.addItmeView, this));
        return this;
    },
    remove: function() {
        _.invoke(this._subview, "remove");

        Backbone.View.prototype.remove.apply(this, arguments);
    }
});
