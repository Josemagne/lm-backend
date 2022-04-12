up-dev-build:
	docker-compose -f docker-compose-development.yml up --build

up-dev:
	docker-compose -f docker-compose-development.yml up

get-frontend:
	rm -fR build; \
	npm run build; \
	mkdir build/assets; \
	cd ../frontend && npm run build; \
	ls -la; \
	cp dist/* ../books/build/assets; \
	echo "finished moving frontend app to backend"

build-prod:
	$(MAKE) get-frontend && docker build -f Dockerfile.production -t josemagne/librimem-backend:0.0.1 .