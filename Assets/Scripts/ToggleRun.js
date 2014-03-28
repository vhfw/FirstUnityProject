var runForwardSpeed : float;
var runSidewaysSpeed : float;

//captures the walk speeds of the character motor script before modifying
private var walkForwardSpeed : float;
private var walkSidewaysSpeed : float;

private var motorScript : CharacterMotor;

function Start()
{
	motorScript = GetComponent("CharacterMotor");
	
	//capture the normal walking speeds
	walkForwardSpeed = motorScript.movement.maxForwardSpeed;
	walkSidewaysSpeed = motorScript.movement.maxSidewaysSpeed;
}

function Update () 
{
	if(Input.GetButton("Run"))
	{
		motorScript.movement.maxForwardSpeed = runForwardSpeed;
		motorScript.movement.maxSidewaysSpeed = runSidewaysSpeed;
	}
	else
	{
		motorScript.movement.maxForwardSpeed = walkForwardSpeed;
		motorScript.movement.maxSidewaysSpeed = walkSidewaysSpeed;
	}
}