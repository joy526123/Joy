var liffID = 'XXXXXXXXXXXX';

liff.init({
  liffId: liffID
}).then(function() {
  console.log('LIFF init');
  
  // 這邊開始寫使用其他功能
  
}).catch(function(error) {
  console.log(error);
});
