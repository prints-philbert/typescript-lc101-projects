

import { Payload } from './Payload';
import { Astronaut } from './Astronaut';
import { Cargo } from './Cargo';
import { Rocket } from './Rocket';





class Rocket {
	name: string;
	totalCapacityKg: number;
	cargoItems: object[];
	astronauts: object[];
	constructor(name: string, totalCapacityKg: number) {
		this.name = name
		this.totalCapacityKg = totalCapacityKg;
	}
	function sumMass( items: Payload[] ): number {
		let sum: number = 0;
		for (let i: number = 0; i < Payload.length; i++ ){
			sum += Payload[i];
			return sum;
		} 
	}
}
