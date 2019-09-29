// Borderlands DPS Calculator - JavaScript edition!
//============================================================================
// v0.04 - added elemental damage and element chance to the math formula.
//       - updated the html file to include an option to add elemental data.
//       - cleaned up javascript code (removed redudant code).
//       - added a newer error alert code.
//       - added new functions to calculator.
// v0.03 - introduced an html file with form elements that can be manipulated
//       - adjusted code in the javascript. added css code to html file.
// v0.02 - added an error alert function
//       - updated safety checks
//       - fixed an accidental bug in code.
// v0.01 - initial start of project totally works
//============================================================================

//wep dmg, wep acc, wep reload, wep firerate, wep mag size, ele damage, ele chance
var WeaponDamage; var WeaponAccu; var ReloadSpeed; var FireRate; var MagSize; var ElementalDamage; var ElementalChance;
var secMF = 0; var secMFR = 0; var TotalMagDamage = 0; var FinalDPS;
var FinalDPS; var AlertMSG;
function ErrAlert(eCode, objName){
	let oN = objName;
	switch(eCode){
		case 0:
			AlertMSG = '[Error 0] - Cannot compute ${oN} is less than one';
			document.getElementById('CalcDPS').value = AlertMSG;
		break;
		case 1:
			AlertMSG = '[Error 1] - ${oN} does not contain valid numbers';
			document.getElementById('CalcDPS').value = AlertMSG;
		break;
	}
}
function BLCalculate(){
		if (ElementalDamage < 1 || ElementalChance < 1 || isNaN(ElementalDamage) || isNaN(ElementalChance)) {
			BLC(0); //base calculations.
		} else if (isNaN(WeaponAccu) || WeaponAccu < 1) { //no weapon accuracy :)
			BLC(1); //base + elemental calculations.
		} else { //hopefully they have weapon accuracy.
			BLC(2);
		}
	}
function BLC(choice){
	switch(choice){
		case 0:
			reg_calc();
			break;
		case 1:
			ele_calc();
			break;
		case 2:
			ele_acc_calc();
			break;
	}
}
function run_datacheck(){ //runs a small input data check.
	//if base values have no valid numbers we cannot compute.
	if (isNaN(MagSize)) {
		ErrAlert(1,"magazine size");
	}
	if (isNaN(FireRate)) {
		ErrAlert(1,"firerate");
	}
	if (isNaN(ReloadSpeed)) {
		ErrAlert(1,"reload speed");
	}
	if (isNaN(WeaponDamage)) {
		ErrAlert(1,"weapon damage");
	}
	//if base values are less than 1 than we cannot compute.
	if (MagSize < 1) {
		ErrAlert(0,"magazine size");
	}
	if (FireRate < 1) {
		ErrAlert(0,"firerate");
	}
	if (WeaponDamage < 1) {
		ErrAlert(0,"weapon damage");
	}
	if (ReloadSpeed < 1) {
		ErrAlert(0,"reload speed");
	}
}
function ele_calc(){ //calculate with elemental chance/damage.
	run_datacheck();

	let secEle = parseFloat((ElementalChance / 1000) * 10).toFixed(3); //0.345% ?
	let secMF = parseFloat(MagSize / FireRate);
	let secMFR = parseFloat(secMF + parseFloat(ReloadSpeed));
	let zebra = parseFloat(ElementalDamage * secEle);
	let TotalMagDamage = parseFloat(MagSize * WeaponDamage);
	let FinalDPS = parseFloat(((TotalMagDamage / secMFR) + zebra)).toFixed(3);

	x = FinalDPS.toString();

    document.getElementById('CalcDPS').value = x;
	console.log("Weapon DPS (+Elemental): " + x);
}
function ele_acc_calc(){ //calculate with elemental chance/damage with base accuracy data.
	run_datacheck();

	let secEle = parseFloat((ElementalChance / 1000) * 10).toFixed(3); //34.5 = 0.345% ?
	let secAcc = parseFloat((WeaponAccu / 1000) * 10).toFixed(3); //convert accuracy to a percentage!
	let secMF = parseFloat(MagSize / FireRate);
	let secMFR = parseFloat(secMF + parseFloat(ReloadSpeed));
	let zebra = parseFloat(ElementalDamage * secEle);
	let TotalMagDamage = parseFloat(MagSize * WeaponDamage);
	let FinalDPS = parseFloat(secAcc * (((TotalMagDamage / secMFR) + zebra))).toFixed(2);

	x = FinalDPS.toString();

    document.getElementById('CalcDPS').value = x;
	console.log("Weapon DPS (+Elemental+Accuracy): " + x);
}
function reg_calc(){ //calculate without elemental chance/damage.
	run_datacheck();

	let secMF = parseFloat(MagSize / FireRate);
	let secMFR = parseFloat(secMF + parseFloat(ReloadSpeed));
	let TotalMagDamage = parseFloat(MagSize * WeaponDamage);
	let FinalDPS = parseFloat(TotalMagDamage / secMFR).toFixed(2);

	x = FinalDPS.toString();
	console.log("Weapon DPS: " + x);
	document.getElementById('CalcDPS').value = x;
}
function submit(){ //grabs form values to use in javascript.
	WeaponDamage = document.getElementById("wDamage").value;
	WeaponAccu = document.getElementById("wAccu").value;
	MagSize = document.getElementById("wMagSize").value;
	ReloadSpeed = document.getElementById("wReloadSpeed").value;
	FireRate = document.getElementById("wFirerate").value;
	ElementalDamage = document.getElementById("wEleDamage").value;
	ElementalChance = document.getElementById("wEleChance").value;
	BLCalculate();
}
function clearText(){ //clears out old values on form.
	document.getElementById('wDamage').value = '0';
	document.getElementById('wAccu').value = '0';
	document.getElementById('wMagSize').value = '0';
	document.getElementById('wReloadSpeed').value = '0';
	document.getElementById('wFirerate').value = '0';
	document.getElementById('wEleDamage').value = '0';
	document.getElementById('wEleChance').value = '0';
	document.getElementById('CalcDPS').value = '0';
}
function openGitHub(){
	window.open("https://github.com/LeftBased/Borderlands-Weapon-DPS-Calculator-JavaScript")
}
function openDonate(){
	window.open("https://paypal.me/internprimas")
}
