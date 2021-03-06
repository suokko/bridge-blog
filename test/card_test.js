describe("Card class suit", function() {
	var c;
	it("Successfull parsing", function() {
		expect(function() { c = card.parseCard('d', '2'); }).not.toThrow();
		expect(c.suit).toBe(deal.diamonds);
		expect(c.rank).toBe(2);
		expect(c.getRank()).toBe('2');
		expect(c.toString()).toBe('♦2');

		expect(function() { c = card.parseCard('D', '2'); }).not.toThrow();
		expect(c.suit).toBe(deal.diamonds);
		expect(c.rank).toBe(2);
		expect(c.getRank()).toBe('2');
		expect(c.toString()).toBe('♦2');

		expect(function() { c = card.parseCard('♦', '2'); }).not.toThrow();
		expect(c.suit).toBe(deal.diamonds);
		expect(c.rank).toBe(2);
		expect(c.getRank()).toBe('2');
		expect(c.toString()).toBe('♦2');

		expect(function() { c = card.parseCard('♦', '3'); }).not.toThrow();
		expect(c.suit).toBe(deal.diamonds);
		expect(c.rank).toBe(3);
		expect(c.getRank()).toBe('3');
		expect(c.toString()).toBe('♦3');

		expect(function() { c = card.parseCard('♦', '4'); }).not.toThrow();
		expect(c.suit).toBe(deal.diamonds);
		expect(c.rank).toBe(4);
		expect(c.getRank()).toBe('4');
		expect(c.toString()).toBe('♦4');

		expect(function() { c = card.parseCard('♦', '4'); }).not.toThrow();
		expect(c.suit).toBe(deal.diamonds);
		expect(c.rank).toBe(4);
		expect(c.getRank()).toBe('4');
		expect(c.toString()).toBe('♦4');

		expect(function() { c = card.parseCard('♦', '5'); }).not.toThrow();
		expect(c.suit).toBe(deal.diamonds);
		expect(c.rank).toBe(5);
		expect(c.getRank()).toBe('5');
		expect(c.toString()).toBe('♦5');

		expect(function() { c = card.parseCard('♦', '6'); }).not.toThrow();
		expect(c.suit).toBe(deal.diamonds);
		expect(c.rank).toBe(6);
		expect(c.getRank()).toBe('6');
		expect(c.toString()).toBe('♦6');

		expect(function() { c = card.parseCard('♦', '7'); }).not.toThrow();
		expect(c.suit).toBe(deal.diamonds);
		expect(c.rank).toBe(7);
		expect(c.getRank()).toBe('7');
		expect(c.toString()).toBe('♦7');

		expect(function() { c = card.parseCard('♦', '8'); }).not.toThrow();
		expect(c.suit).toBe(deal.diamonds);
		expect(c.rank).toBe(8);
		expect(c.getRank()).toBe('8');
		expect(c.toString()).toBe('♦8');

		expect(function() { c = card.parseCard('♦', '9'); }).not.toThrow();
		expect(c.suit).toBe(deal.diamonds);
		expect(c.rank).toBe(9);
		expect(c.getRank()).toBe('9');
		expect(c.toString()).toBe('♦9');

		expect(function() { c = card.parseCard('s', 'T'); }).not.toThrow();
		expect(c.suit).toBe(deal.spades);
		expect(c.rank).toBe(10);
		expect(c.getRank()).toBe('10');
		expect(c.toString()).toBe('♠10');

		expect(function() { c = card.parseCard('S', 'T'); }).not.toThrow();
		expect(c.suit).toBe(deal.spades);
		expect(c.rank).toBe(10);
		expect(c.getRank()).toBe('10');
		expect(c.toString()).toBe('♠10');

		expect(function() { c = card.parseCard('♠', 'T'); }).not.toThrow();
		expect(c.suit).toBe(deal.spades);
		expect(c.rank).toBe(10);
		expect(c.getRank()).toBe('10');
		expect(c.toString()).toBe('♠10');

		expect(function() { c = card.parseCard('h', 't'); }).not.toThrow();
		expect(c.suit).toBe(deal.hearts);
		expect(c.rank).toBe(10);
		expect(c.getRank()).toBe('10');
		expect(c.toString()).toBe('♥10');

		expect(function() { c = card.parseCard('H', 't'); }).not.toThrow();
		expect(c.suit).toBe(deal.hearts);
		expect(c.rank).toBe(10);
		expect(c.getRank()).toBe('10');
		expect(c.toString()).toBe('♥10');

		expect(function() { c = card.parseCard('♥', 't'); }).not.toThrow();
		expect(c.suit).toBe(deal.hearts);
		expect(c.rank).toBe(10);
		expect(c.getRank()).toBe('10');
		expect(c.toString()).toBe('♥10');

		expect(function() { c = card.parseCard('♣', 'J'); }).not.toThrow();
		expect(c.suit).toBe(deal.clubs);
		expect(c.rank).toBe(11);
		expect(c.getRank()).toBe('J');
		expect(c.toString()).toBe('♣J');

		expect(function() { c = card.parseCard('c', 'j'); }).not.toThrow();
		expect(c.suit).toBe(deal.clubs);
		expect(c.rank).toBe(11);
		expect(c.getRank()).toBe('J');
		expect(c.toString()).toBe('♣J');

		expect(function() { c = card.parseCard('C', 'Q'); }).not.toThrow();
		expect(c.suit).toBe(deal.clubs);
		expect(c.rank).toBe(12);
		expect(c.getRank()).toBe('Q');
		expect(c.toString()).toBe('♣Q');

		expect(function() { c = card.parseCard('♣', 'q'); }).not.toThrow();
		expect(c.suit).toBe(deal.clubs);
		expect(c.rank).toBe(12);
		expect(c.getRank()).toBe('Q');
		expect(c.toString()).toBe('♣Q');

		expect(function() { c = card.parseCard('c', 'K'); }).not.toThrow();
		expect(c.suit).toBe(deal.clubs);
		expect(c.rank).toBe(13);
		expect(c.getRank()).toBe('K');
		expect(c.toString()).toBe('♣K');

		expect(function() { c = card.parseCard('C', 'k'); }).not.toThrow();
		expect(c.suit).toBe(deal.clubs);
		expect(c.rank).toBe(13);
		expect(c.getRank()).toBe('K');
		expect(c.toString()).toBe('♣K');

		expect(function() { c = card.parseCard('♣', 'A'); }).not.toThrow();
		expect(c.suit).toBe(deal.clubs);
		expect(c.rank).toBe(14);
		expect(c.getRank()).toBe('A');
		expect(c.toString()).toBe('♣A');

		expect(function() { c = card.parseCard('♣', 'a'); }).not.toThrow();
		expect(c.suit).toBe(deal.clubs);
		expect(c.rank).toBe(14);
		expect(c.getRank()).toBe('A');
		expect(c.toString()).toBe('♣A');

		expect(function() { c = card.parseCard('♣', 'X'); }).not.toThrow();
		expect(c.suit).toBe(deal.clubs);
		expect(c.rank).toBe(1);
		expect(c.getRank()).toBe('x');
		expect(c.toString()).toBe('♣x');

		expect(function() { c = card.parseCard('♣', 'X'); }).not.toThrow();
		expect(c.suit).toBe(deal.clubs);
		expect(c.rank).toBe(1);
		expect(c.getRank()).toBe('x');
		expect(c.toString()).toBe('♣x');

		expect(function() { c = card.parseCard('♣', 'H'); }).not.toThrow();
		expect(c.suit).toBe(deal.clubs);
		expect(c.rank).toBe(15);
		expect(c.getRank()).toBe('H');
		expect(c.toString()).toBe('♣H');
	});

	it("Invalid input parsing", function() {
		/* Ten is not accepted */
		expect(function() { c = card.parseCard('d', '10'); }).toThrow();
		expect(function() { c = card.parseCard('D', '10'); }).toThrow();
		expect(function() { c = card.parseCard('♦', '10'); }).toThrow();
		
		/* Random rank strings aren't accepted */
		expect(function() { c = card.parseCard('d', '1'); }).toThrow();
		expect(function() { c = card.parseCard('D', 'g'); }).toThrow();
		expect(function() { c = card.parseCard('♦', 'G'); }).toThrow();
		
		/* Random suit strings aren't accepted */
		expect(function() { c = card.parseCard('e', '2'); }).toThrow();
		expect(function() { c = card.parseCard('4', '2'); }).toThrow();
		expect(function() { c = card.parseCard('$', '2'); }).toThrow();
	});

	it("Adding alternative", function() {
		var a, b;

		expect(function() { c = card.parseCard('♣', 'a'); }).not.toThrow();
		expect(c.suit).toBe(deal.clubs);
		expect(c.rank).toBe(14);
		expect(c.getRank()).toBe('A');
		expect(c.toString()).toBe('♣A');

		expect(function() { a = card.parseCard('D', '4'); }).not.toThrow();
		expect(a.suit).toBe(deal.diamonds);
		expect(a.rank).toBe(4);
		expect(a.getRank()).toBe('4');
		expect(a.toString()).toBe('♦4');

		expect(function() { b = card.parseCard('D', '6'); }).not.toThrow();
		expect(b.suit).toBe(deal.diamonds);
		expect(b.rank).toBe(6);
		expect(b.getRank()).toBe('6');
		expect(b.toString()).toBe('♦6');

		expect(function() { c.appendAlternative(a); }).not.toThrow();
		expect(c.suit).toBe(deal.clubs);
		expect(c.rank).toBe(14);
		expect(c.getRank()).toBe('A');
		expect(c.toString()).toBe('♣A(♦4)');
		expect(a.suit).toBe(deal.diamonds);
		expect(a.rank).toBe(4);
		expect(a.getRank()).toBe('4');
		expect(a.toString()).toBe('♦4');
		expect(b.suit).toBe(deal.diamonds);
		expect(b.rank).toBe(6);
		expect(b.getRank()).toBe('6');
		expect(b.toString()).toBe('♦6');

		expect(function() { a.appendAlternative(b); }).toThrow();
		expect(c.suit).toBe(deal.clubs);
		expect(c.rank).toBe(14);
		expect(c.getRank()).toBe('A');
		expect(c.toString()).toBe('♣A(♦4)');
		expect(a.suit).toBe(deal.diamonds);
		expect(a.rank).toBe(4);
		expect(a.getRank()).toBe('4');
		expect(a.toString()).toBe('♦4');
		expect(b.suit).toBe(deal.diamonds);
		expect(b.rank).toBe(6);
		expect(b.getRank()).toBe('6');
		expect(b.toString()).toBe('♦6');

		expect(function() { c.appendAlternative(a); }).toThrow();
		expect(c.suit).toBe(deal.clubs);
		expect(c.rank).toBe(14);
		expect(c.getRank()).toBe('A');
		expect(c.toString()).toBe('♣A(♦4)');
		expect(a.suit).toBe(deal.diamonds);
		expect(a.rank).toBe(4);
		expect(a.getRank()).toBe('4');
		expect(a.toString()).toBe('♦4');
		expect(b.suit).toBe(deal.diamonds);
		expect(b.rank).toBe(6);
		expect(b.getRank()).toBe('6');
		expect(b.toString()).toBe('♦6');

		expect(function() { c.appendAlternative(b); }).not.toThrow();
		expect(c.suit).toBe(deal.clubs);
		expect(c.rank).toBe(14);
		expect(c.getRank()).toBe('A');
		expect(c.toString()).toBe('♣A(♦4♦6)');
		expect(a.suit).toBe(deal.diamonds);
		expect(a.rank).toBe(4);
		expect(a.getRank()).toBe('4');
		expect(a.toString()).toBe('♦4');
		expect(b.suit).toBe(deal.diamonds);
		expect(b.rank).toBe(6);
		expect(b.getRank()).toBe('6');
		expect(b.toString()).toBe('♦6');
	});

	it("Marking alternative maybe better", function() {
		var a;

		expect(function() { c = card.parseCard('♣', 'a'); }).not.toThrow();
		expect(function() { c.markMaybe(); }).toThrow();
		expect(c.suit).toBe(deal.clubs);
		expect(c.rank).toBe(14);
		expect(c.getRank()).toBe('A');
		expect(c.toString()).toBe('♣A');

		expect(function() { a = card.parseCard('D', '4'); }).not.toThrow();
		expect(function() { a.markMaybe(); }).toThrow();
		expect(a.suit).toBe(deal.diamonds);
		expect(a.rank).toBe(4);
		expect(a.getRank()).toBe('4');
		expect(a.toString()).toBe('♦4');

		expect(function() { c.appendAlternative(a); }).not.toThrow();
		expect(c.suit).toBe(deal.clubs);
		expect(c.rank).toBe(14);
		expect(c.getRank()).toBe('A');
		expect(c.toString()).toBe('♣A(♦4)');
		expect(a.suit).toBe(deal.diamonds);
		expect(a.rank).toBe(4);
		expect(a.getRank()).toBe('4');
		expect(a.toString()).toBe('♦4');

		expect(function() { c.markMaybe(); }).toThrow();
		expect(c.suit).toBe(deal.clubs);
		expect(c.rank).toBe(14);
		expect(c.getRank()).toBe('A');
		expect(c.toString()).toBe('♣A(♦4)');
		expect(a.suit).toBe(deal.diamonds);
		expect(a.rank).toBe(4);
		expect(a.getRank()).toBe('4');
		expect(a.toString()).toBe('♦4');

		expect(function() { a.markMaybe(); }).not.toThrow();
		expect(c.suit).toBe(deal.clubs);
		expect(c.rank).toBe(14);
		expect(c.getRank()).toBe('A');
		expect(c.toString()).toBe('♣A(♦4%)');
		expect(a.suit).toBe(deal.diamonds);
		expect(a.rank).toBe(4);
		expect(a.getRank()).toBe('4');
		expect(a.toString()).toBe('♦4%');
	});
});
