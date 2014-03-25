static var daySection : int; //from 1 - 1440, one for every minute in a day
private var sliderCount : float = 0;
var sun : Transform;
//var watchDay : GUITexture;
//var watchNight : GUITexture;
private var startOfDay : boolean;

function Start()
{
	daySection = 300; // 6:00 AM
	
	startOfDay = true;
	
	//watchNight.enabled = false;
	//watchDay.enabled = true;

}

function DayNightUpdater()
{

	if(daySection > 1440) // midnight
	{
		daySection = 0.96;
		daySection = 1;
		//watchNight.enabled = true;
		//watchDay.enabled = false;
	}

	if(daySection <= 300 || daySection >= 1260) // 5:00 AM and 9:00 PM
	{
		sliderCount = 0.96;
		
		//watchNight.enabled = true;
		//watchDay.enabled = false;
	}
	
	if(daySection >= 301  && daySection <= 780) // between 5:01 AM and 1:00 PM
	{
		sliderCount = (780 - daySection) * 0.002;
		startOfDay = true;
		
			//watchDay.enabled = true;
			//watchDay.enabled = false;
	}
	
	if(daySection >= 781 && daySection <= 1259) // 1:01 PM and 9:00 PM
	{
		sliderCount = (daySection - 780) * 0.002;
		startOfDay = false;
		
		if(daySection >= 1259)
		{
			//watchNight.enabled = true;
			//watchDay.enabled = false;
		}
	}
	/*if(daySection == 360 && startOfDay == false)
	{
		sun.Rotate(new Vector3(180, 0, 0));
	}*/
	
	//sun.Rotate(new Vector3(0.2, 0, 0));
	
	//RenderSettings.skybox.SetFloat("_Blend", sliderCount);
	
	daySection ++;
}

