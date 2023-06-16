import * as GLP from 'glpower';

import { Tree } from '../Entities/Tree';

import isuFrag from './shaders/isu.fs';

export const router = ( node: GLP.BLidgeNode ) => {

	// class

	if ( node.class == "Tree" ) {

		return new Tree();

	}

	const baseEntity = new GLP.Entity();


	// material

	if ( node.material.name == 'isu' ) {

		baseEntity.addComponent( 'material', new GLP.Material( {
			name: "tree",
			type: [ "deferred", "shadowMap" ],
			frag: isuFrag,
		} ) );

	}

	return baseEntity;

};
