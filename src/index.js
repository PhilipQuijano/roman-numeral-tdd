const functions = {
  romanToDecimal: (roman) => {

      if(!roman || roman.length === 0){
        return 0;
      }

      const romanValues = {
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000
      };
      let result = 0;
      let prevValue = 0;

      for(let i=roman.length -1 ; i>=0; i--){
        const currentValue = romanValues[roman[i]];

        if(!currentValue){
            continue;
        }

        if (currentValue < prevValue){
          result -= currentValue;
        } else{
          result += currentValue;
        }

        prevValue = currentValue;
      }
      
      return result;
    }
  }

module.exports = functions;