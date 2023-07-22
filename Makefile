# устанавливает все зависимости из файла package.json и сохраняет информацию о версиях в package-lock.json
install:
	npm ci

# запускает файл brain-games.js 
brain-games:
	node bin/brain-games.js

# выполнит npm publish --dry-run для отладки публикации пакета.
publish:
	npm publish --dry-run
