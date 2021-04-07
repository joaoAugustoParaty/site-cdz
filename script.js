
function imgSlider(anything){
    document.querySelector('.seiya').src = anything
    
}

//Seiya

function changeTextSeiya(){
    document.getElementById('cavaleiro').innerHTML = 'Cavaleiro de Bronze';
}

function changeTextnomeSeiya(){
    document.getElementById('nome').innerHTML = 'Seiya de Pegasus';
}

function changeTextColorSeiya(){
    document.getElementById('nome').style.color="#bd0800"
}

function changeTexttextSeiya(){
    document.getElementById('texto').innerHTML = 'Cavaleiro de Bronze da constelação de Pégaso do século XX, incumbido com a missão de proteger a deusa Atena nas Guerras Santas no século XX.';
}

function changeTextColorSeiyatext(){
    document.getElementById('texto').style.color="#fee801"
}


//Shiryu

function changeTextShiryu(){
    document.getElementById('cavaleiro').innerHTML = 'Cavaleiro de Bronze';
}

function changeTextnomeShiryu(){
    document.getElementById('nome').innerHTML = 'Shiryu de Dragão';
}

function changeTextColorShiryu(){
    document.getElementById('nome').style.color="#305c64"
}

function changeTexttextShiryu(){
    document.getElementById('texto').innerHTML = 'Shiryu de Dragão é um Cavaleiro de Bronze do século XX, incumbido com a missão de proteger a deusa Atena.';
}

function changeTextColorShiryutext(){
    document.getElementById('texto').style.color="#72c1ca"
}

//Shun

function changeTextShun(){
    document.getElementById('cavaleiro').innerHTML = 'Cavaleiro de Bronze';
    
}

function changeTextnomeShun(){
    document.getElementById('nome').innerHTML = 'Shun de Andrômeda';
}

function changeTextColorShun(){
    document.getElementById('nome').style.color="#b96fc6"
}

function changeTexttextShun(){
    document.getElementById('texto').innerHTML = 'Shun de Andrômeda é um Cavaleiro de Bronze do século XX, incumbido com a missão de proteger a deusa Atena do mal.';
}

function changeTextColorShuntext(){
    document.getElementById('texto').style.color="#ca2b5e"
}


//Hyoga

function changeTextHyoga(){
    document.getElementById('cavaleiro').innerHTML = 'Cavaleiro de Bronze';
}

function changeTextnomeHyoga(){
    document.getElementById('nome').innerHTML = 'Hyoga de Cisne';
}

function changeTextColorHyoga(){
    document.getElementById('nome').style.color="#f1fff2"
}

function changeTexttextHyoga(){
    document.getElementById('texto').innerHTML = 'Hyoga de Cisne é um Cavaleiro de Bronze do século XX. Um dos 100 órfãos reunidos por Mitsumasa Kido para proteger a deusa Atena.';
}

function changeTextColorHyogatext(){
    document.getElementById('texto').style.color="#8b8ed7"
}

//Ikki de Fênix

function changeTextIkki(){
    document.getElementById('cavaleiro').innerHTML = 'Cavaleiro de Bronze';
}

function changeTextnomeIkki(){
    document.getElementById('nome').innerHTML = 'Ikki de Fênix';
}

function changeTextColorIkki(){
    document.getElementById('nome').style.color="#ffac55"
}

function changeTexttextIkki(){
    document.getElementById('texto').innerHTML = 'Ikki de Fênix é um Cavaleiro de Bronze do século XX e irmão mais velho do também cavaleiro de bronze, Shun de Andrômeda.';
}

function changeTextColorIkkitext(){
    document.getElementById('texto').style.color="#5b419d"
}

/*_____________MENU____________*/

function toggleMenu() {

	var menu = document.getElementById("menu");

	if (menu.style.display == 'none' || menu.style.display == '') {
		menu.style.display = "block";
	} else {
		menu.style.display = "none";
	}

}