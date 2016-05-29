
// TODO: Implement this later properly

export default class Utils {	
    static parseFloatSafe(text, defaultValue, decimalPlaceCount) {
      var value = defaultValue;
      try {
        value = parseFloat(text);        
      }
      catch(allErrors) {
        console.log('Value failed :: ' + value + ' ' + defaultValue)
        value = defaultValue;
      }

      value = isNaN(value) ? defaultValue : value;
      if(decimalPlaceCount > 0) {
          value = value.toFixed(decimalPlaceCount);
      }      
      return value;
    }
}

