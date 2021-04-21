#!/usr/bin/env node

const { getCode, getName } = require('country-list');
const axios = require('axios').default;
const theCountries = require ("country-list");

const newDate = new Date();
const getYear = process.argv[2];
console.log (process.argv[2]);
const country = process.argv[3];
const countryCode = theCountries.getCode(country);
console.log(country);

const getHoliday = async(year,country)=>{

    try{
        const result = await axios.get (`https://date.nager.at/Api/v2/PublicHolidays/${year}/${country}`
            );
            console.log(result.data); 
    }catch(error){
        console.log(error);
    }
}
getHoliday(getYear,countryCode);




// theCountries.getNames();

// let countries = TheCountries.getNames();

// console.log();