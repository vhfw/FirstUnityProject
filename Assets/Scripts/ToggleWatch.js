private var childGUIText : GUIText;

function Start()
{
	childGUIText = GetComponentInChildren(GUIText);
}
function Update()
{
    if(Input.GetButtonUp("Watch"))
    {
    	 
    	 guiTexture.enabled = !guiTexture.enabled;
    	 childGUIText.enabled = !childGUIText.enabled;
    }
}     