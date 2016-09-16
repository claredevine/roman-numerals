describe ('romanNumerals', function() {
  it('should return II', function(data) {
    const result = romanNumerals('I', 'I');
    data.should.equal('II');
    done();
  });
});
