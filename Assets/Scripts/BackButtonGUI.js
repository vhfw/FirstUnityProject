var beep : AudioClip;
var menuSkin : GUISkin;
var areaWidth : float;
var areaHeight : float;

function Update () {
}

function OnGUI()
{
	GUI.skin = menuSkin;
	
	var ScreenX = ((Screen.width * 0.5) - (areaWidth * -1.3));
	var ScreenY = ((Screen.height / 1.7) - (areaHeight *-2));
	
	GUILayout.BeginArea(Rect (ScreenX, ScreenY, areaWidth, areaHeight));
	
	if(GUILayout.Button ("Back"))
	{
		OpenLevel("Menu");
	}
	
	GUILayout.EndArea();
}

function OpenLevel(level : String)
{
	audio.PlayOneShot(beep);
	yield new WaitForSeconds(0.35);
	Application.LoadLevel(level);	
}

@script RequireComponent(AudioSource)

	