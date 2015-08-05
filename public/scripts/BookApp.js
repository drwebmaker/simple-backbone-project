var BookApp = Backbone.Router.extend({
    routes: {
        "books/new": "editBook",
        "books/:id/edit": "editBook",
        "books(/)": "viewBookList",
        "(/)": "viewBookList"
    },

    initialize: function() {
        this.activeView = undefined;
        Backbone.history.start({ pushState: true });
    },

    viewBookList: function() {
        this.activeView && this.activeView.remove();

        this.activeView = new BookListView();

        $("body").html(this.activeView.render().$el);
    },
    editBook: function(id) {
        this.activeView && this.activeView.remove();

        this.activeView = new BookFormView({
            model: new BookModel({ id: id })
        });

        $("body").html(this.activeView.render().$el);
    }
});