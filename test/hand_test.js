describe("Cards in hand class suit", function() {
	it("Check valid full hands", function() {
		var h;

		expect(function() { h = new hand("AKQJT9", "akqjt", "102", "-"); }).not.toThrow();
		expect(h.hasCard(card.parseCard('S', 'A'))).toBe(true);
		expect(h.hasCard(card.parseCard('S', 'K'))).toBe(true);
		expect(h.hasCard(card.parseCard('S', 'Q'))).toBe(true);
		expect(h.hasCard(card.parseCard('S', 'J'))).toBe(true);
		expect(h.hasCard(card.parseCard('S', 'T'))).toBe(true);
		expect(h.hasCard(card.parseCard('S', '9'))).toBe(true);
		expect(h.hasCard(card.parseCard('S', '8'))).toBe(false);
		expect(h.hasCard(card.parseCard('S', '2'))).toBe(false);
		expect(h.hasCard(card.parseCard('H', 'A'))).toBe(true);
		expect(h.hasCard(card.parseCard('H', 'K'))).toBe(true);
		expect(h.hasCard(card.parseCard('H', 'Q'))).toBe(true);
		expect(h.hasCard(card.parseCard('H', 'J'))).toBe(true);
		expect(h.hasCard(card.parseCard('H', 'T'))).toBe(true);
		expect(h.hasCard(card.parseCard('H', '9'))).toBe(false);
		expect(h.hasCard(card.parseCard('H', '2'))).toBe(false);
		expect(h.hasCard(card.parseCard('D', 'T'))).toBe(true);
		expect(h.hasCard(card.parseCard('D', '2'))).toBe(true);
		expect(h.hasCard(card.parseCard('D', '9'))).toBe(false);
		expect(h.hasCard(card.parseCard('C', '2'))).toBe(false);
		expect(h.hasCard(card.parseCard('C', 'A'))).toBe(false);
		expect(h.hasCard(card.parseCard('C', '9'))).toBe(false);
		expect(h.validate()).toBe("");
		expect(h.getSuit(deal.spades)).toBe("A K Q J 10 9");
		expect(h.getSuit(deal.hearts)).toBe("A K Q J 10");
		expect(h.getSuit(deal.diamonds)).toBe("10 2");
		expect(h.getSuit(deal.clubs)).toBe("—");
		
		expect(function() { h = new hand("8765432", "akqjt9", "", ""); }).not.toThrow();
		expect(h.hasCard(card.parseCard('S', '8'))).toBe(true);
		expect(h.hasCard(card.parseCard('S', '7'))).toBe(true);
		expect(h.hasCard(card.parseCard('S', '6'))).toBe(true);
		expect(h.hasCard(card.parseCard('S', '5'))).toBe(true);
		expect(h.hasCard(card.parseCard('S', '4'))).toBe(true);
		expect(h.hasCard(card.parseCard('S', '3'))).toBe(true);
		expect(h.hasCard(card.parseCard('S', '2'))).toBe(true);
		expect(h.hasCard(card.parseCard('S', 'A'))).toBe(false);
		expect(h.hasCard(card.parseCard('H', 'A'))).toBe(true);
		expect(h.hasCard(card.parseCard('H', 'K'))).toBe(true);
		expect(h.hasCard(card.parseCard('H', 'Q'))).toBe(true);
		expect(h.hasCard(card.parseCard('H', 'J'))).toBe(true);
		expect(h.hasCard(card.parseCard('H', 'T'))).toBe(true);
		expect(h.hasCard(card.parseCard('H', '9'))).toBe(true);
		expect(h.hasCard(card.parseCard('H', '2'))).toBe(false);
		expect(h.hasCard(card.parseCard('D', 'T'))).toBe(false);
		expect(h.hasCard(card.parseCard('D', '2'))).toBe(false);
		expect(h.hasCard(card.parseCard('D', '9'))).toBe(false);
		expect(h.hasCard(card.parseCard('C', '2'))).toBe(false);
		expect(h.hasCard(card.parseCard('C', 'A'))).toBe(false);
		expect(h.hasCard(card.parseCard('C', '9'))).toBe(false);
		expect(h.validate()).toBe("");
		expect(h.getSuit(deal.spades)).toBe("8 7 6 5 4 3 2");
		expect(h.getSuit(deal.hearts)).toBe("A K Q J 10 9");
		expect(h.getSuit(deal.diamonds)).toBe("—");
		expect(h.getSuit(deal.clubs)).toBe("—");
	});

	it("Check valid partial hands", function() {
		var h;

		expect(function() { h = new hand("AKQ", "akqjt", "102", "-"); }).not.toThrow();
		expect(h.hasCard(card.parseCard('S', 'A'))).toBe(true);
		expect(h.hasCard(card.parseCard('S', 'K'))).toBe(true);
		expect(h.hasCard(card.parseCard('S', 'Q'))).toBe(true);
		expect(h.hasCard(card.parseCard('S', 'J'))).toBe(false);
		expect(h.hasCard(card.parseCard('S', 'T'))).toBe(false);
		expect(h.hasCard(card.parseCard('S', '9'))).toBe(false);
		expect(h.hasCard(card.parseCard('S', '8'))).toBe(false);
		expect(h.hasCard(card.parseCard('S', '2'))).toBe(false);
		expect(h.hasCard(card.parseCard('H', 'A'))).toBe(true);
		expect(h.hasCard(card.parseCard('H', 'K'))).toBe(true);
		expect(h.hasCard(card.parseCard('H', 'Q'))).toBe(true);
		expect(h.hasCard(card.parseCard('H', 'J'))).toBe(true);
		expect(h.hasCard(card.parseCard('H', 'T'))).toBe(true);
		expect(h.hasCard(card.parseCard('H', '9'))).toBe(false);
		expect(h.hasCard(card.parseCard('H', '2'))).toBe(false);
		expect(h.hasCard(card.parseCard('D', 'T'))).toBe(true);
		expect(h.hasCard(card.parseCard('D', '2'))).toBe(true);
		expect(h.hasCard(card.parseCard('D', '9'))).toBe(false);
		expect(h.hasCard(card.parseCard('C', '2'))).toBe(false);
		expect(h.hasCard(card.parseCard('C', 'A'))).toBe(false);
		expect(h.hasCard(card.parseCard('C', '9'))).toBe(false);
		expect(h.validate()).toBe("");
		expect(h.getSuit(deal.spades)).toBe("A K Q");
		expect(h.getSuit(deal.hearts)).toBe("A K Q J 10");
		expect(h.getSuit(deal.diamonds)).toBe("10 2");
		expect(h.getSuit(deal.clubs)).toBe("—");
	});

	it("Check too many cards", function() {
		var h;

		expect(function() { h = new hand("AKQJT98", "akqjt", "102", "-"); }).not.toThrow();
		expect(h.hasCard(card.parseCard('S', 'A'))).toBe(true);
		expect(h.hasCard(card.parseCard('S', 'K'))).toBe(true);
		expect(h.hasCard(card.parseCard('S', 'Q'))).toBe(true);
		expect(h.hasCard(card.parseCard('S', 'J'))).toBe(true);
		expect(h.hasCard(card.parseCard('S', 'T'))).toBe(true);
		expect(h.hasCard(card.parseCard('S', '9'))).toBe(true);
		expect(h.hasCard(card.parseCard('S', '8'))).toBe(true);
		expect(h.hasCard(card.parseCard('S', '2'))).toBe(false);
		expect(h.hasCard(card.parseCard('H', 'A'))).toBe(true);
		expect(h.hasCard(card.parseCard('H', 'K'))).toBe(true);
		expect(h.hasCard(card.parseCard('H', 'Q'))).toBe(true);
		expect(h.hasCard(card.parseCard('H', 'J'))).toBe(true);
		expect(h.hasCard(card.parseCard('H', 'T'))).toBe(true);
		expect(h.hasCard(card.parseCard('H', '9'))).toBe(false);
		expect(h.hasCard(card.parseCard('H', '2'))).toBe(false);
		expect(h.hasCard(card.parseCard('D', 'T'))).toBe(true);
		expect(h.hasCard(card.parseCard('D', '2'))).toBe(true);
		expect(h.hasCard(card.parseCard('D', '9'))).toBe(false);
		expect(h.hasCard(card.parseCard('C', '2'))).toBe(false);
		expect(h.hasCard(card.parseCard('C', 'A'))).toBe(false);
		expect(h.hasCard(card.parseCard('C', '9'))).toBe(false);
		expect(h.validate()).toBe("There are 14 cards.");
		expect(h.getSuit(deal.spades)).toBe("A K Q J 10 9 8");
		expect(h.getSuit(deal.hearts)).toBe("A K Q J 10");
		expect(h.getSuit(deal.diamonds)).toBe("10 2");
		expect(h.getSuit(deal.clubs)).toBe("—");
	});

	it("Check duplicate card", function() {
		var h;

		expect(function() { h = new hand("AKQJTA", "akqjt", "102", "-"); }).not.toThrow();
		expect(h.hasCard(card.parseCard('S', 'A'))).toBe(true);
		expect(h.hasCard(card.parseCard('S', 'K'))).toBe(true);
		expect(h.hasCard(card.parseCard('S', 'Q'))).toBe(true);
		expect(h.hasCard(card.parseCard('S', 'J'))).toBe(true);
		expect(h.hasCard(card.parseCard('S', 'T'))).toBe(true);
		expect(h.hasCard(card.parseCard('S', '9'))).toBe(false);
		expect(h.hasCard(card.parseCard('S', '8'))).toBe(false);
		expect(h.hasCard(card.parseCard('S', '2'))).toBe(false);
		expect(h.hasCard(card.parseCard('H', 'A'))).toBe(true);
		expect(h.hasCard(card.parseCard('H', 'K'))).toBe(true);
		expect(h.hasCard(card.parseCard('H', 'Q'))).toBe(true);
		expect(h.hasCard(card.parseCard('H', 'J'))).toBe(true);
		expect(h.hasCard(card.parseCard('H', 'T'))).toBe(true);
		expect(h.hasCard(card.parseCard('H', '9'))).toBe(false);
		expect(h.hasCard(card.parseCard('H', '2'))).toBe(false);
		expect(h.hasCard(card.parseCard('D', 'T'))).toBe(true);
		expect(h.hasCard(card.parseCard('D', '2'))).toBe(true);
		expect(h.hasCard(card.parseCard('D', '9'))).toBe(false);
		expect(h.hasCard(card.parseCard('C', '2'))).toBe(false);
		expect(h.hasCard(card.parseCard('C', 'A'))).toBe(false);
		expect(h.hasCard(card.parseCard('C', '9'))).toBe(false);
		expect(h.validate()).toBe("There are duplicate cards in the hand (♠A).");
		expect(h.getSuit(deal.spades)).toBe("A K Q J 10");
		expect(h.getSuit(deal.hearts)).toBe("A K Q J 10");
		expect(h.getSuit(deal.diamonds)).toBe("10 2");
		expect(h.getSuit(deal.clubs)).toBe("—");
	});

	it("Check invalid card", function() {
		var h;

		expect(function() { h = new hand("AKQJ01", "akqjh", "102", "-"); }).not.toThrow();
		expect(h.hasCard(card.parseCard('S', 'A'))).toBe(true);
		expect(h.hasCard(card.parseCard('S', 'K'))).toBe(true);
		expect(h.hasCard(card.parseCard('S', 'Q'))).toBe(true);
		expect(h.hasCard(card.parseCard('S', 'J'))).toBe(true);
		expect(h.hasCard(card.parseCard('S', 'T'))).toBe(false);
		expect(h.hasCard(card.parseCard('S', '9'))).toBe(false);
		expect(h.hasCard(card.parseCard('S', '8'))).toBe(false);
		expect(h.hasCard(card.parseCard('S', '2'))).toBe(false);
		expect(h.hasCard(card.parseCard('H', 'A'))).toBe(true);
		expect(h.hasCard(card.parseCard('H', 'K'))).toBe(true);
		expect(h.hasCard(card.parseCard('H', 'Q'))).toBe(true);
		expect(h.hasCard(card.parseCard('H', 'J'))).toBe(true);
		expect(h.hasCard(card.parseCard('H', 'T'))).toBe(false);
		expect(h.hasCard(card.parseCard('H', '9'))).toBe(false);
		expect(h.hasCard(card.parseCard('H', '2'))).toBe(false);
		expect(h.hasCard(card.parseCard('D', 'T'))).toBe(true);
		expect(h.hasCard(card.parseCard('D', '2'))).toBe(true);
		expect(h.hasCard(card.parseCard('D', '9'))).toBe(false);
		expect(h.hasCard(card.parseCard('C', '2'))).toBe(false);
		expect(h.hasCard(card.parseCard('C', 'A'))).toBe(false);
		expect(h.hasCard(card.parseCard('C', '9'))).toBe(false);
		expect(h.validate()).toBe("There are invalid ranks for a card (0, 1, h).");
		expect(h.getSuit(deal.spades)).toBe("A K Q J");
		expect(h.getSuit(deal.hearts)).toBe("A K Q J");
		expect(h.getSuit(deal.diamonds)).toBe("10 2");
		expect(h.getSuit(deal.clubs)).toBe("—");
	});

	it("Check card sorting", function() {
		var h;

		expect(function() { h = new hand("KATJQ9", "akqjt", "102", "-"); }).not.toThrow();
		expect(h.hasCard(card.parseCard('S', 'A'))).toBe(true);
		expect(h.hasCard(card.parseCard('S', 'K'))).toBe(true);
		expect(h.hasCard(card.parseCard('S', 'Q'))).toBe(true);
		expect(h.hasCard(card.parseCard('S', 'J'))).toBe(true);
		expect(h.hasCard(card.parseCard('S', 'T'))).toBe(true);
		expect(h.hasCard(card.parseCard('S', '9'))).toBe(true);
		expect(h.hasCard(card.parseCard('S', '8'))).toBe(false);
		expect(h.hasCard(card.parseCard('S', '2'))).toBe(false);
		expect(h.hasCard(card.parseCard('H', 'A'))).toBe(true);
		expect(h.hasCard(card.parseCard('H', 'K'))).toBe(true);
		expect(h.hasCard(card.parseCard('H', 'Q'))).toBe(true);
		expect(h.hasCard(card.parseCard('H', 'J'))).toBe(true);
		expect(h.hasCard(card.parseCard('H', 'T'))).toBe(true);
		expect(h.hasCard(card.parseCard('H', '9'))).toBe(false);
		expect(h.hasCard(card.parseCard('H', '2'))).toBe(false);
		expect(h.hasCard(card.parseCard('D', 'T'))).toBe(true);
		expect(h.hasCard(card.parseCard('D', '2'))).toBe(true);
		expect(h.hasCard(card.parseCard('D', '9'))).toBe(false);
		expect(h.hasCard(card.parseCard('C', '2'))).toBe(false);
		expect(h.hasCard(card.parseCard('C', 'A'))).toBe(false);
		expect(h.hasCard(card.parseCard('C', '9'))).toBe(false);
		expect(h.validate()).toBe("");
		expect(h.getSuit(deal.spades)).toBe("A K Q J 10 9");
		expect(h.getSuit(deal.hearts)).toBe("A K Q J 10");
		expect(h.getSuit(deal.diamonds)).toBe("10 2");
		expect(h.getSuit(deal.clubs)).toBe("—");
	});

});
