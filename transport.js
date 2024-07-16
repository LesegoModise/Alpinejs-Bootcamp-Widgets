document.addEventListener('alpine:init', () => {
    Alpine.data('transport', () => ({

        selectedShift: null,

        transportFee: function(shift) {
            if (shift === 'morning') {
              return 'R20'; 
            } 
            else if (shift === 'afternoon') {
              return 'R10';
            } 
            else {
              return 'free';
            }
          }
    }));
});