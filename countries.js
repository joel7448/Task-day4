const getcountries=()=>{
    const j = new XMLHttpRequest();
    j.open("GET","https://restcountries.com/v3.1/all");
    j.send();
    j.responseType ="json";
    j.onload=()=>{
        const countries=j.response;
        // console.log(countries); 
        const countrynames=countries.map((country)=>country.name.common);
         const flag=countries.map((country)=>country.flags);
         const region=countries.map((country)=>country.region);
         const subregion=countries.map((country)=>country.subregion);
         const population=countries.map((country)=>country.population);
         console.log("flags:",flag);
        console.log("List of country names",countrynames);
        console.log("regions:",region);
        console.log("subregions:",subregion);
        console.log("population:",population);

    };
};
getcountries();