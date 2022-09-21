const loadCountries = () => {
    fetch( 'https://restcountries.com/v3.1/all' )
        .then( res => res.json() )
        .then( data => displayCountries( data ) )
}

//we are loading the data of the countries
//uporer data gula country the pass hoe jabe
const displayCountries = ( country ) => {
    console.log( country[ 0 ] );
    // map runs on array as we get the countries as an array
    const countriesHTML = country.map( country => getCountryHTML( country ) )
    // console.log( countriesHTML[0] );

    const container = document.getElementById( 'countries' );
    container.innerHTML = countriesHTML.join( ' ' );
}

// const getCountryHTML = country =>
// {
// original

//     return `
//     <div class="country">
//         <h2>${country.name.common}</h2>
//         <img src="${country.flags.png}">
//     </div>
//     `
// }

// const getCountryHTML = country => {

//     // option1: destructuring:
//     const {name,flags} = country;
//     return `
//     <div class="country">
//         <h2>${name.common}</h2>
//         <img src="${flags.png}">
//     </div>
//     `
// }

// option2: destructuring in parameter: 
const getCountryHTML = ( {
    name,
    flags,
    area,
    region
} ) => {
    return `
    <div class="country">
        <h2>${name.common}</h2>
        <p>Area: ${area}</p>
        <p>Continent: ${region}</p>
        <img src="${flags.png}">
    </div>
    `
}

loadCountries();