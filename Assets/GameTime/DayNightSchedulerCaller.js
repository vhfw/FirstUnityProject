var time : int = 0;
static var secondsCounter : int = 0;
var ran : boolean = true;
var realTimeSeconds : int = 0;

function Start()
{
	while(ran)
	{
		secondsCounter = realTimeSeconds;
		yield new WaitForSeconds(realTimeSeconds);
			
			dayNight = GetComponent(DayNightScheduler);
			dayNight.DayNightUpdater();
	}
}

