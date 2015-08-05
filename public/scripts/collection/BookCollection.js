var BookColection = Backbone.Collection.extend({
    model: BookModel,

    url: "/api/books"
});
