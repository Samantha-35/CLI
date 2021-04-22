#!/usr/bin/env node

const { getCode, getName } = require('country-list');
const axios = require('axios').default;
const theCountries = require ("country-list");
const chalk = require('chalk');
var figlet = require('figlet');

const newDate = new Date();
const getYear = process.argv[2];
console.log (process.argv[2]);
const country = process.argv[3];
const countryCode = theCountries.getCode(country);
console.log(country);

figlet(" Holidays !", function (err, data) {
    if (err) {
      console.log('Something went wrong...');
      console.dir(err);
      return;
    }
    console.log(chalk`{blue${data}}`);
  });

const getHoliday = async(year,country)=>{

    try{
        const result = await axios.get (`https://date.nager.at/Api/v2/PublicHolidays/${year}/${country}`
            );
            result.data.forEach((holiday) => {
                console.log(
                  chalk`{bold ${holiday.name}}, {green ${holiday.date}}, {rgb(255, 136, 0).dim ${holiday.localName}}`
                );
              });
                }catch(error){
        console.log(error);
    }
}
getHoliday(getYear,countryCode);




// theCountries.getNames();

// let countries = TheCountries.getNames();

// console.log();