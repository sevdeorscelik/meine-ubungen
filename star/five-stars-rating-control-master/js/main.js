import { StarComponent } from './StarComponent.js';

for (let i = 1; i <= 16; i++) {
	StarComponent.instantiate(document, i);
}
