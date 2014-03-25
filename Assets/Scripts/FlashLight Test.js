var lightSource : Light; //Connect the light source in the Inspector
static var energy : float = 100; //The energy amount of the flashlight
static var turnedOn : boolean = false; //Boolean to check whether it's turned on or off
var drainSpeed : float = 2.0; //The speed that the energy is drained
var batteryGUI : GUITexture;

function Start()
{
	batteryGUI.enabled = false;
}
function Update () 
{
    if (Input.GetButtonUp("Flashlight")) 
    	ToggleFlashlight();
    if (Input.GetButtonUp("Charge"))
    	RechargeEnergy();
}

//When the player press F we toggle the flashlight on and off
function ToggleFlashlight() 
{
    turnedOn = !turnedOn;
    if (turnedOn && energy>0) 
    {
       TurnOnAndDrainEnergy();
       
    }
     else
     	lightSource.enabled = false;
     	batteryGUI.enabled = false;
}

//When the flashlight is turned on we enter a while loop which drains the energy
function TurnOnAndDrainEnergy () 
{
    lightSource.enabled = true;
    
    
    while (turnedOn && energy>0) 
    {
       batteryGUI.enabled = true;
       energy -= drainSpeed*Time.deltaTime;
       if(energy <= 16)
       	lightSource.intensity = energy / 40;
       		
       yield;
    }
    turnedOn = false;
    lightSource.enabled = false;
    batteryGUI.enabled = false;
}

function RechargeEnergy()
{
	turnedOn = true;
	while(turnedOn && energy < 100)
	{
		energy += drainSpeed*Time.deltaTime;
		lightSource.intensity = energy / 40;
	}
	if(turnedOn && energy == 100)
		TurnOnAndDrainEnergy();
}
//This is called from outside the script to alter the amount of energy
static function AlterEnergy (amount : int) 
{
    energy = Mathf.Clamp(energy+amount, 0, 100);
}
