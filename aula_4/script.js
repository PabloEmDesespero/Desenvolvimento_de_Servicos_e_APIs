function lerJSON(){
    var req = new XMLHttpRequest(); // explicação: 
    

    req.onreadystatechange = function(){
        if(this.readyState == 4 && this.status == 200){

            txt = "Modelo: " + objJSON.modelo;
            txt += "<br>Ano: " + objJSON.ano;
            txt += "<br>Câmbio Automático: ";
            if (objJSON.cambioAutomatico)
                txt += "Sim";
            else
                txt += "Não";

             txt += "<br>Combustíveis: ";
             objJSON.combustivel.forEach( comb => {
                txt += comb + " - ";
             });

             txt += "<br>Proprietário: " + objJSON.proprieatario.nome;
             txt += "<br>Opcionais: ";
             objJSON.opcionais.forEach( op => {
                txt += "<br>" + op.nome + " Marca: " + op.marca
             }) 
             document.getElementById("divJSON").innerHTML = txt;
        
        }else if(this.readyState == 4){
            alert( this.status + " - " + this.statusText);
        } 

        
    }
}