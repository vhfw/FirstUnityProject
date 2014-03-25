var lightSource : Light; //Connect the light source in the Inspector
static var energy : float = 100; //The energy amount of the flashlight
static var turnedOn : boolean = false; //Boolean to check whether it's turned on or off
static var charged : boolean = true;
var drainSpeed : float = 2.0; //The speed that the energy is drained
var chargeSpeed : float = 2.0; //The speed at which the energy is charged
var toggleSound : AudioSource;

//Battery Textures
var batteryGUI : GUITexture;
var batteryGUI100 :Texture2D;
var batteryGUI75 : Texture2D;
var batteryGUI50 : Texture2D;
var batteryGUI25 : Texture2D;
var batteryGUIEmpty : Texture2D;

function Start()
{
	batteryGUI.enabled = false;
}
function Update () 
{
    if (Input.GetButtonUp("Flashlight")) 
    	ToggleFlashlight();
}

//When the player press F we toggle the flashlight on and off
function ToggleFlashlight() 
{
    turnedOn = !turnedOn;
	toggleSound.Play();
	
    if (turnedOn) 
    {
	    lightSource.enabled = true;
		batteryGUI.enabled = true;
		DrainEnergy();
	}
    else
    {
		lightSource.enabled = false;
		batteryGUI.enabled = false;
	}
}

//When the flashlight is turned on we enter a while loop which drains the energy
function DrainEnergy () 
{		
    while (turnedOn) 
    {		
		if (Input.GetButtonUp("Charge"))
		{
			charged = false;
			RechargeEnergy();
		}
		
		if(charged)
		{
			energy -= drainSpeed*Time.deltaTime;
			lightSource.intensity = energy / 80;

			if(energy > 75)
				batteryGUI.texture = batteryGUI100;
			if(energy <= 75)
				batteryGUI.texture = batteryGUI75;
			if(energy <= 50)
				batteryGUI.texture = batteryGUI50;
			if(energy <= 25)
				batteryGUI.texture = batteryGUI25;
			if(energy <= 0)
			{
				charged = false;
				batteryGUI.texture = batteryGUIEmpty;
			}
		}
	
		yield;
		Debug.Log(energy);
	}   
    
}

function RechargeEnergy()
{
	while(!charged)
	{
		energy += chargeSpeed*Time.deltaTime;
		lightSource.intensity = energy / 80;
		
		if(energy <= 75)
			batteryGUI.texture = batteryGUI75;
		if(energy <= 50)
			batteryGUI.texture = batteryGUI50;
		if(energy <= 25)
			batteryGUI.texture = batteryGUI25;
		if(energy <= 0)
			batteryGUI.texture = batteryGUIEmpty;	
		if(energy >= 100)
		{
			energy = 100;
			charged = true;
		}
		yield;
	}
}
//This is called from outside the script to alter the amount of energy
static function AlterEnergy (amount : int) 
{
    energy = Mathf.Clamp(energy+amount, 0, 100);
}
