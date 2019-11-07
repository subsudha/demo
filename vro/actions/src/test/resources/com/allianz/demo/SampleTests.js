describe("sample", function() {
    var sample = System.getModule("com.allianz.demo").sample;
    it("should add two numbers", function() {
        expect(sample(5, 2)).toBe(7);
    });
});