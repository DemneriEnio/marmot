var mongoose = require('mongoose');

var webdriver = require('selenium-webdriver'), By = webdriver.By, until = webdriver.until;

var driver = new webdriver.Builder().forBrowser('firefox').build();
  driver.get('https://marmot.com/');
  driver.wait(until.elementLocated(By.id('q-1'))).sendKeys('7051').then(function() {
  driver.wait(until.elementLocated(By.className('rfk_pimage')))
        .getAttribute('innerHTML')
        .then(function(data){
          console.log(data);
        });
});

/*mongoose.connect("mongodb://thano:thano@ds163679.mlab.com:63679/marmot-db");
mongoose.connection.once('open', function() {
  console.log('Successfuly connected');
});

var marmotSchema = new mongoose.Schema({
  "Target Group": String,
  "Material Group 1": String,
  "Material Group 2": String,
  "Style Number": String,
  "Style Name": String,
  "Size": String,
  "Color": String,
  "Color Number": String,
  "Style Number": String,
  "Quantity": String,
  "Retail": String,
  "Available": String,
  "UPC": String
});

var Marmot = mongoose.model("marmotdata", marmotSchema);

Marmot.find({}, function(err, item) {
  if (err) console.log(err);
  else {
    for (var i = 0; i<item.length; i++) {
      console.log(item[i]['Style Number']);
    }
  }
});*/
