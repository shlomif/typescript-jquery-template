var HACKLE;
(function (HACKLE) {
    chai.should();

    describe("greeting", function () {
        var $div = $('<div>');

        it("jQuery", function () {
            $div.should.be.instanceof(jQuery);
        });

        describe("on the default instance", function () {
            it("$div has `DIV` of tagName", function () {
                $div.get(0).tagName.should.be.equal('DIV');
            });

            it("$div has not id", function () {
                $div.get(0).id.should.be.equal('');
            });

            it("$div has not any classList", function () {
                $div.get(0).classList.should.be.have.length(0);
            });

            it("$div has not any attributes", function () {
                $div.get(0).attributes.should.be.have.length(0);
            });
        });
    });
})(HACKLE || (HACKLE = {}));
