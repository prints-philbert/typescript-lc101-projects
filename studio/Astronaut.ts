
import { Payload } from './Payload';


class Astronaut implements Payload {
	name: string;
	massKg: number
	constructor(name: string, massKg: number) {
		this.name = name;
		this.massKg = massKg
	}

}
