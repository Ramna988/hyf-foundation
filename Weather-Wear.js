function WhatToWear(temperature) {
    if (temperature < 18) {
        return "winter jacket + pants";
    }
   else
    return "tshirts + shorts";
} 
console.log(WhatToWear(40));
console.log(WhatToWear(10));