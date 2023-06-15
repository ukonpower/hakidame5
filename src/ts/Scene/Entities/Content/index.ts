import * as GLP from 'glpower';

import { Material } from '~/ts/libs/framework/Components/Material';
import { Entity } from '~/ts/libs/framework/Entity';
import { hotGet, hotUpdate } from '~/ts/libs/framework/Utils/Hot';
import contentFrag from './shaders/content.fs';
import { globalUniforms } from '~/ts/Globals';
import { TurnTable } from '~/ts/libs/framework/Components/TurnTable';

export class Content extends Entity {

	constructor() {

		super();

		const mat = this.addComponent( "material", new Material( {
			name: "content",
			type: [ "deferred", "shadowMap" ],
			uniforms: GLP.UniformsUtils.merge( globalUniforms.time, globalUniforms.resolution ),
			frag: hotGet( 'contentFrag', contentFrag )
		} ) );

		this.addComponent( "turnTable", new TurnTable() );

		if ( import.meta.hot ) {

			import.meta.hot.accept( "./shaders/content.fs", ( module ) => {

				if ( module ) {

					mat.frag = hotUpdate( 'content', module.default );
					mat.requestUpdate();

				}

			} );

		}

	}

}
