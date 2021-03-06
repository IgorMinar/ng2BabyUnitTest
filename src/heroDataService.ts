import {Hero} from 'hero';
import {HEROES} from 'mockHeroes';

export class HeroDataService {

	get serviceName() {return 'sync';}

	getAllHeroes(force:boolean = false) {
		// (re)set if not set or forced
		if (!this._heroes || force){
		  this._heroes = HEROES.slice();
		}
		return this._heroes;
	}

  getHero(name?: string)  {
		this.getAllHeroes(); // ensure we have heroes before we add one
		return this._getHeroInCache(name);
	}

	///////////////////
  protected _heroes:Hero[];

  // get hero from cache or return null if not found
  protected _getHeroInCache(name?: string) {
		if (!name) { return null; }
		let matches = this._heroes.filter(hero => hero.name === name);
		return matches[0] || null;
	}
}
