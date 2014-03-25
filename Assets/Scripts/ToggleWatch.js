var watchTime : GUIText;

function Update()
{
    if(Input.GetButtonUp("Watch"))
    {
    	 
    	 guiTexture.enabled = !guiTexture.enabled;
    	 watchTime.enabled = !watchTime.enabled;
    }
}     