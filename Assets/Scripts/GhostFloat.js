public var floatHeight : float = .5;
public var floatSpeed : float = .5;
private var floating : boolean = true;

function Update()
{
	Float();
}

function Float()
{
	if(floating)
	{
		transform.position.y -= floatHeight * Time.deltaTime;
		yield WaitForSeconds(floatSpeed);
		floating = false;
	}
	else
	{
		transform.position.y += floatHeight * Time.deltaTime;
		yield WaitForSeconds(floatSpeed);
		floating = true; 
	}
}
	