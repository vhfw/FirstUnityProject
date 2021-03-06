using UnityEngine;
using System.Collections;

public class EnemySight : MonoBehaviour 
{	
	public GameObject player;
	public float chasingThreshold;
	public float damage;

	private NavMeshAgent nav;
	private SphereCollider col;
	private PlayerHealth playerHealth;
	private Vector3 resetPosition;
	private bool playerInSight;

	// Use this for initialization
	void Awake () 
	{
		nav = GetComponent<NavMeshAgent>();
		col = GetComponent<SphereCollider> ();
		playerHealth = player.GetComponent<PlayerHealth> ();
		playerInSight = false;
		resetPosition = transform.position;
	}

	void Update()
	{
		if(playerInSight) 
		{
			nav.SetDestination(player.transform.position);
			//Debug.Log (Vector3.Distance (player.transform.position, transform.position));
			if (Vector3.Distance (player.transform.position, transform.position) > chasingThreshold) 
			{
				playerInSight = false;
			}
		}
		else
			nav.SetDestination (resetPosition);
	}

	void OnTriggerEnter(Collider other)
	{
		if (other.gameObject == player) 
		{
			if (playerHealth.health > 0f)
				playerInSight = true;
			else
				playerInSight = false;
		}

	}

	void OnCollisionEnter(Collision other)
	{

		if(other.gameObject == player)
		{
			playerHealth.TakeDamage(damage);
			Debug.Log (playerHealth);
		}
	}
	
}
