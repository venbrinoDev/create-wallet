.PHONY: build run

build:
	npx tsc
	node main.js 

run:
	node main.js 