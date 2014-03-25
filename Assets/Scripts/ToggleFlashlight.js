var lightBattery : GUITexture;

function Update()
{
    if(Input.GetButtonUp("Flashlight"))
    {    
    	light.enabled = !light.enabled;
    	lightBattery.enabled = !lightBattery.enabled;
    }
        
}
