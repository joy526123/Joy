var liffID = 'XXXXXXXXXXXX';

liff.init({
  liffId: liffID
}).then(function() {
  console.log('LIFF init');
  
  // liff.scanCode()
  .then(function(res) {
    console.log(res);
  })
  .catch(function(error) {
    console.log(error);
  });
  
}).catch(function(error) {
  console.log(error);
});
