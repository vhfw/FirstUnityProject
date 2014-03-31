using UnityEngine;
using System.Collections;

public class PlayerHealth : MonoBehaviour 
{
	public float health = 100f;
	public float resetAfterDeathTime = 5f;
	public AudioClip deathClip;

	private ScreenFadeInOut screenFadeInOut;
	private float timer;

	// Use this for initialization
	void Awake() 
	{
		screenFadeInOut = GameObject.FindGameObjectWithTag("Fader").GetComponent<ScreenFadeInOut> ();
	}

	void Update()
	{
		if (health <= 0f) 
		{
			AudioSource.PlayClipAtPoint(deathClip, transform.position);
			LevelReset ();
		}
	}

	public void TakeDamage(float amount)
	{
		health -= amount;
	}

	void LevelReset()
	{
		timer += Time.deltaTime;

		if (timer >= resetAfterDeathTime)
			screenFadeInOut.EndScene ();
	}
}
