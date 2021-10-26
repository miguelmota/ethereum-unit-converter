build-extension:
	cp example/dist/bundle.js extension/moz/popup/dist/bundle.js
	cp example/index.html extension/moz/popup/index.html
	rm -rf extension/moz/web-ext-artifacts
	(cd extension/moz && web-ext build)

run-extension:
	(cd extension/moz && web-ext run)
