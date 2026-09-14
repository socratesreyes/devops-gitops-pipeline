test


1. command typo -
ERROR:docker: 'docker buildx build' requires 1 argument

solution: 
docker build -t node-heavy-flavor .


2. port 3000 was used
solution, 
- remapping the public host port to  8080. and maintain internatl containerport at 3000.
excecute
docker run -d -p 8080:3000 --name node-heavy-flavor-container node-heavy-flavor:v1.0.0


3. root cause -
- during the build, the version should be  declared . if not it will  automatically pull the ":latest"  which will mismatch on the package.json version

solution:
- correct the wrong version build, 
docker tag node-heavy-flavor:latest node-heavy-flavor:v1.0.0

- force remove the old conflicting container footprint
docker rm -f node-heavy-flavor-container

- run the container declaring the version + the correct port

see attach package.json to check name and version, 
and other screenshot
