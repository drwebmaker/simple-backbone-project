var BookModel = Backbone.Model.extend({
    defaults: {
        author: undefined,
        title: undefined,
        id: undefined
    },

    urlRoot: "/api/books"
});
