describe('Favorite Food Filter', function () {
	var $controller, favoriteFood;

	beforeEach(module('app'));

  beforeEach(inject(function ($filter) {
      favoriteFood = $filter('favoriteFood');
    }));

 it('return only items with favorite food', function () {
     var mockedList = [{
			name: 'Test',
			favoriteFood: 'Bread'
		}, {
			name: 'Test 2',
			favoriteFood: 'Apples'
		}, {
			name: 'Test 3',
			favoriteFood: 'Carrots'
		}];

		var results = favoriteFood(mockedList, 'Apples');

		expect(results.length).toBe(1);
		expect(results[0].name).toBe('Test 2');
  });

});
