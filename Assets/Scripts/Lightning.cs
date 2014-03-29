using UnityEngine;
using System.Collections;

public class Lightning : MonoBehaviour 
{
	public float offMin = 10f;
	public float offMax = 60f;
	public float onMin = 0.25f;
	public float onMax = 0.8f;

	public float intensityMin = 0f;
	public float intensityMax = 1.47f;
	public float thunderDistanceMin = 1;
	public float thunderDistanceMax = 5;
	public float thunderThreshold = 3;
	
	public AudioClip[] quietThunder;
	public AudioClip[] loudThunder;
	
	private float thunderChoice;
	private float brightness;

	void Start() 
	{
		light.enabled = true;
		light.intensity = 0;
		Invoke("LightningFlash", Random.Range (offMin, offMax));
	}
	void Update()
	{
		transform.RotateAround (Vector3.zero, Vector3.up, Time.deltaTime);
	}
	void LightningFlash()
	{
		light.intensity = Random.Range (intensityMin, intensityMax);
		brightness = light.intensity;
		thunderChoice = Random.Range (thunderDistanceMin, thunderDistanceMax);
		Invoke ("SoundFX", thunderChoice);
		StartCoroutine ("Decay");
	}
	
	IEnumerator Decay()
	{
		float decayTime = Random.Range(onMin, onMax);
		float t = 0;
		
		while(t < decayTime)
		{
			light.intensity = Mathf.Lerp(brightness, intensityMin, t/decayTime);
			t += Time.deltaTime;
			yield return null;	
		}
		light.intensity = 0;

		Invoke("LightningFlash", Random.Range (offMin, offMax));
	}
	
	void SoundFX()
	{
		if(thunderChoice >= thunderThreshold) 
			audio.PlayOneShot(loudThunder[Random.Range(0, loudThunder.Length)]);
		else
			audio.PlayOneShot(quietThunder[Random.Range(0, quietThunder.Length)]);

	}
	
}
