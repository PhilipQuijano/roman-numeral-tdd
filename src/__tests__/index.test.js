// Developer A: Philip
// Developer B: Trish
// Developer C: Anja
// Developer D: Zach
// Developer E: Mikhos
// Developer F: Diane
// Developer G: Angelo
// Developer H: Chrystel

const { romanToDecimal } = require('../index');

describe('Roman Numeral to Decimal Converter', () => {
  it('When roman numeral is I, it should return 1', () => {

    const roman = 'I';
    const decimal = romanToDecimal(roman);
    expect(decimal).toEqual(1);

  });

  it('When roman numeral is V, it should return 5', () => {

    const roman = 'V';
    const decimal = romanToDecimal(roman);
    expect(decimal).toEqual(5);

  });

  it('When roman numeral is X, it should return 10', () => {

    const roman = 'X';
    const decimal = romanToDecimal(roman);
    expect(decimal).toEqual(10);
  })

  it('When roman numeral is III, it should return 3', () => {
    const roman = "III";
    const decimal = romanToDecimal(roman);
    expect(decimal).toEqual(3);
  })

  it('When roman numeral is L, it should return 50', () => {
    const roman = "L";
    const decimal = romanToDecimal(roman);
    expect(decimal).toEqual(50);
  })

  it('When roman numeral is VIII, it should return 8', () => {
    const roman = "VIII";
    const decimal = romanToDecimal(roman);
    expect(decimal).toEqual(8);
  })

  it('When roman numeral is IV, it should return 4', () => {
    const roman = "IV";
    const decimal = romanToDecimal(roman);
    expect(decimal).toEqual(4);
  })

  it('When roman numeral is IX, it should return 9', () => {
    const roman = "IX";
    const decimal = romanToDecimal(roman);
    expect(decimal).toEqual(9);
  })

  it('When roman numeral is MCMXCIV, it should return 1994', () => {
    const roman = "MCMXCIV";
    const decimal = romanToDecimal(roman);
    expect(decimal).toEqual(1994);
  })

    it('When roman numeral is MMXXIII, it should return 2023', () => {
    const roman = "MMXXIII";
    const decimal = romanToDecimal(roman);
    expect(decimal).toEqual(2023);
  })

  it('When roman numeral is XL, it should return 40', () => {
    const roman = "XL";
    const decimal = romanToDecimal(roman);
    expect(decimal).toEqual(40);
  })

it('When roman numeral is XC, it should return 90', () => {
    const roman = "XC";
    const decimal = romanToDecimal(roman);
    expect(decimal).toEqual(90);
  })

it('When roman numeral is CD, it should return 400', () => {
    const roman = "CD";
    const decimal = romanToDecimal(roman);
    expect(decimal).toEqual(400);
  })

it('When roman numeral is CM, it should return 900', () => {
    const roman = "CM";
    const decimal = romanToDecimal(roman);
    expect(decimal).toEqual(900);
  })

it('When roman numeral is empty string, it should return 0', () => {
    const roman = "";
    const decimal = romanToDecimal(roman);
    expect(decimal).toEqual(0);
  })

it('When roman numeral is invalid character, it should handle gracefully', () => {
    const roman = "IIXZ";
    const decimal = romanToDecimal(roman);
    expect(decimal).toBeDefined();
  })

});


