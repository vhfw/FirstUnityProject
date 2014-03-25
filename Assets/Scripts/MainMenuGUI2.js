var beep : AudioClip;
var menuSkin : GUISkin;
var areaWidth : float;
var areaHeight : float;

function Update () {
}

function OnGUI()
{
	GUI.skin = menuSkin;
	
	var ScreenX = ((Screen.width * 0.5) - (areaWidth * 0.5));
	var ScreenY = ((Screen.height *0.5) - (areaHeight *0.5));
	
	GUILayout.BeginArea(Rect (ScreenX, ScreenY, areaWidth, areaHeight));
	
	if(Application.platform == RuntimePlatform.OSXWebPlayer || Application.platform == RuntimePlatform.WindowsWebPlayer)
	{
		if(GUILayout.Button ("Play"))
		{	
			OpenLevel("Island Level");
		}
		if(GUILayout.Button ("Instructions"))
		{
			OpenLevel("Instructions");
		}
	}
	else 
	{
		if(GUILayout.Button ("Play"))
		{	
			OpenLevel("Island Level");
		}
		if(GUILayout.Button ("Instructions"))
		{
			OpenLevel("Instructions");
		}
		if(GUILayout.Button ("Quit"))
		{
			Application.Quit();
		}
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

	