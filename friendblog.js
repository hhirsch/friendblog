Friendblog = function () {

};

Friendblog.prototype.setupRouter = function() {
    Router.route('/admin', function () {
    this.layout('defaultLayout', {
        //set a data context for the whole layout
        data: {
            title: 'Master Title'
        }
    });     
        this.render('admin');
    });    

    Router.route('/', function () {
    this.layout('defaultLayout', {
        //set a data context for the whole layout
        data: {
            title: 'Master Title'
        }
    });     
        this.render('home');
    });    
};
