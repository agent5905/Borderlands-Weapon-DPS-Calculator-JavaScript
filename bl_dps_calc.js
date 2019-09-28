// Borderlands DPS Calculator - JScript edition!
//============================================================================
// [changelog]
// v0.03 - introduced an html file with form elements that can be manipulated
//       - adjusted code in the javascript. added css code to html file.
// v0.02 - added an error alert function
//       - updated safety checks
//       - fixed an accidental bug in code.
// v0.01 - initial start of project totally works
//============================================================================
var CanCalc = 0; //to prevent errors while trying to calculate invalid inputs.
var MagSize; var FireRate; var ReloadSpeed; var WeaponDamage;
var secMF = 0; var secMFR = 0; var TotalMagDamage = 0; var FinalDPS;
var FinalDPS;
function ErrAlert(eCode){
	switch(eCode){
		case 0:
		alert("[Error 0] - Weapon Damage is Less than 0");
		break;
		case 1:
		alert("[Error 1] - Magazine Size is Less than 0");
		break;
		case 2:
		alert("[Error 2] - ReloadSpeed is Less than 0");
		break;
		case 3:
		alert("[Error 3] - FireRate is Less than 0");
		break;
	}
}

function GetWeaponDamage() {
	while (isNaN(WeaponDamage = prompt("Enter Weapon Damage", "42")));
	SafetyCheck(0);
}
function GetMagazineSize() {
	while (isNaN(MagSize = prompt("Enter Weapon Magazine Size", "18")));
	SafetyCheck(1);
}
function GetReloadSpeed() {
	while (isNaN(ReloadSpeed = prompt("Enter Weapon Reload Speed", "1.5")));
	SafetyCheck(2);
}
function GetFireRate() {
	while (isNaN(FireRate = prompt("Enter Weapon FireRate", "10.55")));
	SafetyCheck(3);
}

function SafetyCheck(sCode) {
	switch(sCode){
		case 0:
			if (WeaponDamage < 1) {
				CanCalc = 0;
				ErrAlert(0);
				GetWeaponDamage();
			} else {
				CanCalc = 1;
			}
			break;
		case 1:
			if (MagSize < 1) {
				CanCalc = 0;
				ErrAlert(1);
				GetMagazineSize();
			} else {
				CanCalc = 1;
			}
			break;
		case 2:
			if (ReloadSpeed < 1) {
				CanCalc = 0;
				ErrAlert(2);
				GetReloadSpeed();
			} else {
				CanCalc = 1;
			}
			break;
		case 3:
			if (FireRate < 1) {
				CanCalc = 0;
				ErrAlert(3);
				GetFireRate();
			} else {
				CanCalc = 1;
			}
			break;
		}
}

function GrabWeaponData() {
	GetWeaponDamage();
	console.log("Current Weapon Damage: " + WeaponDamage.toString());
	GetMagazineSize();
	console.log("Current Weapon MagSize: " + MagSize.toString());
	GetReloadSpeed();
	console.log("Current Reload Speed: " + ReloadSpeed.toString());
	GetFireRate();
	console.log("Current FireRate: " + FireRate.toString());
	console.log("\nFinished Grabing Weapon Data");
}

function BLCalculate() {
	if (isNaN(WeaponDamage) || isNaN(MagSize) || isNaN(ReloadSpeed) || isNaN(FireRate)) {
		FinalDPS = "Error invalid numbers entered";
		document.getElementById('CalcDPS').value = FinalDPS;
		console.log("Error no valid numbers in textboxs.");
	} else {

	secMF = parseFloat(MagSize/ FireRate);
	secMFR = parseFloat(secMF + ReloadSpeed);
	TotalMagDamage = parseFloat(MagSize * WeaponDamage);
	FinalDPS = parseFloat(TotalMagDamage / secMFR); 
	x = FinalDPS.toString();
	if (isNaN(FinalDPS)) {
		FinalDPS = "Error invalid numbers entered";
		document.getElementById('CalcDPS').value = FinalDPS;
		console.log("Error no valid numbers in textboxs.");
	} else {
	document.getElementById('CalcDPS').value = x;
	console.log("Weapon DPS: " + x);
	}
}
}
function submit() {
	WeaponDamage = document.getElementById("wDamage").value;
	MagSize = document.getElementById("wMagSize").value;
	ReloadSpeed = document.getElementById("wReloadSpeed").value;
	FireRate = document.getElementById("wFirerate").value;
	BLCalculate();
}
function clearText(){
	document.getElementById('wDamage').value = '0';
	document.getElementById('wMagSize').value = '0';
	document.getElementById('wReloadSpeed').value = '0';
	document.getElementById('wFirerate').value = '0';
	document.getElementById('CalcDPS').value = '0';
}
function openGitHub(){
	window.open("https://github.com/LeftBased/Borderlands-Weapon-DPS-Calculator-JavaScript")
}
function openDonate(){
	window.open("https://paypal.me/internprimas")
}