var sun : Transform;
var dayCycleInRealMinutes : float = 1;
var startTimeMilitary : float; //this time is in military timeOfDay

private var SECOND : float = 1;
private var MINUTE : float = 60 * SECOND;
private var HOUR : float = 60 * MINUTE;
private var DAY : float = 24 * HOUR;
private var DEGREES_PER_SECOND = 360 / DAY;

private var degreeRotation : float;
private var timeOfDay : float;
private var dayCycleInSeconds : float;

function Start()
{
	dayCycleInSeconds = dayCycleInRealMinutes * MINUTE;
	RenderSettings.skybox.SetFloat("_Blend", 0);
	timeOfDay = 0;
	degreeRotation = DEGREES_PER_SECOND * DAY / (dayCycleInSeconds);
}
function Update () 
{
	sun.Rotate(new Vector3(degreeRotation, 0, 0) * Time.deltaTime);
	
	timeOfDay += Time.deltaTime;
	
	if(timeOfDay > dayCycleInSeconds)
	{
		timeOfDay -= dayCycleInSeconds;
	}
	
	BlendSkyBox();
	
}

function BlendSkyBox()
{
	var temp : float = (timeOfDay / dayCycleInSeconds) * 2;
	
		RenderSettings.skybox.SetFloat("_Blend", temp);
		
		if(temp > 1)
		{
			temp = 1 - (temp -1);
		}
		
}