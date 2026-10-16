/* ABSTACTION : hide the "how", show the "what"
                is about simplifying the interface (hiding the complexity)
*/

class Coffee{
    #boilWater() { console.log("Boiling water"); }
    #addPower() { console.log("Adding Power"); }
    make(){
        this.#boilWater();
        this.#addPower();
        console.log("Coffee is Ready");
    }
}
new Coffee().make(); 