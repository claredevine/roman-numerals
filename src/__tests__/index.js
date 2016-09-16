const romanNumerals = require('../');

console.log(romanNumerals);

describe ('romanNumerals', function() {
  it('should return II', function() {
    const result = romanNumerals('I', 'I');
    expect(result).toEqual('II');
  });

  it('should return IV', function() {
    const result = romanNumerals('II', 'II');
    expect(result).toEqual('IV');
  });

  it('should return IV', function() {
    const result = romanNumerals('III', 'I');
    expect(result).toEqual('IV');
  });

  it('should return IV', function() {
    const result = romanNumerals('I', 'III');
    expect(result).toEqual('IV');
  });

  it('should return V', function() {
    const result = romanNumerals('II', 'III');
    expect(result).toEqual('V');
  });
});
