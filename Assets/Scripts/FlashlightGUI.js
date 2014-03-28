#pragma strict

	var battery100 : Texture2D;
	var battery75 : Texture2D;
	var battery50 : Texture2D;
	var battery25 : Texture2D;
	var batteryEmpty : Texture2D;
	var flashLight : GameObject;
	
	private var flashLightScript : FlashlightScript;

	function Start()
	{
		flashLightScript = flashLight.GetComponent(FlashlightScript);
	}
	function Update() 
	{

		if(flashLightScript.turnedOn)
		{
			guiTexture.enabled = true;
			if(flashLightScript.energy > 75)
				guiTexture.texture = battery100;
			if(flashLightScript.energy <= 75)
				guiTexture.texture = battery75;
			if(flashLightScript.energy <= 50)
				guiTexture.texture = battery50;
			if(flashLightScript.energy <= 25)
				guiTexture.texture = battery25;
			if(flashLightScript.energy <= 0)
				guiTexture.texture = batteryEmpty;
		}
		else
			guiTexture.enabled = false;
	}