brain-games:
	node bin/brain-games.js

install: 
	npm i

publish:
	npm publish --dry-run

 make lint:
	npx eslint
	

