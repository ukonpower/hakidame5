import * as GLP from 'glpower';
import { Component, ComponentUpdateEvent } from '..';

export class TurnTable extends Component {

	private rotQuaternion: GLP.Quaternion;

	constructor() {

		super();

		this.rotQuaternion = new GLP.Quaternion();

	}

	protected updateImpl( event: ComponentUpdateEvent ): void {

		const entity = event.entity;

		this.rotQuaternion.setFromEuler( new GLP.Euler( 0, - 0.2 * event.deltaTime, 0 ) );

		entity.quaternion.multiply( this.rotQuaternion );

	}


}
