var realTime : int = 0;
var hours : int;
var minutes : int;
var ran : boolean = true;
var daySection : int = 0;
var watchNight : GUITexture;
var watchDay : GUITexture;
function Start()
{
	daySection = 0;
	while(ran)
	{
		
		if(daySection == 0 || daySection == 1440) // if midnight
		{
			hours = 12;
			minutes = 00;
		
			WatchTimeText.gameTimeGUI = hours + ":" + "00";
			
			watchNight.enabled = true;
			watchDay.enabled = false;
			daySection++;
			realTime++;
			
			
		}
		if(daySection > 1440)
		{
			daySection = 1;
		}
		if(daySection == 360) // if 6:00(start of the day)
		{
			hours = 6;
			minutes = 0;
		
			WatchTimeText.gameTimeGUI = hours + ":" + "00";
			
			watchNight.enabled = false;
			watchDay.enabled = true;
		
		}
		
		if(daySection >= 1 && daySection <= 1439) //if between 12:01 and 11:59
		{
			minutes = realTime;
		
			if(minutes > 59)
			{
				minutes = 0;
				realTime = 0;
				hours++;
			}
			if(hours > 12)
			{
				hours = 1;
			}
			if(minutes >= 0 && minutes <= 9)
			{
				WatchTimeText.gameTimeGUI = hours + ":" + "0" + minutes;
			}
			else
			{
				WatchTimeText.gameTimeGUI = hours + ":" + minutes;
			}
			if(daySection >=1080 && daySection <=1439)
			{
				watchNight.enabled = true;
				watchDay.enabled = false;
				Debug.Log(hours);
			}

			realTime++;
			daySection++;
		}
		yield new WaitForSeconds(DayNightSchedulerCaller.secondsCounter);
	}
}