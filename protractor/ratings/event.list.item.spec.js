describe('Event List Details: ', function(){
    describe('When clicking on an event', function(){
        it('Should navigate to the details page', function(){
            browser.get('http://localhost:3000/#!/EventRatings');

            var firstElement = element.all(by.binding('name')).first();

            var name;
            firstElement.getText().then(function(text){
                name = text;
            });

        })
    })
});