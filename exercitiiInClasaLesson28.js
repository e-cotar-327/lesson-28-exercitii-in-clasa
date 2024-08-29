// - - - - - - - OBJECT PROPERTIES - - - - - - -
// 1. Crearea unui obiect. Creați un obiect JavaScript numit persoana cu următoarele proprietăți: nume (string), varsta (number), oras (string) 
const persoana = {
    nume: 'John',
    varsta: 35,
    oras: 'New York'
}

// 2. Accesarea proprietăților unui obiect. Dat fiind obiectul persoana din Exercițiul 1, accesați și afișați pe consolă proprietățile nume și varsta.
console.log(persoana.nume); // Output: John
console.log(persoana.varsta); // Output: 35

// 3. Adăugarea unei proprietăţi la un obiect. Adăugați o nouă proprietate numită ocupatie la obiectul persoana cu valoarea "dezvoltator".
persoana.ocupatie = "dezvoltator";

// 4. Ştergerea unei proprietăţi la un obiect. Ştergeţi proprietăţile ocupatie și varsta din obiectul persoana.
delete persoana.ocupatie;  
delete persoana.varsta;

//console.log(`Numele persoanei este ${persoana.nume} si are ${persoana.varsta} ani.`);




// - - - - - - - OBJECT METHODS - - - - - - -
// 1. Crearea unui obiect: Creați un obiect JavaScript numit masina cu următoarele proprietăți: marca (string), model (string), an (number), culoare (string)
const masina = {
    marca: 'Bugatti',
    model: 'Veyron',
    an: 2010,
    culoare: 'Rosu',
    /*pornesteMotorul: function() {
        console.log('Motor pornit');
    }*/
}

// 2. Crearea unei metode pe un obiect: Adăugați o metodă numită pornesteMotorul la obiectul masina care afișează pe consolă "Motor pornit".
masina.pornesteMotorul = function() {
    console.log('Motor pornit');
}
//console.log(masina);

// 3. Apelarea unei metode pe un obiect: Apelați metoda pornesteMotorul pe obiectul masina.
masina.pornesteMotorul(); // Output: Motor pornit