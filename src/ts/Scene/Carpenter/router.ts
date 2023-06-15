import * as GLP from 'glpower';

import { Tree } from '../Entities/Tree';

export const router = ( node: GLP.BLidgeNode ) => {

	// class

	if ( node.class == "Tree" ) {

		return new Tree();

	}

	return new GLP.Entity();

};
