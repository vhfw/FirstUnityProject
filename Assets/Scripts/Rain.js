var scrollspeed : float = .02;
private var offset : Vector2;
 
function Update () 
{
    offset.x += scrollspeed * Time.deltaTime;
    renderer.material.SetTextureOffset ("_MainTex", offset);
}