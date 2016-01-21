describe('vowel', function() {
  it("will recognize a vowel in", function(){
  expect(vowel('a')).to.equal(true);
});
});

// describe('splitString', function() {
//   it("will split the string into an array", function(){
//   expect(splitString('hello')).to.eql(['h','e','l','l','o']);
// });
// });
describe('splitString', function() {
  it("will split the string into an array with individual letters", function(){
  expect(splitString('hallE you')).to.eql(['h','-','l','l','-',' ','y','-','-']);
});
});

describe('splitString', function() {
  it("will join the array elements back into a string.", function(){
  expect(splitString('hallE you')).to.equal('h-ll- y--');
});
});
