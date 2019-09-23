// Borderlands DPS Calculator - JScript edition!
// v0.01
var CanCalc = 0; //to prevent errors while trying to calculate invalid inputs.

var MagSize = 0; var FireRate = 0.00; var ReloadSpeed = 0.00; var WeaponDamage = 0;
var secMF = 0; var secMFR = 0; var TotalMagDamage = 0; var FinalDPS;

function GetWeaponDamage() {
	while (isNaN(parseFloat(WeaponDamage = prompt("Enter Weapon Damage", "42"))));
	SafetyCheck(); //runs this to make sure stuff is valid!
}
function GetMagazineSize() {
	while (isNaN(parseFloat(MagSize = prompt("Enter Weapon Magazine Size", "18"))));
	SafetyCheck(); //runs this to make sure stuff is valid!
}
function GetReloadSpeed() {
	while (isNaN(parseFloat(ReloadSpeed = prompt("Enter Weapon Reload Speed", "1.5"))));
	SafetyCheck(); //runs this to make sure stuff is valid!
}
function GetFireRate() {
	while (isNaN(parseFloat(FireRate = prompt("Enter Weapon FireRate", "10.55"))));
	SafetyCheck(); //runs this to make sure stuff is valid!
}

function SafetyCheck() {
	if (parseFloat(WeaponDamage < 1)) {
		CanCalc = 0;
		console.log("WeaponDamage is less than 1");
		GetWeaponDamage();
	}
	else {
		CanCalc = 1;
	}
	if (parseFloat(MagSize < 1)) {
		CanCalc = 0;
		console.log("MagSize is less than 1");
		GetMagazineSize();
	}
	else {
		CanCalc = 1;
	}
	if (parseFloat(ReloadSpeed < 1)) {
		CanCalc = 0;
		console.log("ReloadSpeed is less than 1");
		GetReloadSpeed();
	}
	else {
		CanCalc = 1;
	}
	if (parseFloat(FireRate < 1)) {
		CanCalc = 0;
		console.log("Firerate is less than 1");
		GetFireRate();
	}
	else {
		CanCalc = 1;
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
}
function BLCalculate() {
	let secMF = parseFloat(MagSize/ FireRate);
	let secMFR = parseFloat(secMF + ReloadSpeed);
	let TotalMagDamage = parseFloat(MagSize * WeaponDamage);
	let FinalDPS = parseFloat(TotalMagDamage / secMFR); 
	x = FinalDPS.toString();
	console.log("Weapon DPS: " + x);
}

function Main() {
	GrabWeaponData();
	BLCalculate();
}

Main();